"use client";
import React from "react";
import { motion } from "motion/react";

const SolutionsCTA = () => {
  return (
    <section
      className="py-32 bg-slate-900 overflow-hidden relative"
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
          <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight">
            See yourself here?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto">
            Whether you are a startup or an enterprise, we speak your language.
            Let's discuss your specific use case.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform duration-200">
              Start Consultation
            </button>
            <button className="text-white font-medium hover:text-slate-300 transition-colors">
              View Success Stories
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
