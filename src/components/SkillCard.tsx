"use client";
import { motion } from "framer-motion";

interface SkillCardProps {
  icon: string;
  title: string;
  details: string[];
}

export default function SkillCard({ icon, title, details }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px rgba(30, 64, 175, 0.1)",
      }}
      className="p-6 bg-white rounded-lg shadow-sm transition-all border-t-4"
      style={{ borderTopColor: "#1E40AF" }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-start">
            <span className="mr-2 font-bold" style={{ color: "#FFCB61" }}>
              •
            </span>
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
