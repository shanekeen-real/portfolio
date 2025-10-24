"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingAnimation } from "./LoadingAnimation";

interface SplashScreenProps {
  onComplete: () => void;
  isReturning?: boolean;
}

export function SplashScreen({ onComplete, isReturning = false }: SplashScreenProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(isReturning ? "Returning to homepage..." : "Initializing...");

  useEffect(() => {
    const loadAssets = async () => {
      const steps = isReturning ? [
        { progress: 30, text: "Reloading assets..." },
        { progress: 60, text: "Preparing 3D scene..." },
        { progress: 80, text: "Optimizing content..." },
        { progress: 100, text: "Ready!" }
      ] : [
        { progress: 20, text: "Loading assets..." },
        { progress: 40, text: "Preparing 3D scene..." },
        { progress: 60, text: "Optimizing images..." },
        { progress: 80, text: "Finalizing experience..." },
        { progress: 100, text: "Ready!" }
      ];

      // Preload critical images
      const preloadImages = async () => {
        const imageUrls = [
          '/assets/scene.splinecode', // Spline scene
          // Add other critical images here
        ];

        const imagePromises = imageUrls.map(url => {
          return new Promise((resolve, reject) => {
            if (url.endsWith('.splinecode')) {
              // For Spline scenes, just resolve after a delay
              setTimeout(resolve, 1000);
            } else {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = url;
            }
          });
        });

        try {
          await Promise.all(imagePromises);
        } catch (error) {
          console.warn('Some assets failed to preload:', error);
        }
      };

      // Start preloading
      void preloadImages();

      for (const step of steps) {
        setLoadingProgress(step.progress);
        setLoadingText(step.text);
        
        // Simulate asset loading time (faster for returning users)
        await new Promise(resolve => setTimeout(resolve, isReturning ? 200 : 300));
      }

      // Additional delay for smooth transition (shorter for returning users)
      await new Promise(resolve => setTimeout(resolve, isReturning ? 300 : 500));
      onComplete();
    };

    void loadAssets();
  }, [onComplete, isReturning]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="text-center space-y-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-gradient clash-grotesk">
              shane
            </h1>
            <p className="text-muted-foreground mt-2">
              UI/UX Designer & Developer
            </p>
          </motion.div>

          {/* Loading Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <LoadingAnimation size="lg" />
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="w-64 mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <motion.p
              className="text-sm text-muted-foreground mt-2"
              key={loadingText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {loadingText}
            </motion.p>
          </motion.div>

          {/* Loading Percentage */}
          <motion.div
            className="text-2xl font-semibold text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {loadingProgress}%
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
