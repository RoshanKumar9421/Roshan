import { Section } from "./Section";

const skills = [
  "C++",
  "C",
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "DSA",
  "Postman",
];

export function TechStack() {
  return (
    <Section id="tech-stack" className="py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-8 tracking-tight">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 bg-muted text-foreground rounded-full border border-border font-medium text-sm hover:border-foreground/50 transition-colors cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}
