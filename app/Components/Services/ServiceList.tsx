"use client";
import React from "react";
import { TypingText } from "../UI/TypingText";

const services = [
  {
    id: "web-apps",
    title: "Custom Web Applications",
    description:
      "Secure, scalable web platforms built around your exact business processes — designed to improve efficiency and support long-term growth.",
    problems: [
      "Legacy systems slowing down operations",
      "Fragmented data across multiple tools",
      "Limited scalability as the business grows",
      "Lack of ownership over critical systems",
    ],
    audience: "Growing SMEs & Scaling Startups",
    outcome: "A centralized, scalable platform fully tailored to your operations.",
    cta: "Build Your Web Application",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description:
      "High-performance mobile applications that strengthen customer engagement and empower teams on the go.",
    problems: [
      "Low customer engagement on mobile",
      "Limited access to services outside office hours",
      "Inefficient field team coordination",
      "Missed opportunities for digital loyalty programs",
    ],
    audience: "Consumer Brands & Field Operations Teams",
    outcome: "Seamless mobile experiences that increase retention and operational efficiency.",
    cta: "Launch Your Mobile App",
  },
  {
    id: "websites",
    title: "Website Design & Development",
    description:
      "Conversion-focused websites that elevate your brand, build credibility, and generate qualified leads.",
    problems: [
      "Low conversion rates and poor user experience",
      "Outdated branding that weakens trust",
      "Slow performance affecting SEO and rankings",
      "Difficulty updating or managing site content",
    ],
    audience: "Marketing Teams & Growing Brands",
    outcome: "A high-performing digital presence that attracts and converts customers.",
    cta: "Upgrade Your Website",
  },
  {
    id: "automation",
    title: "System Automation & Integration",
    description:
      "Custom automation and system integrations that eliminate repetitive work and connect your entire business ecosystem.",
    problems: [
      "Manual processes consuming valuable time",
      "Data silos between departments",
      "Frequent human errors in reporting and operations",
      "Inefficient handoffs between teams",
    ],
    audience: "Operations, HR & Management Teams",
    outcome: "Streamlined operations with reduced costs and improved productivity.",
    cta: "Automate Your Operations",
  },
];


const ServiceItem = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className=" border-t border-slate-100 last:border-b "
      data-scroll-section
    >
      <div className="container">
        <div
          className={`flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-10rem)] gap-16 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          {/* Title & Description Side */}
          <div className="flex-1">
            <span className="text-xs font-bold text-slate-400 mb-4 block">
              0{index + 1}
            </span>
            <div className="min-h-[3rem] mb-6">
              <TypingText
                text={service.title}
                className="text-3xl md:text-5xl font-light text-slate-900 leading-tight block"
              />
            </div>
            <div className="min-h-[5rem] mb-8">
              <TypingText
                text={service.description}
                className="text-lg text-slate-600 leading-relaxed max-w-md block"
                delay={0.2}
              />
            </div>

            <a
              href="#contact"
              className="inline-flex items-center text-sm font-medium text-slate-900 border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-300 transition-all"
            >
              {service.cta}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Details Side */}
          <div className="flex-1 pt-4 space-y-2 flex flex-col ">
            <div className="bg-slate-100 p-8  rounded-2xl">
              <div className="mb-8">
                <h4 className="text-xl font-bold uppercase tracking-wider text-slate-900 mb-6">
                  Problems Solved
                </h4>
                <ul className="space-y-3">
                  {service.problems.map((problem, i) => (
                    <li
                      key={i}
                      className="flex items-start text-base text-slate-600"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-slate-400 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200/60 ">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Ideal For
                  </h4>
                  <p className="text-sm text-slate-900">{service.audience}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Typical Outcome
                  </h4>
                  <p className="text-sm text-slate-900">{service.outcome}</p>
                </div>
              </div>
            </div>
            {/* mirror effect */}
            <div className="hidden md:block h-40 bg-linear-to-b from-slate-100 to-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceList = () => {
  return (
    <section className="bg-white">
      {services.map((service, index) => (
        <ServiceItem key={service.id} service={service} index={index} />
      ))}
    </section>
  );
};

export default ServiceList;
