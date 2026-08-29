import { Section } from "./Section";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "CodeCraft",
    description: "Real-time collaborative IDE for  programming.",
    tech: ["React", "TypeScript", "Convex", "Clerk", "Vercel"],
    website: "https://code-craft-roshan.vercel.app/",
    github: "https://github.com/RoshanKumar9421/code-craft",
    image: "/codecraft.png",
  },
  {
    id: 2,
    title: "CryptoPlace",
    description: "Live crypto market tracker and portfolio manager.",
    tech: ["Node.js", "Express.js", "React", "Tailwind"],
    website: "https://crypto-currency-beta-seven.vercel.app/",
    github: "https://github.com/RoshanKumar9421/CryptoCurrency",
    image: "/cryptoplace.png", 
  },
  {
    id: 3,
    title: "Movie Recommendation",
    description: "ML-based personalized movie recommendation engine.",
    tech: ["Python", "HTML", "CSS"],
    website: "https://github.com/RoshanKumar9421/Movie-Recomendation",
    github: "https://github.com/RoshanKumar9421/Movie-Recomendation",
    image: "https://placehold.co/600x400/png?text=Movie+Recommendation",
  },
  {
    id: 4,
    title: "Mental Health Prediction",
    description: "App to check stress levels and provide mental health insights.",
    tech: ["Python", "Machine Learning", "FastAPI"],
    website: "https://github.com/RoshanKumar9421/MentalHealthPrediction",
    github: "https://github.com/RoshanKumar9421/MentalHealthPrediction",
    image: "/mentalhealth.png",
  },
  {
     id:5,
     title:"Chat Boat",
     description:"Ai ChatBoat for Query In Funny Mode, Angry Mode, Sad Mode",
     tech:["Python","HTML","CSS","Javascript"],
     website:"https://chatboat-ebon.vercel.app/",
     github:"https://github.com/RoshanKumar9421/chatboat.git",
     image:"/chatapp.png",
  },
  {
    id: 6,
    title: "CPU Scheduler Simulator",
    description: "Visualizer and simulator for various OS CPU scheduling algorithms.",
    tech: ["C++"],
    website: "https://github.com/RoshanKumar9421/cpu-scheduler",
    github: "https://github.com/RoshanKumar9421/cpu-scheduler",
    image: "https://placehold.co/600x400/png?text=CPU+Scheduler",
  },
];

export function Projects() {
  return (
    <Section id="projects" className="py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-10 tracking-tight">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative w-full aspect-video overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-foreground border border-border text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Website
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/RoshanKumar9421"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-foreground font-semibold rounded-full hover:bg-muted/80 transition-colors"
        >
          View All on GitHub
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </Section>
  );
}
