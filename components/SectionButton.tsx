"use client";

type SectionButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  "aria-expanded"?: boolean;
};

export function SectionButton({
  label,
  onClick,
  className = "",
  "aria-expanded": ariaExpanded,
}: SectionButtonProps) {
  return (
    <button
      type="button"
      className={`section-btn ${className}`.trim()}
      onClick={onClick}
      aria-expanded={ariaExpanded}
    >
      <span className="section-btn__label">{label}</span>
      <span className="section-btn__chevron" aria-hidden="true">
        →
      </span>
    </button>
  );
}
