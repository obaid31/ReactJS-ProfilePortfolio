import { projects } from "../data/resume";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader index="03" title="Projects" />

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className={`project-card project-card--${p.accent}`}>
            <p className="project-type">{p.type}</p>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <Tag key={t} color={p.accent}>{t}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
