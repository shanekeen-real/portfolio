"use client";

import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Maximize2, Calendar, User, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";

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
        className="absolute top-4 right-4 bg-black/50 hover:bg-primary text-white hover:text-primary-foreground p-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        onMouseEnter={(e) => {
          const image = e.currentTarget.previousElementSibling as HTMLElement;
          if (image) {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.5s ease';
          }
        }}
        onMouseLeave={(e) => {
          const image = e.currentTarget.previousElementSibling as HTMLElement;
          if (image) {
            image.style.transform = 'scale(1)';
          }
        }}
      >
        <Maximize2 className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Hero Section - Enhanced Typography & Spacing */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <motion.div 
              className="space-y-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                  <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
                    ✨ {project.subtitle}
                  </span>
                </motion.div>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {project.fullDescription}
                </p>
              </motion.div>

              {/* Scope */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <h3 className="text-lg font-semibold text-muted-foreground">Scope</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{project.scope}</p>
              </motion.div>

              {/* Tools */}
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="transition border border-input bg-background flex items-center text-xs px-2.5 py-1.5 rounded-full hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </motion.div>

              {/* Project Meta */}
              <motion.div 
                className="flex items-center gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="font-medium text-base">{project.timeline}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections - Enhanced Typography & Spacing */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-40">
        {/* Overview */}
        <motion.section 
          id="problem"
          className="space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold tracking-tight">The Problem</h2>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {project.problem}
          </motion.p>
        </motion.section>

        {/* Research */}
        <motion.section 
          id="research"
          className="space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold tracking-tight">Research</h2>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {project.research.description}
          </motion.p>
          {project.research.artifacts.length > 0 && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {project.research.artifacts.map((artifact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                >
                  <Card className="overflow-hidden border-border/50 hover:border-border/80 transition-all duration-300 hover:bg-muted/20">
                    <CardContent className="p-0">
                      <ImageWithLightbox
                        src={artifact}
                        alt={`Research artifact ${index + 1}`}
                        className="w-full h-64 object-cover"
                        index={allImages.indexOf(artifact)}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.section>

        {/* Concept */}
        <motion.section 
          id="concept"
          className="space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold tracking-tight">Concept</h2>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {project.concept.description}
          </motion.p>
          {project.concept.artifacts.length > 0 && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {project.concept.artifacts.map((artifact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                >
                  <Card className="overflow-hidden border-border/50 hover:border-border/80 transition-all duration-300 hover:bg-muted/20">
                    <CardContent className="p-0">
                      <ImageWithLightbox
                        src={artifact}
                        alt={`Concept artifact ${index + 1}`}
                        className="w-full h-64 object-cover"
                        index={allImages.indexOf(artifact)}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.section>

        {/* Iteration */}
        <motion.section 
          id="iteration"
          className="space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold tracking-tight">Iteration</h2>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {project.iteration.description}
          </motion.p>
          {project.iteration.artifacts.length > 0 && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {project.iteration.artifacts.map((artifact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                >
                  <Card className="overflow-hidden border-border/50 hover:border-border/80 transition-all duration-300 hover:bg-muted/20">
                    <CardContent className="p-0">
                      <ImageWithLightbox
                        src={artifact}
                        alt={`Iteration artifact ${index + 1}`}
                        className="w-full h-48 object-cover"
                        index={allImages.indexOf(artifact)}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.section>

        {/* Final Product */}
        <motion.section 
          id="final-product"
          className="space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold tracking-tight">Final Product</h2>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {project.finalProduct.description}
          </motion.p>
          {project.finalProduct.artifacts.length > 0 && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {project.finalProduct.artifacts.map((artifact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                >
                  <Card className="overflow-hidden border-border/50 hover:border-border/80 transition-all duration-300 hover:bg-muted/20">
                    <CardContent className="p-0">
                      <ImageWithLightbox
                        src={artifact}
                        alt={`Final product artifact ${index + 1}`}
                        className="w-full h-48 object-cover"
                        index={allImages.indexOf(artifact)}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.section>

        {/* Outcome & Impact */}
        <motion.section 
          id="outcome"
          className="space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold tracking-tight">Outcome & Impact</h2>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {project.outcome.description}
          </motion.p>
          
          {project.outcome.metrics && project.outcome.metrics.length > 0 && (
            <motion.div 
              className="pt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                Key Metrics
              </motion.h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              >
                {project.outcome.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                  >
                    <Card className="border-border/50 bg-muted/20 hover:bg-muted/30 transition-all duration-300 hover:border-border/80">
                      <CardContent className="p-8 text-center">
                        <p className="text-base text-muted-foreground leading-relaxed">{metric}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          <motion.div 
            className="pt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Key Learnings
            </motion.h3>
            <motion.ul 
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            >
              {project.outcome.learnings.map((learning, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-6 p-6 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/40 hover:border-border/80 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                >
                  <div className="w-3 h-3 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <span className="text-base text-muted-foreground leading-relaxed">{learning}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.section>

        {/* Navigation */}
        <motion.section 
          className="pt-20 border-t border-border/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="flex flex-col sm:flex-row justify-end items-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {project.externalLink && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <Link href={project.externalLink} target="_blank" passHref>
                  <Button className="gap-3 px-6 py-3 hover:bg-primary/90 transition-all duration-200">
                    View Live Project
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.section>
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
