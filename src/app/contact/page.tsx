import React, { Suspense } from 'react';
import EnquiryForm from '@/components/EnquiryForm';
import { Mail, Phone, MessageSquare, Clock, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Contact & Project Discovery | Ethixweb',
  description:
    'Start a project with Ethixweb. Request a preliminary architecture blueprint, discuss custom web engineering, AI agents, or CRM integrations.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 relative bg-[#090A0F]">
      
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Engineering Line</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Let&apos;s build the tech that runs your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600">
              operations.
            </span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            Whether you need an automated AI receptionist, a high-converting Next.js digital storefront, or a custom CRM workflow, submit your requirements below for a guaranteed 48-hour blueprint response.
          </p>
        </div>

        {/* Two-Column Grid: Form + Info Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-12 text-center text-slate-400">Loading discovery form...</div>}>
              <EnquiryForm />
            </Suspense>
          </div>

          {/* Right Column: Direct Channels & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Connect Box */}
            <div className="glow-card rounded-3xl p-8 border border-white/10 space-y-6 bg-[#0E111B]">
              <h3 className="text-lg font-bold text-white">Direct Communication Channels</h3>
              
              <div className="space-y-4 text-xs">
                <a
                  href="mailto:info@ethixweb.com"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-4 hover:border-red-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500">Official Inquiries</div>
                    <div className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                      info@ethixweb.com
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500">Response SLA</div>
                    <div className="text-sm font-bold text-white">24 - 48 Hours Guarantee</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500">Confidentiality</div>
                    <div className="text-sm font-bold text-white">Standard Mutual NDA available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Assessment Verification Notice */}
            <div className="rounded-3xl p-6 bg-red-950/20 border border-red-500/20 space-y-2 text-xs">
              <div className="font-bold text-red-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Assessment Submission Notice</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Submissions made on this form are actively persisted to Supabase and immediately viewable in the <a href="/admin" className="text-red-400 underline font-bold">Admin Portal</a>.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
