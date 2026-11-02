"use client";

import { motion } from "framer-motion";

type Props = { lines: string[]; eyebrow?: string; className?: string };

/** Glowing display heading; each line slides up out of a mask with a stagger. */
export default function SectionHeading({ lines, eyebrow, className = "" }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.14 }}
      className={className}
    >
      {eyebrow && (
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-sky2"
        >
          <span className="dash" /> {eyebrow}
        </motion.div>
      )}
      <h2 className="display-title text-[clamp(2rem,5.5vw,4.5rem)]">
        {lines.map((l) => (
          <span key={l} className="block overflow-hidden pb-1">
            <motion.span
              className="block"
              variants={{ hidden: { y: "110%", opacity: 0 }, show: { y: 0, opacity: 1 } }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {l}
            </motion.span>
          </span>
        ))}
      </h2>
    </motion.div>
  );
}
