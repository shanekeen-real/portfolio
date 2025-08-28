"use client";

import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Maximize2, Calendar, User, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    notFound();
  }

  // Collect all images for lightbox
  const allImages = [
    project.heroImage,
    ...project.research.artifacts,
    ...project.concept.artifacts,
    ...project.iteration.artifacts,
    ...project.finalProduct.artifacts,
  ].filter(Boolean);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const ImageWithLightbox = ({ 
    src, 
    alt, 
    className, 
    width = 800, 
    height = 600,
    index = 0 
  }: {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    index?: number;
  }) => (
    <div className="relative group">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
      <button
        onClick={() => openLightbox(index)}
        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <Maximize2 className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/#projects" passHref>
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section - Clean & Modern */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {project.fullDescription}
                </p>
              </div>

              {/* Scope */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-muted-foreground">Scope</h3>
                <p className="text-sm text-muted-foreground">{project.scope}</p>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="px-3 py-1 text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Role</p>
                    <p className="font-medium">{project.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Timeline</p>
                    <p className="font-medium">{project.timeline}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40 border border-border/50">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-32">
        {/* Overview */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">The Problem</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.problem}
          </p>
        </section>

        {/* Research */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Research</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.research.description}
          </p>
          {project.research.artifacts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              {project.research.artifacts.map((artifact, index) => (
                <Card key={index} className="overflow-hidden border-border/50">
                  <CardContent className="p-0">
                    <ImageWithLightbox
                      src={artifact}
                      alt={`Research artifact ${index + 1}`}
                      className="w-full h-64 object-cover"
                      index={allImages.indexOf(artifact)}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Concept */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Concept</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.concept.description}
          </p>
          {project.concept.artifacts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              {project.concept.artifacts.map((artifact, index) => (
                <Card key={index} className="overflow-hidden border-border/50">
                  <CardContent className="p-0">
                    <ImageWithLightbox
                      src={artifact}
                      alt={`Concept artifact ${index + 1}`}
                      className="w-full h-64 object-cover"
                      index={allImages.indexOf(artifact)}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Iteration */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Iteration</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.iteration.description}
          </p>
          {project.iteration.artifacts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {project.iteration.artifacts.map((artifact, index) => (
                <Card key={index} className="overflow-hidden border-border/50">
                  <CardContent className="p-0">
                    <ImageWithLightbox
                      src={artifact}
                      alt={`Iteration artifact ${index + 1}`}
                      className="w-full h-48 object-cover"
                      index={allImages.indexOf(artifact)}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Final Product */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Final Product</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.finalProduct.description}
          </p>
          {project.finalProduct.artifacts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {project.finalProduct.artifacts.map((artifact, index) => (
                <Card key={index} className="overflow-hidden border-border/50">
                  <CardContent className="p-0">
                    <ImageWithLightbox
                      src={artifact}
                      alt={`Final product artifact ${index + 1}`}
                      className="w-full h-48 object-cover"
                      index={allImages.indexOf(artifact)}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Outcome & Impact */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Outcome & Impact</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.outcome.description}
          </p>
          
          {project.outcome.metrics && project.outcome.metrics.length > 0 && (
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-6">Key Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.outcome.metrics.map((metric, index) => (
                  <Card key={index} className="border-border/50 bg-muted/20">
                    <CardContent className="p-6 text-center">
                      <p className="text-sm text-muted-foreground leading-relaxed">{metric}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="pt-8">
            <h3 className="text-xl font-semibold mb-6">Key Learnings</h3>
            <ul className="space-y-4">
              {project.outcome.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border/50">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <section className="pt-16 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link href="/#projects" passHref>
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to All Projects
              </Button>
            </Link>
            {project.externalLink && (
              <Link href={project.externalLink} target="_blank" passHref>
                <Button className="gap-2">
                  View Live Project
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={allImages.map((src) => ({ src }))}
      />
    </div>
  );
}
