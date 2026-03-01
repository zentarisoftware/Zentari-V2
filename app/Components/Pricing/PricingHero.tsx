"use client";
import React from "react";
import { motion } from "motion/react";

const PricingHero = () => {
  return (
    <section
      className="min-h-[60vh] flex flex-col justify-end pb-20 pt-32 container"
      data-scroll-section
    >
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-6"
        >
          Pricing & Flexible Plans
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-light tracking-tight text-slate-900 mb-8 leading-[1.1]"
        >
          Zentari Software <br />
          <span className="font-medium">— Engagement Models</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 border-t border-slate-200 pt-12"
        >
          <p className="text-xl text-slate-700 leading-relaxed max-w-3xl">
            We offer transparent, flexible engagement models tailored to your
            project&apos;s needs and scale. Whether you need a full system
            build, ongoing development, or reliable maintenance, we have a plan
            built for clarity and trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
