import { Enquiry } from './types';
import { getSupabaseServerClient, isSupabaseConfigured } from './supabase';
import fs from 'fs';
import path from 'path';

// Initial seed enquiries for fallback mode
const INITIAL_FALLBACK_ENQUIRIES: Enquiry[] = [
  {
    id: 'demo-lead-1',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    name: 'Vikram Malhotra',
    email: 'vikram@nextechlogistics.in',
    phone: '+91 98201 54321',
    company: 'NexTech Logistics India',
    service: 'AI Receptionists & Voice/Chat Agents',
    budget: '₹50,000 - ₹1,00,000',
    message: 'Looking to deploy an automated WhatsApp and voice receptionist to qualify incoming transport vendor enquiries and route them to regional hub managers.',
    status: 'new',
    notes: 'High priority lead. Scheduled callback requested for Thursday.',
  },
  {
    id: 'demo-lead-2',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    name: 'Ananya Sharma',
    email: 'ananya@zenithcare.health',
    phone: '+91 97112 89012',
    company: 'Zenith Multi-Speciality Clinics',
    service: 'High-Performance Modern Websites',
    budget: '₹1,00,000+',
    message: 'We require a complete revamp of our healthcare portal with instant doctor booking and sub-second loading speed on Indian 4G/5G networks.',
    status: 'contacted',
    notes: 'Sent initial portfolio deck and architecture overview.',
  },
  {
    id: 'demo-lead-3',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    name: 'Rajesh Kulkarni',
    email: 'rajesh@kulkarnimanufacturing.com',
    phone: '+91 94220 11984',
    company: 'Kulkarni Precision Tools',
    service: 'CRM & Workflow Integrations',
    budget: '₹25,000 - ₹50,000',
    message: 'Need our website lead form integrated with Zoho CRM and automated WhatsApp notification sent to our sales heads in Pune and Bengaluru.',
    status: 'in_discussion',
    notes: 'Requirements gathering call completed.',
  },
];

const FALLBACK_FILE_PATH = path.join(process.cwd(), '.enquiries-store.json');

function getFallbackStore(): Enquiry[] {
  try {
    if (fs.existsSync(FALLBACK_FILE_PATH)) {
      const data = fs.readFileSync(FALLBACK_FILE_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading fallback store:', err);
  }
  return INITIAL_FALLBACK_ENQUIRIES;
}

function saveFallbackStore(enquiries: Enquiry[]) {
  // Serverless platforms (Vercel, Netlify) have a read-only filesystem —
  // fs writes will silently fail or throw. Skip the write and warn loudly.
  const isServerless = Boolean(
    process.env.VERCEL ||
    process.env.NETLIFY ||
    process.env.AWS_LAMBDA_FUNCTION_NAME
  );
  if (isServerless) {
    console.warn(
      '[db] Fallback JSON store is not available on serverless platforms. ' +
      'Configure NEXT_PUBLIC_SUPABASE_URL and related environment variables ' +
      'to enable persistent lead storage on Vercel.'
    );
    return;
  }
  try {
    fs.writeFileSync(FALLBACK_FILE_PATH, JSON.stringify(enquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing fallback store:', err);
  }
}

export async function createEnquiry(
  data: Omit<Enquiry, 'id' | 'created_at' | 'status'>
): Promise<{ success: boolean; data?: Enquiry; error?: string }> {
  const newEnquiry: Enquiry = {
    ...data,
    id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : 'enq_' + Date.now(),
    created_at: new Date().toISOString(),
    status: 'new',
  };

  const client = getSupabaseServerClient();
  if (client) {
    try {
      const { data: inserted, error } = await client
        .from('enquiries')
        .insert([
          {
            name: newEnquiry.name,
            email: newEnquiry.email,
            phone: newEnquiry.phone || null,
            company: newEnquiry.company || null,
            service: newEnquiry.service,
            budget: newEnquiry.budget || null,
            message: newEnquiry.message,
            status: 'new',
          },
        ])
        .select()
        .single();

      if (error) {
        console.error('Supabase insert error, falling back:', error.message);
      } else if (inserted) {
        return { success: true, data: inserted as Enquiry };
      }
    } catch (supabaseErr) {
      console.error('Failed to communicate with Supabase:', supabaseErr);
    }
  }

  // Persistent fallback storage
  const current = getFallbackStore();
  const updated = [newEnquiry, ...current];
  saveFallbackStore(updated);
  return { success: true, data: newEnquiry };
}

export async function getEnquiries(): Promise<Enquiry[]> {
  const client = getSupabaseServerClient();
  if (client) {
    try {
      const { data, error } = await client
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        return data as Enquiry[];
      }
      console.warn('Supabase query error, using local persistent store:', error?.message);
    } catch (err) {
      console.warn('Could not query Supabase, using local persistent store');
    }
  }

  return getFallbackStore();
}

export async function updateEnquiryStatus(
  id: string,
  status: Enquiry['status'],
  notes?: string
): Promise<{ success: boolean; error?: string }> {
  const client = getSupabaseServerClient();
  if (client) {
    try {
      const updatePayload: Record<string, any> = { status };
      if (notes !== undefined) {
        updatePayload.notes = notes;
      }
      const { error } = await client.from('enquiries').update(updatePayload).eq('id', id);
      if (!error) return { success: true };
      console.error('Supabase update error:', error.message);
    } catch (err: any) {
      console.error('Supabase error:', err.message);
    }
  }

  const current = getFallbackStore();
  const updated = current.map((item) =>
    item.id === id ? { ...item, status, notes: notes !== undefined ? notes : item.notes } : item
  );
  saveFallbackStore(updated);
  return { success: true };
}

export async function deleteEnquiry(id: string): Promise<{ success: boolean }> {
  const client = getSupabaseServerClient();
  if (client) {
    try {
      await client.from('enquiries').delete().eq('id', id);
    } catch (err) {
      console.error('Supabase delete error:', err);
    }
  }

  const current = getFallbackStore();
  const updated = current.filter((item) => item.id !== id);
  saveFallbackStore(updated);
  return { success: true };
}

export function verifyAdminPassword(password: string): boolean {
  const configuredPassword = process.env.ADMIN_PASSWORD;
  if (!configuredPassword) {
    // In development without an env file, accept the local-dev sentinel to allow testing.
    // In production this path should never be reached because auth.ts throws first.
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[db] ADMIN_PASSWORD is not set; admin access is disabled outside dev mode.');
    }
    return false;
  }
  return Boolean(password && password.trim() === configuredPassword.trim());
}
