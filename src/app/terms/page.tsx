import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { APP_URLS } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Terms of Service | Campos Africa",
  description: "Terms of Service and usage guidelines for the Campos Africa platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900">
      <Navbar />
      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-10 md:p-14 shadow-xs">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-8 transition-colors"
          >
            ← Back to Home
          </Link>

          <h1 className="font-geist text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Terms of Service for Campos
          </h1>

          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            Campos is an educational mobile application developed and operated by{" "}
            <strong className="text-slate-900 font-semibold">Divine Monday</strong>. By accessing or using the Campos app,
            you agree to comply with and be bound by these Terms of Service. Please
            read them carefully before using the app.
          </p>

          {/* Section 1 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            1. Use of the App
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            Campos provides students with educational study materials, a news feed,
            a gamified leaderboard, and a marketplace. You agree to use these
            features responsibly and solely for lawful, educational, and personal
            purposes.
          </p>

          {/* Section 2 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            2. Study Materials (PDFs &amp; PQs)
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            The PDFs and Past Questions (PQs) available in Campos are aggregated
            from publicly available or freely shared educational sources. Campos
            does not claim ownership of these materials and provides them strictly
            for educational purposes.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            If you are a copyright holder and believe your material has been shared
            improperly, please contact us at{" "}
            <a
              href={`mailto:${APP_URLS.supportEmail}`}
              className="text-campos-blue font-medium hover:underline"
            >
              {APP_URLS.supportEmail}
            </a>{" "}
            and the content will be reviewed and removed where appropriate.
          </p>

          {/* Section 3 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            3. Marketplace
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            The Campos marketplace allows users to list accommodations, products,
            and services. Campos does not verify, endorse, or guarantee the
            accuracy, quality, or safety of listings. All transactions occur
            directly between buyers and sellers.
          </p>

          {/* Section 4 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            4. Payments &amp; Merchants
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            Users who choose to operate as merchants may be required to pay
            applicable fees. All payments are securely processed through{" "}
            <a
              href="https://paystack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-campos-blue font-medium hover:underline"
            >
              Paystack
            </a>
            . Campos does not collect or store payment card details. Payment
            disputes, chargebacks, and refunds are governed by Paystack’s policies.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            By becoming a merchant, you agree to provide accurate information and
            acknowledge that Campos is not responsible for payment processing
            errors, delivery issues, or disputes between merchants and buyers.
          </p>

          {/* Section 5 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            5. User Conduct
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            You agree not to misuse Campos by posting or sharing harmful, illegal,
            misleading, or inappropriate content. Campos reserves the right to
            suspend or terminate accounts that violate these Terms.
          </p>

          {/* Section 6 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            6. Privacy
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            Your use of Campos is governed by our{" "}
            <Link href="/privacy" className="text-campos-blue font-medium hover:underline">
              Privacy Policy
            </Link>
            , which explains how user data is collected, used, and protected.
          </p>

          {/* Section 7 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            7. Disclaimer of Liability
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            Campos is provided on an “as is” and “as available” basis. We make no
            warranties regarding accuracy, reliability, or availability. Use of the
            app is at your own risk.
          </p>

          {/* Section 8 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            8. Changes to These Terms
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            These Terms may be updated from time to time. Continued use of Campos
            after updates constitutes acceptance of the revised Terms.
          </p>

          {/* Section 9 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            9. Contact Us
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            If you have questions about these Terms of Service, contact us at{" "}
            <a
              href={`mailto:${APP_URLS.supportEmail}`}
              className="text-campos-blue font-medium hover:underline"
            >
              {APP_URLS.supportEmail}
            </a>
            .
          </p>

          <p className="mt-10 pt-6 border-t border-slate-100 text-slate-400 text-xs sm:text-sm">
            Last updated: March 2025
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
