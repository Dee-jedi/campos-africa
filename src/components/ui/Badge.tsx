import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "blue" | "accent" | "emerald" | "amber" | "outline" | "slate";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "blue",
  size = "md",
  className = "",
}) => {
  const variantStyles = {
    primary: "bg-campos-navy/10 text-campos-navy border border-campos-navy/20",
    blue: "bg-blue-50 text-campos-blue border border-blue-100",
    accent: "bg-sky-50 text-sky-700 border border-sky-200",
    emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    amber: "bg-amber-50 text-amber-800 border border-amber-200",
    outline: "bg-white text-slate-700 border border-slate-200",
    slate: "bg-slate-100 text-slate-700 border border-slate-200",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-medium rounded-full",
    md: "px-3.5 py-1 text-xs sm:text-sm font-semibold rounded-full",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
