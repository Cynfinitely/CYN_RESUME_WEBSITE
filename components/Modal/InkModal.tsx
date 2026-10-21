"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

type InkModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  /** Small-caps department slug shown in the top bar */
  sectionLabel?: string;
  /** Use the wider content column (grids) */
  wide?: boolean;
  children: React.ReactNode;
};

const EASE = [0.22, 1, 0.36, 1] as const;
const PANEL_DURATION = 0.25;
const FADE_DURATION = 0.15;

const FOCUSABLE =
  'a[href], button:not([disabled]), iframe, textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function InkModal({
  isOpen,
  onClose,
  title,
  sectionLabel,
  wide,
  children,
}: InkModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const finishClose = useCallback(() => {
    document.body.style.overflow = "";
    onClose();
    previousFocusRef.current?.focus();
  }, [onClose]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      setIsPresent(true);
      return;
    }

    setIsPresent(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isPresent || !closeButtonRef.current) return;
    closeButtonRef.current.focus();
  }, [isPresent]);

  const requestClose = useCallback(() => {
    setIsPresent(false);
  }, []);

  useEffect(() => {
    if (!isPresent) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        requestClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable =
        modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isPresent, requestClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence onExitComplete={finishClose}>
      {isPresent && (
        <motion.div
          key="modal-panel"
          ref={modalRef}
          className="cd-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          transition={{
            duration: reduceMotion ? FADE_DURATION : PANEL_DURATION,
            ease: EASE,
          }}
        >
          <div className="modal-bar">
            <div className="modal-bar__inner">
              <span className="modal-slug">{sectionLabel}</span>
              <button
                ref={closeButtonRef}
                type="button"
                className="modal-btn"
                onClick={requestClose}
              >
                Close <span aria-hidden="true">&#10005;</span>
              </button>
            </div>
          </div>

          {/* Focusable so keyboard users can scroll sections with no links */}
          <div
            className="modal-content"
            tabIndex={0}
            role="group"
            aria-labelledby={titleId}
          >
            <div
              className={
                wide ? "modal-column modal-column--wide" : "modal-column"
              }
            >
              <h2 id={titleId} className="modal-title">
                {title}
              </h2>
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
