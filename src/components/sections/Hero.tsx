"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import Particles from "@/components/effects/Particles";
import MagneticButton from "@/components/ui/MagneticButton";
import SocialLinks from "@/components/ui/SocialLinks";
import PortraitFrame from "@/components/ui/PortraitFrame";
import { scrollToId } from "@/components/effects/SmoothScroll";

const heroLines = ["SOFTWARE DEVELOPMENT", "ENGINEER IN TEST"];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div aria-hidden className="grid-bg absolute inset-0 animate-gridmove" />
      <div aria-hidden className="absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-glow/10 blur-[140px]" />
      <div aria-hidden className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full bg-sky2/10 blur-[140px]" />
      <Particles />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-16 pt-32 md:px-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="dash mb-6" />
          <h1 className="display-title text-[clamp(2rem,5.2vw,4.6rem)]">
            {heroLines.map((l, i) => (
              <span key={l} className="block overflow-hidden pb-2">
                <motion.span
                  className="block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/90 md:text-lg"
          >
            Software engineer with expertise in application development, automation testing, API validation, and quality engineering. Passionate about building scalable software solutions and ensuring reliability through engineering excellence.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-8">
            <p className="font-display text-sm font-bold">{profile.name}</p>
            <p className="mt-2 text-sm text-muted">
              {profile.role} · {profile.company} · Hyderabad
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.8 }} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects" onClick={(e) => { e.preventDefault(); scrollToId("projects"); }}>
              View Projects
            </MagneticButton>
            <MagneticButton href={profile.resume} variant="outline" download>
              Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35 }} className="mt-10">
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <PortraitFrame />
        </motion.div>
      </div>
    </section>
  );
}
