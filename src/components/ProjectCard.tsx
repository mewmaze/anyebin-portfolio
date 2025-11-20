"use client";
import { motion } from "framer-motion";
import { Project } from "@/constants/projects";
import { Globe, Github, Eye } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  onPreview: () => void;
}

export default function ProjectCard({
  project,
  onClick,
  onPreview,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border-2 hover:shadow-xl transition-all"
      style={{ borderColor: "#E5DDD5" }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "#957C62" }}
            >
              {project.title}
            </h3>
            <p className="text-sm mb-1" style={{ color: "#6b7280" }}>
              {project.period}
            </p>
            <p className="text-sm mb-3" style={{ color: "#9ca3af" }}>
              {project.team}
            </p>
          </div>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-2 mb-4">
          {project.details.map((detail, index) => (
            <div key={index} className="flex items-start">
              <span
                className="mr-2 flex-shrink-0"
                style={{ color: "#CBD2A4", lineHeight: "1.25rem" }}
              >
                •
              </span>
              <span className="text-sm text-gray-600 leading-5">{detail}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{
                backgroundColor: "#f3ede5",
                color: "#957C62",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="flex-1 px-4 py-2.5 rounded-lg font-medium text-white transition-colors cursor-pointer"
            style={{ backgroundColor: "#957C62" }}
          >
            자세히 보기
          </motion.button>

          <div className="flex gap-2">
            {/* 미리보기 */}
            <div className="relative flex flex-col items-center group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onPreview}
                className="w-11 h-11 flex items-center justify-center rounded-lg border-2 transition-colors cursor-pointer"
                style={{
                  borderColor: "#E5DDD5",
                  color: "#957C62",
                }}
              >
                <Eye size={20} />
              </motion.button>

              <span
                className="absolute bottom-full mb-2 px-3 py-1 rounded-md text-xs text-white whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ backgroundColor: "#CBD2A4" }}
              >
                미리보기
              </span>
            </div>

            {/* GitHub */}
            <div className="relative flex flex-col items-center group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(project.github, "_blank")}
                className="w-11 h-11 flex items-center justify-center rounded-lg border-2 transition-colors cursor-pointer"
                style={{
                  borderColor: "#E5DDD5",
                  color: "#957C62",
                }}
              >
                <Github size={20} />
              </motion.button>

              <span
                className="absolute bottom-full mb-2 px-3 py-1 rounded-md text-xs text-white whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ backgroundColor: "#CBD2A4" }}
              >
                GitHub
              </span>
            </div>

            {/* 웹사이트 */}
            {project.link !== project.github && (
              <div className="relative flex flex-col items-center group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.link, "_blank")}
                  className="w-11 h-11 flex items-center justify-center rounded-lg border-2 transition-colors cursor-pointer"
                  style={{
                    borderColor: "#E5DDD5",
                    color: "#957C62",
                  }}
                >
                  <Globe size={20} />
                </motion.button>

                <span
                  className="absolute bottom-full mb-2 px-3 py-1 rounded-md text-xs text-white whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: "#CBD2A4" }}
                >
                  웹사이트
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
