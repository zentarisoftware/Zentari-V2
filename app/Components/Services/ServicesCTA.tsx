"use client";
import React from "react";

const ServicesCTA = () => {
  return (
    <section className="py-32 bg-white" data-scroll-section>
      <div className="container max-w-4xl text-center">
        <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
          Let’s build something <br /> that scales.
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
          No jargon, no bloated processes. Just custom software solutions built
          to solve your specific business challenges.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 duration-200">
            Discuss Your Project
          </button>
          <button className="px-8 py-4 text-slate-600 font-medium hover:text-slate-900 transition-colors">
            View Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
