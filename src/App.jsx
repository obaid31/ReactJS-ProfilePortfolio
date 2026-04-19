import { useEffect, useState } from "react";
import Nav        from "./components/Nav";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Experience from "./components/Experience";
import Projects   from "./components/Projects";
import Skills     from "./components/Skills";
import Contact    from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  const els = document.querySelectorAll('.exp-card, .project-card, .skill-group, .stat-cell');
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    }),
    { threshold: 0.1 }
  );
  els.forEach(el => io.observe(el));
  return () => io.disconnect();
}, []);

  return (
    <>
      <Nav active={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <span>Built with React · Obaidullah Khan © {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
