"use client";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "logistics",
    client: "Vanguard Logistics",
    industry: "Supply Chain / SME",
    year: "2024",
    title: "Automating Global Freight Operations",
    problem: "Reliance on spreadsheets and email chains caused a 15% error rate in shipment tracking, leading to lost revenue and frustrated clients.",
    solution: "We built a centralized Logistics Management Platform (LMP) that automates tracking updates, generates instant quotes, and connects directly to carrier APIs.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Google Maps API"],
    result: "40% Increase in operational efficiency",
    metric: "40%",
    metricLabel: "Efficiency Boost",
    bg: "bg-slate-50",
  },
  {
    id: "fintech",
    client: "Novus Finance",
    industry: "FinTech / Startup",
    year: "2025",
    title: "Next-Gen Investment Dashboard",
    problem: "Users found the legacy investment portal confusing and slow. Data latency was causing trust issues during high-volatility market periods.",
    solution: "A real-time, WebSocket-powered dashboard designed with institutional-grade performance and consumer-grade UX.",
    tech: ["React", "TypeScript", "WebSockets", "D3.js"],
    result: "Top-rated financial app in region (4.9/5)",
    metric: "4.9/5",
    metricLabel: "User Rating",
    bg: "bg-white",
  },
  {
    id: "retail",
    client: "Aura Home",
    industry: "E-Commerce",
    year: "2023",
    title: "Headless Commerce Migration",
    problem: "Their Shopify theme was limiting custom bundle offers and causing 4s+ load times on mobile devices, killing conversion.",
    solution: "We migrated to a Headless architecture using Shopify Plus as the backend and a custom Next.js frontend for instant page loads.",
    tech: ["Shopify Plus", "Next.js", "Vercel", "Tailwind"],
    result: "Mobile conversion rate doubled in 3 months",
    metric: "2x",
    metricLabel: "Mobile Sales",
    bg: "bg-slate-50",
  },
];

const ProjectItem = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <div className={`py-24 border-t border-slate-200 ${project.bg}`} data-scroll-section>
      <div className="container">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                    {project.client} — {project.industry}
                </span>
                <h2 className="text-4xl md:text-6xl font-light text-slate-900 tracking-tight leading-[1.1]">
                    {project.title}
                </h2>
            </div>
            <div className="md:text-right">
                <span className="text-sm font-medium text-slate-500 block">{project.year}</span>
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left: Problem & Solution */}
            <div className="lg:col-span-7 space-y-12">
                <div>
                   <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 border-l-2 border-red-500 pl-3">The Challenge</h3>
                   <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                       {project.problem}
                   </p>
                </div>
                <div>
                   <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 border-l-2 border-blue-500 pl-3">Our Solution</h3>
                   <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                       {project.solution}
                   </p>
                </div>

                <div className="pt-6">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className="px-3 py-1 bg-slate-200/50 text-slate-600 text-xs font-medium rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right: The Impact (Hero Element) */}
            <div className="lg:col-span-5 relative">
                <div className="bg-slate-900 text-white rounded-[2rem] p-10 h-full flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-[80px] -mr-20 -mt-20 opacity-50"></div>
                    
                    <div className="relative z-10">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                            Key Outcome
                        </span>
                        <p className="text-xl font-light leading-relaxed text-slate-200">
                            {project.result}
                        </p>
                    </div>

                    <div className="mt-12 relative z-10"> 
                        <span className="text-6xl md:text-8xl font-bold tracking-tighter text-white block">
                            {project.metric}
                        </span>
                        <span className="text-sm font-medium text-slate-400 uppercase tracking-widest block mt-2">
                            {project.metricLabel}
                        </span>
                    </div>

                    <motion.button 
                        whileHover={{ x: 5 }}
                        className="absolute bottom-10 right-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

const ProjectList = () => {
    return (
        <section>
            {projects.map((project, index) => (
                <ProjectItem key={project.id} project={project} index={index} />
            ))}
        </section>
    )
}

export default ProjectList;
