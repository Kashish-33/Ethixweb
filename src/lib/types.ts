export interface Enquiry {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  status: 'new' | 'contacted' | 'in_discussion' | 'closed';
  notes?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
  features: string[];
  technologies: string[];
  timeline: string;
  priceStarting: string;
}

export interface ConceptProject {
  id: string;
  title: string;
  category: string;
  clientType: string;
  tagline: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  imagePlaceholder: string;
  conceptLabel: string;
}
