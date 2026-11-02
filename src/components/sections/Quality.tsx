import { qualityCards } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Quality() {
  return (
    <section className="section-pad">
      <SectionHeading lines={["QUALITY", "ENGINEERING"]} eyebrow="Expertise" />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {qualityCards.map((c, i) => (
          <Reveal key={c.title} kind="card" delay={(i % 3) * 0.1}>
            <article className="card-surface group relative h-full overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-sky2/50 hover:shadow-neon">
              <span className="absolute right-5 top-4 font-display text-5xl font-extrabold text-white/[0.04] transition-colors group-hover:text-sky2/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="dash mb-6" />
              <h3 className="font-display text-sm font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
