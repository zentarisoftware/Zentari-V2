"use client";
import React from "react";
import { TypingText } from "../UI/TypingText";

const services = [
  {
    id: "web-apps",
    title: "Custom Web Applications",
    description:
      "Robust, scalable, and secure cloud-based applications tailored to your specific business workflows.",
    problems: [
      "Replacing outdated legacy systems that slow you down",
      "Consolidating fragmented data from multiple tools",
      "Creating unique customer portals or SaaS products",
      "Creating unique customer portals or SaaS products",
      "Creating unique customer portals or SaaS products",
    ],
    audience: "SMEs & Startups scaling up",
    outcome: "A centralized, high-performance platform owned by you.",
    cta: "Discuss Web Application",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile experiences that engage users and extend your business reach.",
    problems: [
      "Engaging customers on their most-used devices",
      "Enabling field teams with on-the-go tools",
      "Modernizing customer loyalty and service access",
      "Modernizing customer loyalty and service access",
      "Modernizing customer loyalty and service access",
      "Modernizing customer loyalty and service access",
      "Modernizing customer loyalty and service access",
    ],
    audience: "Consumer brands & Field Service teams",
    outcome: "Seamless mobile experiences with high user retention.",
    cta: "Discuss Mobile Strategy",
  },
  {
    id: "websites",
    title: "Website Design & Development",
    description:
      "High-conversion marketing sites that blend aesthetic excellence with technical performance.",
    problems: [
      "Low conversion rates on current site",
      "Brand doesn't reflect company maturity",
      "Slow load times affecting SEO rankings",
      "Slow load times affecting SEO rankings",
      "Slow load times affecting SEO rankings",
      "Slow load times affecting SEO rankings",
      "Slow load times affecting SEO rankings",
    ],
    audience: "Marketing teams & Growing brands",
    outcome: "A digital storefront that builds trust and drives leads.",
    cta: "Discuss Website Redesign",
  },
  {
    id: "automation",
    title: "System Automation & Tools",
    description:
      "Streamlining operations by connecting your favorite tools and automating repetitive tasks.",
    problems: [
      "Manual data entry causing human error",
      "Disconnect between Sales, Marketing, and Ops tools",
      "Wasted man-hours on repetitive processes",
      "Wasted man-hours on repetitive processes",
      "Wasted man-hours on repetitive processes",
      "Wasted man-hours on repetitive processes",
      "Wasted man-hours on repetitive processes",
    ],
    audience: "Operations & HR Departments",
    outcome: "Reduced operational costs and freed-up employee time.",
    cta: "Discuss Automation",
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
      className=" border-t border-slate-100 last:border-b"
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
          <div className="flex-1 pt-4 space-y-2 flex flex-col">
            <div className="bg-slate-50 p-8  rounded-2xl">
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

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200/60">
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
            <div className="hidden md:block h-40 bg-linear-to-b from-slate-50 to-white"></div>
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
