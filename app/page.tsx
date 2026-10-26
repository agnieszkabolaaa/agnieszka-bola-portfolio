import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Build from "@/components/Build";
import Value from "@/components/Value";
import Projects from "@/components/Projects";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-bg">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="hero-atmosphere absolute inset-0" />
        <div className="hero-grid absolute inset-0" />
        <div className="absolute left-[-20rem] top-[-8rem] h-[36rem] w-[36rem] animate-soft-drift rounded-full bg-[radial-gradient(circle_at_center,rgba(255,126,65,0.26)_0%,rgba(255,126,65,0)_74%)]" />
      </div>
      <Nav />
      <Hero />
      <Value />
      <Build />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
