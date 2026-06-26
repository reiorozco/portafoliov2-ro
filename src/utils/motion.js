import { useEffect, useState } from "react";

// Respect the user's "reduce motion" OS/browser setting (WCAG 2.3.3).
const QUERY = "(prefers-reduced-motion: reduce)";

// One-shot read — for imperative animation setup (GSAP useGSAP callbacks).
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia(QUERY).matches;

// Reactive hook — for components that must respond if the setting changes
// (e.g. the per-frame 3D particle loop).
export const useReducedMotion = () => {
  const [reduced, setReduced] = useState(prefersReducedMotion);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia(QUERY);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
};
