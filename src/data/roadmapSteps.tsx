import React from "react";

export interface RoadmapStep {
  step: string;
  title: string;
  description: string;
  pill: string;
  themeColor: string;
  nodeBorder: string;
  nodeGlow: string;
  iconBg: string;
  gradientToNext?: string;
  icon: React.ReactNode;
}

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    step: "01",
    title: "Course Materials",
    description:
      "Verified past questions, slides, and syllabus packs for all academic levels — download once and study offline.",
    pill: "PDFs / PQs",
    themeColor: "text-blue-600",
    nodeBorder: "border-blue-400",
    nodeGlow: "shadow-[0_0_8px_rgba(59,130,246,0.18)]",
    iconBg: "bg-blue-50 text-blue-600 border border-blue-100",
    gradientToNext: "linear-gradient(to bottom, rgba(59, 130, 246, 0.45), rgba(139, 92, 246, 0.45))",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "In-Document AI Academic Tutor",
    description:
      "Lives inside your course slides to summarize dense PDFs into revision notes and explain tough formulas on demand.",
    pill: "Instant AI",
    themeColor: "text-violet-600",
    nodeBorder: "border-violet-400",
    nodeGlow: "shadow-[0_0_8px_rgba(139,92,246,0.18)]",
    iconBg: "bg-violet-50 text-violet-600 border border-violet-100",
    gradientToNext: "linear-gradient(to bottom, rgba(139, 92, 246, 0.45), rgba(16, 185, 129, 0.45))",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Campos Marketplace",
    description:
      "Find student products, verified campus lodges, and vendors. Student entrepreneurs can easily set up storefronts and list items.",
    pill: "Trade & Lodges",
    themeColor: "text-emerald-600",
    nodeBorder: "border-emerald-400",
    nodeGlow: "shadow-[0_0_8px_rgba(16,185,129,0.18)]",
    iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    gradientToNext: "linear-gradient(to bottom, rgba(16, 185, 129, 0.45), rgba(245, 158, 11, 0.45))",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Study Streaks & Cash Prizes",
    description:
      "Build daily study streaks, climb campus rankings, and win real weekly cash rewards sent directly to your account.",
    pill: "Cash Rewards",
    themeColor: "text-amber-600",
    nodeBorder: "border-amber-400",
    nodeGlow: "shadow-[0_0_8px_rgba(245,158,11,0.18)]",
    iconBg: "bg-amber-50 text-amber-600 border border-amber-100",
    gradientToNext: "linear-gradient(to bottom, rgba(245, 158, 11, 0.45), rgba(244, 63, 94, 0.45))",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "My Library",
    description:
      "Organize your downloaded PDFs into custom folders, sort by course code or semester, and keep your study desk clutter-free.",
    pill: "Folders & Sorting",
    themeColor: "text-rose-600",
    nodeBorder: "border-rose-400",
    nodeGlow: "shadow-[0_0_8px_rgba(244,63,94,0.18)]",
    iconBg: "bg-rose-50 text-rose-600 border border-rose-100",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
];
