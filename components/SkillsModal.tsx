import { skillCategories } from "@/data/skills";
import { SectionModal } from "@/components/SectionModal";

export function SkillsModal() {
  return (
    <SectionModal
      id="skills"
      label="Skills"
      sectionLabel="Technology"
      teaserText="Next.js, TypeScript, Azure Functions, Node.js — full-stack expertise across frontend, backend, and cloud."
      wide
    >
      <div className="skills-grid">
        {skillCategories.map(category => (
          <div key={category.name} className="skill-category">
            <h3 className="modal-heading">{category.name}</h3>
            <ul className="skill-tags">
              {category.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionModal>
  );
}
