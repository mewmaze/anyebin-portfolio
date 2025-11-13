"use client";
import { motion, useScroll } from "framer-motion";
import { easeOut } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Header from "@/components/Header";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <div className="relative">
      {/* 메인 히어로 섹션 */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6">
        <motion.div
          className="flex flex-col items-center max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-6xl font-bold text-center leading-tight"
            variants={itemVariants}
            style={{ color: "#0ABAB5" }}
          >
            안예빈 포트폴리오
            <br />
            <span className="text-gray-900">Frontend Developer</span>
          </motion.h1>

          <motion.p
            className="mt-8 text-lg text-gray-600 text-center leading-relaxed"
            variants={itemVariants}
          >
            React와 Next.js로 다양한 프로젝트를 개발해왔습니다.
            <br />
            사용자에게 즐거운 웹 경험을 제공하는 개발자를 꿈꿉니다.
          </motion.p>

          {/* CTA 버튼 */}
          <motion.button
            variants={itemVariants}
            className="mt-10 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#0ABAB5" }}
            onClick={() => {
              const element = document.querySelector("#about");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            스크롤하여 더 보기 ↓
          </motion.button>
        </motion.div>
      </section>

      <Header scrollYProgress={scrollYProgress} />

      {/* 섹션들 */}
      <div className="relative">
        <motion.section id="about">
          <AboutSection />
        </motion.section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </div>
    </div>
  );
}
