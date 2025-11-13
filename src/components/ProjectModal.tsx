import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/constants/projects";

interface TroubleShooting {
  title: string;
  description: string;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* 백드롭 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* 모달 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto z-50 scroll-smooth"
            style={{ backgroundColor: "#faf8f3" }}
          >
            {/* 헤더 */}
            <div
              className="flex items-start justify-between p-8 border-b"
              style={{ borderColor: "#e5ddd5" }}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {project.period} • {project.team}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors text-2xl w-8 h-8 flex items-center justify-center flex-shrink-0"
              >
                ✕
              </button>
            </div>

            {/* 컨텐츠 */}
            <div className="p-8 space-y-6">
              {/* 역할 & 기술 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3
                    className="text-sm font-semibold uppercase tracking-wide mb-3"
                    style={{ color: "#957C62" }}
                  >
                    역할
                  </h3>
                  <p className="text-gray-800">{project.role}</p>
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold uppercase tracking-wide mb-3"
                    style={{ color: "#957C62" }}
                  >
                    기술 스택
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 rounded text-white"
                        style={{ backgroundColor: "#957C62" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 설명 */}
              <div>
                <h3
                  className="text-sm font-semibold uppercase tracking-wide mb-3"
                  style={{ color: "#957C62" }}
                >
                  프로젝트
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* 상세 내용 */}
              <div>
                <h3
                  className="text-sm font-semibold uppercase tracking-wide mb-3"
                  style={{ color: "#957C62" }}
                >
                  구현 내용
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.details}
                </p>
              </div>

              {project.troubleshooting && (
                <div>
                  <h3
                    className="text-sm font-semibold uppercase tracking-wide mb-3"
                    style={{ color: "#957C62" }}
                  >
                    트러블슈팅
                  </h3>
                  <div className="space-y-3">
                    {project.troubleshooting.map(
                      (item: TroubleShooting, idx: number) => (
                        <div
                          key={idx}
                          className="p-4 rounded-lg"
                          style={{ backgroundColor: "#f3ede5" }}
                        >
                          <p className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-700">
                            {item.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* 링크 */}
              <div className="flex gap-3 pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-lg font-medium text-sm text-center transition-all hover:opacity-80"
                  style={{ backgroundColor: "#CBD2A4", color: "#3d3d3d" }}
                >
                  라이브 사이트
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-lg font-medium text-sm text-center border-2 transition-all hover:opacity-80"
                  style={{ borderColor: "#957C62", color: "#957C62" }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
