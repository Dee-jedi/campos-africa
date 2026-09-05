"use client";

import React, { useState } from "react";
import { ACADEMIC_FEATURES } from "@/data/pillars";
import { APP_URLS } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export const AcademicPillar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ai" | "materials">("ai");

  return (
    <section id="what-we-offer" className="py-16 sm:py-24 bg-white relative scroll-mt-20">
      <Container>
        <SectionHeader
          badgeText="🥇 Pillar 1 • Academic Superpower"
          badgeVariant="blue"
          title="Ace Your Exams With Instant Notes & AI Prep"
          subtitle="Everything you need to boost your CGPA: 50,000+ lecture slides, past question archives with solutions, timed CBT practice, and 24/7 AI tutor."
        />

        {/* Interactive Tab Switcher for Mobile & Desktop */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80">
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "ai"
                  ? "bg-white text-campos-navy shadow-sm"
                  : "text-slate-600 hover:text-campos-navy"
              }`}
            >
              ✨ Campos AI Tutor
            </button>
            <button
              onClick={() => setActiveTab("materials")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "materials"
                  ? "bg-white text-campos-navy shadow-sm"
                  : "text-slate-600 hover:text-campos-navy"
              }`}
            >
              📚 Materials Bank & PQs
            </button>
          </div>
        </div>

        {/* Feature Spotlight Card */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50/20 to-white rounded-3xl p-6 sm:p-10 md:p-14 border border-slate-200/80 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Visual Device Mockup */}
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              {activeTab === "ai" ? (
                <PhoneMockup
                  imageSrc="/images/ai-chat.jpeg"
                  alt="Campos AI Academic Chatbot summarizing lecture notes"
                  size="md"
                  floatingBadge={{
                    icon: "✨",
                    text: "Summarizes 50-page PDFs in seconds",
                    position: "top-left",
                  }}
                />
              ) : (
                <PhoneMockup
                  imageSrc="/images/materials-bank.jpeg"
                  alt="Campos Material Bank repository showing past questions"
                  size="md"
                  floatingBadge={{
                    icon: "📥",
                    text: "One-Click Offline PDF Download",
                    position: "top-right",
                  }}
                />
              )}
            </div>

            {/* Feature Description & Benefits */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-campos-blue mb-2">
                {activeTab === "ai" ? "24/7 Intelligent Study Companion" : "Organized By Faculty & Department"}
              </span>

              <h3 className="font-geist text-2xl sm:text-3xl md:text-4xl font-extrabold text-campos-navy mb-4 leading-tight">
                {activeTab === "ai"
                  ? "Turn Complex Lecture Handouts into Clear Answers"
                  : "Download 100L through 500L Past Questions & Slides"}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                {activeTab === "ai"
                  ? "Don't get stuck studying alone at midnight. Ask Campos AI to break down complex medical, engineering, or legal concepts, provide step-by-step math solutions, and generate customized mock practice tests."
                  : "Say goodbye to scattered WhatsApp groups and missing handouts. Browse verified past questions with worked solutions, lecture slides, and departmental course packs from your university."}
              </p>

              {/* Benefit Bullets */}
              <ul className="space-y-3 mb-8">
                {(activeTab === "ai" ? ACADEMIC_FEATURES[1] : ACADEMIC_FEATURES[0]).benefits.map(
                  (benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-campos-blue flex items-center justify-center font-bold text-xs">
                        ✓
                      </span>
                      <span>{benefit}</span>
                    </li>
                  )
                )}
              </ul>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Button
                  variant="blue"
                  size="md"
                  href={APP_URLS.studyHub}
                  className="w-full sm:w-auto"
                >
                  {activeTab === "ai" ? "Chat with Campos AI" : "Browse Materials Library"}
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href={APP_URLS.cbtSimulator}
                  className="w-full sm:w-auto"
                >
                  Try Timed CBT Exam
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Academic Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {ACADEMIC_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-campos-blue flex items-center justify-center text-2xl mb-5 shadow-xs">
                  {feature.icon}
                </div>
                <h4 className="font-geist text-lg sm:text-xl font-bold text-campos-navy mb-2">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>
              <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-500">
                {feature.benefits.slice(0, 2).map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="text-campos-blue font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
