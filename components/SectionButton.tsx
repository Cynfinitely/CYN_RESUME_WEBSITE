"use client";

type SectionButtonProps = {
  /** Main headline text shown in bold serif */
  label: string;
  onClick: () => void;
  className?: string;
  "aria-expanded"?: boolean;
  /** Small-caps department slug above the headline (e.g. "Engineering") */
  sectionLabel?: string;
  /** 1–2 sentence teaser body copy */
  teaserText?: string;
};

export function SectionButton({
  label,
  onClick,
  className = "",
  "aria-expanded": ariaExpanded,
  sectionLabel,
  teaserText,
}: SectionButtonProps) {
  return (
    <button
      type="button"
      className={`section-btn ${className}`.trim()}
      onClick={onClick}
      aria-expanded={ariaExpanded}
    >
      {sectionLabel && (
        <span className="section-teaser__dept" aria-hidden="true">
          {sectionLabel}
        </span>
      )}

      <span className="section-teaser__headline">{label}</span>

      {teaserText && (
        <span className="section-teaser__body">{teaserText}</span>
      )}

      <span className="section-teaser__cta" aria-hidden="true">
        Read More &rsaquo;
      </span>
    </button>
  );
}
