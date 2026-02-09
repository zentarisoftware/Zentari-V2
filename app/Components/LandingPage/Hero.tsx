"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "motion/react";

const Counter = ({
  value,
  duration = 1.5,
}: {
  value: number;
  duration?: number;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration, ease: "circOut" });
    }
  }, [count, isInView, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Hero = () => {
  return (
    <section
      className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center relative py-12 md:py-0"
      data-scroll-section
    >
      {/* Background Layers */}
      <div
        className="gradient-layer absolute inset-0 pointer-events-none"
        data-scroll
        data-scroll-speed="-0.5"
      ></div>
      <div className="grid-overlay absolute inset-0 pointer-events-none"></div>

      <div className="lorix-card h-full relative flex flex-col items-center justify-between shadow-2xl overflow-hidden">
        {/* Content Layer */}
        <div className="content-layer w-full h-full flex flex-col justify-between relative z-30 pb-8 pt-10 px-6">
          {/* 1. Hero Main Content (Centered) */}
          <div className="flex-1 flex flex-col items-center justify-center text-center mx-auto mt-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="floater">Zentari for your business</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-[0.95] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Scale your business
              <br />
              <span className="font-normal text-slate-800">
                with software that performs
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Zentari builds scalable custom software, web apps, mobile apps,
              and AI solutions for businesses.
            </motion.p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.div
                className="w-full sm:w-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <button className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all transform hover:scale-105 shadow-xl active:scale-95 text-[15px]">
                  Start Free
                </button>
              </motion.div>
              {/* CTA */}
              <motion.div
                className="w-full sm:w-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <button className="w-full sm:w-auto px-10 py-4 border border-slate-200 text-slate-900 rounded-full font-medium hover:bg-slate-200 transition-all transform hover:scale-105 shadow-xl duration-200 active:scale-95 text-[15px]">
                  View our work
                </button>
              </motion.div>
            </div>
          </div>

          {/* Trust & Metrics Section */}
          <motion.div
            className="w-full border-t border-slate-100/80 mt-12 lg:mt-0 flex flex-col lg:flex-row items-center justify-between gap-8 pt-8 pb-4 lg:pt-4 lg:pb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {/* Left: Key Metrics (Social Proof) */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-12">
              <div className="text-center md:text-left">
                <span className="flex items-center justify-center md:justify-start text-xl font-semibold md:text-2xl text-slate-900 leading-none">
                  <Counter value={3} />+
                </span>
                <span className="text-[10px]  text-slate-400 uppercase tracking-widest mt-1.5 block">
                  Years Experience
                </span>
              </div>
              <div className="w-px h-8 bg-slate-200 hidden md:block"></div>
              <div className="text-center md:text-left">
                <span className="flex items-center justify-center md:justify-start text-xl font-semibold md:text-2xl text-slate-900 leading-none">
                  <Counter value={50} />+
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-1.5 block">
                  Projects Launched
                </span>
              </div>
              <div className="w-px h-8 bg-slate-200 hidden md:block"></div>
              <div className="text-center md:text-left">
                <span className="flex items-center justify-center md:justify-start text-xl font-semibold md:text-2xl text-slate-900 leading-none">
                  <Counter value={100} />%
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-1.5 block">
                  Client Satisfaction
                </span>
              </div>
            </div>

            {/* Right: Tech Stack Badges (Authority) */}
            <div className="flex flex-col md:flex-row items-center gap-4 bg-slate-50/50 border border-slate-100 px-6 py-4 md:py-3 rounded-2xl backdrop-blur-sm w-full md:w-auto">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Enterprise Solutions
              </span>
              <div className="flex flex-wrap justify-center items-center gap-2">
                {[
                  "Web Apps",
                  "Mobile Apps",
                  "AI Solutions",
                  "Custom Software",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-semibold text-slate-600 shadow-sm hover:border-slate-300 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
