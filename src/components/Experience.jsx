import { useState, useRef, useEffect } from "react";
import { experience } from "../data/resume";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";

function ExpCard({ job, index }) {
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
      className={`exp-card ${job.featured ? "exp-card--featured" : ""} ${open ? "exp-card--open" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header button — always responds to both click and touch */}
      <button
        className="exp-header"
        onClick={toggle}
        type="button"
        aria-expanded={open}
      >
        <div className="exp-header-left">
          <p className="exp-company">{job.company}</p>
          <h3 className="exp-role">{job.role}</h3>
          <div className="exp-header-meta">
            <span className="exp-date">{job.duration}</span>
            <span className="exp-metadot" />
            <span className="exp-location">{job.location}</span>
          </div>
        </div>
        <div className="exp-header-right">
          {job.featured && <span className="exp-badge">⭐ Featured</span>}
          <span className={`exp-chevron ${open ? "exp-chevron--open" : ""}`}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M5 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </button>

      {/* Preview — shown when collapsed */}
      {!open && (
        <div className="exp-preview">
          <p
            className="exp-preview-line"
            dangerouslySetInnerHTML={{ __html: job.bullets[0] }}
          />
          <p className="exp-tap-hint">Tap to expand →</p>
        </div>
      )}

      {/* Expandable body */}
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
          <ul className="exp-bullets">
            {job.bullets.map((b, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
            ))}
          </ul>
          <div className="tags">
            {job.tags.map(({ label, color }) => (
              <Tag key={label} color={color}>{label}</Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader index="02" title="Experience" />
      <div className="exp-list">
        {experience.map((job, i) => (
          <ExpCard key={job.company} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}
