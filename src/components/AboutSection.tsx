"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ backgroundColor: "#f0fffe" }}
    >
      <div className="max-w-4xl w-full">
        {/* 제목 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16"
          style={{ color: "#0ABAB5" }}
        >
          About me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 프로필 이미지 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div
              className="w-64 h-64 rounded-lg shadow-lg flex items-center justify-center text-6xl"
              style={{ backgroundColor: "#0ABAB5" }}
            >
              <img src="/profile.svg" className="w-full" />
            </div>
          </motion.div>

          {/* 오른쪽: 정보 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                이름
              </p>
              <p className="text-2xl font-bold text-gray-900">안예빈</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                생년월일
              </p>
              <p className="text-lg text-gray-700">1999.01.08</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                이메일
              </p>
              <p className="text-lg text-gray-700">aybin0108@email.com</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                학력
              </p>
              <p className="text-lg text-gray-700">
                전북대학교 전자공학과 <span className="text-sm">졸업</span>
              </p>
            </div>

            {/* 소개 텍스트 */}
            <div className="pt-6 border-t border-gray-200">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
