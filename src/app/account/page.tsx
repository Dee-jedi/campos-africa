import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { APP_URLS } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Account Deletion | Campos Africa",
  description: "Instructions for requesting account deletion and data removal on Campos.",
};

export default function AccountPage() {
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
            Account Deletion for Campos
          </h1>

          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            Campos is an educational mobile application developed and operated by{" "}
            <strong className="text-slate-900 font-semibold">Divine Monday</strong>. We respect your right to control your
            personal data. If you choose to stop using Campos, you may request
            permanent deletion of your account and associated data.
          </p>

          {/* Section 1 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            1. How to Request Account Deletion
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            Currently, Campos account deletion requests are handled via email.
            Please send your request from the email address associated with your
            Campos account to:
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            <span className="mr-2">📧</span>
            <a
              href={`mailto:${APP_URLS.supportEmail}`}
              className="text-campos-blue font-medium hover:underline"
            >
              {APP_URLS.supportEmail}
            </a>
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            In your email, please include:
          </p>
          <ul className="list-disc list-inside mt-3 text-slate-600 space-y-2 text-sm sm:text-base leading-relaxed">
            <li>Your full name</li>
            <li>The email address linked to your Campos account</li>
            <li>A clear request for account deletion</li>
          </ul>

          {/* Section 2 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            2. What Happens After Deletion
          </h2>
          <ul className="list-disc list-inside mt-3 text-slate-600 space-y-2 text-sm sm:text-base leading-relaxed">
            <li>
              Your Campos account and personal data will be permanently deleted from
              our systems within 7 days after verification.
            </li>
            <li>
              Study progress, marketplace listings, and saved data will be removed.
            </li>
            <li>
              Campos does not retain personal data after deletion unless required by
              applicable law.
            </li>
          </ul>

          {/* Section 3 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            3. Need Help?
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            If you need confirmation or assistance regarding your deletion request,
            please contact us at{" "}
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
