import { Github, Linkedin, Mail, MapPin, type LucideIcon } from "lucide-react";
import { profile } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";

const cards: { label: string; value: string; href?: string; Icon: LucideIcon }[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/katarisreelasya", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "github.com/katarisreelasya", href: profile.github, Icon: Github },
  { label: "Location", value: profile.location, Icon: MapPin },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-glow/10 blur-[130px]" />
      <SectionHeading lines={["LET'S BUILD", "QUALITY SOFTWARE", "TOGETHER"]} eyebrow="Contact" />

      <Reveal kind="text" delay={0.1}>
        <p className="mt-8 max-w-2xl leading-relaxed text-white/90">
          Passionate about quality engineering, automation, and modern software development. Open to collaboration, networking, and exciting career opportunities.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {cards.map(({ label, value, href, Icon }, i) => {
          const inner = (
            <>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sky2/60 text-sky2 shadow-[0_0_18px_rgba(56,189,248,0.3)] transition-colors group-hover:bg-sky2 group-hover:text-bg">
                <Icon size={19} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-xs font-bold">{label}</span>
                <span className="mt-1 block truncate text-sm text-muted">{value}</span>
              </span>
            </>
          );
          const cls = "card-surface group flex items-center gap-5 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-sky2/50 hover:shadow-neon";
          return (
            <Reveal key={label} kind="card" delay={i * 0.08}>
              {href ? (
                <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {inner}
                </a>
              ) : (
                <div className={cls}>{inner}</div>
              )}
            </Reveal>
          );
        })}
      </div>

      <Reveal kind="up" delay={0.2} className="mt-12">
        <MagneticButton href={`mailto:${profile.email}`}>Get In Touch</MagneticButton>
      </Reveal>
    </section>
  );
}
