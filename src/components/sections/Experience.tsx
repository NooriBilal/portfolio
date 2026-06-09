"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: "var(--background-soft)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Berufserfahrung"
          subtitle="Mein beruflicher Werdegang — Positionen, Projekte und Errungenschaften"
        />

        <div className="max-w-3xl mx-auto mt-4">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={`${exp.company}-${index}`}
              title={exp.role}
              subtitle={exp.company}
              period={exp.period}
              description={exp.description}
              technologies={exp.technologies}
              current={exp.current}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
