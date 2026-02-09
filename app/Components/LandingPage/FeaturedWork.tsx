"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    client: "FinFlow",
    category: "Fintech",
    description:
      "Re-engineering the core transaction processing engine for a high-growth Series B startup used by 50k+ daily users.",
    stat: "$50M+",
    statLabel: "Processed / Quarter",
    tags: ["Node.js", "AWS", "Microservices"],
    gradient: "from-blue-600 to-indigo-900",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    client: "MediConnect",
    category: "Healthcare",
    description:
      "Developing a HIPAA-compliant scheduling architecture that synchronizes patient data across 40+ legacy hospital systems.",
    stat: "-85%",
    statLabel: "Scheduling Conflicts",
    tags: ["React Native", "Firebase", "Python"],
    gradient: "from-teal-600 to-emerald-900",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    client: "LogiTrack",
    category: "Logistics",
    description:
      "Real-time fleet intelligence dashboard combining IoT sensor data with predictive route optimization.",
    stat: "15%",
    statLabel: "Fuel Cost Reduction",
    tags: ["Next.js", "Google Maps API", "IoT"],
    gradient: "from-amber-600 to-orange-900",
    icon: <Truck className="w-6 h-6 text-white" />,
  },
];

const FeaturedWork = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white relative" data-scroll-section>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block"
            >
              Selected Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading"
            >
              We build systems that <br />
                drive revenue.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors"
            >
              View All Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 min-h-[500px] flex flex-col justify-between"
            >
              {/* Gradient Background Reveal */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content Overlay */}
              <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                {/* Top Row */}
                <div className="flex justify-between items-start mb-12">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm group-hover:bg-white/10 group-hover:backdrop-blur-md transition-colors duration-300`}
                  >
                    <div
                      className={`w-6 h-6 transition-colors duration-300 ${hoveredProject === project.id ? "text-white" : "text-slate-900"}`}
                    >
                      {project.icon}
                    </div>
                  </div>
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-colors duration-300 ${hoveredProject === project.id ? "bg-white/20 text-white backdrop-blur-md" : "bg-slate-200 text-slate-600"}`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Middle Text */}
                <div className="mb-auto">
                  <h3
                    className={`text-3xl font-bold mb-4 transition-colors duration-300 ${hoveredProject === project.id ? "text-white" : "text-slate-900"}`}
                  >
                    {project.client}
                  </h3>
                  <p
                    className={`text-lg leading-relaxed transition-colors duration-300 ${hoveredProject === project.id ? "text-white/80" : "text-slate-500"}`}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Bottom Stat */}
                <div className="mt-12 pt-8 border-t border-slate-200 group-hover:border-white/20 transition-colors duration-300">
                  <div className="flex items-end gap-3">
                    <span
                      className={`text-5xl tracking-tighter transition-colors duration-300 ${hoveredProject === project.id ? "text-white" : "text-slate-900"}`}
                    >
                      {project.stat}
                    </span>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${hoveredProject === project.id ? "text-white/70" : "text-slate-400"}`}
                    >
                      {project.statLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements (Circles) */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
