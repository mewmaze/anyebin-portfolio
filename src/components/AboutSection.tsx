"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
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
              <p className="text-base md:text-lg font-semibold text-gray-900">1999.01.08</p>

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

          {/* 오른쪽: 수료 / 자격증 / 경력 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
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
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
      </div>
    </section>
  );
}
