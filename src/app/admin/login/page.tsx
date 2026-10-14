'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Lock, ArrowRight, ShieldCheck, AlertCircle, Eye, EyeOff, Loader2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed. Please verify credentials.');
      }

      router.push('/admin');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07080D] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Red Background Bloom */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        
        {/* Brand header */}
        <div className="text-center mb-8 space-y-2">
          <Link href="/" className="inline-flex items-center justify-center group mb-4">
            <Image
              src="/ethixweb-logo-text.webp"
              alt="Ethixweb"
              width={214}
              height={32}
              priority
              className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>
          <h2 className="text-2xl font-black text-white">Operations Admin Login</h2>
          <p className="text-xs text-slate-400">
            Protected area for authorized engineers to manage inbound client leads and pipeline status.
          </p>
        </div>

        {/* Login Box */}
        <div className="glow-card rounded-3xl p-8 border border-white/10 bg-[#0E111B]/95 shadow-2xl space-y-6">
          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2.5 text-red-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Staff Master Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter administrator password..."
                  className="w-full px-4 py-3 pr-11 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Session...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          {/* Quick Assessment Evaluation Notice */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300 font-semibold text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Assessment Testing Note:</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Default admin password is <code className="text-red-400 bg-red-950/40 px-1.5 py-0.5 rounded border border-red-500/20 font-mono">ethixweb2025</code> (configurable via <code className="text-slate-300">ADMIN_PASSWORD</code> in your environment variables).
            </p>
          </div>

          <div className="text-center pt-1">
            <Link href="/" className="text-xs text-slate-400 hover:text-white transition-colors">
              ← Return to Ethixweb Homepage
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
