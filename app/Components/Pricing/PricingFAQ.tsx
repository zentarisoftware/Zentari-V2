"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you offer discounts for startups or non-profits?",
    answer:
      "We focus on providing immense value through custom software, and while our pricing is standardized across engagement models, we can sometimes adapt the project scope to fit a tight seed budget.",
  },
  {
    question:
      "What happens if we need more features during a fixed-price project?",
    answer:
      "Since fixed-price projects have strict scopes, any new features requested post-signoff will go through a change request. We evaluate the change, provide an updated quote, and adjust the timeline accordingly.",
  },
  {
    question: "Do we really own the source code?",
    answer:
      "Absolutely. Once the final payment for a milestone or the overall project is complete, you receive 100% ownership of the intellectual property (IP), source code, and assets. No vendor lock-in.",
  },
  {
    question: "How do you handle hosting and servers?",
    answer:
      "Under the hybrid model and monthly development model, we assist with managing your hosting environments (e.g. Vercel, AWS). The infrastructure costs are billed directly to your company card.",
  },
  {
    question:
      "Can we switch from the Monthly Dev model to Hybrid once the project stabilizes?",
    answer:
      "Yes! Many clients choose the Monthly System Development model to build version 1.0 of their product, then switch to the Hybrid model for minimal ongoing maintenance once they no longer need rapid feature additions.",
  },
];

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative" data-scroll-section>
      <div className="container relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Everything you need to know about how we manage pricing, ownership,
            and scope.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-colors hover:bg-slate-100"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-slate-900 pr-8">
                  {faq.question}
                </span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-200 text-slate-500">
                  {openIndex === idx ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
