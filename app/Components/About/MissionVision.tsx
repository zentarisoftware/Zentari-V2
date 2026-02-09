"use client";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Target, Lightbulb } from "lucide-react";

const MissionVision = () => {
  return (
    <section
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
      data-scroll-section
    >
      {/* Ambient Light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="container relative z-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-stretch">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-8">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6">
              To eliminate{" "}
              <span className="text-white font-medium">technical debt</span>{" "}
              before it starts.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Too many companies are held back by brittle legacy systems or
              poorly planned MVPs. We exist to provide the rigorous engineering
              foresight that growing businesses need to avoid hitting a wall at
              scale.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center border-l border-slate-800 pl-10 md:pl-20 py-8"
          >
            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-8">
              <Lightbulb className="w-6 h-6 text-indigo-400" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6">
              A world where software scales seamlessly with{" "}
              <span className="text-white font-medium">human ambition.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We believe technology should never be the bottleneck. Whether
              you're processing ten transactions or ten million, your
              infrastructure should remain invisible, reliable, and practically
              infinite.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
