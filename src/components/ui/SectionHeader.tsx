import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badgeText?: string;
  badgeVariant?: "primary" | "blue" | "accent" | "emerald" | "amber" | "outline";
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeVariant = "blue",
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignmentClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {badgeText && (
        <div className="mb-4">
          <Badge variant={badgeVariant}>{badgeText}</Badge>
        </div>
      )}
      <h2 className="font-geist text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-campos-navy leading-[1.15] mb-4 sm:mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
