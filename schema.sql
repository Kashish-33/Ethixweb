-- ============================================================================
-- Ethixweb Redesign: Supabase PostgreSQL Schema
-- Run this script in the Supabase SQL Editor (https://supabase.com/dashboard)
-- ============================================================================

-- 1. Create enquiries table
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    service TEXT NOT NULL,
    budget TEXT,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_discussion', 'closed')),
    notes TEXT
);

-- 2. Create performance indexes
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries (status);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- 4. Policy: Allow public / anonymous users to insert new enquiries
DROP POLICY IF EXISTS "Allow anonymous insert to enquiries" ON public.enquiries;
CREATE POLICY "Allow anonymous insert to enquiries"
ON public.enquiries
FOR INSERT
TO public, anon
WITH CHECK (true);

-- 5. Policy: Allow service role & authenticated users to view all enquiries
DROP POLICY IF EXISTS "Allow service role full access" ON public.enquiries;
CREATE POLICY "Allow service role full access"
ON public.enquiries
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- 6. Policy: Allow authenticated users to select & update enquiries
DROP POLICY IF EXISTS "Allow authenticated users to read and update" ON public.enquiries;
CREATE POLICY "Allow authenticated users to read and update"
ON public.enquiries
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- 7. Seed Initial Sample Data (Optional verification test)
INSERT INTO public.enquiries (name, email, phone, company, service, budget, message, status, notes)
VALUES
(
    'Vikram Malhotra',
    'vikram@nextechlogistics.in',
    '+91 98201 54321',
    'NexTech Logistics India',
    'AI Receptionists & Voice/Chat Agents',
    '₹50,000 - ₹1,00,000',
    'Looking to deploy an automated WhatsApp and voice receptionist to qualify incoming transport vendor enquiries and route them to regional hub managers.',
    'new',
    'High priority lead. Scheduled callback requested for Thursday.'
),
(
    'Ananya Sharma',
    'ananya@zenithcare.health',
    '+91 97112 89012',
    'Zenith Multi-Speciality Clinics',
    'High-Performance Modern Websites',
    '₹1,00,000+',
    'We require a complete revamp of our healthcare portal with instant doctor booking and sub-second loading speed on Indian 4G/5G networks.',
    'contacted',
    'Sent initial portfolio deck and architecture overview.'
),
(
    'Rajesh Kulkarni',
    'rajesh@kulkarnimanufacturing.com',
    '+91 94220 11984',
    'Kulkarni Precision Tools',
    'CRM & Workflow Integrations',
    '₹25,000 - ₹50,000',
    'Need our website lead form integrated with Zoho CRM and automated WhatsApp notification sent to our sales heads in Pune and Bengaluru.',
    'in_discussion',
    'Requirements gathering call completed.'
)
ON CONFLICT DO NOTHING;
