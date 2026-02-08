"use client";
import React from "react";
import { motion } from "motion/react";

const ServicesHero = () => {
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
          Our Expertise
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-light tracking-tight text-slate-900 mb-8 leading-[1.1]"
        >
          We build <span className="font-medium">custom technology</span> that
          powers growth.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mt-12 border-t border-slate-200 pt-12"
        >
          <div>
            <p className="text-lg text-slate-700 leading-relaxed">
              Zentari focuses on tailored solutions, not generic templates. We
              partner with ambitious companies to engineer software that solves
              complex problems and creates competitive advantages.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semi-bold text-slate-900 mb-4 uppercase tracking-wide">
              Built for
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                Startups launching MVP products
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                SMEs scaling operations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                Enterprises requiring modernization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                Internal business teams
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
