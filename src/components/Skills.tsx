"use client";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const skillsData = [
  {
    icon: "⚛️",
    title: "React",
    details: ["Hooks & Context API", "상태 관리 패턴", "컴포넌트 재사용성"],
  },
  {
    icon: "▲",
    title: "Next.js",
    details: ["Server Components", "SSR / SSG 최적화", "App Router"],
  },
  {
    icon: "🔷",
    title: "TypeScript",
    details: ["타입 안전성", "제네릭 활용", "인터페이스 설계"],
  },
  {
    icon: "🔄",
    title: "상태 관리",
    details: ["Zustand", "TanStack Query", "서버 상태 관리"],
  },
  {
    icon: "🟢",
    title: "Backend",
    details: ["Node.js / Express", "MySQL 연동", "REST API"],
  },
  {
    icon: "⚡",
    title: "성능 최적화",
    details: ["이미지 최적화", "무한 스크롤", "캐싱 전략"],
  },
];

export default function Skills() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ backgroundColor: "#f0f4ff" }}
    >
      <div className="max-w-6xl w-full">
        {/* 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold" style={{ color: "#1E40AF" }}>
            Skills & Experience
          </h2>
          <p className="text-gray-600 mt-2">
            다양한 프로젝트에서 경험한 기술들입니다
          </p>
        </motion.div>

        {/* 스킬 그리드 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                details={skill.details}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
