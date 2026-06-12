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

const EASE = [0.22, 1, 0.36, 1] as const;
const PANEL_DURATION = 0.45;
const REVEAL_DURATION = 0.5;
const FADE_DURATION = 0.2;

export function InkModal({ isOpen, onClose, title, children }: InkModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const reduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const panelDuration = reduceMotion ? FADE_DURATION : PANEL_DURATION;
  const revealDuration = reduceMotion ? FADE_DURATION : REVEAL_DURATION;

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
  }, [isPresent, requestClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence onExitComplete={finishClose}>
      {isPresent && (
        <>
          <motion.div
            key="modal-backdrop"
            className="modal-backdrop"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: panelDuration, ease: EASE }}
          />

          <motion.div
            key="modal-panel"
            ref={modalRef}
            className="cd-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 48, scale: 0.96 }
            }
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 24, scale: 0.98 }
            }
            transition={{ duration: panelDuration, ease: EASE }}
          >
            {!reduceMotion && (
              <motion.div
                className="modal-fold-rule"
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: revealDuration * 0.8, delay: 0.12, ease: EASE }}
              />
            )}
            {reduceMotion && <div className="modal-fold-rule" aria-hidden="true" />}

            <motion.div
              className="modal-content"
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { clipPath: "inset(0 100% 0 0)" }
              }
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { clipPath: "inset(0 0% 0 0)" }
              }
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { clipPath: "inset(0 0 0 100%)" }
              }
              transition={{ duration: revealDuration, delay: reduceMotion ? 0 : 0.08, ease: EASE }}
            >
              <h1 id="modal-title">{title}</h1>
              {children}
            </motion.div>

            <button
              ref={closeButtonRef}
              type="button"
              className="modal-close"
              onClick={requestClose}
              aria-label="Close modal"
            >
              Close Modal
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
