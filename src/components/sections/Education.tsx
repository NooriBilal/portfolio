"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-28" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle title="Bildung" num="// 04" />
        <div className="max-w-3xl">
          {education.map((edu, index) => (
            <TimelineItem
              key={`${edu.institution}-${index}`}
              title={edu.degree}
              subtitle={edu.institution}
              period={edu.period}
              description={edu.description}
              pending={edu.pending}
              pendingNote={edu.pendingNote}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
