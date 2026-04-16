"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const MIN_BRAND_MS = 900;
const EXIT_FADE_MS = 380;

type PreloaderPhase = "brand" | "exit";

type FramerPreloaderProps = {
  children: React.ReactNode;
};

export default function FramerPreloader({ children }: FramerPreloaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<PreloaderPhase>("brand");

  const timings = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        minBrandMs: 260,
        exitFadeMs: 240,
      };
    }

    return {
      minBrandMs: MIN_BRAND_MS,
      exitFadeMs: EXIT_FADE_MS,
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    let isCancelled = false;
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];

    const clearTimers = () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };

    const lockScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const unlockScroll = () => {
      document.body.style.overflow = "unset";
    };

    const startTimeline = () => {
      if (isCancelled) return;
      lockScroll();

      const firstStep = setTimeout(() => {
        if (isCancelled) return;
        setPhase("exit");

        const finalStep = setTimeout(() => {
          if (isCancelled) return;
          setIsVisible(false);
          unlockScroll();
        }, timings.exitFadeMs);

        timeoutIds.push(finalStep);
      }, timings.minBrandMs);

      timeoutIds.push(firstStep);
    };

    if (document.readyState === "complete") {
      startTimeline();
    } else {
      const onLoad = () => startTimeline();
      window.addEventListener("load", onLoad, { once: true });
      timeoutIds.push(
        setTimeout(() => {
          if (!isCancelled) startTimeline();
        }, 7000)
      );
    }

    return () => {
      isCancelled = true;
      clearTimers();
      unlockScroll();
    };
  }, [timings.exitFadeMs, timings.minBrandMs]);

  return (
    <>
      <motion.div
        className="site-shell"
        initial={{ opacity: 0, y: 12, scale: 0.995 }}
        animate={
          isVisible
            ? { opacity: 0, y: 12, scale: 0.995 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        transition={{ duration: prefersReducedMotion ? 0.25 : 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="site-preloader"
            data-phase={phase}
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === "exit" ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: timings.exitFadeMs / 1000, ease: [0.4, 0, 0.2, 1] }}
            aria-hidden="true"
          >
            <motion.div
              className="site-preloader__grid"
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: 0,
              }}
            />

            <motion.div
              className="site-preloader__glow"
              animate={{ opacity: [0.46, 0.74, 0.52], scale: [1, 1.03, 1] }}
              transition={{
                duration: 1.1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />

            <motion.div
              className="site-preloader__content"
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0.18 : 0.44, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="site-preloader__logo-full-wrap" aria-hidden="true">
                <Image
                  src="/logo.webp"
                  alt=""
                  width={270}
                  height={96}
                  priority
                  sizes="(max-width: 768px) 180px, 270px"
                  className="site-preloader__logo-full"
                />
              </div>
              <div className="site-preloader__ticks">
                {[0, 1, 2].map((index) => (
                  <motion.span
                    key={index}
                    animate={{ opacity: [0.3, 0.85, 0.4], scaleX: [0.2, 1, 0.7] }}
                    transition={{
                      duration: 0.85,
                      delay: index * 0.1,
                      ease: [0.2, 0.9, 0.2, 1],
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
