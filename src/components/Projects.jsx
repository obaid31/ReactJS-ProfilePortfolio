import { useState, useRef, useEffect } from "react";
import { projects } from "../data/resume";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  const toggle = (e) => {
    e.stopPropagation();
    setOpen((o) => !o);
  };

  return (
    <div
      className={`project-card project-card--${project.accent} ${open ? "project-card--open" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <button
        className="exp-header"
        onClick={toggle}
        type="button"
        aria-expanded={open}
      >
        <div className="exp-header-left">
          <p className="exp-company">{project.type}</p>
          <h3 className="exp-role">{project.title}</h3>
          {/* Tags always visible in header */}
          <div className="tags" style={{ marginTop: "0.5rem" }}>
            {project.tags.map((t) => (
              <Tag key={t} color={project.accent}>{t}</Tag>
            ))}
          </div>
        </div>
        <div className="exp-header-right">
          <span className={`exp-chevron ${open ? "exp-chevron--open" : ""}`}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M5 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </button>

      {/* Collapsed hint */}
      {!open && (
        <div className="exp-preview">
          <p className="exp-tap-hint">Tap to read more →</p>
        </div>
      )}

      {/* Expanded body — description only */}
      <div
        className="exp-body"
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        ref={bodyRef}
      >
        <div className="exp-body-inner">
          <p className="project-desc">{project.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader index="03" title="Projects" />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
