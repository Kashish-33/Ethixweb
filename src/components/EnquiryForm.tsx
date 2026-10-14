'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

const SERVICES_OPTIONS = [
  'AI Receptionists & Voice/Chat Agents',
  'High-Performance Modern Websites',
  'Custom Web Applications & Portals',
  'CRM & Workflow Integrations',
  'Technical SEO & Search Dominance',
  '24/7 Digital Operations & Maintenance',
  'Full Tech Retainer (All-Inclusive)',
];

const BUDGET_OPTIONS = [
  '₹25,000 - ₹50,000 ($300 - $600)',
  '₹50,000 - ₹1,00,000 ($600 - $1,200)',
  '₹1,00,000 - ₹2,50,000 ($1,200 - $3,000)',
  '₹2,50,000+ ($3,000+)',
  'Monthly Retainer (₹20k - ₹50k/mo)',
];

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || SERVICES_OPTIONS[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService,
    budget: BUDGET_OPTIONS[1],
    message: '',
    // Honeypot spam trap (hidden from real users)
    website_trap: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, and Message).');
      return;
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Failed to submit enquiry. Please try again.');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: SERVICES_OPTIONS[0],
        budget: BUDGET_OPTIONS[1],
        message: '',
        website_trap: '',
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glow-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden bg-[#0D0F18]/90 shadow-2xl">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[90px] pointer-events-none rounded-full" />

      {success ? (
        <div className="text-center py-12 space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">Enquiry Received Successfully!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out. A senior operations engineer has received your blueprint request and will review your technical specifications within 24 to 48 hours.
            </p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setSuccess(false)}
              className="btn-secondary px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              Submit Another Enquiry
            </button>
            <a
              href="/admin"
              className="text-xs text-red-400 hover:text-red-300 font-bold underline"
            >
              View in Admin Dashboard →
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Discovery Form</span>
            </div>
            <h3 className="text-2xl font-black text-white">Let&apos;s engineer your operations.</h3>
            <p className="text-xs text-slate-400 mt-1">
              Fill in your project requirements below. We typically respond with a preliminary architecture blueprint in 48 hours.
            </p>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Honeypot Spam Trap (visually hidden) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_trap">Leave blank</label>
            <input
              type="text"
              id="website_trap"
              name="website_trap"
              value={formData.website_trap}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Verma"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/60 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Work Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rahul@company.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/60 transition-colors"
              />
            </div>

            {/* Phone / WhatsApp */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/60 transition-colors"
              />
            </div>

            {/* Company Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Company / Organization
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Nexa Logistics Pvt Ltd"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/60 transition-colors"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Primary Service Interest <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#141724] border border-white/10 text-white text-xs focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/60 transition-colors"
            >
              {SERVICES_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-[#141724] text-white">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Range */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Estimated Project Budget
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#141724] border border-white/10 text-white text-xs focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/60 transition-colors"
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-[#141724] text-white">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Project Details & Technical Scope <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your current bottlenecks, target timeline, key integrations (WhatsApp, CRM, payment gateway), and what you want to achieve..."
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/60 transition-colors resize-y"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-4 px-6 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Submit Blueprint Request</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>

          {/* Privacy Note */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Strict privacy. No unsolicited marketing. Direct engineer contact only.</span>
          </div>
        </form>
      )}
    </div>
  );
}
