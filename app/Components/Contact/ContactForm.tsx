"use client";
import React, { useState } from "react";
import { ArrowRight, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
        <CheckCircle className="w-14 h-14 text-green-500" />
        <h3 className="text-2xl font-medium text-slate-900">Message Sent!</h3>
        <p className="text-slate-500 max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}

      <div className="space-y-6">
        {/* Name */}
        <div className="relative group">
          <input
            type="text"
            required
            id="name"
            value={form.name}
            onChange={handleChange}
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
            value={form.email}
            onChange={handleChange}
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
              value={form.company}
              onChange={handleChange}
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
              value={form.projectType}
              onChange={handleChange}
              className="peer w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Select Project Type
              </option>
              <option value="Web Application">Web Application</option>
              <option value="Mobile App">Mobile App</option>
              <option value="System Architecture">System Architecture</option>
              <option value="Tech Consulting">Tech Consulting</option>
              <option value="Other">Other</option>
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
            value={form.message}
            onChange={handleChange}
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
