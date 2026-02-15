"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    client: "FinFlow",
    image: "/projects/tite.png",
    category: "Fintech",
    description:
      "Re-engineering the core transaction processing engine for a high-growth Series B startup used by 50k+ daily users.",
    stat: "$50M+",
    statLabel: "Processed / Quarter",
    tags: ["Node.js", "AWS", "Microservices"],
    icon: <TrendingUp className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    client: "MediConnect",
    image: "/projects/tite.png",
    category: "Healthcare",
    description:
      "Developing a HIPAA-compliant scheduling architecture that synchronizes patient data across 40+ legacy hospital systems.",
    stat: "-85%",
    statLabel: "Scheduling Conflicts",
    tags: ["React Native", "Firebase", "Python"],
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    client: "LogiTrack",
    category: "Logistics",
    image: "/projects/tite.png",
    description:
      "Real-time fleet intelligence dashboard combining IoT sensor data with predictive route optimization.",
    stat: "15%",
    statLabel: "Fuel Cost Reduction",
    tags: ["Next.js", "Google Maps API", "IoT"],
    icon: <Truck className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    client: "RetaiLoop",
    category: "E-Commerce",
    image: "/projects/tite.png",
    description:
      "Omnichannel inventory management system synchronizing physical stores with online marketplaces in real-time.",
    stat: "3x",
    statLabel: "Faster Restocking",
    tags: ["React", "Shopify API", "Redis"],
    icon: <ArrowUpRight className="w-6 h-6 text-white" />,
  },
];

const FeaturedWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
        setIsAutoPlaying(false);
      }
      if (e.key === "ArrowRight") {
        nextSlide();
        setIsAutoPlaying(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section className="py-24 bg-white overflow-hidden" data-scroll-section>
      {/* Header */}
      <div className="container">
        <div className="mx-auto mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">
                Selected Case Studies
              </span>
              <h2 className="heading">
                We build systems that <br />
                drive revenue.
              </h2>
            </div>

            <Link
              href="/portfolio"
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors"
            >
              View all work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-4 md:left-8 lg:left-16 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 text-slate-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-4 md:right-8 lg:right-16 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 text-slate-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track */}
          <div className="relative w-full h-full flex items-center justify-center px-4 md:px-0">
            <AnimatePresence initial={false} mode="popLayout">
              {projects.map((project, index) => {
                // Calculate position relative to active index
                const length = projects.length;
                const isActive = index === activeIndex;
                const isPrev = index === (activeIndex - 1 + length) % length;
                const isNext = index === (activeIndex + 1) % length;

                // Only render visible items
                if (!isActive && !isPrev && !isNext) return null;

                // Position calculations
                let xPosition = "0%";
                let scale = 1;
                let opacity = 1;
                let zIndex = 10;
                let blur = "0px";

                if (isPrev) {
                  xPosition = "-70%";
                  scale = 0.8;
                  opacity = 0.5;
                  zIndex = 1;
                  blur = "3px";
                } else if (isNext) {
                  xPosition = "70%";
                  scale = 0.8;
                  opacity = 0.5;
                  zIndex = 1;
                  blur = "3px";
                }

                return (
                  <motion.div
                    key={project.id}
                    initial={{
                      x: direction > 0 ? "100%" : "-100%",
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      x: xPosition,
                      scale,
                      opacity,
                      zIndex,
                      filter: `blur(${blur})`,
                    }}
                    exit={{
                      x: direction > 0 ? "-100%" : "100%",
                      opacity: 0,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className={`absolute w-[90vw] md:w-[75vw] lg:w-[1100px] rounded-2xl overflow-hidden shadow-2xl bg-white ${
                      isActive ? "cursor-default" : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (isPrev) prevSlide();
                      if (isNext) nextSlide();
                      setIsAutoPlaying(false);
                    }}
                  >
                    <div className="flex flex-col md:flex-row h-full min-h-[500px] md:min-h-[550px]">
                      {/* Left Side - Content */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : -20,
                        }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="w-full md:w-1/3 p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-slate-50"
                      >
                        {/* Top Section */}
                        <div>
                          {/* Category Badge & Icon */}
                          <div className="flex items-center justify-between gap-3 mb-6">
                            <div className="p-2.5 bg-slate-900 rounded-xl">
                              {project.icon}
                            </div>
                            <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200 text-slate-700 border border-slate-300">
                              {project.category}
                            </span>
                          </div>

                          {/* Project Title */}
                          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900">
                            {project.client}
                          </h3>

                          {/* Description */}
                          <p className="text-base text-slate-600 mb-8 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Bottom Section */}
                        <div>
                          {/* Key Result */}
                          <div className="mb-6 pb-6 border-t border-slate-200 pt-6">
                            <div className="text-4xl md:text-4xl font-bold tracking-tight text-slate-900">
                              {project.stat}
                            </div>
                            <div className="text-xs text-slate-500 uppercase tracking-widest mt-2">
                              {project.statLabel}
                            </div>
                          </div>

                          {/* Tech Stack Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <button className="w-full md:w-fit px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-slate-800 transition-all duration-300 group">
                            View Case Study
                            <ArrowUpRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </button>
                        </div>
                      </motion.div>

                      {/* Right Side - Image */}
                      <div className="w-full md:w-2/3 relative h-64 md:h-auto">
                        <Image
                          src={project.image}
                          alt={project.client}
                          fill
                          className="object-cover"
                          priority={isActive}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 md:-bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  goToSlide(i);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-black"
                    : "w-2 bg-black/40 hover:bg-black/60"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
