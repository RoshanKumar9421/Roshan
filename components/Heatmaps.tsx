"use client";

//mport GitHubCalendar from 'react-github-calendar';
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Section } from "./Section";

export function Heatmaps() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const leetcodeTheme = isDark ? "dark" : "light";
  const codeforcesTheme = isDark ? "dark" : "light";

  return (
    <Section id="activity" className="py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-8 tracking-tight">
        Coding Activity
      </h2>

      <div className="flex flex-col gap-12">
        {/* GitHub */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">GitHub</h3>

          <div className="p-4 border border-border rounded-xl bg-card overflow-x-auto flex justify-center">
            {mounted && (
              <GitHubCalendar
                username="RoshanKumar9421"
                colorScheme={isDark ? "dark" : "light"}
              />
            )}
          </div>
        </div>

        {/* LeetCode */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">LeetCode</h3>

          <div className="p-4 border border-border rounded-xl bg-card overflow-x-auto flex justify-center">
            {mounted && (
              <img
                src={`https://leetcard.jacoblin.cool/Roshan9421?theme=${leetcodeTheme}&font=Inter&ext=heatmap`}
                alt="LeetCode Stats"
                className="w-full max-w-[800px] h-auto object-contain"
              />
            )}
          </div>
        </div>

        {/* Codeforces */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Codeforces</h3>

          <div className="p-4 border border-border rounded-xl bg-card overflow-x-auto flex justify-center">
            {mounted && (
              <img
                src={`https://codeforces-readme-stats.vercel.app/api/card?username=Roshan9421&theme=${codeforcesTheme}&show_icons=true`}
                alt="Codeforces Stats"
                className="w-full max-w-[600px] h-auto object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}