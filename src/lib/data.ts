import { ServiceItem, ConceptProject } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-agents',
    title: 'AI Receptionists & Voice/Chat Agents',
    badge: 'Core Automation',
    shortDesc: 'Autonomous conversational agents that capture, qualify, route, and book leads 24/7 across web, phone, and WhatsApp.',
    fullDesc: 'Eliminate missed opportunities and after-hours dropoffs. We engineer domain-tuned AI agents connected directly to your calendar, CRM, and communication channels. Designed with natural cadence, multi-lingual support (English, Hindi, and regional dialects for Indian operations), and strict guardrails.',
    icon: 'Bot',
    deliverables: [
      'Custom LLM agent fine-tuned on company docs & FAQs',
      'WhatsApp Business API & Twilio Voice integration',
      'Instant calendar booking (Cal.com, Calendly, Google)',
      'Escalation routing & human handover protocols',
    ],
    features: ['Zero hold times', 'Multi-turn qualification', 'Real-time CRM sync', 'Full call transcripts & analytics'],
    technologies: ['OpenAI / Anthropic APIs', 'Twilio Voice', 'WhatsApp Cloud API', 'LangChain', 'FastAPI'],
    timeline: '2 - 3 Weeks',
    priceStarting: '₹35,000 / $499',
  },
  {
    id: 'custom-web',
    title: 'High-Performance Modern Websites',
    badge: 'Flagship Engineering',
    shortDesc: 'Ultra-fast, conversion-focused websites engineered with Next.js, modern design systems, and responsive layouts.',
    fullDesc: 'Your website is your primary business engine. We design bespoke, lightning-fast digital storefronts with sub-second page loads, SEO architecture, micro-interactions, and conversion pathways tailored for Indian and global buyers.',
    icon: 'Globe',
    deliverables: [
      'Tailored UI/UX design with custom design system',
      'Next.js App Router with Server-Side Rendering (SSR)',
      'Tailwind CSS responsive design for 100% mobile perfection',
      'Full Technical SEO setup, sitemaps & Schema.org markup',
    ],
    features: ['98+ Google PageSpeed score', 'Instant page transitions', 'Interactive contact funnels', 'Enterprise security'],
    technologies: ['Next.js 14/15', 'TypeScript', 'Tailwind CSS', 'Vercel Edge Network', 'Framer Motion'],
    timeline: '2 - 4 Weeks',
    priceStarting: '₹45,000 / $599',
  },
  {
    id: 'web-apps',
    title: 'Custom Web Applications & Portals',
    badge: 'Scalable Systems',
    shortDesc: 'Bespoke client dashboards, internal operational tools, booking portals, and secure business workflows.',
    fullDesc: 'When off-the-shelf software falls short, we construct custom web applications that mirror your exact business processes. Scalable database architecture, role-based access control, and intuitive UI make daily operations smooth.',
    icon: 'Code2',
    deliverables: [
      'Secure authentication & role-based permissions (RBAC)',
      'Relational database architecture (PostgreSQL / Supabase)',
      'REST & GraphQL API design and documentation',
      'Automated background jobs and notification triggers',
    ],
    features: ['Real-time data synchronization', 'Bank-grade encrypted sessions', 'Audit logging', 'Mobile responsive dashboards'],
    technologies: ['Next.js / Node.js', 'PostgreSQL', 'Supabase', 'Prisma', 'Tailwind CSS'],
    timeline: '4 - 8 Weeks',
    priceStarting: '₹80,000 / $999',
  },
  {
    id: 'crm-integrations',
    title: 'CRM & Workflow Integrations',
    badge: 'Operations Glue',
    shortDesc: 'Unify HubSpot, Zoho, LeadSquared, GoHighLevel, Zapier, and WhatsApp into one frictionless pipeline.',
    fullDesc: 'Stop losing leads between disconnected tools. We bridge your advertising channels, landing pages, payment gateways (Razorpay, Stripe), and CRMs so your sales team gets notified within seconds of lead capture.',
    icon: 'Workflow',
    deliverables: [
      'Bidirectional CRM synchronization (HubSpot, Zoho, GHL)',
      'WhatsApp notification dispatch to sales reps on new enquiry',
      'Razorpay & Stripe payment webhook automation',
      'Automated invoice generation & email follow-up sequence',
    ],
    features: ['Zero duplicate leads', 'Instant SMS/WhatsApp alerts', 'Pipeline stage automations', 'Custom field mapping'],
    technologies: ['Make.com', 'Zapier', 'Webhook Endpoints', 'Zoho CRM API', 'HubSpot API', 'Razorpay Webhooks'],
    timeline: '1 - 2 Weeks',
    priceStarting: '₹25,000 / $350',
  },
  {
    id: 'seo-growth',
    title: 'Technical SEO & Search Dominance',
    badge: 'Organic Growth',
    shortDesc: 'Engineered search presence, programmatic landing pages, local business SEO, and core web vitals optimization.',
    fullDesc: 'Rank for high-intent commercial keywords. We go far beyond basic meta tags, restructuring technical architecture, semantic data markup, crawler indexation, and content systems that compound into durable inbound pipeline.',
    icon: 'Search',
    deliverables: [
      'Core Web Vitals audit and code-level performance fix',
      'JSON-LD Structured Data Schema implementation',
      'Google Search Console & Google Business Profile setup',
      'Competitor keyword gap analysis & target content cluster',
    ],
    features: ['Local SEO pack domination', 'Sub-second mobile rendering', 'Indexation error resolution', 'Monthly organic analytics'],
    technologies: ['Google Search Console', 'Ahrefs', 'Schema.org', 'Lighthouse Vitals', 'Next.js Dynamic Metatags'],
    timeline: 'Ongoing / 4 Weeks Setup',
    priceStarting: '₹20,000 / Month',
  },
  {
    id: 'maintenance-support',
    title: '24/7 Digital Operations & Maintenance',
    badge: 'Reliability',
    shortDesc: 'Proactive uptime monitoring, security patching, dependency upgrades, bug fixes, and continuous improvements.',
    fullDesc: 'We run the tech so you run your business without anxiety. Dedicated engineering hours every month for content updates, security patches, feature additions, and 99.9% uptime monitoring.',
    icon: 'ShieldCheck',
    deliverables: [
      'Continuous uptime monitoring with 5-minute ping intervals',
      'Weekly automated database backups & rollback drills',
      'Monthly security vulnerability scans & dependency bumps',
      'Dedicated Slack/WhatsApp support line with guaranteed SLA',
    ],
    features: ['< 2 hr emergency turnaround', 'Regular performance reports', 'Continuous UI polish', 'Zero downtime deployments'],
    technologies: ['Uptime Kuma', 'Vercel Monitoring', 'Sentry Error Tracking', 'GitHub Actions CI/CD'],
    timeline: 'Retainer Basis',
    priceStarting: '₹15,000 / Month',
  },
];

