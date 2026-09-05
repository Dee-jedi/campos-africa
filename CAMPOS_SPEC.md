# Campos Brand & Product Specification (`campos.africa`)

## 1. Executive Summary & Brand Positioning

* **Product Name:** Campos
* **Web Portal:** `campos.africa`
* **Web Application:** `app.campos.africa`
* **Official Contact:** `support@campos.africa`
* **Brand Tagline:** *"If it's on campus, it's on Campos."*
* **Primary Value Proposition:** The #1 Academic & Lifestyle Super-App for African University Students. Built to help students ace their exams with instant materials and CBT prep, buy and sell safely on campus, stay informed with real-time news, and connect with their campus community.
* **Target Audience:** Tertiary institution students in Africa — Undergraduates (100L through 500L), Postgraduates, Campus Merchants & Entrepreneurs, Faculty Leaders, and Student Creators.
* **Institutions Covered:** Major tertiary institutions across Nigeria and Africa (e.g., UNILAG, UNIBEN, OAU, UNN, ABU, UI, LASU, FUTA, UNILORIN, etc.) categorized by University, Faculty, Department, and Academic Level.

---

## 2. Core Pillars (Ranked by Strategic Priority)

### 🥇 Pillar 1: Academic Hub & Instant Materials Access (Primary Hook & Retention Driver)
* **Instant Course Material Library:** One-click repository for lecture slides, course packs, handouts, and departmental syllabus documents.
* **Past Question Compilations:** Comprehensive, searchable archives of past exam and continuous assessment (CA) questions categorized by course code, year, and institution.
* **CBT Test & Exam Simulator:** Real-time timed exam mode simulating general studies (GST/GES) and departmental computer-based tests, complete with instant grading, score review, and detailed answer explanations.
* **Campos AI Academic Tutor:** In-app intelligent study assistant capable of explaining challenging lecture topics, breaking down complex formulas, summarizing long academic PDFs, and generating practice flashcards.
* **Integrated In-App PDF Viewer:** High-performance in-browser and offline-friendly document reader with fast rendering, page jumping, and download management.
* **Target GPA & CGPA Calculator:** Dual-scale calculator supporting both 5.0 and 4.0 grading systems used across African universities, with target setting, semester breakdowns, and historical credit load tracking.

### 🥈 Pillar 2: Campus Marketplace (Commerce & Merchant Storefronts)
* **Peer-to-Peer Campus Trading:** Buy and sell textbooks, scientific calculators, laptops, smartphones, lab coats, clothing, and hostels directly with verified coursemates on your specific campus.
* **Hostel & Off-Campus Accommodation Finder:** Verified campus listings for student apartments, self-con flats, shared lodges, and roommate pairing near university gates.
* **Student Merchant Network:** Dedicated digital storefronts empowering student entrepreneurs, food vendors, bakers, gadget repairers, and fashion designers to accept orders and grow their business.
* **Escrow & Safe Meetup System:** Integrated Paystack payment processing, merchant verification badges, seller reviews, and designated on-campus safe pickup locations.

### 🥉 Pillar 3: Campus Wire & Verified News Feed
* **Verified Campus Journalism:** Real-time breaking updates on academic circulars, exam timetables, admission lists, strike alerts, and faculty notices.
* **Departmental & Faculty Announcements:** Filtered announcements directly relevant to the student’s specific university and department.
* **Campus Culture & Gist:** Student discussions, upvoting, commenting, trending campus topics, and peer-to-peer engagement.

### 🏅 Pillar 4: Student Community & Peer Network
* **Multi-Campus Student Directory:** Search and connect with peers, seniors, and alumni filtered by university, faculty, department, and level (100L–500L).
* **Direct Messaging & Study Groups:** Real-time chat system for peer collaboration, group assignments, and direct buyer-seller inquiries.

---

## 3. Comprehensive Design System & Color Tokens

### Primary Palette
* **Campos Navy (Primary Brand):** `#2B2F53`
  - *RGB:* `rgb(43, 47, 83)`
  - *HSL:* `hsl(234, 32%, 25%)`
  - *Role:* Hero titles, primary buttons, brand navigation bars, primary badges.
