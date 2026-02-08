"use client";
import React from "react";
import { motion } from "motion/react";

const SolutionsHero = () => {
  return (
    <section className="pt-32 pb-20 container" data-scroll-section>
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="w-12 h-1 bg-slate-900 mb-8 origin-left"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-light text-slate-900 mb-8 leading-[1.1] tracking-tight"
        >
          Business-first <br />
          <span className="font-semibold">Technology Solutions.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-slate-600 max-w-2xl leading-relaxed"
        >
          We don't just write code. We analyze your business model to build
          custom technology that solves your specific operational and growth
          challenges.
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionsHero;
