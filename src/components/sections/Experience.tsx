"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle title="Berufserfahrung" num="// 03" />

        <div className="max-w-3xl">
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
