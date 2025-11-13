"use client";
import { motion, useTransform, MotionValue } from "framer-motion";

interface HeaderProps {
  scrollYProgress: MotionValue<number>;
}

export default function Header({ scrollYProgress }: HeaderProps) {
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        style={{ opacity: headerOpacity }}
        className="backdrop-blur-md bg-white/80 px-8 py-4 flex items-center justify-between shadow-sm"
      >
        <span className="text-lg font-bold text-gray-900">
          {"안예빈's portfolio"}
        </span>
        <nav>
          <ul className="flex gap-8">
            {[
              { id: "#about", label: "Aboutme" },
              { id: "#skills", label: "Skills" },
              { id: "#projects", label: "Projects" },
            ].map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
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
