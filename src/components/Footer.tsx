import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Heart, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07080C] text-slate-400 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-red-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center group py-1">
              <Image
                src="/ethixweb-logo-text.webp"
                alt="Ethixweb"
                width={214}
                height={32}
                className="h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We run the tech. You run the business. Senior operators engineering AI receptionists, modern websites, custom software, and CRM pipelines for fast-growing businesses.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Operations Live: 99.9% Uptime
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                IST (UTC+5:30) & EST (UTC-5)
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#ai-agents" className="hover:text-red-400 transition-colors">
                  AI Receptionists
                </Link>
              </li>
              <li>
                <Link href="/services#custom-web" className="hover:text-red-400 transition-colors">
                  Modern Next.js Websites
                </Link>
              </li>
              <li>
                <Link href="/services#web-apps" className="hover:text-red-400 transition-colors">
                  Custom Web Portals
                </Link>
              </li>
              <li>
                <Link href="/services#crm-integrations" className="hover:text-red-400 transition-colors">
                  CRM & WhatsApp Flows
                </Link>
              </li>
              <li>
                <Link href="/services#seo-growth" className="hover:text-red-400 transition-colors">
                  Technical SEO & Vitals
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance-support" className="hover:text-red-400 transition-colors">
                  24/7 Ops Retainers
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors">
                  About Ethixweb
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-red-400 transition-colors">
                  4-Step Process
                </Link>
              </li>
              <li>
                <Link href="/#work" className="hover:text-red-400 transition-colors">
                  Concept Architecture
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors">
                  Contact & Enquiries
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-red-400/80 hover:text-red-400 flex items-center gap-1">
                  <span>Admin Lead Portal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Connect</h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:info@ethixweb.com"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-red-500" />
                <span>info@ethixweb.com</span>
              </a>
              <div className="text-xs text-slate-500 leading-relaxed pt-1">
                Fast turnarounds for Indian enterprises & global businesses. Typical proposal delivery within 48 hours.
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 uppercase tracking-wider"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ethixweb. Redesigned Full-Stack Assessment Build. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-red-500" />
              <span>Next.js + Supabase + Tailwind CSS</span>
            </span>
            <Link href="/admin/login" className="hover:text-slate-300 transition-colors">
              Staff Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
