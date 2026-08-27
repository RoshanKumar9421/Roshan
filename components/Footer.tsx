import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border mt-12 py-12 text-center text-muted-foreground">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
        <p className="text-sm md:text-base max-w-md">
          That's a wrap... built with a lot of tea and late-night debugging.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/RoshanKumar9421"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/roshankumaryadav-/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/cseroshan2028"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
          <a
            href="yadavroshankumar8271@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs opacity-75 mt-4">
          &copy; {new Date().getFullYear()} Roshan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
