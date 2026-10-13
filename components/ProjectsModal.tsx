import { projects } from "@/data/projects";
import { SectionModal } from "@/components/SectionModal";

export function ProjectsModal() {
  return (
    <SectionModal
      id="projects"
      label="My Projects"
      sectionLabel="Portfolio"
      teaserText="Control, Engoryx, CynSeat, and more — life-management, engineering tools, and ticketing in TypeScript and Python."
    >
      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <span className="modal-slug">{project.category}</span>
            <h3 className="modal-heading">{project.name}</h3>
            <p>{project.description}</p>
            <h4 className="modal-subheading">Features</h4>
            <ul className="modal-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <h4 className="modal-subheading">Tech Used</h4>
            <ul className="skill-tags">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl} className="modal-btn" target="_blank" rel="noopener noreferrer">
                  Live site <span aria-hidden="true">&#8599;</span>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} className="modal-btn" target="_blank" rel="noopener noreferrer">
                  Source <span aria-hidden="true">&#8599;</span>
                </a>
              )}
              {project.isPrivate && <span className="project-private">Private repo</span>}
            </div>
          </article>
        ))}
      </div>
    </SectionModal>
  );
}
