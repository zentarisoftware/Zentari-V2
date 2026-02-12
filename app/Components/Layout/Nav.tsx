"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { Menu, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const isMobile = window.innerWidth < 1024;

    // Prevent hiding if the menu is explicitly open
    if (isOpen) {
      setHidden(false);
      return;
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      if (isMobile) {
        // On mobile, only show if we are near the top (remove scroll-up reveal)
        if (latest < 150) {
          setHidden(false);
        }
      } else {
        // Desktop: standard "show on scroll up" behavior
        setHidden(false);
      }
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed w-full px-2 top-0 z-[9999] ${isOpen ? "h-screen pointer-events-auto" : "pointer-events-none"}`}
    >
      <div className="mx-auto w-full max-sm:px-4 max-md:px-6 max-w-7xl flex items-center justify-between bg-white/80 backdrop-blur-md px-4 py-2 md:py-1 rounded-full pointer-events-auto mt-4 md:mt-8 border border-white/20 shadow-sm relative z-50">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-light tracking-tight text-slate-900 ml-2"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-1 px-1.5 py-1.5">
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

        {/* Desktop CTA */}
        <Link
          href="/demo"
          className="hidden lg:block px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors"
        >
          Get a Demo
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{
              opacity: 0,
              clipPath: "circle(0% at 100% 0%)",
              transition: { delay: 0.2 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 pb-6 flex flex-col pointer-events-auto"
          >
            <ul className="flex flex-col gap-6 items-center justify-center flex-1">
              {Nav_items.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-light tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  delay: 0.1 + Nav_items.length * 0.1,
                  duration: 0.4,
                }}
                className="mt-8 w-full max-w-xs"
              >
                <Link
                  href="/demo"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 bg-slate-900 text-white text-lg font-medium rounded-full text-center hover:bg-slate-800 transition-colors"
                >
                  Get a Demo
                </Link>
              </motion.li>
            </ul>

            {/* Footer or extra info for mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-slate-400 text-sm mt-auto"
            >
              Based in Manila, serving globally.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
