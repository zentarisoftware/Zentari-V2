"use client";
import React from "react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We dive deep into your business goals, user needs, and technical requirements to build a solid roadmap.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "We craft intuitive UI/UX designs and architect scalable systems that are ready for future growth.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "We build the solution using modern, reliable technologies with clean, scalable code practices.",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description:
      "We deploy your system to production, configure infrastructure, and ensure a smooth go-live process.",
  },
];


const Process = () => {
  return (
    <section className="container py-10 sm:py-12 md:py-16" data-scroll-section>
      <div className="mb-6 sm:mb-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block"
        >
          Our Process
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="heading"
        >
          Built with purpose, <br />
          delivered with precision
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-slate-900 text-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-14 border border-slate-800 overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 md:opacity-15 pointer-events-none">
          <div className="absolute top-[-30%] left-[-25%] w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] md:w-[680px] md:h-[680px] bg-blue-500 rounded-full blur-[70px] md:blur-[110px]"></div>
          <div className="absolute bottom-[-35%] right-[-25%] w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[620px] md:h-[620px] bg-cyan-500 rounded-full blur-[65px] md:blur-[100px]"></div>
        </div>

        <div className="mx-auto relative z-10">
          <div className="mb-8 sm:mb-10 md:mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight text-white mb-2 sm:mb-4 max-w-[20ch]"
            >
              From concept to{" "}
              <span className="font-semibold text-white">code.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.35 }}
              className="absolute top-12 left-0 h-px bg-slate-800 hidden lg:block z-0"
            ></motion.div>

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-xl border border-slate-800/90 bg-slate-900/70 p-4 sm:p-5 md:border-0 md:bg-transparent md:p-0"
              >
                <div className="absolute left-2 top-5 bottom-5 w-px bg-slate-700/60 md:hidden" aria-hidden="true"></div>

                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 pl-4 md:pl-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white shadow-xl relative z-10">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 pr-1 pl-4 md:pl-0">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pr-1 pl-4 md:pl-0 max-w-[36ch] md:max-w-none">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Process;
