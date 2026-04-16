"use client";
import { motion } from "motion/react";
import { Code2, TrendingUp, MessageSquareText, ArrowRight, ShieldCheck } from "lucide-react";
const features = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Custom-Engineered Solutions",
    description:
      "We build software around your exact business logic and workflows — no templates, no unnecessary features, just systems built to fit.",
    className: "lg:col-span-3 md:row-span-1",
    bg: "bg-white",
    delay: 0.1,
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Built for Scale",
    description:
      "Our architecture is designed to support growth, high traffic, and expanding operations without performance trade-offs.",
    className: "lg:col-span-1 md:row-span-1",
    bg: "bg-white",
    delay: 0.2,
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Secure & Reliable",
    description:
      "We follow best practices in security, testing, and deployment to ensure your systems remain stable and protected.",
    className: "lg:col-span-1 md:row-span-1",
    bg: "bg-white",
    delay: 0.3,
  },
  {
    icon: <MessageSquareText className="w-6 h-6" />,
    title: "Transparent Collaboration",
    description:
      "You stay informed at every stage with structured updates, sprint reviews, and direct communication with our team.",
    className: "lg:col-span-1 md:row-span-1",
    bg: "bg-slate-900 text-white",
    delay: 0.4,
  },
];


const WhyUs = () => {
  return (
    <section
      className="py-8 sm:py-12 bg-slate-50 relative overflow-hidden"
      data-scroll-section
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-6 sm:mb-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 sm:mb-4 block"
          >
            Why Choose Zentari
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight"
          >
            Software partners, <br />
            not just vendors.
          </motion.h1>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:auto-rows-[minmax(260px,auto)] lg:auto-rows-[minmax(300px,auto)]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              className={`p-4 sm:p-5 md:p-8 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between border border-slate-100 ${feature.className} ${feature.bg}`}
            >
              <div className="mb-3 sm:mb-6">
                <div
                  className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-8 transition-transform duration-500 group-hover:scale-110 ${feature.bg.includes("slate-900") ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-900"}`}
                >
                  {feature.icon}
                </div>
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl font-light tracking-tight mb-3 sm:mb-6 ${feature.bg.includes("slate-900") ? "text-white" : "text-slate-900"}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`leading-relaxed text-sm sm:text-base md:text-lg max-w-xl ${feature.bg.includes("slate-900") ? "text-slate-400" : "text-slate-500"}`}
                >
                  {feature.description}
                </p>
              </div>

              {/* Interactive Arrow for "Action" feel */}
              <div className="hidden sm:flex justify-end mt-auto">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 ${feature.bg.includes("slate-900") ? "border-slate-700 text-white" : "border-slate-200 text-slate-900"}`}
                >
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
