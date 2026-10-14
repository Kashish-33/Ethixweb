import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import { 
  Bot, 
  Globe, 
  Code2, 
  Workflow, 
  Search, 
  ShieldCheck, 
  ArrowUpRight, 
  Check, 
  Clock, 
  DollarSign,
  Sparkles,
  Zap,
  Terminal
} from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';

export const metadata = {
  title: 'Services & Engineering Catalog | Ethixweb',
  description:
    'Comprehensive digital operations: AI receptionists, modern Next.js websites, custom web apps, CRM automation, and technical SEO.',
};

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-8 h-8 text-red-500" />,
  Globe: <Globe className="w-8 h-8 text-red-500" />,
  Code2: <Code2 className="w-8 h-8 text-red-500" />,
  Workflow: <Workflow className="w-8 h-8 text-red-500" />,
  Search: <Search className="w-8 h-8 text-red-500" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-red-500" />,
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 relative bg-[#090A0F]">
      
      {/* Top Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Operations Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Engineered systems designed to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600">
              scale revenue.
            </span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            Explore our end-to-end engineering deliverables. Every system is built using modern Next.js architecture, robust APIs, and enterprise cloud infrastructure.
          </p>
        </div>
      </div>

      {/* Services Detailed Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES.map((service, index) => {
          const icon = iconMap[service.icon] || <Bot className="w-8 h-8 text-red-500" />;
          return (
            <div
              key={service.id}
              id={service.id}
              className="glow-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Info Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                        {service.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Core Deliverables */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-red-500" />
                      <span>Standard Deliverables</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                          <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Engineered With
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Specification Box */}
                <div className="lg:col-span-5 rounded-2xl bg-[#111420] border border-white/10 p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Starting Investment
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-white font-mono mt-1 text-red-400">
                      {service.priceStarting}
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      Fixed milestone billing or transparent retainer
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-red-400" />
                        <span>Estimated Timeline:</span>
                      </span>
                      <span className="font-bold text-white font-mono">{service.timeline}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Code Ownership:</span>
                      </span>
                      <span className="font-bold text-white">100% Client Owned</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="w-full btn-primary py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group shadow-xl"
                    >
                      <span>Request Discovery &amp; Blueprint</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20">
        <CtaBanner />
      </div>

    </div>
  );
}
