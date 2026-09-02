export default function DataTable({
  rows,
  keyLabel,
  valueLabel,
}: {
  rows: { key: string; value: string }[];
  keyLabel: string;
  valueLabel: string;
}) {
  return (
    <div className="overflow-x-auto border border-offwhite/10">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-offwhite/10">
            <th className="eyebrow text-offwhite/50 font-medium px-6 py-4">{keyLabel}</th>
            <th className="eyebrow text-offwhite/50 font-medium px-6 py-4 text-right">
              {valueLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.key}
              className={i !== rows.length - 1 ? "border-b border-offwhite/10" : ""}
            >
              <td className="px-6 py-4 text-offwhite/90">{row.key}</td>
              <td className="px-6 py-4 text-right font-display text-gold">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
