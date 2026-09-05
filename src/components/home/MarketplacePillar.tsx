import React from "react";
import { MARKETPLACE_FEATURES } from "@/data/pillars";
import { APP_URLS } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export const MarketplacePillar: React.FC = () => {
  return (
    <section id="marketplace" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-100 relative">
      <Container>
        <SectionHeader
          badgeText="🥈 Pillar 2 • Campus Commerce"
          badgeVariant="emerald"
          title="Buy, Sell & Find Hostels Safely on Your Campus"
          subtitle="Trade textbooks, gadgets, tech gear with verified coursemates, find student accommodation near school gates, and support student entrepreneurs."
        />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-slate-200/80 shadow-sm mb-12">
          {/* Left Column: Phone Mockup with Marketplace */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
            <PhoneMockup
              imageSrc="/images/marketplace.jpeg"
              alt="Campos Marketplace screen showing student vendor items and prices"
              size="md"
              floatingBadge={{
                icon: "🛍️",
                text: "Verified Campus Handover",
                position: "top-right",
              }}
            />
          </div>

          {/* Right Column: Key Details */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
              Safe & Trusted Student Commerce
            </span>

            <h3 className="font-geist text-2xl sm:text-3xl md:text-4xl font-extrabold text-campos-navy mb-4 leading-tight">
              Trade With Real Students, Not Anonymous Strangers
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
              Need a 100L Chemistry lab coat or a clean scientific calculator? Selling your past-year textbooks or looking for a roommate in a self-con flat near campus? Campos connects verified students for safe, on-campus exchange.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  🤝
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-800">Campus Pickup Locations</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Designated exchange spots like campus libraries and faculty quads ensure zero scams.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-campos-blue flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  🏪
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-800">Free Digital Storefronts for Student Hustlers</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Bakers, gadget repairers, fashion designers, and barbers list products free and get orders from campus peers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  🏠
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-800">Direct Hostel & Roommate Pairing</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Browse verified lodges near school gates and split rent with compatible coursemates.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button
                variant="primary"
                size="md"
                href={APP_URLS.marketplace}
                className="w-full sm:w-auto"
              >
                Explore Campus Market
              </Button>
              <Button
                variant="outline"
                size="md"
                href={`${APP_URLS.marketplace}?tab=vendor`}
                className="w-full sm:w-auto"
              >
                Become a Student Vendor
              </Button>
            </div>
          </div>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MARKETPLACE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl mb-4">
                {feature.icon}
              </div>
              <h4 className="font-geist text-lg font-bold text-campos-navy mb-2">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              <ul className="space-y-1.5 text-xs text-slate-500">
                {feature.benefits.slice(0, 2).map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
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
