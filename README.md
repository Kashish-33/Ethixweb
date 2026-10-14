# Ethixweb --- India-Focused Website Redesign

A responsive website redesign for Ethixweb, created as part of the Full
Stack Developer assessment. The experience keeps Ethixweb's premium
dark-and-red brand style while making the services and messaging more
relevant to Indian businesses.

## Live Demo

-   **Live website:** https://ethixweb-dusky.vercel.app/
-   **GitHub repository:** https://github.com/Kashish-33/Ethixweb

## Tech Stack

-   **Frontend:** Next.js 14, React, TypeScript
-   **Styling:** Tailwind CSS
-   **Backend:** Next.js API routes
-   **Database:** Supabase (PostgreSQL)
-   **Deployment:** Vercel

## Key Features

-   Responsive homepage with a clear value proposition,
    service/capability sections, delivery process, selected work,
    reasons to choose Ethixweb, and contact CTA.
-   Services page explaining the company's capabilities.
-   About page describing the Indian business context and mobile-first
    expectations.
-   Contact/enquiry form with fields for name, work email,
    phone/WhatsApp number, company, service interest, estimated budget,
    and project details.
-   Admin area for viewing and managing enquiries.
-   Environment-based configuration for database access and admin
    authentication.

## India-Specific Design Decisions

-   **Mobile-first experience:** The content and enquiry journey are
    designed with mobile users in mind, which is important for reaching
    customers across India.
-   **WhatsApp-aware communication:** The enquiry form asks for a
    phone/WhatsApp number so businesses can choose a familiar contact
    channel.
-   **Indian business context:** The About page discusses practical
    needs such as WhatsApp interactions and Indian payment options,
    including UPI/Razorpay where relevant.
-   **Business-focused language:** The homepage describes services in
    terms of customer support, enquiries, follow-ups, and business
    growth instead of relying only on technical terminology.
-   **Premium visual identity:** The existing dark-and-red brand
    direction is retained rather than adding superficial India-themed
    decoration.

## Local Setup

1.  Install Node.js (LTS recommended).

2.  Clone the repository:

    ``` bash
    git clone https://github.com/Kashish-33/Ethixweb.git
    cd Ethixweb
    ```

3.  Install dependencies:

    ``` bash
    npm install
    ```

4.  Create a `.env.local` file in the project root. Add the environment
    variables required by the project:

    ``` env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
    ADMIN_PASSWORD=choose_a_strong_admin_password
    ADMIN_SESSION_SECRET=use_a_long_random_secret
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```

5.  Start the development server:

    ``` bash
    npm run dev
    ```

6.  Open `http://localhost:3000`.

> Never commit `.env.local` or real credentials to GitHub. Set
> production environment variables in Vercel's project settings.

## Deployment

The project is deployed from GitHub to Vercel. Configure the required
environment variables in Vercel before deploying. After the first
deployment, set `NEXT_PUBLIC_APP_URL` to the deployed website URL if the
application uses it, then redeploy.

## Design Rationale

The design prioritizes a clear value proposition, structured service
information, selected work, and a direct enquiry path. The dark
background and red accents preserve the brand identity, while the
India-focused copy highlights mobile-first use, familiar communication
channels, and practical business requirements.

## Before Submission

-   Replace **Add your deployed Vercel URL here** with the final live
    URL.
-   Run Google PageSpeed Insights on the live URL for both **Mobile**
    and **Desktop** and save the report overview screenshot for each.
-   Verify that the production contact form saves an enquiry and that
    the admin area can load it.
-   Share demo admin credentials with the evaluator through the
    submission form only, not in this public README.
