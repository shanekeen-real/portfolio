"use client";

import { LoadingAnimation, LoadingSpinner, LoadingWithText, LoadingButton, LoadingPage, LoadingCard, LoadingInline } from "./LoadingAnimation";

// This file demonstrates how to use the LoadingAnimation component throughout your portfolio
// The component now uses a beautiful CSS-based cube grid animation

export function LoadingExamples() {
  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold">Loading Animation Examples</h2>
      
      {/* Basic Loading Spinner */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Loading Spinner</h3>
        <div className="flex gap-4">
          <LoadingSpinner size="sm" />
          <LoadingSpinner size="md" />
          <LoadingSpinner size="lg" />
          <LoadingSpinner size="xl" />
        </div>
      </div>

      {/* Loading with Text */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Loading with Text</h3>
        <div className="flex gap-4">
          <LoadingWithText text="Loading data..." size="sm" />
          <LoadingWithText text="Processing..." size="md" />
          <LoadingWithText text="Please wait..." size="lg" />
        </div>
      </div>

      {/* Loading Button */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Loading Button</h3>
        <LoadingButton text="Submitting..." />
      </div>

      {/* Loading Card */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Loading Card</h3>
        <LoadingCard />
      </div>

      {/* Inline Loading */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Inline Loading</h3>
        <p className="text-muted-foreground">
          Loading your content <LoadingInline size="sm" /> please wait...
        </p>
      </div>

      {/* Different Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Different Colors</h3>
        <div className="flex gap-4">
          <LoadingSpinner size="md" />
          <LoadingSpinner size="md" />
          <LoadingSpinner size="md" />
          <LoadingSpinner size="md" />
        </div>
      </div>

      {/* Animation Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Animation Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border border-border/50 bg-card">
            <h4 className="font-semibold mb-2">Cube Grid Pattern</h4>
            <p className="text-sm text-muted-foreground">
              3x3 grid of animated cubes with staggered timing for smooth wave effect
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border/50 bg-card">
            <h4 className="font-semibold mb-2">Smooth Transitions</h4>
            <p className="text-sm text-muted-foreground">
              Each cube animates opacity and scale with 1.5s duration and 0.1s delays
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border/50 bg-card">
            <h4 className="font-semibold mb-2">Performance Optimized</h4>
            <p className="text-sm text-muted-foreground">
              Pure CSS animations with Framer Motion for smooth 60fps performance
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border/50 bg-card">
            <h4 className="font-semibold mb-2">Theme Aware</h4>
            <p className="text-sm text-muted-foreground">
              Automatically adapts to your color scheme (primary, secondary, white, black)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Usage examples for different scenarios:

// 1. In ProjectCard when image is loading:
export function ProjectCardLoading() {
  return (
    <div className="aspect-video w-full flex items-center justify-center">
      <LoadingSpinner size="lg" />
    </div>
  );
}

// 2. In buttons when submitting forms:
export function SubmitButton({ isLoading, children }: { isLoading: boolean, children: React.ReactNode }) {
  return (
    <button 
      className="px-4 py-2 bg-primary text-primary-foreground rounded-md disabled:opacity-50"
      disabled={isLoading}
    >
      {isLoading ? <LoadingInline size="sm" /> : children}
    </button>
  );
}

// 3. In EnhancedImageGallery when switching images:
export function ImageGalleryLoading() {
  return (
    <div className="aspect-video w-full flex items-center justify-center">
      <LoadingSpinner size="md" />
    </div>
  );
}

// 4. In case study pages when loading content:
export function CaseStudyLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingWithText text="Loading case study..." size="xl" />
    </div>
  );
}

// 5. In navigation when loading new pages:
export function NavigationLoading() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <LoadingWithText text="Loading page..." size="lg" />
    </div>
  );
}
