"use client";
import React from "react";

const EngagementModels = () => {
  return (
    <section
      className="bg-slate-50 border-t border-slate-200 min-h-screen flex items-center justify-center"
      data-scroll-section
    >
      <div className="container">
        <div className="mb-16 max-w-2xl">
          <h2 className="heading mb-6">
            Flexible Engagement Models
          </h2>
          <p className="text-slate-600">
            We adapt to your business needs. Whether you have a clear scope or
            need ongoing innovation, we have a model that fits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Fixed Price */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
            <h3 className="text-xl font-medium text-slate-900 mb-2">
              Fixed-Price Project
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Best for clearly defined scopes
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Perfect when you know exactly what you need. We agree on scope,
              timeline, and budget upfront. No surprises.
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex items-center gap-2">
                ✔ Detailed Scope of Work
              </li>
              <li className="flex items-center gap-2">
                ✔ Guaranteed delivery date
              </li>
              <li className="flex items-center gap-2">✔ One-time investment</li>
            </ul>
          </div>

          {/* Monthly Retainer */}
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>

            <h3 className="text-xl font-medium mb-2 relative z-10">
              Monthly Retainer
            </h3>
            <p className="text-sm text-slate-400 mb-6 relative z-10">
              Best for agile product teams
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">
              For continuous development, testing, and iterating. We become your
              dedicated tech team without the overhead.
            </p>
            <ul className="text-sm text-slate-400 space-y-2 relative z-10">
              <li className="flex items-center gap-2">✔ Flexible scope</li>
              <li className="flex items-center gap-2">
                ✔ Priority availability
              </li>
              <li className="flex items-center gap-2">
                ✔ Scale up/down as needed
              </li>
            </ul>
          </div>

          {/* Maintenance */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
            <h3 className="text-xl font-medium text-slate-900 mb-2">
              Support & Care
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Best for long-term stability
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Establish peace of mind with guaranteed uptime, security updates,
              and performance monitoring.
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex items-center gap-2">✔ Security patches</li>
              <li className="flex items-center gap-2">✔ Server monitoring</li>
              <li className="flex items-center gap-2">
                ✔ Bug fixes & stability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