* **Midnight Dark (Dark Mode Primary):** `#3A3F5F`
  - *RGB:* `rgb(58, 63, 95)`
  - *HSL:* `hsl(232, 24%, 30%)`
  - *Role:* Primary surface color in dark mode UI.

### Accent & Secondary Palette
* **Electric Blue (Primary Accent):** `#4DA6FF`
  - *Role:* Dark mode links, active indicators, interactive glow effects, focus rings.
* **Royal Blue (Light Mode Accent):** `#007AFF`
  - *Role:* Light mode links, clickable highlights, active tab states.
* **Sky Blue (Action Blue):** `#1DA1F2`
  - *Role:* Secondary CTA buttons, tooltips, verified badge highlights.
* **Emerald Green (Success / Verified):** `#00C853` / `#10B981`
  - *Role:* Verified student badge, passing test scores, available status, success banners.
* **Coral Red (Alert / Urgent):** `#FF6B6B`
  - *Role:* Critical campus alerts, strike notices, deadline warnings, destructive actions.

### Neutral Backgrounds & Surface Hierarchy
* **Light Theme:**
  - Page Canvas: `#FFFFFF`
  - Section Background: `#F8FAFC`
  - Elevated Card Background: `#FFFFFF`
  - Border / Separator: `#E1E8ED` / `#E5E7EB`
  - Text Primary: `#1C2733`
  - Text Secondary (Muted): `#6C757D`
* **Dark Theme:**
  - Page Canvas (OLED Deep): `#111315`
  - Section Background: `#171A1E`
  - Elevated Card Background: `#1C2733`
  - Border / Separator: `#2C3E50` / `#333333`
  - Text Primary: `#E6EEF6`
  - Text Secondary (Muted): `#A0A0A0`

---

## 4. Typography Hierarchy

Campos uses modern, clean typography engineered for high legibility across mobile devices and desktop monitors:

### 1. Primary Sans (Body, Cards, UI Controls)
* **Font Family:** **Poppins** (Google Fonts) or **Krub**
* **Weights:**
  - `Regular (400)`: Reading paragraphs, article text, descriptive labels.
  - `Medium (500)`: Form inputs, navigation menus, metadata tags.
  - `SemiBold (600)`: Feature card titles, pricing labels, section headers.
  - `Bold (700)`: Call-to-action buttons, key statistics, modal headings.

### 2. Modern Editorial & Heading Sans (Hero & Impact Metrics)
* **Font Family:** **Geist** (`geist/font`) or **Inter**
* **Weights:**
  - `SemiBold (600)`, `Bold (700)`, `ExtraBold (800)`
  - *Usage:* Hero title, dynamic value propositions, high-impact marketing callouts.

---

## 5. Tailwind CSS Configuration Snippet (`tailwind.config.ts`)

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        campos: {
          navy: '#2B2F53',
          'navy-dark': '#1C1F38',
          'navy-light': '#3A3F5F',
          accent: '#4DA6FF',
          blue: '#007AFF',
          sky: '#1DA1F2',
          success: '#00C853',
          error: '#FF6B6B',
          dark: {
            bg: '#111315',
            surface: '#171A1E',
            card: '#1C2733',
            border: '#2C3E50',
            text: '#E6EEF6',
            muted: '#A0A0A0',
          },
          light: {
            bg: '#FFFFFF',
            surface: '#F8FAFC',
            card: '#FFFFFF',
            border: '#E1E8ED',
            text: '#1C2733',
            muted: '#6C757D',
          },
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        geist: ['var(--font-geist)', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        btn: '12px',
      },
    },
  },
  plugins: [],
};
export default config;
```

---

## 6. CSS Root Variables (`src/app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-poppins: 'Poppins', sans-serif;
  --font-geist: 'Geist', sans-serif;

  /* Light Theme Defaults */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --surface-card: #FFFFFF;
  --border-color: #E1E8ED;
  --text-primary: #1C2733;
  --text-muted: #6C757D;
  --brand-primary: #2B2F53;
  --brand-accent: #007AFF;
}

