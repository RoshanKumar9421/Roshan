import { Section } from "./Section";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "UPchaar-Health Full Stack Developer-Intern",
    type: "Remote",
    date: "April 2026- Present",
    logo: "/upchar.jpeg",
  },
  {
    id: 2,
    title: "Girl Script of Summer of Code 2025- Participant",
    type: "Remote",
    date: "August 2025 - October 2025",
    logo: "/GirlScript.webp",
  },
  {
    id: 3,
    title: "HActoberFest 2025- Participant",
    type: "Remote",
    date: "October 2025 - October 2025",
    logo: "/hactoberfest2024.webp",
  },
];

export function Experience() {
  return (
    <Section id="experience" className="py-12 md:py-16">
      <h2 className="text-3xl font-bold mb-8 tracking-tight">Experience</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex items-center gap-6 p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-muted bg-white">
              <Image
                src={exp.logo}
                alt={exp.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <div className="text-muted-foreground flex items-center gap-2 mt-1">
                <span>{exp.type}</span>
                <span>&bull;</span>
                <span>{exp.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
