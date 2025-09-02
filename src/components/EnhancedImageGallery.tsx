"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

interface EnhancedImageGalleryProps {
  images: string[];
  alt: string;
  onImageClick?: (index: number) => void;
  showThumbnails?: boolean;
  autoPlay?: boolean;
  interval?: number;
  sectionId: string;
}

export function EnhancedImageGallery({ 
  images, 
  alt, 
  onImageClick,
  showThumbnails = true,
  autoPlay = false,
  interval = 5000,
  sectionId
}: EnhancedImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || !isPlaying) return;

    const timer = setInterval(() => {
      nextImage();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, isPlaying, interval, images.length]);

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative group">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative aspect-video overflow-hidden rounded-xl border border-border/50"
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} ${currentIndex + 1}`}
            fill
            className="object-cover transition-transform duration-500"
            id={`${sectionId}-image-${currentIndex}`}
          />
          
          {/* Enlarge Button - Top Right Corner */}
          <Button
            onClick={() => onImageClick?.(currentIndex)}
            className="absolute top-4 right-4 bg-black/50 hover:bg-primary text-white hover:text-primary-foreground p-2 rounded-md transition-all duration-300 z-10"
            onMouseEnter={() => {
              const image = document.getElementById(`${sectionId}-image-${currentIndex}`);
              if (image) {
                image.style.transform = 'scale(1.05)';
                image.style.transition = 'transform 0.5s ease';
              }
            }}
            onMouseLeave={() => {
              const image = document.getElementById(`${sectionId}-image-${currentIndex}`);
              if (image) {
                image.style.transform = 'scale(1)';
                image.style.transition = 'transform 0.5s ease';
              }
            }}
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      {images.length > 1 && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevImage}
              disabled={currentIndex === 0}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextImage}
              disabled={currentIndex === images.length - 1}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            {autoPlay && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleAutoPlay}
                className="h-8 px-3 text-xs"
              >
                {isPlaying ? (
                  <>
                    <div className="w-2 h-2 bg-current rounded-full mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3 mr-2" />
                    Play
                  </>
                )}
              </Button>
            )}
          </div>
          
          <div className="text-sm text-muted-foreground">
            {currentIndex + 1} of {images.length}
          </div>
        </div>
      )}

      {/* Thumbnails */}
      {showThumbnails && images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative flex-shrink-0 aspect-video w-20 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-primary scale-105"
                  : "border-border/50 hover:border-primary/40 hover:scale-105"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
