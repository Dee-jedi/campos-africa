import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { APP_URLS } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Privacy Policy | Campos Africa",
  description: "Learn how Campos collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
            Privacy Policy for Campos
          </h1>

          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            Campos is an educational mobile application developed and operated by{" "}
            <strong className="text-slate-900 font-semibold">Divine Monday</strong>. Your privacy is important to us. This
            Privacy Policy explains how Campos collects, uses, and protects your
            information when you use the Campos app and related services.
          </p>

          {/* Section 1 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside mt-3 text-slate-600 space-y-2 text-sm sm:text-base leading-relaxed">
            <li>
              <strong className="text-slate-800 font-semibold">Account Information:</strong> Name, email address, and profile
              picture (including Google Sign-In data if you choose that option).
            </li>
            <li>
              <strong className="text-slate-800 font-semibold">Study Materials:</strong> Download and access activity for
              PDFs and Past Questions (PQs).
            </li>
            <li>
              <strong className="text-slate-800 font-semibold">Marketplace Data:</strong> Listing details such as
              descriptions, prices, and images uploaded by users.
            </li>
            <li>
              <strong className="text-slate-800 font-semibold">Leaderboard &amp; Gamification:</strong> Progress data including
              study streaks, quiz scores, and achievements.
            </li>
            <li>
              <strong className="text-slate-800 font-semibold">Payments:</strong> If you act as a merchant, payment
              processing is handled securely by Paystack. Campos does not collect or
              store card details.
            </li>
            <li>
              <strong className="text-slate-800 font-semibold">Device &amp; Usage Data:</strong> App version, device type, and
              general usage analytics for performance and security.
            </li>
          </ul>

          {/* Section 2 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside mt-3 text-slate-600 space-y-2 text-sm sm:text-base leading-relaxed">
            <li>Provide access to educational materials (PDFs and PQs).</li>
            <li>Authenticate and manage user accounts via Firebase.</li>
            <li>Operate leaderboards and gamified study features.</li>
            <li>Display and manage marketplace listings.</li>
            <li>Process merchant payments securely through Paystack.</li>
            <li>Send notifications and updates (only if you opt in).</li>
            <li>Improve app performance, security, and reliability.</li>
          </ul>

          {/* Section 3 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            3. Sharing of Information
          </h2>
          <ul className="list-disc list-inside mt-3 text-slate-600 space-y-2 text-sm sm:text-base leading-relaxed">
            <li>
              With trusted third-party services (such as Firebase and Paystack)
              strictly to operate and maintain Campos.
            </li>
            <li>When required by law or valid legal processes.</li>
            <li>
              To protect the rights, safety, and security of users and the app.
            </li>
          </ul>

          {/* Section 4 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            4. Study Materials Disclaimer
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            PDFs and Past Questions (PQs) are aggregated from publicly available or
            freely shared educational sources and are provided for learning purposes
            only. If you are a rights holder and wish to request content removal,
            please contact us at{" "}
            <a
              href={`mailto:${APP_URLS.supportEmail}`}
              className="text-campos-blue font-medium hover:underline"
            >
              {APP_URLS.supportEmail}
            </a>
            .
          </p>

          {/* Section 5 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            5. Data Storage and Security
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            Campos uses Firebase Authentication, Firestore, and Cloud Storage to
            manage user data. Payments are processed securely by Paystack. While
            reasonable security measures are in place, no system can be guaranteed
            to be completely secure.
          </p>

          {/* Section 6 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            6. Account Deletion
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            Campos allows users to request deletion of their account and associated
            data at any time. Visit our{" "}
            <Link href="/account" className="text-campos-blue font-medium hover:underline">
              Account Deletion page
            </Link>{" "}
            for instructions on permanently removing your Campos account.
          </p>

          {/* Section 7 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            7. Changes to This Policy
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            This Privacy Policy may be updated from time to time. Continued use of
            Campos after updates means you accept the revised policy.
          </p>

          {/* Section 8 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            8. Contact Us
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            If you have questions about this Privacy Policy or data practices,
            contact us at{" "}
            <a
              href={`mailto:${APP_URLS.supportEmail}`}
              className="text-campos-blue font-medium hover:underline"
            >
              {APP_URLS.supportEmail}
            </a>
            .
          </p>

          {/* Section 9 */}
          <h2 className="mt-8 text-lg sm:text-xl font-bold text-slate-900">
            9. Camera Access
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            The Campos app may request access to your device’s camera for features
            such as uploading profile pictures or marketplace images. Camera access
            is optional and can be revoked at any time via your device settings.
            Images are not shared with third parties without user action.
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
