import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/constants/projects";

interface TroubleShooting {
  title: string;
  problem: string;
  solution: string;
  result: string;
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
                <h2
                  className="text-3xl font-bold mb-2 text-gray-900"
                  style={{ color: "#957C62" }}
                >
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600">{project.period}</p>
                <p className="text-sm text-gray-600">{project.team}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors text-2xl w-8 h-8 flex items-center justify-center flex-shrink-0 cursor-pointer"
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

              {/* 내가 구현한 기능 */}
              {project.implementedFeatures && (
                <div>
                  <h3
                    className="text-sm font-semibold uppercase tracking-wide mb-3"
                    style={{ color: "#957C62" }}
                  >
                    내가 구현한 기능
                  </h3>
                  <div className="space-y-4">
                    {project.implementedFeatures.map((section, idx: number) => (
                      <div key={idx} className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          {section.title}
                        </h4>
                        <ul className="space-y-2 ml-1">
                          {section.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-3"
                            >
                              <span
                                className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                                style={{ backgroundColor: "#CBD2A4" }}
                              />
                              <span
                                className="text-gray-700 text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html: item.replace(
                                    /\*\*(.*?)\*\*/g,
                                    "<span style='color: #957C62; font-weight: 600;'>$1</span>"
                                  ),
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 트러블슈팅 */}
              {project.troubleshooting && (
                <div>
                  <h3
                    className="text-sm font-semibold uppercase tracking-wide mb-3"
                    style={{ color: "#957C62" }}
                  >
                    트러블슈팅
                  </h3>
                  <div className="space-y-3">
                    {(
                      project.troubleshooting as readonly TroubleShooting[]
                    ).map((item: TroubleShooting, idx: number) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: "#f3ede5" }}
                      >
                        <p className="font-semibold text-gray-900 mb-4">
                          {item.title}
                        </p>
                        <div className="text-sm text-gray-700 space-y-4">
                          <div>
                            <p
                              className="font-medium mb-1"
                              style={{ color: "#957C62" }}
                            >
                              문제
                            </p>
                            <p>{item.problem}</p>
                          </div>
                          <div>
                            <p
                              className="font-medium mb-1"
                              style={{ color: "#957C62" }}
                            >
                              해결
                            </p>
                            <p>{item.solution}</p>
                          </div>
                          <div>
                            <p
                              className="font-medium mb-1"
                              style={{ color: "#957C62" }}
                            >
                              결과
                            </p>
                            <p>{item.result}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                {/* 웹사이트 링크 - GitHub과 다를 때만 표시 */}
                {project.link !== project.github &&
                  (project.isLinkDisabled ? (
                    <button
                      disabled
                      className="flex-1 py-2.5 px-4 rounded-lg font-medium text-sm text-center cursor-not-allowed"
                      style={{
                        backgroundColor: "#e5e7eb",
                        color: "#9ca3af",
                      }}
                    >
                      복구중
                    </button>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-lg font-medium text-sm text-center transition-all hover:opacity-80 cursor-pointer"
                      style={{ backgroundColor: "#CBD2A4", color: "#3d3d3d" }}
                    >
                      웹 사이트
                    </a>
                  ))}

                {/* GitHub 링크 */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    project.link !== project.github ? "flex-1" : "w-full"
                  } py-2.5 px-4 rounded-lg font-medium text-sm text-center border-2 transition-all hover:opacity-80 cursor-pointer`}
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
