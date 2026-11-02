"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  file?: string;
  lines?: string[];
  className?: string;
  notch?: "br" | "bl" | "none";
  parallax?: boolean;
};

const defaultLines = [
  "describe('checkout flow', () => {",
  "  it('validates API + DB', async () => {",
  "    const res = await api.post('/orders');",
  "    expect(res.status).toBe(201);",
  "    await db.assertRow('orders', res.id);",
  "  });",
  "});",
];

const colorize = (line: string) =>
  line.split(/(\b(?:def|assert|const|await|async|return|export|function|it|describe|expect)\b|'[^']*'|\/\/.*)/g).map((t, i) => {
    if (/^(def|assert|const|await|async|return|export|function|it|describe|expect)$/.test(t)) return <span key={i} className="text-[#c792ea]">{t}</span>;
    if (/^'/.test(t)) return <span key={i} className="text-[#7fdbca]">{t}</span>;
    if (/^\/\//.test(t)) return <span key={i} className="text-muted">{t}</span>;
    return <span key={i}>{t}</span>;
  });

/** Stand-in for the reference photos: a code window inside a notched, rounded frame with parallax. */
export default function CodePanel({ file = "automation.spec.ts", lines = defaultLines, className = "", notch = "br", parallax = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? [40, -40] : [0, 0]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101f] ${className}`}>
      <motion.div style={{ y }} className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(0,191,255,0.3),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(56,189,248,0.18),transparent_50%)]" />
      <motion.div style={{ y }} className="relative flex h-full flex-col p-5 md:p-7">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 text-xs text-muted">{file}</span>
        </div>
        <pre className="overflow-hidden font-mono text-[11px] leading-6 text-white/85 sm:text-xs md:text-sm" aria-hidden>
          {lines.map((l, i) => (
            <div key={i} className="flex gap-4">
              <span className="w-4 select-none text-right text-white/25">{i + 1}</span>
              <code>{colorize(l)}</code>
            </div>
          ))}
          <div className="flex gap-4">
            <span className="w-4" />
            <span className="inline-block h-4 w-2 animate-blink bg-sky2" />
          </div>
        </pre>
      </motion.div>
      {notch !== "none" && (
        <div
          aria-hidden
          className={`absolute bottom-0 h-[22%] w-[38%] bg-bg ${notch === "br" ? "right-0 rounded-tl-[2rem]" : "left-0 rounded-tr-[2rem]"}`}
        />
      )}
    </div>
  );
}