.dark {
  /* Dark Theme Defaults */
  --bg-primary: #111315;
  --bg-secondary: #171A1E;
  --surface-card: #1C2733;
  --border-color: #2C3E50;
  --text-primary: #E6EEF6;
  --text-muted: #A0A0A0;
  --brand-primary: #3A3F5F;
  --brand-accent: #4DA6FF;
}
```

---

## 7. Next.js Architecture & Page Blueprint (`campos.africa`)

### Section 1: Navigation Header
* **Logo:** Campos icon (`/assets/images/icon_campos.png`) + Bold "Campos" brandmark.
* **Navigation Links:** Study Hub, Past Questions, CBT Prep, Campus Market, News, Universities.
* **Action CTAs:** Theme toggle (Dark/Light), "Log In", and a prominent **"Launch Web App"** button (`https://app.campos.africa`).

### Section 2: Hero Section (Academics First)
* **Badge:** *"⚡ The All-in-One Campus Super-App for African Students"*
* **Headline:** *"Ace Your Courses. Everything You Need for Campus Life in One App."*
* **Subtitle:** *"Instant past questions, lecture materials, timed CBT practice, campus marketplace, and breaking school news across all universities."*
* **Interactive Element:** Live Course/Material Quick Search bar:
  - Input: *"Search course code (e.g. GST101, MAT111, BIO101, Past Questions)..."*
* **Primary CTAs:**
  - Button 1: **"Start Studying Free"** (links to `app.campos.africa/signup`)
  - Button 2: **"Explore Marketplace"** (links to `app.campos.africa/marketplace`)

### Section 3: Live Stats Counter (Social Proof)
* **Metric 1:** `50,000+` Lecture Materials & Past Questions
* **Metric 2:** `30+` Supported Universities & Colleges
* **Metric 3:** `100,000+` Practice CBT Questions Answered
* **Metric 4:** `₦0` Cost to Join & Download

### Section 4: Pillar 1 Feature Spotlight — The Academic Superpower
* Interactive 3-column layout highlighting:
  1. **Past Questions & Material Engine:** Search, preview in-browser, or download for offline reading.
  2. **Timed CBT Test Simulator:** Exam-condition timers, departmental past questions, and instant analytics.
  3. **Campos AI Academic Partner:** Instant homework assistance, lecture slide summaries, and step-by-step math breakdowns.

### Section 5: Pillar 2 Feature Spotlight — Safe Campus Marketplace
* Visual showcase of student trading:
  - Textbooks & Calculators (handed over at campus library).
  - Gadgets, Laptops & Tech gear.
  - Verified Off-Campus Hostel Listings & Roommate search.
  - Student Entrepreneur badges and digital storefronts.

### Section 6: Pillar 3 & 4 Feature Spotlight — News Wire & Student Community
* Live mock stream of campus circulars, departmental news, exam timetables, and student discussion posts.
* Student directory preview filtered by University, Faculty, and Level.

### Section 7: Interactive University Directory Grid
* Quick clickable cards for leading universities:
  - University of Lagos (UNILAG)
  - University of Benin (UNIBEN)
  - Obafemi Awolowo University (OAU)
  - Ahmadu Bello University (ABU)
  - University of Nigeria Nsukka (UNN)
  - University of Ibadan (UI)
  - *+ 30 more institutions with a "Request Your University" modal.*

### Section 8: Call-to-Action Banner & Footer
* **Headline:** *"Join Thousands of Students Making Campus Life Smarter."*
* **Direct Links:**
  - Launch Web App (`https://app.campos.africa`)
  - Download Mobile App (Google Play / App Store)
* **Footer:**
  - Product links, Campus Ambassador program, Merchant terms, Privacy Policy, Terms of Service.
  - Support contact: `support@campos.africa`.
  - Copyright: *"© 2026 Campos. If it's on campus, it's on Campos."*
