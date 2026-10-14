import { redirect } from 'next/navigation';
import { isServerAuthenticated } from '@/lib/auth';
import { getEnquiries } from '@/lib/db';
import AdminDashboardClient from '@/components/AdminDashboardClient';

export const metadata = {
  title: 'Admin Operations Portal | Ethixweb',
  description: 'Manage client enquiries, proposal pipelines, and status tracking.',
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const isAuthenticated = isServerAuthenticated();

  if (!isAuthenticated) {
    redirect('/admin/login');
  }

  const leads = await getEnquiries();

  return <AdminDashboardClient initialLeads={leads} />;
}
