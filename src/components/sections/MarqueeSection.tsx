"use client";

const techStack = [
  "Python", "TypeScript", "React", "Next.js", "FastAPI",
  "PostgreSQL", "Docker", "Redis", "Node.js", "Tailwind CSS",
  "Python", "TypeScript", "React", "Next.js", "FastAPI",
  "PostgreSQL", "Docker", "Redis", "Node.js", "Tailwind CSS",
];

export default function MarqueeSection() {
  return (
    <div
      className="overflow-hidden border-y py-4"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      aria-hidden="true"
    >
      <div className="flex marquee-track whitespace-nowrap">
        {techStack.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="mono-label px-6 text-xs tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}
            >
              {item}
            </span>
            <span
              className="text-xs select-none"
              style={{ color: "var(--red)", paddingRight: 2 }}
            >
              ×
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
