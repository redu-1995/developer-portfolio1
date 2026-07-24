import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Skills from "@/components/sections/Skills/Skills";
import Experience from "@/components/sections/Experience/Experience";
import Projects from "@/components/sections/Projects/Projects";
import Contact from "@/components/sections/Contact/Contact";
import SectionDivider from "@/components/ui/SectionDivider"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-800">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="hero" className="scroll-mt-20">
          <Hero />
        </section>

        <SectionDivider />

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 scroll-mt-20">
          <About />
        </section>

        <SectionDivider />

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 scroll-mt-20">
          <Skills />
        </section>

        <SectionDivider />

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 scroll-mt-20">
          <Experience />
        </section>

        <SectionDivider />

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 scroll-mt-20">
          <Projects />
        </section>

        <SectionDivider />

        {/* Contact Section */}
        <section id="contact" className="pt-16 md:pt-24 pb-20 scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}