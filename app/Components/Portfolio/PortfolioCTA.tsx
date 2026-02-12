"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTASection = ({text, subtext, label}: {text: string, subtext: string, label: string}) => {
  return (
    <section
      className="py-32 bg-slate-900 text-white relative overflow-hidden"
      data-scroll-section
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-6 block">
            {label}
          </span>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-10 max-w-4xl mx-auto">
            {text}
            <br />
            <span className="font-bold text-white">{subtext}</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-white text-slate-900 font-medium rounded-full hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 text-white hover:text-slate-200 transition-colors border-b border-transparent hover:border-white/20"
            >
              View Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
