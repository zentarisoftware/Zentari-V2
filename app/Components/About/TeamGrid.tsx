"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const team = [
  {
    name: "Imogen Inocentes",
    role: "CEO & Lead Software Developer",
    bio: "Leads product engineering strategy and builds robust systems that scale with client growth.",
    image: "/team/imogen-inocentes.png",
  },
  {
    name: "Gayle Florencio",
    role: "UI/UX and Graphics Designer",
    bio: "Designs clear user journeys and polished visual assets that strengthen brand identity.",
    image: "/team/gayle-florencio.jpg",
  },
  {
    name: "Jennifer Salo",
    role: "Marketing Lead",
    bio: "Shapes campaigns and messaging that connect business goals with customer needs.",
    image: "/team/jennifer-salo.jpg",
  },
  {
    name: "Jerome Santos",
    role: "Sales Lead",
    bio: "Drives client relationships and sales strategy from first conversation to successful delivery.",
    image: "/team/jerome-santos.jpg",
  },
];

const TeamGrid = () => {
  return (
    <section className="py-24 bg-white" data-scroll-section>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-2 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-slate-900">
              The Expertise Behind the Engine
            </h2>
          </div>
          <div className="max-w-md text-slate-500 text-sm md:text-right">
           We’re a team of modern, driven builders who take pride in doing things right — from architecture to launch.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] bg-slate-100 mb-6 rounded-2xl relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {member.name}
                </h3>
                <div className="text-xs text-blue-600 font-bold tracking-wider uppercase mb-2">
                  {member.role}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
