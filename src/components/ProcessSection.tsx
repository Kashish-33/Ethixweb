import React from 'react';
import { PROCESS_STEPS } from '@/lib/data';
import { CheckCircle, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 relative bg-[#0B0D14] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Execution Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            From architecture to deployment in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600">
              4 structured sprints.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            No endless meetings or ambiguous scopes. We follow a battle-tested engineering blueprint that gets your software live and generating ROI fast.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="glow-card rounded-2xl p-7 relative flex flex-col justify-between border border-white/10 group hover:border-red-500/40"
            >
              {/* Step Number with Red Glow */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-rose-700 font-mono">
                  {step.step}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-full">
                  Phase {index + 1}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator bar */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-red-400 font-semibold">
                <CheckCircle className="w-4 h-4 text-red-500" />
                <span>Deterministic Delivery</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-red-950/30 via-slate-900/60 to-red-950/30 border border-red-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-red-500 shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white">48-Hour Architecture Blueprint Guarantee:</span> Receive a detailed system proposal, tech stack breakdown, and delivery schedule within 48 hours of discovery.
            </div>
          </div>
          <a
            href="/contact"
            className="btn-primary shrink-0 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
          >
            <span>Request Blueprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
