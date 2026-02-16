"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { projects } from "@/app/Data";

const ProjectItem = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen flex items-center py-8`}
      data-scroll-section
    >
      <div className="container mx-auto">
        <div
          className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-10 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full border border-slate-200 text-xs font-bold tracking-widest uppercase text-slate-500">
                  {project.industry}
                </span>
                <span className="text-sm font-medium text-slate-400">
                  {project.year}
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-medium text-slate-900 leading-[1.05] tracking-tight mb-8">
                {project.title}
              </h2>

              <div className="space-y-8">
                <div className="border-l-2 border-slate-200 pl-6">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">
                    Challenge
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="border-l-2 border-slate-900 pl-6">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-2">
                    Solution
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap gap-3">
                {project.stacks.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 bg-white border border-slate-100 shadow-sm text-slate-600 text-xs font-semibold rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-10 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-slate-900 tracking-tight">
                    {project.effect} <span className="text-sm tracking-normal font-normal text-slate-500">{project.effectSubtitle}</span>
                  </div>
                  <div className="text-sm text-slate-500 font-medium mt-1">
                    Key Outcome
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual - Parallax Effect */}
          <div className="w-full lg:w-1/2 aspect-[5/3] lg:aspect-9/7 relative">
            <motion.div style={{ y }} className="absolute inset-0">
              <div className="relative aspect-video w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer">
                <Image
                  fill
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Interaction */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />

                <div className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <section className="bg4-sl3ate-50">
      {projects.map((project, index) => (
        <ProjectItem key={project.id} project={project} index={index} />
      ))}{" "}
    </section>
  );
};

export default ProjectList;
