import React from "react";
import Image from "next/image";

interface PhoneMockupProps {
  imageSrc: string;
  alt: string;
  priority?: boolean;
  floatingBadge?: {
    icon?: string;
    text: string;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  };
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  imageSrc,
  alt,
  priority = false,
  floatingBadge,
  className = "",
  size = "md",
}) => {
  const sizeMap = {
    sm: "w-[205px] sm:w-[230px] md:w-[250px]",
    md: "w-[215px] sm:w-[250px] lg:w-[280px]",
    lg: "w-[225px] sm:w-[265px] lg:w-[305px]",
  };

  const badgePositions = {
    "top-left": "top-10 sm:top-16 -left-2 sm:-left-5 md:-left-7",
    "top-right": "top-10 sm:top-16 -right-2 sm:-right-5 md:-right-7",
    "bottom-left": "bottom-8 sm:bottom-12 -left-2 sm:-left-5 md:-left-7",
    "bottom-right": "bottom-8 sm:bottom-12 -right-2 sm:-right-5 md:-right-7",
  };

  return (
    <div className={`relative mx-auto shrink-0 ${sizeMap[size]} ${className}`}>
      {/* Ambient device glow effect */}
      <div className="absolute -inset-2 sm:-inset-4 bg-linear-to-tr from-campos-navy/15 via-campos-accent/20 to-campos-blue/15 rounded-[44px] sm:rounded-[60px] blur-xl sm:blur-2xl -z-10 opacity-50 sm:opacity-70" />

      {/* Phone chassis */}
      <div className="relative rounded-[36px] sm:rounded-[44px] md:rounded-[48px] p-[2.5px] sm:p-0.75 bg-linear-to-b from-slate-700 via-slate-850 to-slate-950 shadow-xl sm:shadow-2xl shadow-slate-950/30">
        <div className="relative rounded-[33px] sm:rounded-[41px] md:rounded-[45px] border-[5px] sm:border-[7px] md:border-8 border-slate-950 bg-white overflow-hidden flex flex-col">
          {/* Integrated Status Bar Safe Area Header */}
          <div className="relative h-7 sm:h-8 md:h-9 w-full bg-white flex items-center justify-between px-4 sm:px-5 md:px-6 shrink-0 select-none z-20 border-b border-slate-50">
            {/* Clock */}
            <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-slate-800 tracking-tight">
              9:41
            </span>

            {/* Dynamic Island Notch (Housed inside safe area so it NEVER covers app UI) */}
            <div className="w-16 sm:w-20 md:w-22 h-3.5 sm:h-4 md:h-4.5 bg-black rounded-full flex items-center justify-end px-1.5 sm:px-2 shadow-xs">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-blue-950" />
              </div>
            </div>

            {/* Cellular, Wifi & Battery Status Icons */}
            <div className="flex items-center gap-1 sm:gap-1.5 text-slate-800 scale-90 sm:scale-100">
              {/* Cellular */}
              <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M2 17h3v4H2v-4zm5-4h3v8H7v-8zm5-4h3v12h-3V9zm5-5h3v17h-3V4z" />
              </svg>
              {/* Wifi */}
              <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 3.5c3.78 0 7.22 1.48 9.77 3.93L12 18.57 2.23 11.43C4.78 8.98 8.22 7.5 12 7.5z" />
              </svg>
              {/* Battery */}
              <div className="w-4 sm:w-5 h-2 sm:h-2.5 border border-slate-800 rounded-[2.5px] sm:rounded-[3px] p-px flex items-center">
                <div className="h-full w-2.5 sm:w-3.5 bg-slate-800 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Screenshot Container (Starts safely below status bar, exactly matching aspect ratio) */}
          <div className="relative w-full aspect-1080/2260 bg-white overflow-hidden">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              priority={priority}
              quality={95}
              sizes="(max-width: 640px) 230px, (max-width: 1024px) 280px, 305px"
              className="object-cover object-top select-none"
            />

            {/* Glass reflection gloss */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-white/4 via-transparent to-white/6 z-10" />
          </div>

          {/* Home indicator bar (subtle safe area buffer) */}
          <div className="h-3 sm:h-3.5 md:h-4 w-full bg-white flex items-center justify-center shrink-0 select-none border-t border-slate-50">
            <div className="w-20 sm:w-24 md:w-28 h-0.5 sm:h-1 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating Badge (positioned gracefully beside phone) */}
      {floatingBadge && (
        <div
          className={`absolute ${badgePositions[floatingBadge.position || "top-right"]} z-30 animate-bounce-gentle`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md shadow-lg sm:shadow-xl border border-slate-200/80 text-[11px] sm:text-xs md:text-sm font-bold text-slate-800 whitespace-nowrap">
            {floatingBadge.icon && <span className="text-xs sm:text-base">{floatingBadge.icon}</span>}
            <span>{floatingBadge.text}</span>
          </div>
        </div>
      )}
    </div>
  );
};
