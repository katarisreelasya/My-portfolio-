"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="section-pad">
      <SectionHeading lines={["PROFESSIONAL", "JOURNEY"]} eyebrow="Experience" />

      <div ref={ref} className="relative mt-16 pl-10 md:pl-16">
        <div aria-hidden className="absolute bottom-0 left-[11px] top-0 w-px bg-white/10 md:left-[19px]" />
        <motion.div
          aria-hidden
          style={{ scaleY }}
          className="absolute bottom-0 left-[10px] top-0 w-[3px] origin-top rounded-full bg-gradient-to-b from-sky2 to-glow shadow-[0_0_14px_#00BFFF] md:left-[18px]"
        />

        <div className="space-y-12">
          {experience.map((e, i) => (
            <Reveal key={e.company} kind="text" delay={0.05}>
              <div className="relative">
                <span aria-hidden className="absolute -left-10 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-sky2 bg-bg shadow-[0_0_16px_#38BDF8] md:-left-16 md:h-10 md:w-10">
                  <span className="h-2 w-2 rounded-full bg-sky2 md:h-3 md:w-3" />
                </span>
                <article className="card-surface p-7 transition-all duration-500 hover:border-sky2/50 hover:shadow-neon md:p-9">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-base font-bold md:text-xl">{e.role}</h3>
                      <p className="mt-2 text-sky2">{e.company}</p>
                    </div>
                    <span className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-muted">{e.period}</span>
                  </div>
                  <span className="dash mt-6" />
                  <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-white/85">
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sky2 shadow-[0_0_8px_#38BDF8]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {i === 0 && <p className="mt-6 text-xs uppercase tracking-[0.25em] text-sky2">Current</p>}
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
