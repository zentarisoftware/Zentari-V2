"use client";
import React from "react";
import { motion } from "motion/react";
import { Check, X, Info } from "lucide-react";

const plans = [
  {
    id: "fixed",
    name: "Fixed-Price Development",
    subtitle: "One-Time, No Maintenance",
    bestFor: "Projects with strict budgets and tightly defined scopes.",
    howItWorks:
      "We define the entire project scope upfront and determine a flat fee divided across key milestones. You get full code ownership upon delivery.",
    price: "Project-based pricing",
    period: "one-time engagement",
    paymentStructure:
      "Milestone-based (e.g., 30% upfront, 40% dev, 30% delivery)",
    included: [
      "Fixed Scope & Timeline",
      "Custom Software Build",
      "Full Source Code Ownership",
      "Deployment & Setup Assistance",
      "30-Day Bug Fix Warranty",
    ],
    notIncluded: [
      "Long-term server maintenance",
      "Feature additions post-launch",
    ],
    rules:
      "Any new feature requests or scope changes require a separate quote.",
    highlight: false,
    cta: "Request a Fixed Quote",
  },
  {
    id: "monthly",
    name: "Monthly System Development",
    subtitle: "Build-As-You-Go",
    bestFor: "Startups and dynamic projects needing continuous evolution.",
    howItWorks:
      "You retain us on a monthly basis. We iteratively design, build, test, and ship features without needing heavy upfront requirements.",
    price: "Monthly development retainer",
    period: "billed per month",
    paymentStructure: "Flat monthly retainer billed at the start of the cycle.",
    included: [
      "Flexible Scope Adjustments",
      "Continuous Iterative Delivery",
      "Direct Developer Access",
      "Priority Technical Support",
      "Code Ownership (after completion)",
    ],
    notIncluded: ["Large bulk upfront deliveries in a single month"],
    rules: "Minimum 3-Month Commitment to establish team velocity.",
    highlight: true,
    cta: "Start Monthly Dev",
  },
  {
    id: "hybrid",
    name: "Hybrid Model",
    subtitle: "One-Time Build + Monthly Maintenance",
    bestFor:
      "Established businesses wanting initial setup plus long-term stability.",
    howItWorks:
      "A one-time fee to build your core software system, followed by an optional monthly ongoing retainer to handle hosting, updates, and maintenance.",
     price: "One-time build + optional monthly support",
    period: "flexible engagement",
    paymentStructure:
      "Milestones for build + Optional scheduled monthly payments.",
    included: [
      "Initial Comprehensive System Build",
      "Immediate Source Code Ownership",
      "Ongoing Hosting & Uptime Monitoring",
      "Regular Bug Fixes & Minor Tweaks",
      "No Vendor Lock-In",
    ],
    notIncluded: [
      "Major refactors or massive new architectures in monthly phase",
    ],
    rules: "Monthly maintenance is fully optional and can be canceled anytime.",
    highlight: false,
    cta: "Discuss Hybrid Options",
  },
];

const PricingCards = () => {
  return (
    <section className="py-24 bg-white relative" data-scroll-section>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className={`
                relative flex flex-col h-full rounded-3xl border overflow-hidden transition-all duration-300
                ${
                  plan.highlight
                    ? "bg-slate-900 border-slate-800 text-white shadow-2xl lg:-translate-y-4 z-10"
                    : "bg-slate-50 border-slate-200 text-slate-900 shadow-sm hover:shadow-md"
                }
              `}
            >
              {plan.highlight && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500" />
              )}

              <div className="p-8 md:p-10 flex flex-col flex-grow">
                {/* Header Section */}
                <div className="mb-6">
                  {plan.highlight && (
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3
                    className={`text-2xl font-medium mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm tracking-wide ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {plan.subtitle}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-light tracking-tight ${plan.highlight ? "text-white" : "text-slate-900"}`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <span
                    className={`text-sm mt-1 block ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}
                  >
                    / {plan.period}
                  </span>
                </div>

                <div
                  className={`p-4 rounded-xl mb-8 text-sm ${plan.highlight ? "bg-slate-800/50 text-slate-300" : "bg-white text-slate-600 border border-slate-100"}`}
                >
                  <strong
                    className={
                      plan.highlight ? "text-slate-100" : "text-slate-900"
                    }
                  >
                    Best For:
                  </strong>{" "}
                  {plan.bestFor}
                </div>

                {/* Body Details */}
                <div className="space-y-8 flex-grow">
                  <div>
                    <h4
                      className={`text-sm font-semibold mb-2 uppercase tracking-wider ${plan.highlight ? "text-slate-500" : "text-slate-400"}`}
                    >
                      How it works
                    </h4>
                    <p
                      className={`text-sm leading-relaxed ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}
                    >
                      {plan.howItWorks}
                    </p>
                  </div>

                  <div>
                    <h4
                      className={`text-sm font-semibold mb-2 uppercase tracking-wider ${plan.highlight ? "text-slate-500" : "text-slate-400"}`}
                    >
                      Payment Structure
                    </h4>
                    <p
                      className={`text-sm ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}
                    >
                      {plan.paymentStructure}
                    </p>
                  </div>

                  <div>
                    <h4
                      className={`text-sm font-semibold mb-3 uppercase tracking-wider ${plan.highlight ? "text-slate-500" : "text-slate-400"}`}
                    >
                      Included
                    </h4>
                    <ul className="space-y-3">
                      {plan.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <Check
                            className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-blue-400" : "text-slate-800"}`}
                          />
                          <span
                            className={
                              plan.highlight
                                ? "text-slate-300"
                                : "text-slate-600"
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4
                      className={`text-sm font-semibold mb-3 uppercase tracking-wider ${plan.highlight ? "text-slate-500" : "text-slate-400"}`}
                    >
                      Not Included
                    </h4>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <X
                            className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-slate-500" : "text-slate-400"}`}
                          />
                          <span
                            className={
                              plan.highlight
                                ? "text-slate-400"
                                : "text-slate-500"
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.rules && (
                    <div
                      className={`p-4 rounded-xl flex gap-3 items-start text-sm ${plan.highlight ? "bg-indigo-900/20 text-indigo-200" : "bg-blue-50 text-blue-800"}`}
                    >
                      <Info className="w-5 h-5 shrink-0" />
                      <p>{plan.rules}</p>
                    </div>
                  )}
                </div>

                <div className="mt-10">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
