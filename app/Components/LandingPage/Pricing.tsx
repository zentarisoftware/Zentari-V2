"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Fixed-Price Development",
    price: "Project-based pricing",
    period: "one-time engagement",
    description:
      "A clearly scoped, one-time software development project with full ownership and clean system turnover.",
    features: [
      "Requirements & Scope Defined Upfront",
      "Milestone-Based Payments",
      "Custom UI & Backend Development",
      "Authentication & Role Management",
      "Deployment & Handover Support",
      "Full Source Code Ownership"
    ],
    cta: "Discuss Your Project",
    highlight: false
  },
  {
    name: "Monthly System Development",
    price: "Monthly development retainer",
    period: "billed per month",
    description:
      "Ongoing system development billed monthly, allowing features and priorities to evolve as the project progresses.",
    features: [
      "No Large Upfront Payment",
      "Monthly Development Capacity",
      "Scope & Feature Adjustments Each Month",
      "Continuous Delivery & Iteration",
      "Minimum Commitment Period",
      "Ownership Transfers After Build Phase"
    ],
    cta: "Start a Conversation",
    highlight: true
  },
  {
    name: "Hybrid (Build + Maintenance)",
    price: "One-time build + optional monthly support",
    period: "flexible engagement",
    description:
      "A one-time system build with the option to continue into monthly maintenance and long-term support.",
    features: [
      "One-Time System Development",
      "Immediate Ownership After Delivery",
      "Optional Hosting & Maintenance",
      "Bug Fixes & Minor Enhancements",
      "Ongoing Technical Support",
      "No Vendor Lock-In"
    ],
    cta: "Explore This Model",
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section
      className="py-12 bg-slate-50 relative overflow-hidden"
      data-scroll-section
    >
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
            Clear value. <br />
            Transparent pricing.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-lg"
          >
            Choose the engagement model that fits your stage of growth. No
            hidden fees, just predictable results.
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
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className={`
                relative p-10 rounded-3xl flex flex-col h-full border transition-all duration-300
                ${
                  plan.highlight
                    ? "bg-slate-900 text-white border-slate-800 shadow-2xl scale-100 lg:scale-105 z-10"
                    : "bg-white text-slate-900 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md"
                }
              `}
            >
              {/* Card Header */}
              <div className="mb-8">
                <h3
                  className={`text-lg font-medium mb-2 ${plan.highlight ? "text-slate-200" : "text-slate-900"}`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span
                    className={`text-4xl font-light tracking-tight ${plan.highlight ? "text-white" : "text-slate-900"}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}
                  >
                    / {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${plan.highlight ? "text-slate-400" : "text-slate-600"}`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-10 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <svg
                        className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-blue-400" : "text-slate-400"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={
                          plan.highlight ? "text-slate-300" : "text-slate-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                className={`
                w-full py-4 px-6 rounded-full font-medium text-sm transition-all duration-200
                ${
                  plan.highlight
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }
              `}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Explore All Pricing / Better Quotation CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 flex flex-col items-center justify-center text-center space-y-6"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 hover:shadow-lg hover:-translate-y-0.5"
          >
            Explore Full Engagement Models
          </Link>
          <p className="text-sm text-slate-500">
            For a better quotation or specific needs?{" "}
            <Link
              href="/contact"
              className="font-medium text-slate-900 transition-colors underline decoration-slate-300 hover:decoration-slate-900 underline-offset-4"
            >
              Contact us for a custom solution.
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
