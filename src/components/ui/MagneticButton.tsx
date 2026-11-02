"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: "solid" | "outline";
  external?: boolean;
  download?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
};

export default function MagneticButton({ children, href, variant = "solid", external, download, onClick, className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 });
  const sy = useSpring(y, { stiffness: 220, damping: 16 });

  const onMove = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky2";
  const styles =
    variant === "solid"
      ? "bg-sky2 text-bg shadow-[0_0_24px_rgba(56,189,248,0.5)] hover:shadow-[0_0_40px_rgba(0,191,255,0.8)]"
      : "border border-sky2 text-sky2 hover:shadow-[0_0_28px_rgba(56,189,248,0.5)]";

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onClick={onClick}
      download={download}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </motion.a>
  );
}
