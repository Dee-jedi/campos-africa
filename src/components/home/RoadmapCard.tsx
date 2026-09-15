import React from "react";
import { RoadmapStep } from "@/data/roadmapSteps";

interface RoadmapCardProps {
  step: RoadmapStep;
}

export const RoadmapCard: React.FC<RoadmapCardProps> = ({ step }) => {
  return (
    <div className="relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_32px_-6px_rgba(15,23,42,0.1)] hover:-translate-y-0.5 hover:border-slate-300 transition-all duration-300">
      {/* Top Row: Icon + Micro Pill */}
      <div className="flex items-center justify-between gap-2.5 mb-2 sm:mb-2.5">
        <div
          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 ${step.iconBg} shadow-xs group-hover:scale-105 transition-transform duration-300`}
        >
          {step.icon}
        </div>

        {/* Micro Pill Badge */}
        <span className="text-[9.5px] sm:text-[11px] font-bold tracking-wider uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200">
          {step.pill}
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="font-geist text-[14.5px] sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-campos-blue transition-colors">
        {step.title}
      </h3>
      <p className="text-[12px] sm:text-sm text-slate-500 leading-normal sm:leading-relaxed font-normal mt-1">
        {step.description}
      </p>
    </div>
  );
};
