import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Terminal, 
  Zap, 
  Code2, 
  Users, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2,
  Server
} from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';

export const metadata = {
  title: 'About Ethixweb | Digital Operations Engineering',
  description:
    'Senior full-stack developers and automation operators. Learn about our engineering philosophy, modern stack, and client delivery model.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 relative bg-[#090A0F]">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Ethos &amp; Approach</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            We build software that solves{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600">
              real business friction.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Ethixweb was founded on a simple truth: growing businesses do not fail from a lack of ideas—they fail from brittle, fragmented technology that slows down daily operations.
          </p>
        </div>
      </div>

      {/* Main Philosophy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glow-card rounded-3xl p-8 border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Code as an Asset, Not a Liability</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We reject bloated page builders, unmaintained WordPress plugins, and brittle low-code traps. We engineer pure TypeScript, Next.js, and clean SQL databases that stand up to high traffic and require minimal maintenance.
            </p>
          </div>

          <div className="glow-card rounded-3xl p-8 border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Engineered for the Indian Reality</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Indian businesses operate in high-velocity environments: mobile-first users on varying network speeds, WhatsApp-centric customer interactions, and instant UPI/Razorpay payment rails. We design specifically for these requirements.
            </p>
          </div>

          <div className="glow-card rounded-3xl p-8 border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Full Transparency &amp; Ownership</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              You own 100% of your codebase, repositories, environment configurations, and database credentials from Day 1. No vendor lock-in, no hostage code, and no hidden maintenance fees.
            </p>
          </div>
        </div>

        {/* Engineering Standards Detailed Box */}
        <div className="rounded-3xl border border-white/10 bg-[#0E101A] p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Our Technical Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              How we construct digital infrastructure
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Strict Type Safety &amp; Testing:</strong> TypeScript everywhere. We enforce strict compile checks to prevent runtime null-reference crashes before code ever deploys.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Relational Data Integrity:</strong> We back your data with PostgreSQL and Supabase, enforcing row-level security (RLS), proper indexing, and automated backups.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Sub-Second Edge Rendering:</strong> Deployed across global CDN edge nodes (Vercel) with asset optimization to guarantee Core Web Vitals scores above 95.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Actionable Automation:</strong> Real-time webhooks connecting your frontend forms directly with sales WhatsApp notifications and CRM pipelines.
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                <span>Speak with an Engineer</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-20">
        <CtaBanner />
      </div>

    </div>
  );
}
