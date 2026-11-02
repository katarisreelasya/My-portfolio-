"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";
import SocialLinks from "@/components/ui/SocialLinks";
import { scrollToId } from "@/components/effects/SmoothScroll";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:px-10">
        <div>
          <p className="font-display text-sm font-bold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">Software Development Engineer in Test | Full-Stack Developer</p>
          <p className="mt-4 text-xs text-muted">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <SocialLinks />
          <button
            type="button"
            onClick={() => scrollToId("home")}
            aria-label="Back to top"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-sky2 text-sky2 transition-all hover:-translate-y-1 hover:bg-sky2 hover:text-bg hover:shadow-[0_0_24px_#38BDF8]"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
