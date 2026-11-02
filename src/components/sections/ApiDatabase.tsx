import { apiDbCards } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CodePanel from "@/components/ui/CodePanel";

export default function ApiDatabase() {
  return (
    <section className="section-pad">
      <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_1fr]">
        <Reveal kind="image" className="order-2 lg:order-1">
          <CodePanel
            file="api_db_validation.sql"
            className="aspect-[5/4] w-full"
            notch="br"
            lines={[
              "// GET /api/orders/1042 -> 200 OK",
              "SELECT status, total",
              "FROM Orders",
              "WHERE OrderId = 1042;",
              "",
              "// Mongo: db.users.findOne({ id })",
              "assert api.total == db.total",
            ]}
          />
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[["200", "Status"], ["JSON", "Schema"], ["100%", "Integrity"]].map(([v, l]) => (
              <div key={l} className="card-surface py-5">
                <p className="glow-text font-display text-xl font-bold">{v}</p>
                <p className="mt-1 text-xs text-muted">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading lines={["API &", "DATABASE", "VALIDATION"]} eyebrow="Backend Quality" />
          <div className="mt-12 space-y-4">
            {apiDbCards.map((c, i) => (
              <Reveal key={c.title} kind="card" delay={i * 0.08}>
                <article className="card-surface group flex flex-col gap-3 p-6 transition-all duration-500 hover:border-sky2/50 hover:shadow-neon sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-sm font-bold">{c.title}</h3>
                    <p className="mt-2 max-w-md text-sm text-muted">{c.desc}</p>
                  </div>
                  <ul className="flex flex-wrap gap-2 sm:justify-end">
                    {c.tags.map((t) => (
                      <li key={t} className="rounded-full border border-sky2/40 px-3 py-1 text-xs text-sky2">{t}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
