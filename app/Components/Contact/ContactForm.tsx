"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, ArrowRight, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // This is just a UI state demo
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        {/* Name */}
        <div className="relative group">
          <input
            type="text"
            required
            id="name"
            className="peer w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-4 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
          >
            Your Name
          </label>
        </div>

        {/* Email */}
        <div className="relative group">
          <input
            type="email"
            required
            id="email"
            className="peer w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-4 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
          >
            Work Email
          </label>
        </div>

        {/* Company & Type Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <input
              type="text"
              id="company"
              className="peer w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder=" "
            />
            <label
              htmlFor="company"
              className="absolute left-4 top-4 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
            >
              Company (Optional)
            </label>
          </div>

          <div className="relative group">
            <select
              id="projectType"
              className="peer w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled selected>
                Select Project Type
              </option>
              <option defaultValue="web-development">Web Application</option>
              <option defaultValue="mobile-app">Mobile App</option>
              <option defaultValue="system-architecture">System Architecture</option>
              <option defaultValue="consulting">Tech Consulting</option>
              <option defaultValue="other">Other</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ArrowRight className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="relative group">
          <textarea
            id="message"
            required
            rows={6}
            className="peer w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
            placeholder=" "
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-4 top-4 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1 pointer-events-none"
          >
            Tell us about your goals...
          </label>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-slate-400">
          Your information is secure. We usually respond within 24 hours.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Start the Conversation
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
