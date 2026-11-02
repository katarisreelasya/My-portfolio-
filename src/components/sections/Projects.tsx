"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CodePanel from "@/components/ui/CodePanel";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading lines={["FEATURED", "PROJECTS"]} eyebrow="Selected Work" />

      <div className="mt-16 space-y-10">
        {projects.map((p, i) => (
          <Reveal key={p.title} kind="card">
            <motion.article
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="card-surface group grid gap-8 p-5 transition-[border-color,box-shadow] duration-500 hover:border-sky2/60 hover:shadow-[0_0_0_1px_rgba(0,191,255,0.5),0_0_50px_rgba(0,191,255,0.3)] md:p-8 lg:grid-cols-2"
            >
              <div className={`overflow-hidden rounded-[2rem] ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="transition-transform duration-700 ease-out group-hover:scale-110">
                  <CodePanel file={p.file} lines={p.code} parallax={false} notch="none" className="aspect-[16/11] w-full" />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <span className="font-display text-xs text-sky2">{String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
                <h3 className="display-title mt-3 text-2xl md:text-3xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted">{p.subtitle}</p>

                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/60">Technologies</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full border border-sky2/40 bg-sky2/5 px-3 py-1 text-xs text-sky2">{t}</li>
                  ))}
                </ul>

                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/60">Features</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/85">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sky2 shadow-[0_0_8px_#38BDF8]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <MagneticButton href={p.github} variant="outline" external>
                    <Github size={16} /> GitHub
                  </MagneticButton>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
