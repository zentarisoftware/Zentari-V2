"use client";
import React from "react";
import { motion } from "motion/react";

const AboutHero = () => {
  return (
    <section
      className="pt-32 pb-20 container bg-slate-50 relative overflow-hidden"
      data-scroll-section
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-6 block">
              Without Compromise
            </span>
            <h1 className="text-5xl md:text-7xl font-medium text-slate-900 leading-[1.05] tracking-tight mb-10">
              We translate business <br className="hidden md:block" />
              complexity into <br className="hidden md:block" />
              <span className="text-slate-400">digital simplicity.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed max-w-2xl font-light"
          >
            Zentari is a strategic engineering partner for ambitious companies.
            We don't just write code; we build the technical foundations that
            allow businesses to scale, pivot, and dominate their markets.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
