"use client";
import React from "react";
import { motion } from "motion/react";

const PortfolioHero = () => {
  return (
    <section className="pt-32 pb-20 container" data-scroll-section>
      <div className="max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-6"
        >
          Selected Works
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-light text-slate-900 mb-8 leading-[1.1] tracking-tight"
        >
          Proven results, <br />
          <span className="font-semibold">delivered through code.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-600 max-w-2xl leading-relaxed"
        >
          We define success by metrics, not just aesthetics. Explore how we've
          helped companies across industries solve complex challenges and scale
          their operations.
        </motion.p>
      </div>
    </section>
  );
};

export default PortfolioHero;
