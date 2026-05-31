"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Bildung"
          subtitle="Akademischer Hintergrund und Qualifikationen"
        />

        <div className="max-w-3xl mx-auto mt-4">
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
