"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/LoadingAnimation";
import { ExternalLink } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";
import { Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const { resolvedTheme } = useTheme();
  const tiltRef = useTilt({
    max: 2,
    scale: 1.01,
    speed: 1000,
    glare: false,
  });

  const handleCaseStudyClick = () => {
    setIsNavigating(true);
  };

  return (
    <motion.div
      ref={tiltRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className={cn(
        "overflow-hidden transition-all duration-300 border-border/50 hover:border-primary/60 hover:bg-muted/20",
        resolvedTheme === 'dark' ? "hover:shadow-lg" : ""
      )}>
        <CardHeader className="p-0">
          <Link href={`/projects/${project.slug}`} passHref>
            <div className="relative overflow-hidden">
              {/* Loading Animation */}
              {!imageLoaded && (
                <div className="aspect-video w-full flex items-center justify-center bg-muted/20">
                  <LoadingSpinner size="lg" />
                </div>
              )}
              
              {/* Project Image */}
              {project.coverImage.endsWith(".webm") ? (
                <video
                  src={project.coverImage}
                  autoPlay
                  loop
                  muted
                  className={cn(
                    "aspect-video h-full w-full bg-primary object-cover transition-transform duration-500",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                />
              ) : (
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={600}
                  height={300}
                  quality={100}
                  onLoad={() => setImageLoaded(true)}
                  className={cn(
                    "aspect-video h-full w-full bg-primary object-cover transition-transform duration-500",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                />
              )}
              

            </div>
          </Link>
        </CardHeader>
        
        <CardContent className="p-6">
          <CardTitle className="text-lg font-semibold tracking-tight mb-3">
            {project.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {project.shortDescription}
          </p>
          
          <div className="flex items-center justify-between">
            <Link href={`/projects/${project.slug}`} passHref onClick={handleCaseStudyClick}>
              <Button 
                variant="outline" 
                className="transition-all duration-200"
                disabled={isNavigating}
              >
                {isNavigating ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span className="ml-2">Loading...</span>
                  </>
                ) : (
                  "View Case Study"
                )}
              </Button>
            </Link>
            
            {project.externalLink && (
              <Link href={project.externalLink} target="_blank" passHref>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
