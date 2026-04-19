import { meta, education, certifications } from "../data/resume";
import SectionHeader from "./ui/SectionHeader";

const CONTACT_ITEMS = [
  { icon: "✉️", label: "Email",    value: meta.email,    href: `mailto:${meta.email}` },
  { icon: "📞", label: "Phone",    value: meta.phone,    href: `tel:${meta.phone}` },
  { icon: "💼", label: "LinkedIn", value: "obaidullah-khan-8472971ab", href: meta.linkedin },
  { icon: "📍", label: "Location", value: meta.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeader index="05" title="Contact" />

      <p className="contact-intro">
        Open to Technical writing, Developer experience, Documentation Engineer, Documentation Specialist, Technical Support, and Junior Software
        Development roles. Let's talk.
      </p>

      <div className="contact-grid">
        {CONTACT_ITEMS.map(({ icon, label, value, href }) =>
          href ? (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-icon">{icon}</span>
              <div>
                <p className="contact-label">{label}</p>
                <p className="contact-value">{value}</p>
              </div>
            </a>
          ) : (
            <div key={label} className="contact-card">
              <span className="contact-icon">{icon}</span>
              <div>
                <p className="contact-label">{label}</p>
                <p className="contact-value">{value}</p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Education */}
      <h3 className="subsection-title">Education</h3>
      <div className="edu-list">
        {education.map((e) => (
          <div key={e.degree} className="edu-card">
            <div className="edu-top">
              <div>
                <p className="edu-school">{e.school}</p>
                <p className="edu-degree">{e.degree}</p>
              </div>
              <div className="edu-meta">
                <span>{e.duration}</span>
                <span>📍 {e.location}</span>
              </div>
            </div>
            {e.courses.length > 0 && (
              <div className="edu-courses">
                {e.courses.map((c) => (
                  <span key={c} className="edu-course">{c}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Certifications */}
      <h3 className="subsection-title">Certifications & Courses</h3>
      <div className="cert-list">
        {certifications.map(({ title, provider }) => (
          <div key={title} className="cert-row">
            <span className="cert-title">{title}</span>
            <span className="cert-provider">{provider}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
