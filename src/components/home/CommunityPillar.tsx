import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { APP_URLS } from "@/data/navigation";

export const CommunityPillar: React.FC = () => {
  return (
    <section id="news" className="py-16 sm:py-24 bg-white relative">
      <Container>
        <SectionHeader
          badgeText="🥉 Pillars 3 & 4 • News & Community"
          badgeVariant="amber"
          title="Verified Campus News & Real Monthly Cash Prizes"
          subtitle="Stay informed with authentic circulars and exam notices. Plus, compete on the study leaderboard to win cash prizes sent straight to your account."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Card 1: Campus Wire & Gist with blog.jpeg */}
          <div className="bg-gradient-to-br from-amber-50/40 via-slate-50 to-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-4">
                📰 Campus Wire & Student Gist
              </div>
              <h3 className="font-geist text-xl sm:text-2xl font-bold text-campos-navy mb-3">
                Real-Time Breaking Circulars & Authentic News
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-8 leading-relaxed">
                Filter breaking notices, academic memos, strike alerts, and timetable shifts strictly for your university and faculty. Connect with coursemates on trending campus discussions.
              </p>
            </div>

            <div className="flex justify-center my-4">
              <PhoneMockup
                imageSrc="/images/blog.jpeg"
                alt="Campos Campus Gist feed screenshot showing student post and prize proof"
                size="sm"
                floatingBadge={{
                  icon: "💬",
                  text: "Real Student Community Feed",
                  position: "top-right",
                }}
              />
            </div>

            <div className="pt-6 border-t border-slate-200/60 mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-500">Verified student journalism</span>
              <a
                href={APP_URLS.webApp}
                className="text-xs sm:text-sm font-bold text-campos-navy hover:text-campos-blue flex items-center gap-1"
              >
                Read Campus Wire &rarr;
              </a>
            </div>
          </div>

          {/* Card 2: Leaderboard with leaderboard.jpeg */}
          <div className="bg-gradient-to-br from-blue-50/40 via-slate-50 to-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-campos-blue text-xs font-bold mb-4">
                🏆 Study Streaks & Cash Payouts
              </div>
              <h3 className="font-geist text-xl sm:text-2xl font-bold text-campos-navy mb-3">
                Study Daily, Top The Leaderboard, Win Real Prizes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-8 leading-relaxed">
                Campos pays active students! Maintain daily study streaks, solve past questions, and finish in the monthly Top 3 to receive cash rewards paid directly to your account.
              </p>
            </div>

            <div className="flex justify-center my-4">
              <PhoneMockup
                imageSrc="/images/leaderboard.jpeg"
                alt="Campos Leaderboard rankings screen showing student positions and prizes"
                size="sm"
                floatingBadge={{
                  icon: "₦",
                  text: "Monthly Cash Winner Payouts",
                  position: "top-left",
                }}
              />
            </div>

            <div className="pt-6 border-t border-slate-200/60 mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-500">Active monthly prize cycle</span>
              <Button
                variant="blue"
                size="sm"
                href={APP_URLS.webApp}
              >
                Join Leaderboard
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
