"use client";
import React from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Business First, Code Second",
    desc: "We don't write code for the sake of it. If a no-code solution or a simple script solves the problem better than a custom app, we'll tell you. We measure success by ROI, not commit execution.",
  },
  {
    title: "Radical Transparency",
    desc: "No black boxes. No hidden fees. No 'tech speak' designed to confuse you. You have access to our Jira boards, our Slack channels, and our honest opinions at all times.",
  },
  {
    title: "Engineering Excellence",
    desc: "We adhere to strict CI/CD pipelines, automated testing, and comprehensive documentation. We build software that other developers love to inherit.",
  },
  {
    title: "Long-Term Guardianship",
    desc: "We don't launch and leave. We monitor, maintain, and optimize systems long after deployment, treating your infrastructure with the same care as our own.",
  },
];

const Values = () => {
  return (
    <section className="py-24 md:py-32 bg-white" data-scroll-section>
      <div className="container px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Sticky Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">
                Our Principles
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 leading-[1.1] mb-8">
                Why industry leaders <br /> trust Zentari.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We've stripped away the agency bloat and focused entirely on
                what matters: delivering reliable, high-performace software that
                solves real problems.
              </p>
              <a
                href="/contact"
                className="text-sm font-bold uppercase text-blue-600 border-b border-blue-200 pb-1 hover:border-blue-600 transition-colors"
              >
                Start a Partnership
              </a>
            </div>
          </div>

          {/* Values List */}
          <div className="lg:w-2/3 space-y-12">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="group pl-8 border-l-2 border-slate-100 hover:border-blue-600 transition-colors duration-500"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">
                  {value.title}
                </h3>
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl group-hover:text-slate-600 transition-colors">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
