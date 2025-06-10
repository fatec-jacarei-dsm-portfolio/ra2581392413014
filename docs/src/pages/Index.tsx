
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { PersonalProjects } from "@/components/PersonalProjects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-4xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <PersonalProjects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
