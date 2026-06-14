import { GridPatternDashed } from "@/components/ui/grid-pattern-dashed";
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <SmoothCursor />
      <GridPatternDashed />

      {/* Website Content */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <section id="home" className="scroll-mt-28">
            <Hero />
          </section>

          <section id="about" className="scroll-mt-28">
            <About />
          </section>

          <section id="skills" className="scroll-mt-28">
            <Skills />
          </section>

          <section id="projects" className="scroll-mt-28">
            <Projects />
          </section>

          <section id="certifications" className="scroll-mt-28">
            <Certifications />
          </section>

          <section id="contact" className="scroll-mt-28">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
