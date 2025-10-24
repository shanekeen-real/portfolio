"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

interface SmartImageGalleryProps {
  images: string[];
  alt: string;
  onImageClick?: (index: number) => void;
  showThumbnails?: boolean;
  autoPlay?: boolean;
  interval?: number;
  sectionId: string;
  imageType?: 'app' | 'interface' | 'desktop' | 'auto';
}

export function SmartImageGallery({ 
  images, 
  alt, 
  onImageClick,
  showThumbnails = true,
  autoPlay = false,
  interval = 5000,
  sectionId,
  imageType = 'auto'
}: SmartImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [imageDimensions, setImageDimensions] = useState<{width: number, height: number}[]>([]);

  // Detect image dimensions
  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions = await Promise.all(
        images.map((src) => {
          return new Promise<{width: number, height: number}>((resolve) => {
            const img = new window.Image();
            img.onload = () => {
              resolve({ width: img.naturalWidth, height: img.naturalHeight });
            };
            img.onerror = () => {
              resolve({ width: 800, height: 600 }); // fallback
            };
            img.src = src;
          });
        })
      );
      setImageDimensions(dimensions);
    };

    loadImageDimensions();
  }, [images]);

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

  // Determine if current image is portrait or small
  const currentImageDim = imageDimensions[currentIndex];
  const isPortrait = currentImageDim && currentImageDim.height > currentImageDim.width;
  const isSmallImage = currentImageDim && (currentImageDim.width < 800 || currentImageDim.height < 600);
  
  // Determine container styling based on image type and dimensions
  const getContainerClass = () => {
    if (imageType === 'app' || (imageType === 'auto' && isPortrait)) {
      return "relative max-w-md mx-auto aspect-[3/4] overflow-hidden rounded-xl border border-border/50 bg-muted/20";
    } else if (imageType === 'interface' || (imageType === 'auto' && isSmallImage)) {
      return "relative max-w-2xl mx-auto aspect-video overflow-hidden rounded-xl border border-border/50 bg-muted/20";
    } else {
      return "relative aspect-video overflow-hidden rounded-xl border border-border/50";
    }
  };

  const getImageClass = () => {
    if (imageType === 'app' || (imageType === 'auto' && isPortrait)) {
      return "object-contain transition-transform duration-500";
    } else if (imageType === 'interface' || (imageType === 'auto' && isSmallImage)) {
      return "object-contain transition-transform duration-500";
    } else {
      return "object-cover transition-transform duration-500";
    }
  };

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
          className={getContainerClass()}
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} ${currentIndex + 1}`}
            fill
            className={getImageClass()}
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
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevImage}
              className="p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextImage}
              className="p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Auto-play toggle */}
          {autoPlay && (
            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoPlay}
              className="flex items-center space-x-2"
            >
              <Play className={`h-4 w-4 ${isPlaying ? 'animate-pulse' : ''}`} />
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </Button>
          )}
        </div>
      )}

      {/* Thumbnails */}
      {showThumbnails && images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex 
                  ? 'border-primary ring-2 ring-primary/20' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <Image
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
