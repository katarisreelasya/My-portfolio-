"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Asterisk } from "lucide-react";
import { navItems, profile } from "@/lib/data";
import { scrollToId } from "@/components/effects/SmoothScroll";

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-7 ${
          scrolled ? "border border-white/10 bg-bg/70 shadow-[0_0_30px_rgba(0,191,255,0.08)] backdrop-blur-xl" : "border border-transparent"
        }`}
      >
        <a href="#home" onClick={(e) => go(e, "home")} className="flex items-center gap-2 font-display text-xs font-bold tracking-tight">
          <Asterisk size={18} className="text-sky2" aria-hidden /> {profile.name}
        </a>

        <ul className="hidden items-center gap-7 xl:flex">
          {navItems.map((n) => (
            <li key={n.id} className="relative">
              <a
                href={`#${n.id}`}
                onClick={(e) => go(e, n.id)}
                aria-current={active === n.id ? "page" : undefined}
                className={`text-xs transition-colors ${active === n.id ? "text-white" : "text-muted hover:text-white"}`}
              >
                {n.label}
              </a>
              {active === n.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-2 left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-full bg-sky2 shadow-[0_0_10px_#38BDF8]"
                />
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="rounded-full p-1.5 xl:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-bg/95 p-6 backdrop-blur-xl xl:hidden"
          >
            <ul className="grid grid-cols-2 gap-4">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={(e) => go(e, n.id)}
                    className={`block font-display text-sm ${active === n.id ? "glow-text text-white" : "text-muted"}`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
