"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { InkModal } from "@/components/Modal/InkModal";
import { SectionButton } from "@/components/SectionButton";

export function AboutModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SectionButton label="About Me" onClick={() => setIsOpen(true)} />
      <InkModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="About Me">
        <div className="about-content">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <div className="education-block">
            <h3>Education</h3>
            <p>
              <strong>{profile.education.degree}</strong>
              <br />
              {profile.education.school} · {profile.education.period}
              <br />
              {profile.education.location}
            </p>
          </div>
        </div>
      </InkModal>
    </>
  );
}
