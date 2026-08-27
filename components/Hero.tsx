import { Section } from "./Section";
import { Mail, FileText, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="pt-32 pb-16 md:pt-48 md:pb-32 flex flex-col items-start" id="home">
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center w-full mb-8">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0 border-4 border-muted">
          <Image
            src="/roshan.jpg"
            alt="Roshan Profile Picture"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Roshan
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            DSA in CPP & Competitive Programmer And Learning Ai engineering
          </p>
          <div className="flex items-center gap-2 text-muted-foreground mt-2">
            <MapPin className="w-4 h-4" />
            <span>West Bengal, India</span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl flex flex-col gap-6 text-lg text-muted-foreground mb-10 leading-relaxed">
        <p>
          Hey! I'm a 3rd-year B.Tech Computer Science student at Asansol
          Engineering College, Full-Stack Developer Intern At Upchar Health focused on DSA and competitive programming, and Learning Ai
          Engineering.
        </p>
        <p>
          I build with React, Next.js, Node.js/Express, and Tailwind CSS, with a
          strong DSA foundation. Currently applying for SDE internships and
          always open to new opportunities.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:roshan@example.com"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
        >
          <Mail className="w-5 h-5" />
          Hire me
        </a>
        <a
          href="mailto:roshan@example.com"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground font-semibold rounded-full hover:bg-muted/80 transition-colors"
        >
          Send an Email
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-transparent text-foreground font-semibold rounded-full hover:bg-muted/50 transition-colors"
        >
          <FileText className="w-5 h-5" />
          Resume
        </a>
      </div>
    </Section>
  );
}
