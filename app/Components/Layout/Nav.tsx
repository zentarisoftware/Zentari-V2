"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const Nav_items = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Solutions",
    href: "/solutions",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Nav = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed w-full top-0 z-[9999] pointer-events-none"
    >
      <div className="mx-auto w-full max-sm:px-4 max-md:px-6 max-w-7xl flex items-center justify-between bg-transparent backdrop-blur-md px-4 rounded-full pointer-events-auto mt-8">
        {/* Logo */}
        <div className="text-2xl font-light tracking-tight text-slate-900 ml-2">
          Zentari
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-1  px-1.5 py-1.5">
          {Nav_items.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors block"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* get a demo CTA */}
        <Link
          href="/demo"
          className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors"
        >
          Get a Demo
        </Link>
      </div>
    </motion.nav>
  );
};

export default Nav;
