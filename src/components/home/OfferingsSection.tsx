"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { APP_URLS } from "@/data/navigation";

interface AppScreen {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const APP_SCREENS: AppScreen[] = [
  {
    id: "materials",
    title: "Materials Bank",
    imageSrc: "/images/materials-bank.jpeg",
    imageAlt: "Campos App Materials Bank & Past Questions",
  },
  {
    id: "marketplace",
    title: "Marketplace",
    imageSrc: "/images/marketplace.jpeg",
    imageAlt: "Campos App Campus Marketplace & Hostels",
  },
  {
    id: "leaderboard",
    title: "Leaderboard",
    imageSrc: "/images/leaderboard.jpeg",
    imageAlt: "Campos App Study Leaderboard & Cash Prizes",
  },
  {
    id: "wire",
    title: "Campus Wire",
    imageSrc: "/images/blog.jpeg",
    imageAlt: "Campos App Campus Wire & Circulars",
  },
  {
    id: "homescreen",
    title: "Home Feed",
    imageSrc: "/images/homescreen.jpeg",
    imageAlt: "Campos App Home Feed",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1,
  }),
  center: {
    x: "0%",
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 1,
    zIndex: 0,
  }),
};

export const OfferingsSection: React.FC = () => {
  const [[currentIndex, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalScreens = APP_SCREENS.length;

  const paginate = (newDirection: number) => {
    setPage(([prevIndex]) => {
      const nextIndex = (prevIndex + newDirection + totalScreens) % totalScreens;
      return [nextIndex, newDirection];
    });
  };

  // Preload all 5 screens on mount for instant, flicker-free, retina-sharp transitions
  useEffect(() => {
    APP_SCREENS.forEach((screen) => {
      const img = new window.Image();
      img.src = screen.imageSrc;
    });
  }, []);

  // Auto-swipe every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      setIsPaused(true);
      if (diff > 0) {
        paginate(1); // Swiped left -> next
      } else {
        paginate(-1); // Swiped right -> prev
      }
    }
    touchStartX.current = null;
  };

  const currentScreen = APP_SCREENS[currentIndex];

  return (
    <section
      id="what-we-offer"
      className="py-16 sm:py-24 md:py-32 bg-white relative scroll-mt-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        {/* ======================================================== */}
        {/* SECTION HEADER (Pure Typographic Dual-Tone Authority)     */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          {/* Dual-Color Section Title (Slate-500 + Slate-900) */}
          <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.12]">
            <span className="text-slate-500 font-semibold sm:font-bold">Inside the</span>{" "}
            <span className="text-slate-900">Campos App</span>
          </h2>

          {/* Crisp 1-line Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 mt-3 font-normal max-w-lg mx-auto leading-relaxed">
            Everything you need for academic excellence, safe campus trade, and verified updates in one pocket-sized hub.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* ULTRA-SLEEK SMARTPHONE SHOWCASE (Razor-Thin Obsidian Bezel)*/}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-71.25 sm:max-w-78.75 md:max-w-83.75 mx-auto"
        >
          {/* Soft Floating Shadow under the phone */}
          <div className="absolute -inset-1 bg-slate-900/20 rounded-[2.8rem] blur-xl -z-10" />

          {/* Precision 1px Light Shimmer Edge Wrapper */}
          <div className="relative p-[1.5px] rounded-[2.6rem] sm:rounded-[2.8rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)] bg-slate-900">
            {/* Subtle traveling light glint on the 1.5px border */}
            <div
              className="absolute inset-[-150%] pointer-events-none opacity-50"
              style={{
                background:
                  "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 320deg, rgba(255, 255, 255, 0.9) 345deg, transparent 360deg)",
                animation: "spin 9s linear infinite",
              }}
            />

            {/* Hardware Chassis: Ultra-Thin Precision Midnight Rim (Just 3px bezel) */}
            <div
              className="relative rounded-[2.5rem] sm:rounded-[2.7rem] p-[3.5px] sm:p-1 bg-slate-950 border border-slate-800 touch-pan-y z-10"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Discrete Speaker Slit in Top Bezel (Off the screen) */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-[2.5px] bg-slate-800 rounded-full z-20 pointer-events-none" />

              {/* Edge-to-Edge Screen Display (Clean, Uncropped Native Proportions) */}
              <div className="relative w-full aspect-1080/2255 rounded-[2.2rem] sm:rounded-[2.4rem] overflow-hidden bg-slate-900 shadow-inner">
                {/* Static fallback: always shows the current image so there's never a black frame */}
                <Image
                  src={currentScreen.imageSrc}
                  alt=""
                  fill
                  priority
                  quality={95}
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 670px"
                  aria-hidden="true"
                />

                {/* Animated slide layer on top */}
                <AnimatePresence initial={false} custom={direction} mode="sync">
                  <motion.div
                    key={currentScreen.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                    }}
                    className="absolute inset-0 w-full h-full"
                    style={{ willChange: "transform" }}
                  >
                    <Image
                      src={currentScreen.imageSrc}
                      alt={currentScreen.imageAlt}
                      fill
                      priority
                      quality={95}
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 670px"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Ultra-subtle Glass Specular Reflection */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/2 to-white/6 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Navigation Chevron Buttons (Positioned gracefully outside the phone) */}
          <button
            onClick={() => {
              setIsPaused(true);
              paginate(-1);
            }}
            aria-label="Previous screen"
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white hover:shadow-lg border border-slate-200/90 text-slate-700 shadow-md flex items-center justify-center active:scale-95 transition-all z-20 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => {
              setIsPaused(true);
              paginate(1);
            }}
            aria-label="Next screen"
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white hover:shadow-lg border border-slate-200/90 text-slate-700 shadow-md flex items-center justify-center active:scale-95 transition-all z-20 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* ======================================================== */}
        {/* SLEEK BOTTOM INDICATOR BAR (Matching Reference)          */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-71.25 sm:max-w-78.75 md:max-w-83.75 mx-auto mt-7 sm:mt-8 px-1 flex items-center justify-between"
        >
          {/* Left: 01 ───── 05 */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 tracking-wider">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>

            {/* Dynamic Electric Blue Progress Line */}
            <div className="w-16 sm:w-20 h-0.5 bg-slate-200 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-campos-blue rounded-full"
                animate={{
                  width: `${((currentIndex + 1) / totalScreens) * 100}%`,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>

            <span className="font-mono text-xs sm:text-sm font-medium text-slate-400 tracking-wider">
              {String(totalScreens).padStart(2, "0")}
            </span>
          </div>

          {/* Right: GO TO APP → with Brand Blue Accent */}
          <a
            href={APP_URLS.webApp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-widest uppercase text-slate-900 hover:text-campos-blue transition-colors shrink-0"
          >
            <span>Go to App</span>
            <svg
              className="w-3.5 h-3.5 text-campos-blue transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
