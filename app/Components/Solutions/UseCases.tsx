"use client";
import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  ShoppingBag,
  Layers,
} from "lucide-react";

const useCases = [
  {
    id: "startups",
    category: "Startups",
    icon: RocketIcon,
    title: "Launch fast, scale confidently.",
    problem:
      "You have a disruptive idea but limited runway. You need to validate your market fit without accumulating technical debt that kills growth later.",
    solution:
      "We build MVP Launchpads—robust enough to handle real users and payment processing, but flexible enough to pivot rapidly based on feedback.",
    benefit:
      "Get to market in weeks, not months. Secure early funding with a product that actually works.",
    theme: "bg-blue-50 border-blue-100",
    accent: "text-blue-600",
  },
  {
    id: "smes",
    category: "SMEs",
    icon: TrendingUp,
    title: "Automate growth, reduce chaos.",
    problem:
      "Your business is growing, but your operations are stuck in spreadsheets and email chains. Manual work is eating up your profit margins.",
    solution:
      "We engineer Custom Workflow Automation tools that connect your sales, HR, and inventory systems into a single dashboard.",
    benefit:
      "Cut administrative time by 40%. Free your team to focus on high-value strategy instead of data entry.",
    theme: "bg-emerald-50 border-emerald-100",
    accent: "text-emerald-600",
  },
  {
    id: "enterprise",
    category: "Enterprise",
    icon: ShieldCheck,
    title: "Modernize legacy at scale.",
    problem:
      "Outdated legacy systems are slowing down innovation, creating security risks, and causing data silos across departments.",
    solution:
      "We provide high-security Digital Modernization. We wrap legacy core systems in modern APIs and build new, agile user interfaces.",
    benefit:
      "Innovate like a startup with the security and compliance of an enterprise. Zero downtime transitions.",
    theme: "bg-slate-50 border-slate-200",
    accent: "text-slate-900",
  },
  {
    id: "ecommerce",
    category: "E-Commerce",
    icon: ShoppingBag,
    title: "Not just a store. A brand experience.",
    problem:
      "Generic Shopify templates limit your ability to offer unique customer journeys or complex bundle pricing.",
    solution:
      " We build Headless Commerce solutions. Decoupled front-ends that offer blisteringly fast speeds and fully custom shopping experiences.",
    benefit:
      "Increase conversion rates by providing a unique UX that differentiates you from Amazon and generic competitors.",
    theme: "bg-orange-50 border-orange-100",
    accent: "text-orange-600",
  },
  {
    id: "internal",
    category: "Internal Systems",
    icon: Layers,
    title: "Empower your workforce.",
    problem:
      "Your employees are frustrated by having to use 5 different apps just to do their job. Information is lost in translation.",
    solution:
      "We create unified Internal Portals & Dashboards. One login, one source of truth, custom-built for your specific operational KPIs.",
    benefit:
      "Boost employee retention and productivity. Real-time data visibility for leadership.",
    theme: "bg-purple-50 border-purple-100",
    accent: "text-purple-600",
  },
];

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

const UseCaseBlock = ({
  item,
  index,
}: {
  item: (typeof useCases)[0];
  index: number;
}) => {
  return (
    <section className="py-24 sticky top-0 bg-white" data-scroll-section>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className={`rounded-[3rem] p-8 md:p-16 border ${item.theme}`}
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Header Side */}
            <div className="lg:w-1/3">
              <div
                className={`p-4 rounded-2xl w-fit mb-8 bg-white ${item.accent} border border-slate-100 shadow-sm`}
              >
                <item.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-medium text-slate-900 mb-4">
                {item.category}
              </h2>
              <h3 className="text-xl text-slate-500 font-light leading-relaxed">
                {item.title}
              </h3>

              <div className="mt-12 hidden lg:block">
                <button className="group flex items-center text-sm font-bold text-slate-900 uppercase tracking-widest hover:opacity-70 transition-opacity">
                  Let's Build This
                  <span className="ml-3 bg-slate-900 text-white rounded-full p-2 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-2/3 space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-red-500/80 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>{" "}
                    The Problem
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {item.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600/80 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>{" "}
                    The Benefit
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-lg font-medium">
                    {item.benefit}
                  </p>
                </div>
              </div>

              <div className="bg-white/60 p-8 rounded-2xl border border-white/50">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                  Zentari Solution
                </h4>
                <p className="text-slate-800 text-xl font-light leading-relaxed">
                  {item.solution}
                </p>
              </div>

              <div className="block lg:hidden mt-8">
                <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-medium">
                  Let's Build This
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const UseCases = () => {
  return (
    <div className="relative">
      {useCases.map((item, index) => (
        <UseCaseBlock key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default UseCases;
