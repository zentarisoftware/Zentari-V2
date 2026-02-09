"use client";
import React from "react";
import { motion } from "motion/react";
import { Layers, MessageSquare, Zap, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    step: "01",
    title: "Deep Discovery",
    desc: "We start by auditing your current workflow and digging deep into the pain points. No code is written until we fully understand the business case.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    step: "02",
    title: "Iterative Build",
    desc: "We work in 2-week sprints with demonstrable milestones. You see the product evolve in real-time and provide feedback at every stage.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    step: "03",
    title: "Rigorous QA",
    desc: "Automated tests, load testing, and security audits are standard. We ensure the system is bulletproof before it ever touches production data.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    step: "04",
    title: "Seamless Scale",
    desc: "Deployment is just the beginning. We monitor performance metrics and optimize the infrastructure as your user base grows.",
  },
];

const WorkCulture = () => {
  return (
    <section
      className="py-24 bg-slate-50 border-y border-slate-200"
      data-scroll-section
    >
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-slate-900 mb-6">
            The <span className="italic font-serif">Zentari Standard</span>
          </h2>
          <p className="text-lg text-slate-500">
            A disciplined, transparent process designed to reduce risk and
            maximize velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-8 right-8 text-4xl font-bold text-slate-100 group-hover:text-slate-50 transition-colors">
                {item.step}
              </div>

              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 relative z-10">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkCulture;
