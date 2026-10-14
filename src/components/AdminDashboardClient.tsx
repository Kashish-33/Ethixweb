'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Enquiry } from '@/lib/types';
import { 
  Users, 
  Search, 
  Download, 
  LogOut, 
  Trash2, 
  ExternalLink, 
  Clock, 
  Mail, 
  Phone, 
  Building, 
  DollarSign, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Filter,
  RefreshCw
} from 'lucide-react';

interface Props {
  initialLeads: Enquiry[];
}

const STATUS_BADGES: Record<Enquiry['status'], { label: string; class: string }> = {
  new: { label: 'New Lead', class: 'bg-red-500/15 text-red-400 border-red-500/30' },
  contacted: { label: 'Contacted', class: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  in_discussion: { label: 'In Discussion', class: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  closed: { label: 'Closed / Won', class: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
};

export default function AdminDashboardClient({ initialLeads }: Props) {
  const router = useRouter();
  const [leads, setLeads] = useState<Enquiry[]>(initialLeads);
  const [activeTab, setActiveTab] = useState<'all' | Enquiry['status']>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLead, setSelectedLead] = useState<Enquiry | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [notesInput, setNotesInput] = useState('');

  // Metrics
  const totalLeads = leads.length;
  const newCount = leads.filter((l) => l.status === 'new').length;
  const inDiscussionCount = leads.filter((l) => l.status === 'in_discussion').length;
  const closedCount = leads.filter((l) => l.status === 'closed').length;

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    const matchesTab = activeTab === 'all' || lead.status === activeTab;
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      lead.name.toLowerCase().includes(q) ||
      lead.email.toLowerCase().includes(q) ||
      (lead.company && lead.company.toLowerCase().includes(q)) ||
      lead.service.toLowerCase().includes(q);

    return matchesTab && matchesQuery;
  });

  const handleStatusChange = async (id: string, newStatus: Enquiry['status']) => {
    setIsUpdating(true);
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setLeads((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
        );
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error('Failed to update status', err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    setIsUpdating(true);
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedLead.id, status: selectedLead.status, notes: notesInput }),
      });

      if (res.ok) {
        setLeads((prev) =>
          prev.map((item) =>
            item.id === selectedLead.id ? { ...item, notes: notesInput } : item
          )
        );
        setSelectedLead((prev) => (prev ? { ...prev, notes: notesInput } : null));
      }
    } catch (err) {
      console.error('Failed to update notes', err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setLeads((prev) => prev.filter((item) => item.id !== id));
        if (selectedLead?.id === id) setSelectedLead(null);
      }
    } catch (err) {
      console.error('Failed to delete lead', err);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const exportCSV = () => {
    const headers = ['ID', 'Date', 'Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Status', 'Message', 'Notes'];
    const rows = leads.map((l) => [
      `"${l.id}"`,
      `"${new Date(l.created_at).toLocaleDateString()}"`,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.email.replace(/"/g, '""')}"`,
      `"${(l.phone || '').replace(/"/g, '""')}"`,
      `"${(l.company || '').replace(/"/g, '""')}"`,
      `"${l.service.replace(/"/g, '""')}"`,
      `"${(l.budget || '').replace(/"/g, '""')}"`,
      `"${l.status}"`,
      `"${l.message.replace(/"/g, '""')}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ethixweb_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#07080D] text-slate-200 pb-20 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Admin Operations Center</span>
            </div>
            <h1 className="text-3xl font-black text-white">Client Enquiries &amp; Pipeline</h1>
            <p className="text-xs text-slate-400 mt-1">
              Real-time persistent leads database powered by Supabase &amp; secure session authorization.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportCSV}
              className="btn-secondary px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-red-400" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 flex items-center gap-2 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          <div className="p-5 rounded-2xl bg-[#0F121C] border border-white/5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Enquiries</div>
            <div className="text-3xl font-black text-white font-mono mt-1">{totalLeads}</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0F121C] border border-red-500/20">
            <div className="text-[11px] font-bold uppercase tracking-wider text-red-400">New Uncontacted</div>
            <div className="text-3xl font-black text-red-400 font-mono mt-1">{newCount}</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0F121C] border border-white/5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400">In Discussion</div>
            <div className="text-3xl font-black text-white font-mono mt-1">{inDiscussionCount}</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#0F121C] border border-white/5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Converted / Closed</div>
            <div className="text-3xl font-black text-emerald-400 font-mono mt-1">{closedCount}</div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-[#0D0F18] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {(['all', 'new', 'contacted', 'in_discussion', 'closed'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-red-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.replace('_', ' ')}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, company, email..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-red-500/50"
            />
          </div>
        </div>

        {/* Leads Table Container */}
        <div className="rounded-2xl border border-white/10 bg-[#0E101A] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[750px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Client / Company</th>
                  <th className="py-4 px-6">Service Requested</th>
                  <th className="py-4 px-6">Budget</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500">
                      No enquiries found matching criteria.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => {
                    const badge = STATUS_BADGES[lead.status] || STATUS_BADGES.new;
                    return (
                      <tr
                        key={lead.id}
                        className="hover:bg-white/[0.02] transition-colors cursor-pointer"
                        onClick={() => {
                          setSelectedLead(lead);
                          setNotesInput(lead.notes || '');
                        }}
                      >
                        <td className="py-4 px-6">
                          <div className="font-bold text-white text-sm">{lead.name}</div>
                          <div className="text-slate-400 text-[11px] flex items-center gap-2 mt-0.5">
                            <span>{lead.email}</span>
                            {lead.company && <span>• {lead.company}</span>}
                          </div>
                        </td>

                        <td className="py-4 px-6 text-slate-300 font-medium max-w-[220px] truncate">
                          {lead.service}
                        </td>

                        <td className="py-4 px-6 text-slate-300 font-mono text-[11px]">
                          {lead.budget || 'Unspecified'}
                        </td>

                        <td className="py-4 px-6 text-slate-400 text-[11px] font-mono">
                          {new Date(lead.created_at).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </td>

                        <td className="py-4 px-6" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                            disabled={isUpdating}
                            className={`px-2.5 py-1 rounded-full text-[11px] font-bold border focus:outline-none bg-[#141724] ${badge.class}`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="in_discussion">In Discussion</option>
                            <option value="closed">Closed / Won</option>
                          </select>
                        </td>

                        <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => {
                                setSelectedLead(lead);
                                setNotesInput(lead.notes || '');
                              }}
                              className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10"
                              title="View details & notes"
                            >
                              <FileText className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(lead.id)}
                              className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"
                              title="Delete lead"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Detail & Notes Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#10131E] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider mb-2 ${STATUS_BADGES[selectedLead.status]?.class}`}>
                  {STATUS_BADGES[selectedLead.status]?.label}
                </span>
                <h3 className="text-xl font-black text-white">{selectedLead.name}</h3>
                <div className="text-xs text-slate-400 flex flex-wrap gap-3 mt-1">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-red-400" />
                    <a href={`mailto:${selectedLead.email}`} className="hover:underline">{selectedLead.email}</a>
                  </span>
                  {selectedLead.phone && (
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-red-400" />
                      <a href={`tel:${selectedLead.phone}`} className="hover:underline">{selectedLead.phone}</a>
                    </span>
                  )}
                  {selectedLead.company && (
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-red-400" />
                      <span>{selectedLead.company}</span>
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => setSelectedLead(null)}
                className="text-slate-400 hover:text-white p-1 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Service & Budget Details */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Service Requested</span>
                <span className="font-semibold text-white mt-0.5 block">{selectedLead.service}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Budget Bracket</span>
                <span className="font-semibold text-white mt-0.5 block">{selectedLead.budget || 'Not specified'}</span>
              </div>
            </div>

            {/* Message Body */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Project Description & Scope
              </label>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-200 leading-relaxed max-h-48 overflow-y-auto whitespace-pre-wrap">
                {selectedLead.message}
              </div>
            </div>

            {/* Internal Staff Notes */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Internal Operations Notes & Status
              </label>
              <textarea
                rows={3}
                value={notesInput}
                onChange={(e) => setNotesInput(e.target.value)}
                placeholder="Add meeting notes, scheduled calls, technical evaluation or proposal status..."
                className="w-full p-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-red-500/50"
              />
              <div className="flex items-center justify-between pt-1">
                <select
                  value={selectedLead.status}
                  onChange={(e) => handleStatusChange(selectedLead.id, e.target.value as any)}
                  className="px-3 py-1.5 rounded-xl text-xs bg-[#141724] border border-white/10 text-white font-semibold"
                >
                  <option value="new">Mark as New</option>
                  <option value="contacted">Mark as Contacted</option>
                  <option value="in_discussion">Mark as In Discussion</option>
                  <option value="closed">Mark as Closed / Won</option>
                </select>

                <button
                  onClick={handleSaveNotes}
                  disabled={isUpdating}
                  className="btn-primary px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  {isUpdating ? 'Saving...' : 'Save Notes'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
