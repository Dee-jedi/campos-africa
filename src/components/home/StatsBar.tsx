"use client";

import React, { useState, useEffect, useRef } from "react";
import { STATS } from "@/data/stats";
import { Container } from "@/components/ui/Container";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * (2 - progress) * end)); // ease out quad
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

const StatItem = ({ stat }: { stat: typeof STATS[0] }) => {
  const { count, ref } = useCountUp(stat.value, 2000);
  
  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className={`font-geist text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter ${stat.accentColor || "text-campos-navy"}`}>
        {stat.prefix}{count.toLocaleString()}{stat.suffix}
      </span>
      <span className="text-sm sm:text-base font-bold text-slate-800 mt-2 line-clamp-1">
        {stat.label}
      </span>
      {stat.sublabel && (
        <span className="text-xs sm:text-sm text-slate-500 mt-1 max-w-[200px] hidden sm:block">
          {stat.sublabel}
        </span>
      )}
    </div>
  );
};

export const StatsBar: React.FC = () => {
  return (
    <section id="why-us" className="border-y border-slate-100 bg-slate-50/70 py-12 sm:py-16 scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
};
