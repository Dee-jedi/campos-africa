import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "University Study Materials & Past Questions | Campos Africa",
  description:
    "Find campus study materials, past questions, lecture notes, and student tools for top Nigerian universities on Campos Africa.",
  alternates: {
    canonical: "https://campos.africa/universities",
  },
};

const universities = [
  { slug: "unilag", name: "UNILAG", description: "Past questions, lecture notes, and student resources for UNILAG students." },
  { slug: "uniben", name: "UNIBEN", description: "Academic support, materials, and campus tools for UNIBEN students." },
  { slug: "oau", name: "OAU", description: "Study materials and exam prep resources for OAU students." },
  { slug: "ui-ibadan", name: "UI Ibadan", description: "Course materials, study notes, and student app support for UI Ibadan." },
  { slug: "lasu", name: "LASU", description: "Lecture notes and past question support for LASU students." },
  { slug: "abu-zaria", name: "ABU Zaria", description: "Academic support and university resources for ABU students." },
];

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900">
      <Navbar />
      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-campos-blue">Universities</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              Past questions, notes, and student tools for Nigerian universities
            </h1>
            <p className="mt-4 max-w-3xl text-base text-slate-600">
              Campos helps students stay on top of their academics with study materials, past questions,
              lecture resources, and campus tools tailored to their university and course needs.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {universities.map((item) => (
              <Link
                key={item.slug}
                href={`/universities/${item.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-campos-blue/30 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{item.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                  <span className="text-lg text-campos-blue transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
