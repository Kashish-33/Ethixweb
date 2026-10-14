import React from 'react';
import Link from 'next/link';
import { CONCEPT_PROJECTS } from '@/lib/data';
import { ArrowUpRight, Code, Layers, Sparkles, TrendingUp, Info } from 'lucide-react';

export default function PortfolioSection() {
  return (
    <section id="work" className="py-24 relative bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture & Proof-of-Concepts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Selected work &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600">
              concept systems.
            </span>
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl w-fit">
            <Info className="w-4 h-4 text-red-400 shrink-0" />
            <span>Transparent assessment note: The following are verified engineering concept architectures built to demonstrate operational capabilities.</span>
          </div>
        </div>

        {/* Concept Projects Grid */}
        <div className="space-y-12">
          {CONCEPT_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="glow-card rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Details & Metrics */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">
                      {project.conceptLabel}
                    </span>
                    <span className="text-xs text-slate-400">• {project.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {project.tagline}
                  </p>

                  {/* Challenge & Solution Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="font-bold text-slate-400 uppercase tracking-wider text-[10px] mb-1">
                        Operational Challenge
                      </div>
                      <p className="text-slate-300 leading-normal">{project.challenge}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="font-bold text-red-400 uppercase tracking-wider text-[10px] mb-1">
                        Engineering Solution
                      </div>
                      <p className="text-slate-300 leading-normal">{project.solution}</p>
                    </div>
                  </div>

                  {/* Targeted Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-3">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="border-t border-white/10 pt-2">
                        <div className="text-xl sm:text-2xl font-black text-white font-mono">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Visual Mockup / Interface Frame */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl border border-white/10 bg-[#121520] p-5 shadow-2xl overflow-hidden min-h-[260px] flex flex-col justify-between">
                    {/* Top Browser bar mock */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-500 font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                      </div>
                      <span>app.ethixweb.preview/{project.id}</span>
                      <span className="text-emerald-400">200 OK</span>
                    </div>

                    {/* Central Architecture Visual */}
                    <div className="my-6 p-4 rounded-xl bg-gradient-to-br from-white/[0.04] to-red-500/[0.05] border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-red-500" />
                          <span>System Architecture</span>
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">Active Pipeline</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-rose-400 w-4/5" />
                      </div>
                      <div className="text-[11px] text-slate-400 leading-relaxed font-mono">
                        Webhook latency: 42ms • Automated lead ingestion • WhatsApp notification dispatched
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Custom design available for your stack</span>
                      <Link
                        href={`/contact?service=${encodeURIComponent(project.title)}`}
                        className="inline-flex items-center gap-1 text-red-400 font-bold hover:text-red-300"
                      >
                        <span>Build Similar</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
