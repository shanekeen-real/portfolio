"use client";

import { LoadingExamples } from "@/components/LoadingExamples";

export default function TestLoadingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Loading Animation Test Page</h1>
        <p className="text-center text-muted-foreground mb-12">
          This page demonstrates all the loading animation variants using our beautiful CSS-based cube grid animation
        </p>
        
        <LoadingExamples />
      </div>
    </div>
  );
}
