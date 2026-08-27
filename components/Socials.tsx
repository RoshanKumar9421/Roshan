import { Section } from "./Section";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/RoshanKumar9421",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/roshankumaryadav-/",
    icon: FaLinkedin,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Roshan9421/",
    icon: SiLeetcode,
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/Roshan9421",
    icon: SiCodeforces,
  },
  {
    name: "Twitter",
    url: "https://x.com/cseroshan2028",
    icon: FaTwitter,
  },
  {
    name: "Email",
    url: "yadavroshankumar8271@gmail.com",
    icon: Mail,
  },
];

export function Socials() {
  return (
    <Section id="socials" className="py-12 md:py-16">
      <h2 className="text-2xl font-bold mb-6">Here are my socials:</h2>
      <div className="flex flex-wrap gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"
          >
            <social.icon className="w-5 h-5" />
            <span className="font-medium">{social.name}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
