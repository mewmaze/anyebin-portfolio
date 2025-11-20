"use client";
import { motion, useTransform, MotionValue } from "framer-motion";
import { useState, useEffect } from "react";

interface HeaderProps {
  scrollYProgress: MotionValue<number>;
}

export default function Header({ scrollYProgress }: HeaderProps) {
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const [logoColor, setLogoColor] = useState("#111827");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const heroElement = document.getElementById("hero");
      const skillsElement = document.getElementById("skills");
      const projectsElement = document.getElementById("projects");

      if (!heroElement || !skillsElement || !projectsElement) return;

      const heroBottom = heroElement.offsetHeight;
      const skillsTop =
        skillsElement.getBoundingClientRect().top + window.scrollY;
      const projectsTop =
        projectsElement.getBoundingClientRect().top + window.scrollY;

      if (scrollY < heroBottom) {
        setLogoColor("#000000"); // 검정 - Hero
      } else if (scrollY < skillsTop) {
        setLogoColor("#0ABAB5"); // 초록 - About
      } else if (scrollY < projectsTop) {
        setLogoColor("#1E40AF"); // 파랑 - Skills
      } else {
        setLogoColor("#CBD2A4"); // 연두 - Projects
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        style={{ opacity: headerOpacity }}
        className="backdrop-blur-md bg-white/80 px-2 sm:px-8 py-4 flex items-center justify-between shadow-sm"
      >
        <button
          onClick={scrollToTop}
          className="text-lg font-bold transition-colors cursor-pointer"
          style={{
            color: logoColor,
          }}
        >
          {"안예빈's portfolio"}
        </button>
        <nav>
          <ul className="flex gap-4 sm:gap-8">
            {[
              { id: "#about", label: "Aboutme", color: "#0ABAB5" },
              { id: "#skills", label: "Skills", color: "#1E40AF" },
              { id: "#projects", label: "Projects", color: "#CBD2A4" },
            ].map(({ id, label, color }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="text-sm font-medium text-gray-700 transition-colors cursor-pointer hover:font-bold"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#374151";
                  }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
