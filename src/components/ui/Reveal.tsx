"use client";

import { motion } from "framer-motion";

type Kind = "text" | "image" | "card" | "up";

const variants = {
  text: { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0 } },
  image: { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0 } },
  card: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
  up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
};

type Props = {
  kind?: Kind;
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

/** Scroll reveal: text from left, images from right, cards fade + scale. */
export default function Reveal({ kind = "text", delay = 0, className, children }: Props) {
  return (
    <motion.div
      variants={variants[kind]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
