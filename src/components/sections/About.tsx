import { highlights } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CodePanel from "@/components/ui/CodePanel";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal kind="image">
          <CodePanel
            file="about_me.ts"
            className="aspect-[5/4] w-full"
            notch="bl"
            lines={[
              "const engineer = {",
              "  name: 'Sree Lasya Katari',",
              "  role: 'SDET',",
              "  builds: ['APIs', 'Web Apps', 'Frameworks'],",
              "  degree: 'B.Tech CSE',",
              "  cgpa: 9.0,",
              "};",
            ]}
          />
        </Reveal>

        <div>
          <SectionHeading lines={["WHO", "AM I?"]} eyebrow="About Me" />
          <Reveal kind="text" delay={0.15}>
            <p className="mt-8 max-w-xl leading-relaxed text-white/90">
              I enjoy both software development and quality engineering, with a stronger interest in designing and building scalable applications, modern backend systems, and full-stack solutions. My background in automation testing and software development enables me to contribute across the entire software development lifecycle, from implementation to quality assurance.
            </p>
          </Reveal>

          <h3 className="mt-10 font-display text-xs font-bold">Key Highlights</h3>
          <span className="dash mt-3" />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h} kind="card" delay={0.07 * i}>
                <li className="card-surface flex h-full items-start gap-3 p-4 text-sm leading-relaxed text-white/90 transition-all duration-500 hover:border-sky2/50 hover:shadow-neon">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky2 shadow-[0_0_8px_#38BDF8]" />
                  {h}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
