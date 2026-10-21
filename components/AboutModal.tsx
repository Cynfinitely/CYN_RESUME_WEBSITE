import { profile } from "@/data/profile";
import { SectionModal } from "@/components/SectionModal";

export function AboutModal() {
  return (
    <SectionModal
      id="about"
      label="About Me"
      sectionLabel="Profile"
      teaserText="Senior Full Stack Developer specializing in Next.js & Azure, building scalable products from Helsinki."
    >
      {profile.about.map(paragraph => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
      <div className="education-block">
        <h3 className="modal-heading">Education</h3>
        <p>
          <strong>{profile.education.degree}</strong>
          <br />
          {profile.education.school} · {profile.education.period}
          <br />
          {profile.education.location}
        </p>
      </div>
    </SectionModal>
  );
}
