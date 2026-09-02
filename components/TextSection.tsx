import type { ReactNode } from "react";

export default function TextSection({
  eyebrow,
  heading,
  body,
  children,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow text-gold mb-4">{eyebrow}</p> : null}
      <h2 className="font-display text-4xl md:text-5xl tracking-tight text-offwhite mb-6">{heading}</h2>
      <p className="text-offwhite/75 leading-relaxed text-base md:text-lg">{body}</p>
      {children}
    </div>
  );
}
