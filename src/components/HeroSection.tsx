'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Bot, Cpu, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden radial-glow">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-ambient opacity-50 pointer-events-none" />

      {/* Decorative Blur Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-rose-500/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Operations Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 shadow-[0_0_15px_rgba(225,29,72,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                Senior Digital Operations Partner
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
              We run the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-red-600">
                tech.
              </span>
              <br />
              You run the{' '}
              <span className="text-white">
                business.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              From mobile-first websites and AI-powered customer support to WhatsApp-connected enquiries, automated follow-ups and technical SEO, we help businesses simplify operations and serve customers across India.
            </p>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Next.js 14/15 SSR Architecture (Sub-second load)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>AI Booking Agents & WhatsApp Integrations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>HubSpot, Zoho & LeadSquared Synchronization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Guaranteed Uptime & Proactive Maintenance Retainers</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider group"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/services"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold"
              >
                <span>Explore Services</span>
              </Link>

              <Link
                href="/#work"
                className="text-xs text-slate-400 hover:text-white px-3 py-2 transition-colors flex items-center gap-1.5"
              >
                <span>View Concept Demos</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </Link>
            </div>
          </div>

          {/* Right Column: Live Systems Visual Widget */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md w-full">
              {/* Outer decorative card */}
              <div className="glow-card rounded-2xl p-6 relative overflow-hidden shadow-2xl border border-white/10 bg-[#0F121C]/90 backdrop-blur-xl">
                {/* Header bar of tech card */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">ethix-core-node:online</span>
                </div>

                {/* Simulated Real-Time System Metrics */}
                <div className="mt-5 space-y-4">
                  {/* Metric 1: AI Agent */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-red-500/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">AI Voice & WhatsApp Agent</div>
                          <div className="text-[10px] text-slate-400">Active Routing: 42 conversations</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-400">0.4s response</span>
                    </div>
                  </div>

                  {/* Metric 2: Next.js Vitals */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-red-500/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Edge Rendering Performance</div>
                          <div className="text-[10px] text-slate-400">Next.js 14 SSR • Vercel Edge</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-400">100 / 100 Vitals</span>
                    </div>
                  </div>

                  {/* Metric 3: CRM Bridge */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-red-500/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">HubSpot / Zoho Pipeline</div>
                          <div className="text-[10px] text-slate-400">Real-time webhook sync</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-400">100% Sync</span>
                    </div>
                  </div>

                  {/* Operational Status Banner */}
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Security & SSL Enforced</span>
                    </span>
                    <span className="font-mono text-slate-400">99.98% SLA</span>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Indicator */}
              <div className="absolute -bottom-5 -left-5 bg-[#141722] border border-red-500/30 rounded-xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Zero Maintenance Stress</div>
                  <div className="text-[10px] text-slate-400">Continuous updates & support</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee Ticker Strip */}
      <div className="mt-20 border-y border-white/5 bg-[#0C0E15]/60 py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[
            'AI Voice Receptionists',
            'Next.js 14 SSR Architecture',
            'CRM Automation (HubSpot & Zoho)',
            'WhatsApp Lead Pipelines',
            'Core Web Vitals 99+',
            'Technical SEO Engineering',
            '24/7 Ops Retainers',
            'Secure Supabase Backends',
            'AI Voice Receptionists',
            'Next.js 14 SSR Architecture',
            'CRM Automation (HubSpot & Zoho)',
            'WhatsApp Lead Pipelines',
            'Core Web Vitals 99+',
            'Technical SEO Engineering',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
