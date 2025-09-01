"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  onClick?: () => void;
  href?: string;
  target?: string;
}

export function MagneticButton({ 
  children, 
  className, 
  variant = "default",
  size = "default",
  onClick,
  href,
  target
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) * 0.1;
    const y = (e.clientY - centerY) * 0.1;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonContent = (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className={cn("transition-all duration-200 hover:scale-105", className)}
    >
      {children}
    </Button>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
      }}
      className="inline-block"
    >
      {href ? (
        <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
          {buttonContent}
        </a>
      ) : (
        buttonContent
      )}
    </motion.div>
  );
}
