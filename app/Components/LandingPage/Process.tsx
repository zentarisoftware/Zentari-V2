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
    <section className="container py-12" data-scroll-section>
      <div className="mb-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block"
        >
          Our Process
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-slate-900 text-white rounded-[3rem] p-18 border overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-50%] right-[-20%] w-[800px] h-[800px] bg-purple-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="mx-auto relative z-10">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6"
            >
              From concept to{" "}
              <span className="font-semibold text-white">code.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-12 left-0 h-px bg-slate-800 hidden lg:block z-0"
            ></motion.div>

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-24 h-24 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-3xl font-light text-white shadow-xl relative z-10">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white mb-3 pr-4">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed pr-4">
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
