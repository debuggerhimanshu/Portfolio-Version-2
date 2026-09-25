import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Toolchain from "@/components/toolchain/Toolchain";
import Projects from "@/components/projects/Projects";
import Journey from "@/components/journey/Journey";
import Contact from "@/components/contact/Contact";

export default function PortfolioFrame() {
  return (
    <main className="portfolio-frame">
      <Navbar />

      <Hero />

      <About />

      <Toolchain />

      <Projects />

      <Journey />

      <Contact />
    </main>
  );
}