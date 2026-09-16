import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://campos.africa";
const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

export const metadata: Metadata = {
  // ───────────────────────── Core ─────────────────────────
  title: {
    default: "Campos — If it's on campus, it's on Campos",
    template: "%s | Campos Africa",
  },
  description:
    "Your campus, simplified. Campos brings everything a university student needs into one place — lecture materials and past questions at your fingertips, a marketplace where you buy and sell safely with fellow students, AI-powered study tools that actually get your course, and a leaderboard where studying hard wins you real cash. If it's on campus, it's on Campos.",
  applicationName: "Campos",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "Campos Africa",
  publisher: "Campos Africa",
  metadataBase: new URL(SITE_URL),

  // ───────────────────────── Keywords ─────────────────────────
  // Broad product + university-specific long-tail terms so African
  // students find Campos regardless of how they phrase their search.
  keywords: [
    // Brand
    "Campos",
    "Campos Africa",
    "Campos app",
    "campos.africa",

    // Core features
    "past questions Nigeria",
    "CBT practice app",
    "CBT exam simulator",
    "university lecture materials",
    "lecture notes download",
    "campus marketplace",
    "student marketplace Nigeria",
    "buy and sell on campus",
    "campus hostel finder",
    "student accommodation",
    "study leaderboard cash prizes",
    "AI academic tutor",
    "CGPA calculator",
    "campus news",

    // Nigerian universities (high-search-volume)
    "UNILAG past questions",
    "UNIBEN lecture materials",
    "OAU past questions",
    "UNN past questions",
    "UI Ibadan materials",
    "ABU Zaria past questions",
    "LASU lecture notes",
    "FUTA past questions",
    "UNIPORT lecture materials",
    "UNILORIN past questions",
    "FUTO past questions",
    "DELSU materials",
    "BUK lecture notes",
    "OOU past questions",
    "FUNAAB lecture materials",
    "EKSU past questions",
    "UNIUYO past questions",
    "RSU lecture notes",
    "AKSU past questions",
    "FUTIA past questions",

    // Category terms
    "African university app",
    "Nigerian student app",
    "edtech Africa",
    "study app Nigeria",
    "university student app",
    "e-learning Africa",
    "campus life app",
    "student community app",
  ],

  // ───────────────────────── Favicons & Touch Icons ─────────────────────────
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "512x512", type: "image/png" },
    ],
  },

  // ───────────────────────── Open Graph (Facebook, WhatsApp, LinkedIn) ─────────────────────────
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: "Campos Africa",
    title: "Campos — If it's on campus, it's on Campos",
    description:
      "Your campus, simplified. Study materials, past questions, a safe marketplace, AI study tools, and a leaderboard where hard work pays real cash — all in one app built for African university students.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Campos — The #1 academic & lifestyle super-app for African university students",
        type: "image/jpeg",
      },
    ],
  },

  // ───────────────────────── Twitter / X Card ─────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Campos — If it's on campus, it's on Campos",
    description:
      "Your campus, simplified. Study materials, past questions, a safe marketplace, and a leaderboard where studying hard wins you real cash. Built for African university students.",
    images: [OG_IMAGE],
    creator: "@campos_app",
    site: "@campos_app",
  },

  // ───────────────────────── Robots & Crawlability ─────────────────────────
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ───────────────────────── Alternates & Canonical ─────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ───────────────────────── App Links ─────────────────────────
  appLinks: {
    web: {
      url: SITE_URL,
      should_fallback: true,
    },
  },

  // ───────────────────────── Verification (add IDs when registered) ─────────────────────────
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_ID",
  // },

  // ───────────────────────── Category ─────────────────────────
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${geist.variable} h-full antialiased`}>
      <head>
        {/* Structured Data: Organization + WebSite + SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Campos Africa",
                  url: SITE_URL,
                  logo: `${SITE_URL}/images/icon.png`,
                  sameAs: [
                    "https://instagram.com/campos.app",
                    "https://tiktok.com/@camposapp1",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "support@campos.africa",
                    contactType: "customer support",
                    availableLanguage: "English",
                  },
                },
                {
                  "@type": "WebSite",
                  name: "Campos Africa",
                  url: SITE_URL,
                  description:
                    "The #1 academic & lifestyle super-app for African university students.",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${SITE_URL}/search?q={search_term_string}`,
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Campos",
                  operatingSystem: "Android",
                  applicationCategory: "EducationalApplication",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "NGN",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.5",
                    ratingCount: "500",
                    bestRating: "5",
                    worstRating: "1",
                  },
                  downloadUrl:
                    "https://play.google.com/store/apps/details?id=com.divthedev.elearn",
                  screenshot: `${SITE_URL}/images/homescreen.jpeg`,
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
