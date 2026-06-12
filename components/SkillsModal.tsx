"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { InkModal } from "@/components/Modal/InkModal";
import { SectionButton } from "@/components/SectionButton";

export function SkillsModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SectionButton
        label="Skills"
        sectionLabel="Technology"
        teaserText="Next.js, TypeScript, Azure Functions, Node.js — full-stack expertise across frontend, backend, and cloud."
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
      />
      <InkModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Skills">
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category">
              <h3>{category.name}</h3>
              <ul className="skill-tags">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </InkModal>
    </>
  );
}
