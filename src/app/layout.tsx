import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ethixweb | We run the tech. You run the business.',
  description:
    'Senior digital operations team engineering AI receptionists, modern Next.js websites, custom web applications, CRM integrations, and 24/7 maintenance retainers.',
  keywords: [
    'Ethixweb',
    'AI voice receptionists India',
    'Next.js website agency',
    'CRM integration WhatsApp',
    'Digital operations partner',
    'Full-stack development India',
    'Custom web portals',
  ],
  authors: [{ name: 'Ethixweb' }],
  openGraph: {
    title: 'Ethixweb | Senior Digital Operations Partner',
    description: 'We run the tech. You run the business. AI receptionists, websites, and CRM pipelines.',
    url: 'https://ethixweb.com',
    siteName: 'Ethixweb',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethixweb | Senior Digital Operations Partner',
    description: 'We run the tech. You run the business.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090A0F] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-red-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
