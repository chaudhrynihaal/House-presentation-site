import type { Stat } from "@/content/property";

export default function StatBlock({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-offwhite/10 border border-offwhite/10">
      {stats.map((stat) => (
        <div key={stat.label} className="px-6 py-8 text-center">
          <p className="font-display text-3xl md:text-4xl text-gold mb-2">{stat.value}</p>
          <p className="eyebrow text-offwhite/60">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
