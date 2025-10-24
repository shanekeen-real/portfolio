"use client";

import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Maximize2, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CustomLightbox } from "@/components/CustomLightbox";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { EnhancedImageGallery } from "@/components/EnhancedImageGallery";
import { SmartImageGallery } from "@/components/SmartImageGallery";
import { LoadingPage } from "@/components/LoadingAnimation";
import { BeforeAfterImageComparison } from "@/components/BeforeAfterImageComparison";
import { PasswordProtection } from "@/components/PasswordProtection";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  // Collect all images for lightbox
  const allImages = [
    project.heroImage,
    ...project.research.artifacts,
    // Include concept artifacts and parts
    ...project.concept.artifacts,
    ...(project.concept.parts?.flatMap(part => part.artifacts) ?? []),
    // Include iteration artifacts and parts
    ...project.iteration.artifacts,
    ...(project.iteration.parts?.flatMap(part => part.artifacts) ?? []),
    ...project.finalProduct.artifacts,
  ].filter(Boolean);

  const [isLoading, setIsLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [sectionImages, setSectionImages] = useState<string[]>(allImages);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Move all useTransform calls to the top level
  const parallaxRight = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxLeft = useTransform(scrollYProgress, [0, 1], [0, 80]);
  
  useEffect(() => {
    // Simulate a brief loading state for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index: number, sectionImages?: string[]) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    // If section-specific images are provided, use those instead of all images
    if (sectionImages) {
      setSectionImages(sectionImages);
    } else {
      setSectionImages(allImages);
    }
  };

  // Show loading state after all hooks have been called
  if (isLoading) {
    return <LoadingPage text="Loading case study..." />;
  }

  // Password protection for Yellow Dollar project
  if (project.slug === "yellow-dollar" && !isUnlocked) {
    return (
      <PasswordProtection 
        onUnlock={() => setIsUnlocked(true)}
        externalLink={project.externalLink}
        project="yellow-dollar"
      />
    );
  }

  // const ImageWithLightbox = ({ 
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
      <section className="relative bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-secondary/5 rounded-full blur-3xl"
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-20 h-20 bg-primary/3 rounded-full blur-3xl"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <motion.div 
              className="space-y-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
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
                  transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
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
                transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              >
                <h3 className="text-lg font-semibold text-muted-foreground">Scope</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{project.scope}</p>
              </motion.div>

              {/* Tools */}
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
              >
                {project.tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    className="transition border border-input bg-background flex items-center text-xs px-2.5 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground duration-300 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: 0.3 + index * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -3,
                      rotate: [0, -2, 2, 0],
                      transition: { 
                        duration: 0.15,
                        rotate: { duration: 0.3, repeat: Infinity, repeatType: "reverse" }
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>

              {/* Project Meta */}
              <motion.div 
                className="flex items-center gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
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
              className="relative group"
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ 
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40 border border-border/50 shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
                
                {/* Subtle 3D Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: "translateZ(20px)"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections - Enhanced Typography & Spacing */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-40 relative">
        {/* Subtle Parallax Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-primary/3 to-secondary/3 rounded-full blur-3xl"
            style={{
              y: parallaxRight
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-0 w-48 h-48 bg-gradient-to-tr from-primary/2 to-secondary/2 rounded-full blur-3xl"
            style={{
              y: parallaxLeft
            }}
          />
        </motion.div>
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
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
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
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
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
              className="pt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <EnhancedImageGallery
                images={project.research.artifacts}
                alt="Research artifacts"
                onImageClick={(index) => {
                  openLightbox(index, project.research.artifacts);
                }}
                showThumbnails={true}
                autoPlay={false}
                sectionId="research"
              />
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
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
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
          
          {/* Render concept parts if they exist, otherwise render the regular artifacts */}
          {project.concept.parts ? (
            <div className="space-y-20 pt-12">
              {project.concept.parts.map((part, partIndex) => (
                <motion.div 
                  key={partIndex}
                  className="space-y-10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.3 + (partIndex * 0.1), ease: "easeOut" }}
                >
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: 0.4 + (partIndex * 0.1), ease: "easeOut" }}
                  >
                    <h3 className="text-2xl font-semibold tracking-tight">{part.title}</h3>
                  </motion.div>
                  <motion.p 
                    className="text-lg text-muted-foreground leading-relaxed max-w-4xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: 0.5 + (partIndex * 0.1), ease: "easeOut" }}
                  >
                    {part.description}
                  </motion.p>
                  {part.artifacts.length > 0 && (
                    <motion.div 
                      className="pt-8"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.6 + (partIndex * 0.1), ease: "easeOut" }}
                    >
                      {/* Use SmartImageGallery for app-related sections and website sections */}
                      {(part.title.toLowerCase().includes('app') || part.title.toLowerCase().includes('mobile')) ? (
                        <SmartImageGallery
                          images={part.artifacts}
                          alt={`${part.title} artifacts`}
                          onImageClick={(index) => {
                            openLightbox(index, part.artifacts);
                          }}
                          showThumbnails={true}
                          autoPlay={false}
                          sectionId={`concept-part-${partIndex}`}
                          imageType="app"
                        />
                      ) : (part.title.toLowerCase().includes('wireframe') || part.title.toLowerCase().includes('development') || part.title.toLowerCase().includes('website') || part.title.toLowerCase().includes('interface')) ? (
                        <SmartImageGallery
                          images={part.artifacts}
                          alt={`${part.title} artifacts`}
                          onImageClick={(index) => {
                            openLightbox(index, part.artifacts);
                          }}
                          showThumbnails={true}
                          autoPlay={false}
                          sectionId={`concept-part-${partIndex}`}
                          imageType="interface"
                        />
                      ) : (
                        <EnhancedImageGallery
                          images={part.artifacts}
                          alt={`${part.title} artifacts`}
                          onImageClick={(index) => {
                            openLightbox(index, part.artifacts);
                          }}
                          showThumbnails={true}
                          autoPlay={false}
                          sectionId={`concept-part-${partIndex}`}
                        />
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            project.concept.artifacts.length > 0 && (
            <motion.div 
              className="pt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <EnhancedImageGallery
                images={project.concept.artifacts}
                alt="Concept artifacts"
                onImageClick={(index) => {
                  openLightbox(index, project.concept.artifacts);
                }}
                showThumbnails={true}
                autoPlay={false}
                sectionId="concept"
              />
            </motion.div>
            )
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
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
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
          
          {/* Render iteration parts if they exist, otherwise render the regular artifacts */}
          {project.iteration.parts ? (
            <div className="space-y-20 pt-12">
              {project.iteration.parts.map((part, partIndex) => (
                <motion.div 
                  key={partIndex}
                  className="space-y-10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.3 + (partIndex * 0.1), ease: "easeOut" }}
                >
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: 0.4 + (partIndex * 0.1), ease: "easeOut" }}
                  >
                    <h3 className="text-2xl font-semibold tracking-tight">{part.title}</h3>
                  </motion.div>
                  <motion.p 
                    className="text-lg text-muted-foreground leading-relaxed max-w-4xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: 0.5 + (partIndex * 0.1), ease: "easeOut" }}
                  >
                    {part.description}
                  </motion.p>
                  
                  {/* Render comparison component if it exists */}
                  {part.comparison && (
                    <motion.div 
                      className="pt-8"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.6 + (partIndex * 0.1), ease: "easeOut" }}
                    >
                      <BeforeAfterImageComparison
                        beforeImage={part.comparison.beforeImage}
                        afterImage={part.comparison.afterImage}
                        beforeAlt={part.comparison.beforeAlt}
                        afterAlt={part.comparison.afterAlt}
                      />
                    </motion.div>
                  )}
                  
                  {/* Render regular image gallery if artifacts exist */}
                  {part.artifacts.length > 0 && (
                    <motion.div 
                      className="pt-8"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.6 + (partIndex * 0.1), ease: "easeOut" }}
                    >
                      {/* Use SmartImageGallery for app-related sections and website sections */}
                      {(part.title.toLowerCase().includes('app') || part.title.toLowerCase().includes('mobile')) ? (
                        <SmartImageGallery
                          images={part.artifacts}
                          alt={`${part.title} artifacts`}
                          onImageClick={(index) => {
                            openLightbox(index, part.artifacts);
                          }}
                          showThumbnails={true}
                          autoPlay={false}
                          sectionId={`iteration-part-${partIndex}`}
                          imageType="app"
                        />
                      ) : (part.title.toLowerCase().includes('wireframe') || part.title.toLowerCase().includes('development') || part.title.toLowerCase().includes('website') || part.title.toLowerCase().includes('interface')) ? (
                        <SmartImageGallery
                          images={part.artifacts}
                          alt={`${part.title} artifacts`}
                          onImageClick={(index) => {
                            openLightbox(index, part.artifacts);
                          }}
                          showThumbnails={true}
                          autoPlay={false}
                          sectionId={`iteration-part-${partIndex}`}
                          imageType="interface"
                        />
                      ) : (
                        <EnhancedImageGallery
                          images={part.artifacts}
                          alt={`${part.title} artifacts`}
                          onImageClick={(index) => {
                            openLightbox(index, part.artifacts);
                          }}
                          showThumbnails={true}
                          autoPlay={false}
                          sectionId={`iteration-part-${partIndex}`}
                        />
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            project.iteration.artifacts.length > 0 && (
            <motion.div 
              className="pt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <EnhancedImageGallery
                images={project.iteration.artifacts}
                alt="Iteration artifacts"
                onImageClick={(index) => {
                  openLightbox(index, project.iteration.artifacts);
                }}
                showThumbnails={true}
                autoPlay={false}
                sectionId="iteration"
              />
            </motion.div>
            )
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
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
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
              className="pt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <EnhancedImageGallery
                images={project.finalProduct.artifacts}
                alt="Final product artifacts"
                onImageClick={(index) => {
                  openLightbox(index, project.finalProduct.artifacts);
                }}
                showThumbnails={true}
                autoPlay={false}
                sectionId="final-product"
              />
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
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
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
                  className="flex items-start gap-6 p-6 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/40 hover:border-border/80 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.2 + index * 0.15, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    y: -2, 
                    x: 5,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-primary rounded-full mt-3 flex-shrink-0"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.4 + index * 0.15,
                      type: "spring",
                      stiffness: 200
                    }}
                  />
                  <motion.span 
                    className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.6 + index * 0.15 
                    }}
                  >
                    {learning}
                  </motion.span>
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
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          >
            {/* Back to Projects Button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            >
              <Link href="/#projects" passHref className="text-muted-foreground hover:text-foreground">
                <Button variant="outline" className="gap-3 px-6 py-3 transition-all duration-200">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Projects
                </Button>
              </Link>
            </motion.div>

            {/* View Live Project Button */}
            {project.externalLink && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
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

      {/* Custom Lightbox */}
      <CustomLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={sectionImages}
        initialIndex={lightboxIndex}
      />
    </div>
  );
}
