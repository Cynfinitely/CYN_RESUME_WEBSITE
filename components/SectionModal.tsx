"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { InkModal } from "@/components/Modal/InkModal";
import { SectionButton } from "@/components/SectionButton";

type SectionModalProps = {
  /** URL hash for this section, e.g. "about" → /#about */
  id: string;
  /** Headline on the teaser card and title of the modal */
  label: string;
  /** Small-caps department slug */
  sectionLabel: string;
  teaserText: string;
  /** Use the wider content column (grids) */
  wide?: boolean;
  children: React.ReactNode;
};

export function SectionModal({ id, label, sectionLabel, teaserText, wide, children }: SectionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  // True while the current history entry is one we pushed, so closing can pop it
  const pushedRef = useRef(false);

  useEffect(() => {
    const sync = () => {
      const matches = window.location.hash === `#${id}`;
      if (!matches) pushedRef.current = false;
      setIsOpen(matches);
    };

    sync();
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, [id]);

  const open = useCallback(() => {
    window.history.pushState(null, "", `#${id}`);
    pushedRef.current = true;
    setIsOpen(true);
  }, [id]);

  const close = useCallback(() => {
    if (pushedRef.current) {
      pushedRef.current = false;
      window.history.back();
      return;
    }

    if (window.location.hash === `#${id}`) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    setIsOpen(false);
  }, [id]);

  return (
    <>
      <SectionButton
        label={label}
        sectionLabel={sectionLabel}
        teaserText={teaserText}
        onClick={open}
      />
      <InkModal isOpen={isOpen} onClose={close} title={label} sectionLabel={sectionLabel} wide={wide}>
        {children}
      </InkModal>
    </>
  );
}
