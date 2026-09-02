"use client";

import { useEffect, useState } from "react";
import type { NavSection } from "@/content/property";
import { scrollToId } from "@/lib/lenis";

export default function AnchorNav({ sections }: { sections: NavSection[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-0 z-30 bg-charcoal/90 backdrop-blur border-b border-offwhite/10"
    >
      <ul className="flex gap-6 md:gap-8 overflow-x-auto px-6 py-4 max-w-6xl mx-auto">
        {sections.map((section) => (
          <li key={section.id} className="shrink-0">
            <a
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(section.id);
              }}
              aria-current={activeId === section.id ? "true" : undefined}
              className={`eyebrow transition-colors whitespace-nowrap ${
                activeId === section.id ? "text-gold" : "text-offwhite/50 hover:text-offwhite"
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
