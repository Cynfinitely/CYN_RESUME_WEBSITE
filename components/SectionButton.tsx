"use client";

type SectionButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

export function SectionButton({ label, onClick, className = "" }: SectionButtonProps) {
  return (
    <button type="button" className={`section-btn ${className}`.trim()} onClick={onClick}>
      <span>{label}</span>
    </button>
  );
}
