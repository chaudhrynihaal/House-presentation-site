import type { SpecCategory } from "@/content/property";

export default function SpecificationList({ specifications }: { specifications: SpecCategory[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
      {specifications.map((group) => (
        <div key={group.category}>
          <h3 className="font-display text-xl text-gold mb-4 pb-3 border-b border-offwhite/10">
            {group.category}
          </h3>
          <ul className="space-y-2.5">
            {group.items.map((item) => (
              <li key={item} className="flex gap-3 text-offwhite/80 text-sm leading-relaxed">
                <span className="text-gold mt-1 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
