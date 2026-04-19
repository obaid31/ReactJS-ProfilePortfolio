import { experience } from "../data/resume";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader index="02" title="Experience" />

      {experience.map((job) => (
        <div
          key={job.company}
          className={`exp-card ${job.featured ? "exp-card--featured" : ""}`}
        >
          <div className="exp-top">
            <div>
              <p className="exp-company">{job.company}</p>
              <h3 className="exp-role">{job.role}</h3>
            </div>
            <div className="exp-meta">
              <span className="exp-date">{job.duration}</span>
              <span className="exp-location">📍 {job.location}</span>
            </div>
          </div>

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
      ))}
    </section>
  );
}
