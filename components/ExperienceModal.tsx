"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import { InkModal } from "@/components/Modal/InkModal";
import { SectionButton } from "@/components/SectionButton";

export function ExperienceModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SectionButton label="Experience" onClick={() => setIsOpen(true)} />
      <InkModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Work Experience">
        <div className="timeline">
          {experiences.map((item) => (
            <article key={`${item.company}-${item.period}`} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <p className="timeline-meta">
                  <strong>{item.company}</strong>
                  <span>{item.period}</span>
                  {item.location && <span>{item.location}</span>}
                </p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </InkModal>
    </>
  );
}
