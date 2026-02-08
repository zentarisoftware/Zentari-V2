"use client";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

export const TypingText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={child}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
