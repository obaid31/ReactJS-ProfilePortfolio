import { about, stats } from "../data/resume";
import SectionHeader from "./ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader index="01" title="About" />

      <div className="about-grid">
        <div className="about-text">
          {about.bio.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>

        <ul className="info-list">
          {about.info.map(({ key, value, highlight }) => (
            <li key={key} className="info-row">
              <span className="info-key">{key}</span>
              <span className={`info-val ${highlight ? "info-val--highlight" : ""}`}>
                {value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stats */}
      <div className="stats-row">
        {stats.map(({ value, label }) => (
          <div key={label} className="stat-cell">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
