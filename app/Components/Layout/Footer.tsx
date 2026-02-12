import React from "react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "#" },
      { label: "Mobile Apps", href: "#" },
      { label: "AI Solutions", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="pt-20 bg-white text-slate-900 overflow-hidden">
      <div className="container">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-10">
          <div className="max-w-xs">
            <h3 className="text-3xl font-medium tracking-tight">
              Experience the future of digital.
            </h3>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-24">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4 className="font-semibold">{column.title}</h4>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-slate-500 hover:text-slate-900 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Big Text */}
        <div className="w-full items-center mt-10 select-none pointer-events-none">
          <h1 className="text-[15vw] font-squada-one leading-[0.8] font-bold tracking-wider text-slate-900 uppercase">
            Zentari
          </h1>
          <h2 className="text-2xl text-slate-400 tracking-wider">Tech Solutions</h2>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-100 mt-10">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-tighter">Zentari</span>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <Link
              href="#"
              className="text-sm text-slate-500 hover:text-slate-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-slate-500 hover:text-slate-900"
            >
              Terms of Service
            </Link>
            <p className="text-sm text-slate-400 ml-4">
              © {new Date().getFullYear()} Zentari.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
