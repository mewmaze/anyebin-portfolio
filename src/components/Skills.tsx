"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tag, Grid3x3 } from "lucide-react";
import {
  SkillCategory,
  Skill,
  DEFAULT_SKILLS,
  skillsData,
} from "@/constants/skills";

// 배지 보기 - 목록 형태
function BadgeListView({ skillsData }: { skillsData: SkillCategory[] }) {
  return (
    <div className="space-y-6">
      {skillsData.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3
            className="text-md font-bold uppercase tracking-widest mb-4"
            style={{ color: "#1E40AF" }}
          >
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.badges.map((badge) => (
              <motion.div
                key={badge.name}
                whileHover={{ y: -2 }}
                className="inline-block"
              >
                <img
                  src={badge.url}
                  alt={badge.name}
                  title={badge.name}
                  className="h-8 hover:opacity-80 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// 카드 보기 - 상세 정보 카드
function CardDetailView({ skillsData }: { skillsData: Skill[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skillsData.map((skill, index) => (
        <motion.div
          key={skill.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden border"
          style={{
            backgroundColor: "white",
            borderColor: "#e0e7ff",
          }}
        >
          {/* 헤더 */}
          <div className="px-4 py-3" style={{ backgroundColor: "#1E40AF" }}>
            <h3 className="text-lg font-bold text-white">{skill.title}</h3>
          </div>

          {/* 상세 내용 */}
          <div className="p-4">
            <ul className="space-y-1.5">
              {skill.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="text-gray-700 text-sm flex items-start"
                >
                  <span className="mr-2 font-bold" style={{ color: "#FFCB61" }}>
                    ·
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// 메인 컴포넌트
export default function SkillsSection() {
  const [isDetailView, setIsDetailView] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-[#f0f4ff] to-[#e8f0ff]">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold"
            style={{ color: "#1E40AF" }}
          >
            Skills
          </motion.h2>

          {/* 토글 버튼 */}
          <div className="flex gap-2">
            <motion.button
              onClick={() => setIsDetailView(false)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className={`flex items-center justify-center w-12 h-12 cursor-pointer rounded-lg transition-all ${
                !isDetailView
                  ? "shadow-md text-white"
                  : "border-2 text-gray-400 hover:text-gray-600"
              }`}
              style={{
                backgroundColor: !isDetailView ? "#1E40AF" : "transparent",
                borderColor: !isDetailView ? "#1E40AF" : "#cbd5e1",
              }}
              title="배지 보기"
            >
              <Tag size={20} />
            </motion.button>

            <motion.button
              onClick={() => setIsDetailView(true)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className={`flex items-center justify-center w-12 h-12 cursor-pointer rounded-lg transition-all ${
                isDetailView
                  ? "shadow-md text-white"
                  : "border-2 text-gray-400 hover:text-gray-600"
              }`}
              style={{
                backgroundColor: isDetailView ? "#1E40AF" : "transparent",
                borderColor: isDetailView ? "#1E40AF" : "#cbd5e1",
              }}
              title="상세 보기"
            >
              <Grid3x3 size={20} />
            </motion.button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isDetailView ? (
            <BadgeListView skillsData={DEFAULT_SKILLS} />
          ) : (
            <CardDetailView skillsData={skillsData} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
