import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquareCode, Phone, ShieldCheck } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 relative bg-[#090A0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#161824] via-[#10121A] to-[#0A0C12] border border-red-500/30 overflow-hidden shadow-[0_0_50px_rgba(225,29,72,0.15)]">
          {/* Decorative Red Blur */}
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-red-600/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-400 bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/20">
              Ready to Upgrade Your Digital Operations?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Stop letting buggy tech slow down your growth.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Get senior full-stack developers, AI architects, and CRM engineers handling your tech stack under one accountable retainer. No fluff, no delays.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider group shadow-2xl"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/services"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-semibold"
              >
                <span>Explore Tech Catalog</span>
              </Link>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Lock-in Retainers</span>
              </span>
              <span>• 48-Hour Blueprint Turnaround</span>
              <span>• Direct WhatsApp & Slack Channel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
