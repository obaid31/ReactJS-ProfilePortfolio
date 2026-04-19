import { useEffect, useRef } from "react";
import { meta } from "../data/resume";

const ROLES = [
  "Technical Writing",
  "API Documentation",
  "Docs-as-Code",
  "Developer Experience",
  "Software Development",
  "Technical Support",
  "Documentation Engineer",
  "Documentation Specialist",
  "Information Security",
];

export default function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = e.clientX + "px";
      glowRef.current.style.top  = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef} />
      <section id="hero" className="hero">
        <p className="eyebrow">
          {meta.available && <span className="available-dot" />}
          Available for new opportunities
        </p>

        <h1 className="hero-name">
          <span className="hero-name__line1">{meta.name.split(" ")[0]}</span>
          <span className="hero-name__line2">{meta.name.split(" ")[1]}</span>
        </h1>

        <p className="hero-tagline">{meta.tagline}</p>

        <div className="hero-roles">
          {ROLES.map((r) => (
            <span key={r} className="role-pill">{r}</span>
          ))}
        </div>

        <div className="hero-cta">
          <button
            className="btn btn--primary"
            onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Experience
          </button>
          <a href={`mailto:${meta.email}`} className="btn btn--ghost">
            Get in touch
          </a>
        </div>

        <div className="award-banner">
          <span className="award-icon">🏆</span>
          {meta.award}
        </div>
      </section>
    </>
  );
}
