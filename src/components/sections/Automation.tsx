import { automationBlocks } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CodePanel from "@/components/ui/CodePanel";
import FloatPill from "@/components/ui/FloatPill";

export default function Automation() {
  return (
    <section className="section-pad">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading lines={["TEST", "AUTOMATION"]} eyebrow="Frameworks" />
          <div className="mt-12 space-y-9">
            {automationBlocks.map((b, bi) => (
              <Reveal key={b.label} kind="text" delay={bi * 0.1}>
                <h3 className="font-display text-sm font-bold">{b.label}</h3>
                <span className="dash mt-3" />
                <div className="mt-5 flex flex-wrap gap-3">
                  {b.items.map((it, i) => (
                    <FloatPill key={it} index={i + bi}>{it}</FloatPill>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal kind="image" className="lg:pt-16">
          <CodePanel
            file="pages/login_page.py"
            className="aspect-[4/5] w-full shadow-[0_0_80px_rgba(0,191,255,0.15)] sm:aspect-[5/4] lg:aspect-[4/5]"
            lines={[
              "class LoginPage(BasePage):",
              "    USER = ('id', 'username')",
              "    PASS = ('id', 'password')",
              "",
              "    def login(self, user, pwd):",
              "        self.type(self.USER, user)",
              "        self.type(self.PASS, pwd)",
              "        self.click(self.SUBMIT)",
              "",
              "    @on_failure(screenshot=True)",
              "    def is_dashboard(self):",
              "        return self.visible(self.NAV)",
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
