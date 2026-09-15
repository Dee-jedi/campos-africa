"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS, APP_URLS } from "@/data/navigation";
import { MobileNav } from "./MobileNav";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track whether page is scrolled past the top
      setScrolled(currentScrollY > 15);

      // Always show at the top of the page
      if (currentScrollY <= 20) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "shadow-[0_4px_16px_-4px_rgba(15,23,42,0.09)]" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-xs shadow-campos-navy/10 group-hover:scale-105 transition-transform">
              <Image
                src="/images/icon.png"
                alt="Campos Africa logo"
                fill
                priority
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="font-geist text-xl sm:text-2xl font-semibold sm:font-bold tracking-tight text-campos-navy">
              Campos
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 text-slate-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-2 rounded-full text-[15px] font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition-all duration-200 flex items-center gap-1.5 group"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-blue-50 text-campos-blue border border-blue-100/80 group-hover:border-blue-200 transition-colors">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Spacer */}
          <div className="flex items-center gap-3">
            {/* Desktop Launch App CTA with deep slate authority and blue rocket ship accent */}
            <a
              href={APP_URLS.webApp}
              className="hidden lg:inline-flex group items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-black text-white text-[15px] font-semibold tracking-wide transition-all duration-200 shadow-md shadow-slate-900/15 hover:shadow-lg active:scale-[0.98] whitespace-nowrap"
            >
              <span>Launch App</span>
              {/* Rocket Ship Icon with subtle electric blue brand accent */}
              <svg
                className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </a>

            {/* Mobile spacer reserving header space for the fixed hamburger button */}
            <div className="w-11 h-11 lg:hidden" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* 
        Single Animated Hamburger / X Button
        Slides out of view in sync with the header when scrolling down, reappears when scrolling up,
        and stays visible whenever the mobile menu is open.
      */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`lg:hidden fixed top-3.5 sm:top-4.5 right-4 sm:right-6 w-11 h-11 rounded-full bg-white/95 hover:bg-slate-100/95 border border-slate-200/90 active:scale-95 transition-all duration-300 flex flex-col items-center justify-center gap-1.25 focus:outline-none z-60 shadow-xs cursor-pointer ${
          isVisible || mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobileMenuOpen}
      >
        <span
          className={`h-[2.5px] rounded-full bg-slate-800 transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "w-5 translate-y-[3.75px] rotate-45"
              : "w-5"
          }`}
        />
        <span
          className={`h-[2.5px] rounded-full bg-slate-800 transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "w-5 translate-y-[-3.75px] -rotate-45"
              : "w-3.5 -translate-x-0.75"
          }`}
        />
      </button>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

