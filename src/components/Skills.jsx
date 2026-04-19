import { skills } from "../data/resume";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader index="04" title="Skills" />

      <div className="skills-grid">
        {skills.map(({ group, color, items }) => (
          <div key={group} className="skill-group">
            <h4 className="skill-group-title">{group}</h4>
            <div className="tags">
              {items.map((item) => (
                <Tag key={item} color={color}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
