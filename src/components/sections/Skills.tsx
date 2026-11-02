import { skillGroups } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FloatPill from "@/components/ui/FloatPill";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading lines={["TECHNICAL", "EXPERTISE"]} eyebrow="Skills" />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.title} kind="card" delay={(gi % 3) * 0.1} className={g.title === "AI Tools" ? "md:col-span-2 lg:col-span-1" : ""}>
            <article className="card-surface h-full p-7 transition-all duration-500 hover:border-sky2/50 hover:shadow-neon">
              <h3 className="font-display text-sm font-bold">{g.title}</h3>
              <span className="dash mt-3" />
              <ul className="mt-6 flex flex-wrap gap-3">
                {g.items.map((s, i) => (
                  <li key={s}>
                    <FloatPill index={i + gi}>{s}</FloatPill>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
