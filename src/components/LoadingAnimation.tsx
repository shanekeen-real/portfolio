"use client";

import { motion } from "framer-motion";

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "white" | "black";
  className?: string;
  showText?: boolean;
  text?: string;
}

export function LoadingAnimation({ 
  size = "md", 
  color = "primary", 
  className = "",
  showText = false,
  text = "Loading..."
}: LoadingAnimationProps) {
  // Size mappings
  const sizeMap = {
    sm: "w-6 h-6",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  // Color mappings
  const colorMap = {
    primary: "text-primary",
    secondary: "text-secondary", 
    white: "text-white",
    black: "text-black"
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Animation Container */}
      <div className={`${sizeMap[size]} ${colorMap[color]} flex items-center justify-center`}>
        {/* CSS Cube Grid Animation */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1">
            {Array.from({ length: 9 }).map((_, index) => (
              <motion.div
                key={index}
                className="w-full h-full bg-current rounded-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Loading Text */}
      {showText && (
        <motion.p 
          className={`mt-4 text-sm font-medium ${colorMap[color]} text-center`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Variant components for common use cases
export function LoadingSpinner({ size = "md", className = "" }: { 
  size?: "sm" | "md" | "lg" | "xl", 
  className?: string
}) {
  return <LoadingAnimation size={size} className={className} />;
}

export function LoadingWithText({ text = "Loading...", size = "md", className = "" }: { 
  text?: string, 
  size?: "sm" | "md" | "lg" | "xl", 
  className?: string
}) {
  return <LoadingAnimation size={size} showText={true} text={text} className={className} />;
}

export function LoadingButton({ text = "Loading...", className = "" }: { 
  text?: string, 
  className?: string
}) {
  return <LoadingAnimation size="sm" showText={true} text={text} className={className} />;
}

export function LoadingPage({ text = "Loading page...", className = "" }: { 
  text?: string, 
  className?: string
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingAnimation size="xl" showText={true} text={text} className={className} />
    </div>
  );
}

// Specialized loading components
export function LoadingCard({ className = "" }: { 
  className?: string
}) {
  return (
    <div className={`p-8 rounded-lg border border-border/50 bg-card ${className}`}>
      <LoadingAnimation size="lg" />
    </div>
  );
}

export function LoadingInline({ size = "sm", className = "" }: { 
  size?: "sm" | "md" | "lg" | "xl", 
  className?: string
}) {
  return <LoadingAnimation size={size} className={`inline-flex ${className}`} />;
}
