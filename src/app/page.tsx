import SmoothScroll from "@/components/effects/SmoothScroll";
import ScrollProgress from "@/components/effects/ScrollProgress";
import MouseGlow from "@/components/effects/MouseGlow";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Development from "@/components/sections/Development";
import Quality from "@/components/sections/Quality";
import Automation from "@/components/sections/Automation";
import ApiDatabase from "@/components/sections/ApiDatabase";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import AIEngineering from "@/components/sections/AIEngineering";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Development />
        <div id="expertise">
          <Quality />
          <Automation />
          <ApiDatabase />
        </div>
        <Skills />
        <Experience />
        <Projects />
        <AIEngineering />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
