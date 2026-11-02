"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const badges = [
  { label: "Python", pos: "-left-3 top-[8%] sm:-left-8" },
  { label: "Selenium", pos: "-right-2 top-[16%] sm:-right-8" },
  { label: "ASP.NET Core", pos: "-left-2 top-[48%] sm:-left-12" },
  { label: "PyTest", pos: "-right-2 top-[56%] sm:-right-10" },
  { label: "Angular", pos: "-left-1 bottom-[14%] sm:-left-8" },
  { label: "Postman", pos: "right-2 -bottom-3 sm:right-4" },
];

/** Hero portrait: asymmetric masked frame, layered glow, glass caption and floating tech badges. */
export default function PortraitFrame() {
  return (
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-full max-w-[430px]"
    >
      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 22 }} className="group relative">
        {/* depth layers */}
        <div aria-hidden className="absolute -inset-8 rounded-full bg-glow/20 blur-[90px]" />
        <div aria-hidden className="absolute -bottom-5 -left-5 h-full w-full rounded-tl-[5rem] rounded-br-[5rem] rounded-bl-3xl rounded-tr-3xl border border-sky2/30" />
        <div aria-hidden className="absolute -right-4 -top-4 h-1/2 w-1/2 rounded-tr-[4rem] border-r-2 border-t-2 border-sky2/60 shadow-[8px_-8px_30px_-10px_rgba(0,191,255,0.6)]" />

        {/* masked image container with pulsing neon border */}
        <div className="portrait-pulse relative aspect-[4/5] overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] rounded-bl-3xl rounded-tr-3xl border border-sky2/60 bg-card transition-shadow duration-500 group-hover:shadow-[0_0_0_1px_rgba(56,189,248,0.8),0_0_70px_rgba(0,191,255,0.55)]">
          <Image
            src="/lasya.png"
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(max-width: 1024px) 80vw, 430px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,191,255,0.18),transparent_55%)] mix-blend-screen" />

          {/* notch, echoing the reference frames */}
          <div aria-hidden className="absolute right-0 top-0 h-[12%] w-[30%] rounded-bl-[2rem] bg-bg" />

          {/* glassmorphism caption */}
          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-display text-xs font-bold">{profile.name}</p>
                <p className="mt-1 text-xs text-sky2">SDET · Full-Stack Developer</p>
              </div>
              <span className="flex items-center gap-2 text-[10px] text-muted">
                <span aria-hidden className="h-2 w-2 animate-pulse rounded-full bg-[#27c93f] shadow-[0_0_8px_#27c93f]" />
                Hyderabad
              </span>
            </div>
          </div>
        </div>

        {/* floating tech badges */}
        {badges.map((b, i) => (
          <span
            key={b.label}
            style={{ animationDelay: `${i * 0.6}s` }}
            className={`absolute z-10 animate-float rounded-full border border-sky2/50 bg-card/60 px-3.5 py-1.5 text-[11px] text-sky2 shadow-neon backdrop-blur-md sm:text-xs ${b.pos}`}
          >
            {b.label}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
