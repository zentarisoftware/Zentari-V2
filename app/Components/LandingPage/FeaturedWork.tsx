"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/Data";

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
  // useEffect(() => {
  //   if (!isAutoPlaying) return;
  //   const interval = setInterval(nextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, [isAutoPlaying, nextSlide]);

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
          className="relative w-full min-h-[650px] md:min-h-[700px] lg:min-h-[600px] xl:min-h-[650px] flex items-center justify-center py-8"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-2 md:left-4 lg:left-8 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 text-slate-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-2 md:right-4 lg:right-8 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 text-slate-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
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
                    className={`absolute w-[90vw] md:w-[85vw] lg:w-[75vw] rounded-2xl overflow-hidden shadow-2xl bg-white ${
                      isActive ? "cursor-default" : "cursor-pointer"
                    }`}
                    onClick={() => {
                      if (isPrev) prevSlide();
                      if (isNext) nextSlide();
                      setIsAutoPlaying(false);
                    }}
                  >
                    <div className="flex flex-col-reverse lg:flex-row h-full min-h-[600px] lg:min-h-[550px]">
                      {/* Left Side - Content */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          x: isActive ? 0 : -20,
                        }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="w-full lg:w-5/12 p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-slate-50 relative z-10"
                      >
                        {/* Top Section */}
                        <div>
                          {/* Project Title */}
                          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 md:mb-4 tracking-tight text-slate-900 leading-tight">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs md:text-sm lg:text-base text-slate-600 mb-4 md:mb-6 lg:mb-8 leading-relaxed line-clamp-3 md:line-clamp-none">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-6 md:mt-0">
                          {/* Key Result */}
                          <div className="mb-4 md:mb-6 pb-4 md:pb-6 border-t border-slate-200 pt-4 md:pt-6">
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                              {project.effect}
                            </div>
                            <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mt-1 md:mt-2">
                              {project.effectSubtitle}
                            </div>
                          </div>

                          {/* Tech Stack Tags */}
                          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                            {project.stacks.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] md:text-xs font-medium text-slate-600 bg-white border border-slate-200 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* CTA Button */}
                          {project.url && (
                            <Link
                              target="_blank"
                              href={project.url}
                              className="bg-slate-900 text-white p-2 w-10 h-10 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-slate-800 transition-all duration-300 group flex items-center justify-center transform hover:scale-105 active:scale-95"
                            >
                              <ArrowUpRight className="inline-block w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                          )}
                        </div>
                      </motion.div>

                      {/* Right Side - Image */}
                      <div className="w-full lg:w-7/12 relative h-64 md:h-80 lg:h-auto min-h-[250px] lg:min-h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          priority={isActive}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
