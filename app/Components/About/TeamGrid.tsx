"use client";
import React from "react";
import { motion } from "motion/react";

const team = [
  {
    name: "Alex Jensen",
    role: "Founder & Technical Director",
    bio: "Former Lead Architect at Stripe. Obsessed with scalable systems and clean APIs.",
    initials: "AJ",
  },
  {
    name: "Sarah Chen",
    role: "Head of Product",
    bio: "Specializes in translating complex user requirements into intuitive interfaces.",
    initials: "SC",
  },
  {
    name: "Marcus Thorne",
    role: "Lead DevOps Engineer",
    bio: "15+ years managing high-availability infrastructure for enterprise fintech.",
    initials: "MT",
  },
  {
    name: "Elena Rodriguez",
    role: "Senior Frontend Developer",
    bio: "Expert in React performance optimization and accessible design systems.",
    initials: "ER",
  },
];

const TeamGrid = () => {
  return (
    <section className="py-24 bg-white" data-scroll-section>
      <div className="container px-6">
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
            We are a lean, senior-heavy team. You won't be handed off to
            juniors. The people you speak with are the people building your
            product.
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
              {/* Avatar Placeholder */}
              <div className="aspect-[4/5] bg-slate-100 mb-6 rounded-2xl relative overflow-hidden group-hover:bg-slate-200 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                  {member.initials}
                </div>
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
