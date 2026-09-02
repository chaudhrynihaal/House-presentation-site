import type Lenis from "lenis";

// Module-level singleton so any client component (nav links, etc.) can drive
// scroll without prop-drilling the instance through the tree.
let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis(): Lenis | null {
  return instance;
}

/** Smoothly scrolls to an in-page anchor, falling back to the native
 * behavior if Lenis hasn't mounted yet (e.g. reduced-motion users). */
export function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  if (instance) {
    instance.scrollTo(target, { offset: 0 });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
