"use client";

import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
  ExternalLink,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Counter } from "@/components/ui/counter";
import { CustomCursor } from "@/components/CustomCursor";

const aboutStats = [
  { label: "Years of experience", value: 7, suffix: "+" },
  { label: "Projects completed", value: 15, suffix: "+" },
  { label: "Industries served", value: 4, suffix: "+" },
];

const services = [
  {
    service: "UI/UX Design",
    description:
      "Creating intuitive, user-centered designs that solve real problems and drive engagement.",
    icon: Frame,
  },
  {
    service: "Product Design",
    description:
      "End-to-end product design from research and ideation to high-fidelity prototypes and handoff.",
    icon: SearchCheck,
  },
  {
    service: "Frontend Development",
    description:
      "Building responsive, performant web applications using modern technologies and best practices.",
    icon: Code2,
  },
  {
    service: "Design Systems",
    description:
      "Creating scalable design systems that ensure consistency and efficiency across products.",
    icon: MonitorSmartphone,
  },
  {
    service: "User Research",
    description:
      "Conducting comprehensive user research to inform design decisions and validate solutions.",
    icon: Eye,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  return (
    <div ref={refScrollContainer}>
      <CustomCursor />
      <ScrollProgress />
      <Gradient />

      {/* Intro */}
      <section
        id="home"
        data-scroll-section
        className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
      >
        <div className={styles.intro}>
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed=".09"
            className="flex flex-row items-center space-x-1.5"
          >
            <span className={styles.pill}>UI/UX Design</span>
            <span className={styles.pill}>Product Design</span>
            <span className={styles.pill}>Frontend Dev</span>
          </div>
          <div>
            <h1
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              data-scroll-direction="horizontal"
            >
              <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                Hello, I&apos;m
                <br />
              </span>
              <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                Shane.
              </span>
            </h1>
            <p
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
            >
              A UI/UX designer passionate about creating intuitive digital experiences that solve real problems.
            </p>
          </div>
          <span
            data-scroll
            data-scroll-enable-touch-speed
            data-scroll-speed=".06"
            className="flex flex-row items-center space-x-1.5 pt-6"
          >
            <Link href="mailto:contact@shane.technology" passHref>
              <Button>
                Get in touch <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.open('/CV 2025 Shane Keen v3.docx.pdf', '_blank')}
            >
              View Resumé
            </Button>
          </span>

          <div
            className={cn(
              styles.scroll,
              isScrolled && styles["scroll--hidden"],
            )}
          >
            Scroll to discover{" "}
            <TriangleDownIcon className="mt-1 animate-bounce" />
          </div>
        </div>
        <div
          data-scroll
          data-scroll-speed="-.01"
          id={styles["canvas-container"]}
          className="mt-14 h-full w-full xl:mt-0"
        >
          <Suspense fallback={<span>Loading...</span>}>
            <Spline scene="/assets/scene.splinecode" />
          </Suspense>
        </div>
      </section>

      {/* About */}
      <section id="about" data-scroll-section>
        <div
          data-scroll
          data-scroll-speed=".4"
          data-scroll-position="top"
          className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
        >
          <TextGradientScroll 
            text="I'm a UI/UX designer and full-stack developer with over 5 years of experience creating digital products that users love. I specialize in user-centered design and modern web development, working with companies from startups to enterprise to bring their ideas to life through thoughtful design and clean code."
            className="py-16 pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]"
            type="letter"
            textOpacity="soft"
          />
          <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
            {aboutStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center xl:items-start xl:text-start"
              >
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl"
                />
                <motion.span 
                  className="tracking-tight text-muted-foreground xl:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.2 + 0.5,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" data-scroll-section>
        {/* Gradient */}
        <div className="relative isolate -z-10">
          <div
            className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <div data-scroll data-scroll-speed=".4" className="my-64">
          <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
            ✨ Featured Projects
          </span>
                     <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
             Case studies.
           </h2>


                     {/* Projects Grid */}
           <div className="mt-14">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {projects.map((project, index) => (
                 <ProjectCard key={project.title} project={project} />
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" data-scroll-section>
        {/* Background Blob */}
        <div className="relative isolate -z-10">
          <div
            className="absolute right-0 top-3/4 transform-gpu overflow-hidden blur-[100px]"
            aria-hidden="true"
          >
            <div
              className="relative aspect-[1155/678] w-[36.125rem] rotate-[30deg] bg-gradient-to-tr from-secondary via-primary to-secondary opacity-20 sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <div
          data-scroll
          data-scroll-speed=".4"
          data-scroll-position="top"
          className="my-24 flex flex-col justify-start space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              staggerChildren: 0.5,
            }}
            viewport={{ once: true }}
            className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
          >
            <div className="flex flex-col py-6 xl:p-6">
              <h2 className="text-4xl font-medium tracking-tight">
                What I do.
                <br />
                <span className="text-gradient clash-grotesk tracking-normal">
                  How I can help.
                </span>
              </h2>
              <p className="mt-2 tracking-tighter text-muted-foreground">
                I offer a comprehensive range of design and development services
                to help bring your ideas to life. Here&apos;s what I specialize in.
              </p>
            </div>
            {services.map((service) => (
              <div
                key={service.service}
                className="flex flex-col items-start rounded-md bg-white/5 p-14 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 border border-border"
              >
                <service.icon className="my-6 text-primary" size={20} />
                <span className="text-lg tracking-tight text-foreground">
                  {service.service}
                </span>
                <span className="mt-2 tracking-tighter text-muted-foreground">
                  {service.description}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" data-scroll-section className="my-64">
        <div
          data-scroll
          data-scroll-speed=".4"
          data-scroll-position="top"
          className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
        >
          <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
            <span className="clash-grotesk">Let&apos;s work</span>{" "}
            <span className="text-gradient clash-grotesk">together.</span>
          </h2>
          <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
            I&apos;m currently available for freelance work and open to
            discussing new opportunities.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link href="mailto:contact@shane.technology" passHref>
              <Button>
                Get in touch <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.open('/CV 2025 Shane Keen v3.docx.pdf', '_blank')}
            >
              View Resumé
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            style={{ fillOpacity: 'var(--gradient-opacity)' }}
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--primary))" />
              <stop offset={1} stopColor="hsl(var(--secondary))" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            style={{ fillOpacity: 'var(--gradient-opacity)' }}
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--primary))" />
              <stop offset={1} stopColor="hsl(var(--secondary))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
