"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { InkModal } from "@/components/Modal/InkModal";
import { SectionButton } from "@/components/SectionButton";

export function ProjectsModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SectionButton
        label="My Projects"
        sectionLabel="Portfolio"
        teaserText="Control, CynSeat, and more — life-management, ticketing, and tools in TypeScript and Python."
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
      />
      <InkModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Projects">
        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <div className="project-links">
                <a href={project.githubUrl} className="btn2" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} className="btn2" target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                )}
              </div>
              <p>{project.description}</p>
              <h6>Features</h6>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <h6>Tech Used</h6>
              <ul className="skill-tags inline-tags">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </InkModal>
    </>
  );
}
