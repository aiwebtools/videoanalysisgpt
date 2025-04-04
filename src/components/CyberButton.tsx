import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CyberButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "default" | "accent1" | "accent2" | "accent3";
  size?: "default" | "sm" | "lg";
  className?: string;
  onClick?: () => void;
}

const CyberButton = ({
  children,
  href,
  variant = "default",
  size = "default",
  className,
  onClick
}: CyberButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "accent1":
        return "bg-cyber-accent1 bg-opacity-80 hover:bg-opacity-100 text-cyber-bg shadow-neon-pink";
      case "accent2":
        return "bg-cyber-accent2 bg-opacity-80 hover:bg-opacity-100 text-cyber-bg shadow-neon";
      case "accent3":
        return "bg-cyber-accent3 bg-opacity-80 hover:bg-opacity-100 text-cyber-bg shadow-neon-yellow";
      default:
        return "bg-cyber-dark text-black border-cyber-accent2 border-opacity-30";
    }
  };
  
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-xs py-1 px-3";
      case "lg":
        return "text-lg py-3 px-8";
      default:
        return "text-sm py-2 px-6";
    }
  };
  
  const buttonClasses = cn(
    "cyber-button font-bold relative overflow-hidden rounded-md transition-all duration-300",
    getVariantClasses(),
    getSizeClasses(),
    className
  );
  
  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default CyberButton;
