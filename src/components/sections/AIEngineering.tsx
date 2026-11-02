"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Layers, Bot, DatabaseZap, Sparkles, MessageSquareCode, type LucideIcon } from "lucide-react";
import { aiCards } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const icons: LucideIcon[] = [MessageSquareCode, Layers, Bot, DatabaseZap, BrainCircuit, Sparkles];

export default function AIEngineering() {
  return (
    <section id="ai" className="section-pad overflow-hidden">
      <div aria-hidden className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/10 blur-[140px]" />
      <SectionHeading lines={["AI &", "MODERN", "ENGINEERING"]} eyebrow="Future Ready" />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aiCards.map((c, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={c.title} kind="card" delay={(i % 3) * 0.1} className={i % 2 ? "lg:translate-y-8" : ""}>
              <motion.article
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                whileHover={{ scale: 1.04 }}
                className="card-surface relative h-full overflow-hidden p-7 transition-[border-color,box-shadow] duration-500 hover:border-sky2/60 hover:shadow-neon"
              >
                <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky2/15 blur-2xl" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-sky2/50 bg-sky2/10 text-sky2 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="relative mt-6 font-display text-sm font-bold">{c.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
