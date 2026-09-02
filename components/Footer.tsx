"use client";

import type { NavSection, Stat } from "@/content/property";
import { scrollToId } from "@/lib/lenis";

export default function Footer({
  title,
  stats,
  sections,
}: {
  title: string;
  stats: Stat[];
  sections: NavSection[];
}) {
  return (
    <footer className="border-t border-offwhite/10 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-12">
          <div>
            <p className="eyebrow text-gold mb-3">Private Presentation</p>
            <h2 className="font-display text-3xl text-offwhite">{title}</h2>
          </div>
          <ul className="flex flex-wrap gap-6">
            {stats.slice(0, 4).map((stat) => (
              <li key={stat.label} className="text-sm text-offwhite/60">
                <span className="text-gold font-display mr-1">{stat.value}</span>
                {stat.label}
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer navigation" className="mb-10">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(section.id);
                  }}
                  className="eyebrow text-offwhite/50 hover:text-gold transition-colors"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-offwhite/30">
          Renders for illustrative purposes. This presentation is confidential and provided for
          private review only.
        </p>
      </div>
    </footer>
  );
}
