import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "UNILAG Past Questions, Notes & Student App | Campos Africa",
  description:
    "Access UNILAG past questions, lecture materials, study notes, and student tools with Campos Africa, built for Nigerian university students.",
  alternates: {
    canonical: "https://campos.africa/universities/unilag",
  },
};

export default function UnilagPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900">
      <Navbar />
      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-campos-blue">UNILAG</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            UNILAG past questions, lecture notes, and campus study support
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Campos is built for students who want quick access to reliable study materials, past questions,
            and academic resources that help them prepare better for exams. For UNILAG students, this means
            faster access to the materials they need, without wasting time searching across multiple sites.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">Study resources</h2>
              <p className="mt-2 text-slate-600">Find past questions, lecture material, and academic support tailored for UNILAG courses.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">Campus life tools</h2>
              <p className="mt-2 text-slate-600">Use student-first tools to stay organized, study smarter, and manage campus tasks in one place.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
