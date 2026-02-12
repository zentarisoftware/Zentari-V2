"use client";
import React from "react";
import { motion } from "motion/react";

const ContactHero = () => {
  return (
    <section
      className="pt-40 pb-16 md:pt-52 md:pb-24 bg-white"
      data-scroll-section
    >
      <div className="container">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-6 block"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium text-slate-900 leading-[1.05] tracking-tight mb-8"
          >
            Ready to scale? <br />
            <span className="text-slate-400">Let's talk details.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed max-w-2xl font-light"
          >
            Whether you have a fully drafted spec or just a rough idea, we're
            here to help you figure out the next step. No hard sales, just
            engineering clarity.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
