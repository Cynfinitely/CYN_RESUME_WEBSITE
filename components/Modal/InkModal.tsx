"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type InkModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

// inkOpening  : ink (z:52) sweeps forward, covering the screen
// inkRevealing: ink (z:52) sweeps back while content (z:50) fades in behind it
// contentVisible: ink gone, content fully visible
// contentClosing: content fades out, then close immediately (no second ink sweep)
type ModalPhase =
  | "closed"
  | "inkOpening"
  | "inkRevealing"
  | "contentVisible"
  | "contentClosing";

const INK_DURATION_MS = 800;
const CONTENT_FADE_MS = 250;
const REDUCED_MOTION_FADE_MS = 200;

function getInkClass(phase: ModalPhase): string {
  if (phase === "inkRevealing") return "ink-reverse";
  return "ink-forward";
}

export function InkModal({ isOpen, onClose, title, children }: InkModalProps) {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<ModalPhase>("closed");
  const reduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const phaseRef = useRef<ModalPhase>("closed");

  const contentFadeMs = reduceMotion ? REDUCED_MOTION_FADE_MS : CONTENT_FADE_MS;

  phaseRef.current = phase;

  const finishClose = useCallback(() => {
    onClose();
    previousFocusRef.current?.focus();
  }, [onClose]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      setPhase("closed");
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    setPhase(reduceMotion ? "contentVisible" : "inkOpening");
  }, [isOpen, reduceMotion]);

  useEffect(() => {
    if (phase === "contentVisible" && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [phase]);

  const handleClose = useCallback(() => {
    if (phase !== "contentVisible") return;
    setPhase("contentClosing");
  }, [phase]);

  const handleContentAnimationComplete = useCallback(() => {
    if (phaseRef.current !== "contentClosing") return;
    finishClose();
  }, [finishClose]);

  // Handles the CSS sprite-sheet animation end for both ink phases.
  const handleInkAnimationEnd = useCallback(
    (event: React.AnimationEvent<HTMLDivElement>) => {
      if (event.target !== bgLayerRef.current) return;

      if (phaseRef.current === "inkOpening") {
        // Forward sweep finished — screen fully covered. Start the reveal.
        setPhase("inkRevealing");
      } else if (phaseRef.current === "inkRevealing") {
        // Reverse sweep finished — ink is back to the no-ink frame. Show content.
        setPhase("contentVisible");
      }
    },
    [],
  );

  useEffect(() => {
    if (phase !== "contentVisible") return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
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
  }, [phase, handleClose]);

  if (!mounted || !isOpen) return null;

  // Ink is visible during both sweep phases; content is visible once reveal starts.
  const showInk = phase === "inkOpening" || phase === "inkRevealing";
  const showContent =
    phase === "inkRevealing" ||
    phase === "contentVisible" ||
    phase === "contentClosing";

  return createPortal(
    <>
      {/* Ink layer — no AnimatePresence fade; it unmounts cleanly after the
          reverse animation ends at the "no-ink" sprite frame. */}
      {showInk && (
        <div
          className={`cd-transition-layer ${getInkClass(phase)}`}
          aria-hidden="true"
        >
          <div
            ref={bgLayerRef}
            className="bg-layer"
            onAnimationEnd={handleInkAnimationEnd}
          />
        </div>
      )}

      <AnimatePresence>
        {showContent && (
          <motion.div
            key="modal-panel"
            ref={modalRef}
            className="cd-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "contentClosing" ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: contentFadeMs / 1000, ease: "easeInOut" }}
            onAnimationComplete={handleContentAnimationComplete}
          >
            <div className="modal-content">
              <h1 id="modal-title">{title}</h1>
              {children}
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              className="modal-close"
              onClick={handleClose}
              aria-label="Close modal"
            >
              Close Modal
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body,
  );
}

export { INK_DURATION_MS, CONTENT_FADE_MS };
