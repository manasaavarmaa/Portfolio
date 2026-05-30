import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const roles = [
  "AIML Engineer",
  "Full Stack Developer",
  "AI Application Developer",
  "Data-Driven Problem Solver",
  "Model Optimization Enthusiast",
  "Creative Coder",
  "Lifelong Learner",
];

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting && currentIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentRole[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }

    if (!isDeleting && currentIndex >= currentRole.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);

      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 50);

      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex(0);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [currentIndex, isDeleting, displayText, currentRoleIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Sri Manasa Varma Samanuri
          </h1>

          <div
            className="text-xl md:text-2xl text-foreground mb-8 h-16 flex items-center justify-center"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="inline-block">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"></span>
            </span>
          </div>

          <p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            AI & Machine Learning graduate passionate about building
            intelligent applications, solving real-world problems with data,
            and developing impactful AI-driven solutions.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
