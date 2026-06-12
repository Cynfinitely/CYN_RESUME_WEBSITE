"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type InkModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function InkModal({ isOpen, onClose, title, children }: InkModalProps) {
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setClosing(false);
      setShowContent(false);
      const timer = window.setTimeout(() => setShowContent(true), 800);
      document.body.style.overflow = "hidden";
      return () => window.clearTimeout(timer);
    }

    document.body.style.overflow = "";
    return undefined;
  }, [isOpen]);

  useEffect(() => {
    if (showContent && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [showContent]);

  const handleClose = useCallback(() => {
    setClosing(true);
    setShowContent(false);
    window.setTimeout(() => {
      setClosing(false);
      onClose();
      previousFocusRef.current?.focus();
    }, 800);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, handleClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={`cd-transition-layer visible ${closing ? "closing" : "opening"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          >
            <div className="bg-layer" />
          </motion.div>

          {showContent && (
            <motion.div
              className="cd-modal visible"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
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
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
