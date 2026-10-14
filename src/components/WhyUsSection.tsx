import React from 'react';
import { WHY_ETHIXWEB } from '@/lib/data';
import { Check, ShieldAlert, Zap, Layers, Sparkles } from 'lucide-react';

export default function WhyUsSection() {
  return (
    <section className="py-24 relative bg-[#0C0E15] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Ethixweb Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Why growing companies choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600">
              senior operators.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Most digital agencies sell bloated retainers and disappear when code breaks. We operate as your dedicated technology partners, aligning code directly with business revenue.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHY_ETHIXWEB.map((item, idx) => (
            <div
              key={idx}
              className="glow-card rounded-2xl p-8 border border-white/10 hover:border-red-500/40 relative overflow-hidden group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400 group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-red-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-[#10131E] p-6 sm:p-8 overflow-x-auto">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
            Direct Comparison: Ethixweb vs Traditional Agency vs In-House Dev
          </h4>
          <table className="w-full text-left text-xs min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider font-semibold">
                <th className="pb-3 w-1/4">Evaluation Vector</th>
                <th className="pb-3 w-1/4 text-red-400 font-bold">Ethixweb Operations</th>
                <th className="pb-3 w-1/4 text-slate-400">Traditional Agency</th>
                <th className="pb-3 w-1/4 text-slate-400">Hiring Solo In-House</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr>
                <td className="py-3 font-semibold text-white">Stack Modernity</td>
                <td className="py-3 text-red-400 font-medium">Next.js 14 SSR, TypeScript, Tailwind</td>
                <td className="py-3 text-slate-400">Bulky WordPress / slow templates</td>
                <td className="py-3 text-slate-400">Single dev skill bottleneck</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-white">Turnaround Speed</td>
                <td className="py-3 text-red-400 font-medium">2 to 4 weeks production launch</td>
                <td className="py-3 text-slate-400">3 to 6 months bureaucratic lag</td>
                <td className="py-3 text-slate-400">Ongoing hiring & ramp-up delay</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-white">AI & CRM Integration</td>
                <td className="py-3 text-red-400 font-medium">Native AI receptionists & WhatsApp bots</td>
                <td className="py-3 text-slate-400">External outsourcing / manual forms</td>
                <td className="py-3 text-slate-400">Requires multi-skill hiring</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-white">Maintenance Guarantee</td>
                <td className="py-3 text-red-400 font-medium">24/7 proactive monitoring & SLAs</td>
                <td className="py-3 text-slate-400">Billing hourly for tiny bug fixes</td>
                <td className="py-3 text-slate-400">Single point of failure when sick/on leave</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
