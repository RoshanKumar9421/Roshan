import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Socials } from "@/components/Socials";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50"></div>
      <Header />
      <main className="max-w-5xl mx-auto px-6 flex flex-col gap-8 md:gap-16">
        <Hero />
        <Socials />
        <Experience />
        <Projects />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
