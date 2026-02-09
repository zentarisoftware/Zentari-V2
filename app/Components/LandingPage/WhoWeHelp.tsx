"use client";
import React from "react";
import { motion } from "motion/react";
import {
  Building2,
  LayoutDashboard,
  Rocket,
  Settings,
  ArrowUpRight,
} from "lucide-react";

const clientTypes = [
  {
    title: "Startups",
    role: "The Visionaries",
    description:
      "Launch your MVP fast with scalable architecture that grows with your users. We handle the tech so you can focus on the market.",
    icon: Rocket,
    color: "text-blue-500",
  },
  {
    title: "SMEs",
    role: "The Scalers",
    description:
      "Automate manual workflows and modernize legacy systems. We build tools that reduce overhead and increase efficiency.",
    icon: Settings,
    color: "text-emerald-500",
  },
  {
    title: "Enterprises",
    role: "The Innovators",
    description:
      "Secure, compliant, and robust software solutions for complex needs. We deliver reliability at scale.",
    icon: Building2,
    color: "text-purple-500",
  },
  {
    title: "Internal Teams",
    role: "The Operators",
    description:
      "Custom internal tools and dashboards that empower your workforce with real-time data and better capabilities.",
    icon: LayoutDashboard,
    color: "text-orange-500",
  },
];

const WhoWeHelp = () => {
  return (
    <section className="py-32 bg-white relative" data-scroll-section>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block"
              >
                Who We Serve
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="heading"
              >
                Tailored solutions for every stage of{" "}
                <span className="font-medium">growth.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 mb-8 leading-relaxed"
              >
                Whether you're validating an idea or modernizing a global
                platform, our engineering adapts to your specific constraints
                and goals.
              </motion.p>

              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                href="/portfolio"
                className="inline-flex items-center text-sm font-medium text-slate-900 border-b border-slate-300 pb-1 hover:border-slate-900 transition-colors"
              >
                See our track record
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </motion.a>
            </div>
          </div>

          {/* Right Column: The Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clientTypes.map((client, index) => {
                const Icon = client.icon;
                return (
                  <motion.div
                    key={client.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-5 h-5 text-slate-300" />
                    </div>

                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm mb-8 group-hover:scale-110 transition-transform duration-300 ${client.color}`}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-medium text-slate-900 mb-1">
                      {client.title}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 block">
                      {client.role}
                    </span>

                    <p className="text-slate-600 leading-relaxed text-sm">
                      {client.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
