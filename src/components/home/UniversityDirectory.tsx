"use client";

import React, { useState } from "react";
import { UNIVERSITIES } from "@/data/universities";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export const UniversityDirectory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filteredUnis = UNIVERSITIES.filter(
    (uni) =>
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (schoolName.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSchoolName("");
        setUserEmail("");
        setModalOpen(false);
      }, 2500);
    }
  };

  return (
    <section id="universities" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-100">
      <Container>
        <SectionHeader
          badgeText="🎓 Multi-Campus Coverage"
          badgeVariant="primary"
          title="Built For Students Across Major African Institutions"
          subtitle="Materials, past questions, student marketplaces, and verified circulars tailored specifically to your university and department."
        />

        {/* Search & Request Bar */}
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3 mb-10 sm:mb-12">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by university (e.g. UNILAG, UNIBEN, OAU, UNILORIN)..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-campos-blue/30 shadow-sm"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <Button
            variant="outline"
            size="md"
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto whitespace-nowrap"
          >
            + Request University
          </Button>
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredUnis.map((uni) => (
            <div
              key={uni.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-geist text-lg sm:text-xl font-black text-campos-navy">
                    {uni.shortName}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-campos-blue border border-blue-100">
                    {uni.state}, {uni.country}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-800 line-clamp-1 mb-2">
                  {uni.name}
                </h4>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {uni.popularCourses.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium text-slate-600"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{uni.studentCount}</span>
                <a
                  href={`https://app.campos.africa/study?uni=${uni.id}`}
                  className="font-bold text-campos-blue hover:text-blue-700 transition-colors"
                >
                  View Hub &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredUnis.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-sm mb-4">
              Can&apos;t find your institution in the directory?
            </p>
            <Button variant="primary" size="md" onClick={() => setModalOpen(true)}>
              Request Your University
            </Button>
          </div>
        )}

        {/* Request University Modal */}
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Request Your University on Campos"
          description="We are rapidly expanding across African institutions. Let us know which university you would like prioritized!"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
                ✓
              </div>
              <h4 className="font-geist text-xl font-bold text-campos-navy mb-2">
                Request Received!
              </h4>
              <p className="text-sm text-slate-500">
                Thank you! We have added <span className="font-bold text-slate-800">{schoolName}</span> to our onboarding queue.
              </p>
            </div>
          ) : (
            <form onSubmit={handleRequestSubmit} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  University / College Name *
                </label>
                <input
                  type="text"
                  required
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  placeholder="e.g. University of Port Harcourt (UNIPORT)"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-campos-blue/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Student Email (Optional)
                </label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="student@institution.edu.ng"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-campos-blue/30"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  We&apos;ll notify you as soon as materials for your school are uploaded.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="md"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="md">
                  Submit Request
                </Button>
              </div>
            </form>
          )}
        </Modal>
      </Container>
    </section>
  );
};
