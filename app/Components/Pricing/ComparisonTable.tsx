"use client";
import React from "react";
import { motion } from "motion/react";

const tableData = [
  {
    model: "Fixed-Price Development",
    upfront: "High (Milestone payments)",
    monthly: "None",
    ownership: "100% Upon delivery",
    bestFor: "Clearly defined scope, strict budget",
    isRecommended: false,
  },
  {
    model: "Monthly System Dev",
    upfront: "Low (Just first month)",
    monthly: "₱10k – ₱15k",
    ownership: "Immediate & Continuous",
    bestFor: "Evolving startups, flexible scope",
    isRecommended: true,
  },
  {
    model: "Hybrid Model",
    upfront: "High (Initial Build)",
    monthly: "Custom (Maintenance)",
    ownership: "100% Immediate",
    bestFor: "Stability post-launch, ongoing support",
    isRecommended: false,
  },
];

const ComparisonTable = () => {
  return (
    <section className="py-24 bg-slate-50 relative" data-scroll-section>
      <div className="container relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 mb-6"
          >
            Compare Data &amp; Decisions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Decide exactly how you want to invest in your custom software build.
            No vendor lock-in.
          </motion.p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-100 text-slate-900 font-medium">
              <tr>
                <th className="px-6 py-5">Model</th>
                <th className="px-6 py-5">Upfront Investment</th>
                <th className="px-6 py-5">Monthly Commitment</th>
                <th className="px-6 py-5">Code Ownership</th>
                <th className="px-6 py-5">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tableData.map((row, idx) => (
                <tr
                  key={row.model}
                  className={`transition-colors hover:bg-slate-50 ${
                    row.isRecommended ? "bg-blue-50/50" : ""
                  }`}
                >
                  <td className="px-6 py-6 font-medium text-slate-900 flex items-center gap-3">
                    {row.model}
                    {row.isRecommended && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-600">
                        Recommended
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-6">{row.upfront}</td>
                  <td className="px-6 py-6">{row.monthly}</td>
                  <td className="px-6 py-6 font-medium text-slate-800">
                    {row.ownership}
                  </td>
                  <td className="px-6 py-6">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {tableData.map((row, idx) => (
            <motion.div
              key={row.model}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl border bg-white shadow-sm ${
                row.isRecommended
                  ? "border-blue-200 bg-blue-50/30"
                  : "border-slate-200"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-medium text-slate-900">
                  {row.model}
                </h3>
                {row.isRecommended && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-600">
                    Recommended
                  </span>
                )}
              </div>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="grid grid-cols-2 gap-2">
                  <span className="font-medium text-slate-400">Upfront:</span>
                  <span className="text-right text-slate-900">
                    {row.upfront}
                  </span>
                </li>
                <li className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
                  <span className="font-medium text-slate-400">Monthly:</span>
                  <span className="text-right text-slate-900">
                    {row.monthly}
                  </span>
                </li>
                <li className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
                  <span className="font-medium text-slate-400">Ownership:</span>
                  <span className="text-right font-medium text-slate-900">
                    {row.ownership}
                  </span>
                </li>
                <li className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
                  <span className="font-medium text-slate-400">Best For:</span>
                  <span className="text-right text-slate-900">
                    {row.bestFor}
                  </span>
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