export const CONCEPT_PROJECTS: ConceptProject[] = [
  {
    id: 'finflow-portal',
    title: 'FinEdge SME Lending Portal',
    category: 'Fintech & Customer Onboarding',
    clientType: 'Illustrative Concept Case Study',
    tagline: 'Streamlined loan application funnel with digital KYC, automated credit qualification, and WhatsApp updates.',
    challenge: 'Traditional loan processing faced a 62% abandonment rate due to cumbersome 14-page forms and manual document verification delays.',
    solution: 'Designed a 3-step progressive web portal with instant Aadhaar/PAN mock validation, auto-saving state, and an interactive admin review dashboard.',
    metrics: [
      { label: 'Form Completion Rate', value: '+74%' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Drop-off Reduction', value: '-55%' },
    ],
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Supabase Auth', 'PostgreSQL'],
    imagePlaceholder: 'linear-gradient(135deg, #1e1b4b 0%, #311042 50%, #090a0f 100%)',
    conceptLabel: 'Concept Architecture Demo',
  },
  {
    id: 'medicare-booking',
    title: 'CarePulse Clinic Booking Engine',
    category: 'Healthcare & AI Scheduling',
    clientType: 'Illustrative Concept Case Study',
    tagline: 'Multi-location doctor appointment booking platform with automated WhatsApp reminders and zero double-bookings.',
    challenge: 'A multi-speciality clinic lost 28% of incoming patient bookings due to unanswered phone calls during peak consultation hours.',
    solution: 'Implemented a lightweight booking web application coupled with an AI receptionist conversational flow that confirms appointments in under 45 seconds.',
    metrics: [
      { label: 'Booking Speed', value: '< 45s' },
      { label: 'No-show Reduction', value: '42%' },
      { label: 'Patient Satisfaction', value: '98%' },
    ],
    technologies: ['React', 'Next.js', 'WhatsApp Cloud API', 'Postgres', 'Cal Engine'],
    imagePlaceholder: 'linear-gradient(135deg, #064e3b 0%, #022c22 50%, #090a0f 100%)',
    conceptLabel: 'Concept Architecture Demo',
  },
  {
    id: 'omni-retail',
    title: 'Nexus Omnichannel B2B Catalog',
    category: 'B2B Wholesale & Distributor Engine',
    clientType: 'Illustrative Concept Case Study',
    tagline: 'Bulk ordering system for regional distributors with GST invoicing, tier pricing, and instant quote generation.',
    challenge: 'Wholesale sales teams relied on static PDF catalogs and Excel order sheets, resulting in pricing misquotes and delayed dispatches.',
    solution: 'Created an authenticated dealer portal with tiered wholesale discount logic, instantaneous PDF quote downloads, and ERP inventory sync.',
    metrics: [
      { label: 'Order Processing Time', value: '-80%' },
      { label: 'Catalog Search Speed', value: '30ms' },
      { label: 'Average Order Value', value: '+35%' },
    ],
    technologies: ['Next.js App Router', 'Tailwind CSS', 'Razorpay Webhooks', 'PostgreSQL'],
    imagePlaceholder: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #090a0f 100%)',
    conceptLabel: 'Concept Architecture Demo',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover & Map the Blueprint',
    desc: 'We dissect your current sales funnel, tech stack bottlenecks, and operational pain points to draft an actionable architecture proposal in 48 hours.',
  },
  {
    step: '02',
    title: 'Rapid Prototyping & System Design',
    desc: 'You receive clickable high-fidelity wireframes and database schemas before a line of production code is written. No guesswork, only clarity.',
  },
  {
    step: '03',
    title: 'Sprint Engineering & Integration',
    desc: 'Built with production-grade Next.js, robust APIs, and clean TypeScript. We connect your CRM, payment gateways, and WhatsApp automations in tandem.',
  },
  {
    step: '04',
    title: 'Deployment & Continuous Operations',
    desc: 'Live rollout on enterprise edge networks (Vercel) with 24/7 uptime monitoring, search engine indexation, and proactive maintenance retainers.',
  },
];

export const WHY_ETHIXWEB = [
  {
    title: 'Operators, Not Just Coders',
    desc: 'We do not just hand over a zip file and vanish. We build digital operations that solve revenue bottlenecks, automate manual staff tasks, and convert visitors.',
  },
  {
    title: 'Engineered for the Indian Business Reality',
    desc: 'Deep compatibility with WhatsApp-first communication, Razorpay/UPI payment rails, regional connectivity constraints, and fast turnaround demands.',
  },
  {
    title: 'Zero Bloatware or Template Clutter',
    desc: 'Every project is clean-coded with Next.js and Tailwind CSS. No slow WordPress plugins that break on update or lag behind your competitors.',
  },
  {
    title: 'Direct Senior Engineering Access',
    desc: 'Work directly with the technical architects designing your software. No layers of non-technical account managers playing telephone.',
  },
];

export const FAQS = [
  {
    q: 'How does Ethixweb differ from traditional marketing agencies in India?',
    a: 'Traditional agencies focus almost exclusively on vanity social media graphics or rigid WordPress templates. Ethixweb is an engineering-first digital operations partner: we build custom web applications, connect complex CRMs, deploy automated AI receptionists, and optimize technical infrastructure for scalable growth.',
  },
  {
    q: 'What is the typical timeline for a complete website or portal build?',
    a: 'A conversion-focused Next.js marketing website typically launches in 2 to 3 weeks. Custom web applications, booking portals, and CRM integrations usually require 3 to 6 weeks depending on architectural complexity.',
  },
  {
    q: 'Can our website integrate with Indian payment gateways and WhatsApp?',
    a: 'Yes. We natively integrate Razorpay, Cashfree, Stripe, and the official WhatsApp Business Cloud API for instant order notifications, booking confirmations, and sales lead dispatch.',
  },
  {
    q: 'Do you offer ongoing technical maintenance after launch?',
    a: 'Absolutely. We offer dedicated monthly retainer plans covering 24/7 uptime monitoring, security patches, regular speed optimizations, content updates, and priority bug resolution.',
  },
];
