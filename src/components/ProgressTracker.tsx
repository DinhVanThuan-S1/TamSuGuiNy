"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface ProgressTrackerProps {
  readLettersCount: number;
  totalLetters: number;
}

export default function ProgressTracker({ readLettersCount, totalLetters }: ProgressTrackerProps) {
  const percentage = Math.round((readLettersCount / totalLetters) * 100);

  const getSubtext = () => {
    if (readLettersCount === 0) return "Mở bức thư đầu tiên thôi em ơi... 🥰";
    if (readLettersCount < 3) return "Trái tim mình đang bắt đầu xích lại gần nhau đấy... 💗";
    if (readLettersCount < 6) return "Anh vui quá vì em đang chịu khó lắng nghe anh... 🥰";
    if (readLettersCount < 9) return "Còn chút xíu nữa thôi, đi tiếp cùng anh nhé! 💕";
    return "Cảm ơn em đã kiên nhẫn đọc hết những dòng tâm sự này! 💗";
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 z-10 select-none">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="glassmorphism p-5 rounded-2xl border border-white/60 box-glow-rose flex flex-col gap-3 relative overflow-hidden"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-500 fill-pink-400 animate-heart-pulse" />
            <span className="text-sm font-bold text-slate-700">Đã mở: {readLettersCount}/{totalLetters} bức thư</span>
          </div>
          <span className="text-xs font-bold text-pink-500 bg-pink-50 px-2 py-1 rounded-full border border-pink-100">{percentage}%</span>
        </div>

        {/* Custom Progress Track with Sliding Heart */}
        <div className="relative w-full h-2 bg-pink-100/60 rounded-full border border-pink-200/20">
          {/* Progress fill */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ type: "spring", stiffness: 40 }}
            className="h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"
          />

          {/* Sliding Heart Marker */}
          <motion.div
            initial={{ left: 0 }}
            animate={{ left: `${percentage}%` }}
            transition={{ type: "spring", stiffness: 40 }}
            style={{ transform: "translateX(-50%)" }}
            className="absolute top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center bg-white border border-pink-200 rounded-full shadow-md text-pink-500 cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-500" />
          </motion.div>
        </div>

        <motion.p
          key={getSubtext()}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.8, y: 0 }}
          className="text-xs font-medium text-slate-500 text-center italic mt-1"
        >
          {getSubtext()}
        </motion.p>
      </motion.div>
    </div>
  );
}
