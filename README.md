# Ethixweb Website Redesign & Full-Stack Platform

A modern, production-grade redesign of the **Ethixweb** agency platform ([https://www.ethixweb.com/](https://www.ethixweb.com/)), engineered with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Supabase (PostgreSQL)**.

> **Core Brand Proposition:** *"We run the tech. You run the business."*  
> Senior operators engineering AI receptionists, modern websites, custom web apps, CRM automations, and 24/7 digital operations.

---

## 🚀 Key Highlights & Deliverables

1. **Pages & Routing:**
   - **Home (`/`)**: High-impact hero with live system metrics widget, marquee ticker, services preview, 4-step delivery lifecycle, clearly labelled illustrative concept projects, "Why Us" comparison matrix, FAQs accordion, and high-conversion CTA banner.
   - **Services (`/services`)**: Full service catalog with deliverables, technical architectures, timeline estimates, and starting investment brackets in INR and USD.
   - **About (`/about`)**: Technical ethos, engineering standards, transparent delivery model, and adaptation for the Indian business reality.
   - **Contact (`/contact`)**: Interactive project discovery form with real API submission, email & WhatsApp channels, and 48-hour blueprint response SLA.
   - **Admin Portal (`/admin`)**: Protected operations dashboard to view submitted leads, change pipeline status, record internal notes, search/filter, and export leads to CSV.
   - **Admin Login (`/admin/login`)**: Secure authentication gateway with server-side authorization and HttpOnly session cookies.

2. **Backend & Persistent Database:**
   - **Supabase Integration**: Native PostgreSQL schema with Row-Level Security (RLS) policies allowing public lead submission while restricting administration to authorized sessions.
   - **Zero-Crash Resilience**: If Supabase environment variables are not yet configured or during initial local testing, the application gracefully saves enquiries to a persistent local store (`.enquiries-store.json`), guaranteeing zero build or runtime failures out of the box!
   - **Anti-Spam Honeypot**: Embedded invisible honeypot field (`website_trap`) that catches automated spam bots without requiring user-hostile CAPTCHAs.

3. **Design & Aesthetics:**
   - Custom **Ethixweb** visual identity: Deep obsidian (`#090A0F`), subtle glowing crimson/rose accents (`#E11D48`), glassmorphic panels, and refined typography.
   - Mobile-first responsive navigation with drawer toggle and timezone indicator.
   - Strictly honest content: illustrative concept projects are explicitly labelled as architectural demos to maintain total credibility.

---

## 🛠️ Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | Sub-second SSR page loads, edge rendering, SEO metadata, and server actions/API routes |
| **Language** | TypeScript 5 | Strict compile-time safety across lead payloads and component interfaces |
| **Styling** | Tailwind CSS 3 | Bespoke agency design tokens, dark theme utilities, and zero runtime CSS overhead |
| **Database** | Supabase (PostgreSQL) | Battle-tested relational database with RLS policies, indexing, and real-time support |
| **Icons** | Lucide React | Clean, modern feather-style iconography |
| **Hosting** | Vercel | Seamless edge deployment with automatic preview builds |

---

## 📁 Project Structure

```text
Ethix/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── login/page.tsx      # Admin login interface
│   │   │   └── page.tsx            # Protected admin operations portal
│   │   ├── api/
│   │   │   ├── admin/
│   │   │   │   ├── enquiries/route.ts # Authorized GET, PATCH, DELETE leads
│   │   │   │   ├── login/route.ts     # Set secure HttpOnly session cookie
│   │   │   │   └── logout/route.ts    # Clear session cookie
│   │   │   └── enquiry/route.ts       # Public lead submission & honeypot check
│   │   ├── about/page.tsx          # About Ethixweb engineering ethos
│   │   ├── contact/page.tsx        # Project discovery & enquiry form
│   │   ├── services/page.tsx       # Comprehensive service catalog
│   │   ├── globals.css             # Tailwind utilities & glassmorphic classes
│   │   ├── layout.tsx              # Root HTML, SEO metadata, Header & Footer
│   │   └── page.tsx                # Homepage assembly
│   ├── components/
│   │   ├── AdminDashboardClient.tsx # Interactive pipeline & CSV export
│   │   ├── CtaBanner.tsx           # High-conversion closing banner
│   │   ├── EnquiryForm.tsx         # Client form with validation & states
│   │   ├── FaqSection.tsx          # Interactive FAQ accordion
│   │   ├── Footer.tsx              # Agency sitemap & contact details
│   │   ├── Header.tsx              # Sticky navigation & mobile drawer
│   │   ├── HeroSection.tsx         # Dynamic hero with live system widget
│   │   ├── PortfolioSection.tsx    # Illustrative concept case studies
│   │   ├── ProcessSection.tsx      # 4-step delivery framework
│   │   ├── ServicesGrid.tsx        # Capabilities grid with starting pricing
│   │   └── WhyUsSection.tsx        # Comparison matrix vs traditional agencies
│   └── lib/
│       ├── auth.ts                 # Server session verification
│       ├── data.ts                 # Structured content & concept case studies
│       ├── db.ts                   # Supabase client + persistent store fallback
│       ├── supabase.ts             # Supabase client initialization
│       └── types.ts                # TypeScript interfaces
├── schema.sql                      # Supabase PostgreSQL table & RLS policies
├── .env.example                    # Environment variable documentation
├── .env.local                      # Local default testing configuration
└── tailwind.config.ts              # Custom brand color tokens
```

---

## ⚡ Quick Start (Local Development)

### 1. Clone & Install
```bash
git clone <your-repo>
cd Ethix
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
*(By default, `.env.local` contains sensible testing credentials. You can immediately run the application even before setting up Supabase).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## 🗄️ Database Setup (Supabase)

To connect real persistent cloud storage for submitted leads:

1. Create a free account at [Supabase](https://supabase.com/).
2. Create a new project (e.g., `ethixweb-production`).
3. In the Supabase Dashboard, go to **SQL Editor** → **New Query**.
4. Open the [schema.sql](file:///d:/Ethix/schema.sql) file in this repository, copy its contents, paste them into the SQL Editor, and click **Run**.
   - This creates the `enquiries` table, performance indexes, and Row Level Security (RLS) policies.
5. In your Supabase Dashboard, navigate to **Project Settings** → **API**.
6. Copy the following keys into your `.env.local` (and into Vercel Environment Variables for production):
   ```ini
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
   ```

---

## 🔐 Admin Operations Portal Access

Authorized staff can manage inbound leads at:
- **URL**: [http://localhost:3000/admin](http://localhost:3000/admin) (or `/admin/login`)
- **Default Master Password**: `ethixweb2025` *(Change via `ADMIN_PASSWORD` in `.env.local`)*

### Admin Capabilities:
- **Live Pipeline Metrics**: Total leads, new leads, in discussion, converted.
- **Instant Status Transition**: Mark leads as `New`, `Contacted`, `In Discussion`, or `Closed / Won`.
- **Internal Staff Notes**: Record discussion minutes, proposal links, and call schedules directly on each lead.
- **Search & Filter**: Search by client name, email, company, or service.
- **1-Click CSV Export**: Download the entire lead book as formatted CSV for CRM import.
- **Server-Side Protection**: Unauthorized requests are redirected to `/admin/login`.

---

## 🚢 Deployment Guide (Vercel)

This application is ready for 1-click deployment on Vercel:

1. Push this repository to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository. Next.js preset will be automatically detected.
4. Add the following **Environment Variables** in the Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`: *(Your Supabase project URL)*
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: *(Your Supabase anon key)*
   - `SUPABASE_SERVICE_ROLE_KEY`: *(Your Supabase service role key)*
   - `ADMIN_PASSWORD`: *(Your secure admin password)*
   - `ADMIN_SESSION_SECRET`: *(A random 32-character secret string)*
5. Click **Deploy**. Vercel will build and assign a live URL (e.g., `https://ethixweb.vercel.app`).
