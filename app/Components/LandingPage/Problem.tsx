"use client";
import React from "react";
import { motion } from "motion/react";

const problemItems = [
  {
    name: "Slow Growth",
    description:
      "Your business is ready to scale, but inefficient systems and outdated software hold you back.",
  },

  {
    name: "Operational Inefficiency",
    description:
      "Processes take too long, errors creep in, and teams spend time on repetitive tasks instead of high-value work.",
  },

  {
    name: "Limited Insights",
    description:
      "Without real-time data and dashboards, it’s hard to make informed decisions and spot opportunities.",
  },

  {
    name: "Weak Digital Presence",
    description:
      "Outdated websites, apps, or customer-facing tools hurt brand perception and limit engagement.",
  },
];

const Problem = () => {
  return (
    <section className="relative rounded-t-[3rem] gradient-layer-solid py-8 md:py-12">
      <div className="container mx-auto text-center relative z-[2] flex flex-col gap-8 md:gap-10">
        <div>
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 md:mb-2"
          >
            The Problem
          </motion.h6>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-slate-900 leading-[1.1] tracking-tight"
          >
            Your business is growing —
            <br />
            your systems aren’t
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-stretch md:items-start gap-5 md:gap-4 h-fit">
          {problemItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex-1 flex flex-col gap-4 md:gap-2 h-auto md:h-full ${
                index % 2 === 0 ? "md:flex-col-reverse" : ""
              }`}
            >
              {/* Decorative Gradient Bar - Hidden on Mobile to save space */}
              <div
                className={`hidden lg:block rounded-xl flex-shrink-0 h-32 ${
                  index % 2 === 0
                    ? "bg-gradient-to-b from-[#ffffff] to-transparent"
                    : "bg-gradient-to-b from-transparent to-[#ffffff]"
                }`}
              ></div>

              <div
                className={`p-6 md:px-8 md:py-6 flex-1 bg-[#ffffff] text-slate-900 rounded-2xl md:rounded-xl font-medium shadow-sm md:shadow-none flex flex-col justify-center`}
              >
                <h1 className="text-lg md:text-xl text-left font-bold mb-2 md:mb-0">
                  {item.name}
                </h1>
                <p className="text-sm md:text-base text-left mt-2 md:mt-3 text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-slate-500 text-sm md:text-base px-4 md:px-0 mt-2"
        >
          These challenges are common — and they’re exactly what we solve.
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
