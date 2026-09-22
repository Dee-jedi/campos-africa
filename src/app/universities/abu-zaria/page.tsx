import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "ABU Zaria Past Questions & Academic Resources | Campos Africa",
  description:
    "Find ABU Zaria study materials, past questions, and student resources on Campos Africa, built for smarter academic prep.",
  alternates: {
    canonical: "https://campos.africa/universities/abu-zaria",
  },
};

export default function AbuZariaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900">
      <Navbar />
      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-campos-blue">ABU Zaria</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            ABU Zaria past questions and student learning support
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Campos is designed to help students access important academic materials faster, with relevant resources and study support created for the realities of campus life in Nigeria.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
