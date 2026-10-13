import { experiences } from "@/data/experience";
import { SectionModal } from "@/components/SectionModal";

export function ExperienceModal() {
  return (
    <SectionModal
      id="experience"
      label="Work Experience"
      sectionLabel="Careers"
      teaserText="From fintech to benefits platforms — 5+ years across Finland, Turkey, and the open web."
    >
      <div className="timeline">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.period}`} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <h3 className="modal-heading">{item.role}</h3>
            <p className="timeline-meta">
              <strong>{item.company}</strong>
              <span>{item.period}</span>
              {item.location && <span>{item.location}</span>}
            </p>
            <ul className="modal-list">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionModal>
  );
}
