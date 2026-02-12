"use client";
import React from "react";
import { motion } from "motion/react";

const pricingPlans = [
  {
    name: "MVP Launchpad",
    price: "₱15k",
    period: "starting price",
    description: "Ideal for startups needing a market-ready product in weeks, not months.",
    features: [
      "Custom Design System",
      "Next.js / React Stack",
      "CMS Integration",
      "4-6 Week Timeline",
      "SEO Optimization"
    ],
    cta: "Start Your MVP",
    highlight: false
  },
  {
    name: "Growth Partner",
    price: "₱8k",
    period: "per month",
    description: "Dedicated engineering power to scale your product and iterate fast.",
    features: [
      "Dedicated Full-Stack Dev",
      "Weekly Sprint Cycles",
      "Direct Slack Access",
      "Priority Support",
      "Cancel Anytime"
    ],
    cta: "Join Growth",
    highlight: true // The "Recommended" option
  },
  {
    name: "Enterprise Core",
    price: "Custom",
    period: "project based",
    description: "For complex systems, legacy modernization, and high-security requirements.",
    features: [
      "System Architecture",
      "Security Compliance",
      "SLA & Uptime Guarantees",
      "Multiple Squads",
      "24/7 Monitoring"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden" data-scroll-section>
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-18">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block"
          >
            Investment Models
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading"
          >
            Clear value. <br/>
          Transparent pricing.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-lg"
          >
            Choose the engagement model that fits your stage of growth. 
            No hidden fees, just predictable results.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 align-start">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
              className={`
                relative p-10 rounded-3xl flex flex-col h-full border transition-all duration-300
                ${plan.highlight 
                  ? "bg-slate-900 text-white border-slate-800 shadow-2xl scale-100 lg:scale-105 z-10" 
                  : "bg-white text-slate-900 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md"
                }
              `}
            >
              {/* Card Header */}
              <div className="mb-8">
                <h3 className={`text-lg font-medium mb-2 ${plan.highlight ? "text-slate-200" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-4xl font-light tracking-tight ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    / {plan.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-slate-400" : "text-slate-600"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-10 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg 
                        className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-blue-400" : "text-slate-400"}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlight ? "text-slate-300" : "text-slate-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className={`
                w-full py-4 px-6 rounded-full font-medium text-sm transition-all duration-200
                ${plan.highlight 
                  ? "bg-white text-slate-900 hover:bg-slate-100" 
                  : "bg-slate-900 text-white hover:bg-slate-800"
                }
              `}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
