"use client";
import { motion, useScroll } from "framer-motion";
import { easeOut } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import Head from "next/head";

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
    <>
      <Head>
        <meta property="og:title" content="안예빈 포트폴리오" />
        <meta
          property="og:description"
          content="React와 Next.js로 다양한 프로젝트를 개발한 프론트엔드 개발자 포트폴리오"
        />
        <meta property="og:image" content="/portfolio_img.png" />
        <meta
          property="og:url"
          content="https://anyebin-portfolio.vercel.app/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <div className="relative">
          <section
            id="hero"
            className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6"
          >
            <motion.div
              className="flex flex-col items-center max-w-3xl w-full"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight"
                variants={itemVariants}
                style={{ color: "#0ABAB5" }}
              >
                안예빈 포트폴리오
                <br />
                <span className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl">
                  Frontend Developer
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-600 text-center leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                <span className="block">문제가 발생했을 때 원인을 먼저 이해하려는 프론트엔드 개발자입니다.</span>
                <span className="block">동작하는 코드에서 멈추지 않고,</span>
                <span className="block">왜 이렇게 동작하는지를 파고드는 개발을 지향합니다.</span>
              </motion.p>

              <motion.button
                variants={itemVariants}
                className="mt-8 sm:mt-10 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-white text-sm sm:text-base transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
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

            <motion.section id="skills">
              <Skills />
            </motion.section>

            <motion.section id="projects">
              <Projects />
            </motion.section>
          </div>

          <footer
            className="py-6 text-center text-sm border-t"
            style={{
              backgroundColor: "#f3ede5",
              borderColor: "#E5DDD5",
              color: "#957C62",
            }}
          >
            © 2025 Yebin An. All rights reserved.
          </footer>
        </div>
      </main>
    </>
  );
}
