"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ backgroundColor: "#f0fffe" }}
    >
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10"
          style={{ color: "#0ABAB5" }}
        >
          About me
        </motion.h2>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* 왼쪽: 기본 프로필 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                이름
              </p>
              <p className="text-base md:text-lg font-semibold text-gray-900">
                안예빈
              </p>
            </div>

            <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm md:text-base">
              <p className="font-semibold text-gray-500">생년월일</p>
              <p className="text-base md:text-lg font-semibold text-gray-900">
                1999.01.08
              </p>

              <p className="font-semibold text-gray-500">이메일</p>
              <p className="text-base md:text-lg font-semibold text-gray-900 break-all">
                aybin0108@email.com
              </p>

              <p className="font-semibold text-gray-500">학력</p>
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-base md:text-lg font-semibold text-gray-900">
                    전북대학교 전자공학과&nbsp;졸업
                  </p>
                  <p className="text-xs font-medium text-teal-500">
                    2022.03 - 2024.02
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 오른쪽: 카드 플립 (앞: 경력 요약 / 뒤: 인턴 상세) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative cursor-pointer"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="preserve-3d relative w-full"
                initial={false}
                animate={{ rotateY: isHovered ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* 앞면: 경력 / 수료 / 자격증 요약 */}
                <div className="backface-hidden space-y-6 bg-white rounded-xl shadow-sm p-6 w-full">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      경력
                    </p>
                    <div>
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="text-base md:text-lg font-semibold text-gray-900">
                          코리아런드리 인턴
                        </p>
                        <p className="text-xs font-medium text-teal-500">
                          2025.07 - 2025.10
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      수료
                    </p>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-base md:text-lg font-semibold text-gray-900">
                        멀티캠퍼스 프론트엔드 부트캠프
                      </p>
                      <p className="text-xs font-medium text-teal-500">
                        2024.03 - 2024.08
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      자격증
                    </p>
                    <ul className="space-y-1 text-sm md:text-base">
                      <li className="flex items-baseline justify-between gap-2">
                        <span className="text-base md:text-lg font-semibold text-gray-900">
                          정보처리기사
                        </span>
                        <span className="text-xs font-medium text-teal-500">
                          2025.03
                        </span>
                      </li>
                      <li className="flex items-baseline justify-between gap-2">
                        <span className="text-base md:text-lg font-semibold text-gray-900">
                          SQLD 개발자
                        </span>
                        <span className="text-xs font-medium text-teal-500">
                          2025.06
                        </span>
                      </li>
                    </ul>
                  </div>
                  <motion.p
                    className="text-xs text-center text-gray-400 pt-2"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    카드를 뒤집어 상세 내용을 확인하세요
                  </motion.p>
                </div>

                {/* 뒷면: 코리아런드리 인턴 상세 */}
                <div
                  className="backface-hidden absolute inset-0 bg-white rounded-xl shadow-sm p-6 w-full overflow-y-auto"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="text-base md:text-lg font-bold text-gray-900">
                          코리아런드리 인턴
                        </p>
                        <p className="text-xs font-medium text-teal-500">
                          2025.07 - 2025.10
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        기술스택
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["React.js", "JavaScript", "MUI"].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 text-xs font-medium rounded-full"
                            style={{
                              backgroundColor: "#e6fffe",
                              color: "#0ABAB5",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        담당 업무
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700 leading-relaxed">
                        <li className="flex gap-1.5">
                          <span className="text-teal-500 mt-0.5 shrink-0">
                            &#8226;
                          </span>
                          점주용 광고 슬롯 생성/수정 기능 개발
                        </li>
                        <li className="flex gap-1.5">
                          <span className="text-teal-500 mt-0.5 shrink-0">
                            &#8226;
                          </span>
                          페이지별 권한 분리 및 접근 제어 구현
                        </li>
                        <li className="flex gap-1.5">
                          <span className="text-teal-500 mt-0.5 shrink-0">
                            &#8226;
                          </span>
                          테이블 UI 개선 (전체 선택, 페이지네이션)
                        </li>
                        <li className="flex gap-1.5">
                          <span className="text-teal-500 mt-0.5 shrink-0">
                            &#8226;
                          </span>
                          네비게이션 및 Breadcrumb 로직 개선
                        </li>
                        <li className="flex gap-1.5">
                          <span className="text-teal-500 mt-0.5 shrink-0">
                            &#8226;
                          </span>
                          사용자 인증 상태 관리 개선 (useReducer)
                        </li>
                        <li className="flex gap-1.5">
                          <span className="text-teal-500 mt-0.5 shrink-0">
                            &#8226;
                          </span>
                          9건의 버그 수정 및 코드 리뷰 참여
                        </li>
                        <li className="flex gap-1.5">
                          <span className="text-teal-500 mt-0.5 shrink-0">
                            &#8226;
                          </span>
                          Jira, Slack, GitHub 기반 실무 협업
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="pt-6 border-t border-gray-200 flex gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#0ABAB5" }}
          >
            이력서
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/mewmaze"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#0ABAB5" }}
          >
            GitHub
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
