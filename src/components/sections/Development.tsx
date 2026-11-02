import { developmentCards } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CodePanel from "@/components/ui/CodePanel";

export default function Development() {
  return (
    <section id="development" className="section-pad">
      <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading lines={["SOFTWARE", "DEVELOPMENT"]} eyebrow="Engineering" />
          <Reveal kind="text" delay={0.15}>
            <p className="mt-8 max-w-xl leading-relaxed text-white/90">
              Building scalable backend services, secure APIs, and modern web applications using industry-standard technologies and software engineering best practices.
            </p>
          </Reveal>
        </div>
        <Reveal kind="image">
          <CodePanel
            file="OrdersController.cs"
            className="aspect-[16/10] w-full"
            lines={[
              "[Authorize(Roles = \"Admin\")]",
              "[HttpPost(\"api/orders\")]",
              "public async Task<IActionResult> Create(",
              "    OrderDto dto)",
              "{",
              "    var order = await _svc.CreateAsync(dto);",
              "    _log.Information(\"Order created\");",
              "    return CreatedAtAction(nameof(Get), order);",
              "}",
            ]}
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {developmentCards.map((c, i) => (
          <Reveal key={c.title} kind="card" delay={(i % 3) * 0.1}>
            <article className="card-surface group h-full p-7 transition-all duration-500 hover:-translate-y-1 hover:border-sky2/50 hover:shadow-neon">
              <span className="dash mb-6" />
              <h3 className="font-display text-sm font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <li key={t} className="rounded-full border border-sky2/40 px-3 py-1 text-xs text-sky2">{t}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
