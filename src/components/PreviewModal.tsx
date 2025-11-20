"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  screenshots: string[];
}

export default function PreviewModal({
  isOpen,
  onClose,
  title,
  screenshots,
}: PreviewModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 헤더 */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* 이미지 영역 */}
          <div className="relative bg-gray-50 flex items-center justify-center min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center p-8"
              >
                <img
                  src={screenshots[currentIndex]}
                  alt={`${title} 스크린샷 ${currentIndex + 1}`}
                  className="max-w-full max-h-[600px] object-contain rounded-lg shadow-lg"
                />
              </motion.div>
            </AnimatePresence>

            {/* 화살표 버튼 */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                  style={{ color: "#957C62" }}
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                  style={{ color: "#957C62" }}
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>

          {/* 하단 정보 */}
          <div className="p-6 border-t bg-white">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      backgroundColor:
                        currentIndex === index ? "#957C62" : "#E5DDD5",
                    }}
                  />
                ))}
              </div>

              {/* 페이지 번호 */}
              <span className="text-sm text-gray-600">
                {currentIndex + 1} / {screenshots.length}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
