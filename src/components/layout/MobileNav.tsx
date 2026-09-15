"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/data/navigation";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  // Prevent body scrolling when the drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Full-screen backdrop blur behind the drawer */}
      <div
        className={`fixed inset-0 bg-slate-950/40 backdrop-blur-md z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Full-height, straight-sided ~70% screen width mobile drawer (z-55, under the z-60 hamburger) */}
      <div
        className={`fixed top-0 right-0 bottom-0 h-dvh w-[75vw] sm:w-[65vw] max-w-85 bg-white rounded-none shadow-2xl border-l border-slate-200 z-55 transition-transform duration-300 ease-out flex flex-col justify-between p-6 sm:p-7 overflow-y-auto ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div>
          {/* Top Header inside drawer (pr-12 leaves space for the z-60 button sitting in the top right) */}
          <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100 pr-12 min-h-11">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-xs">
                <Image
                  src="/images/icon.png"
                  alt="Campos icon"
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <span className="font-geist text-xl font-bold text-campos-navy tracking-tight">
                Campos
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col py-2 gap-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold text-slate-800 hover:text-slate-950 hover:bg-slate-100/80 transition-colors"
              >
                <span>{link.label}</span>
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom CTA Area */}
        <div className="pt-6 border-t border-slate-100 flex flex-col gap-2.5">
          <Link
            href="/get-app"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-[1.05rem] shadow-xl shadow-slate-900/15 active:scale-[0.98] transition-all"
          >
            <span>Get App</span>
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/web-app"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 text-slate-800 font-bold text-[1.05rem] shadow-xs active:scale-[0.98] transition-all group"
          >
            <span>Launch Web App</span>
            <svg
              className="w-4 h-4 ml-1 text-campos-blue transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
          </Link>
          <p className="text-[11px] text-center text-slate-400 font-medium mt-1">
            &quot;If it&apos;s on campus, it&apos;s on Campos.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};
