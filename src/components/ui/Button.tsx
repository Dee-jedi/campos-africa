import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "blue" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  href,
  target,
  rel,
  children,
  icon,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-btn transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles = {
    primary:
      "bg-campos-navy hover:bg-campos-navy-dark text-white shadow-md shadow-campos-navy/20 hover:shadow-lg focus:ring-campos-navy",
    blue:
      "bg-campos-blue hover:bg-blue-600 text-white shadow-md shadow-blue-500/20 hover:shadow-lg focus:ring-campos-blue",
    secondary:
      "bg-slate-100 hover:bg-slate-200 text-slate-800 focus:ring-slate-400",
    outline:
      "bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm focus:ring-slate-400",
    white:
      "bg-white hover:bg-slate-100 text-campos-navy shadow-md hover:shadow-lg focus:ring-white",
    ghost:
      "bg-transparent hover:bg-slate-100 text-slate-700 focus:ring-slate-300",
  };

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs sm:text-sm min-h-[38px] gap-1.5",
    md: "px-5 py-2.5 sm:py-3 text-sm sm:text-base min-h-[44px] gap-2",
    lg: "px-7 py-3.5 sm:py-4 text-base sm:text-lg min-h-[50px] gap-2.5",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
