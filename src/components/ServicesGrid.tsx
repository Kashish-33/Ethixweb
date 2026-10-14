'use client';

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
  Sparkles 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-6 h-6 text-red-500" />,
  Globe: <Globe className="w-6 h-6 text-red-500" />,
  Code2: <Code2 className="w-6 h-6 text-red-500" />,
  Workflow: <Workflow className="w-6 h-6 text-red-500" />,
  Search: <Search className="w-6 h-6 text-red-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-red-500" />,
};

export default function ServicesGrid({ limit }: { limit?: number }) {
  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section id="services" className="py-24 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Senior operators for the systems that grow the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600">
                business.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
            From zero to launch and beyond—we handle your frontend, backend, AI workflows, and automated integrations so you never worry about technical debt.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => {
            const icon = iconMap[service.icon] || <Bot className="w-6 h-6 text-red-500" />;

            return (
              <div
                key={service.id}
                className="glow-card rounded-2xl p-7 flex flex-col justify-between group hover:border-red-500/40 relative overflow-hidden"
              >
                {/* Background Subtle Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-2xl rounded-full group-hover:bg-red-500/15 transition-all duration-300 pointer-events-none" />

                <div className="space-y-5">
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                      {icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Info: Starting price & Action */}
                <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Starting From</span>
                    <span className="text-xs font-bold text-white">{service.priceStarting}</span>
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 uppercase tracking-wider group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Catalog Link if limited */}
        {limit && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              <span>View Full Service Catalog & Deliverables</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
