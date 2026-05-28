"use client";

import { motion } from "framer-motion";
import { Lock, Mail, Heart, Calendar, LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { Letter } from "@/data/letters";

interface LetterCardProps {
  letter: Letter;
  isUnlocked: boolean;
  isRead: boolean;
  onOpen: () => void;
  playHover: () => void;
}

export default function LetterCard({
  letter,
  isUnlocked,
  isRead,
  onOpen,
  playHover
}: LetterCardProps) {
  // Dynamically resolve the icon component
  const IconComponent = (Icons[letter.iconName] || Icons.Heart) as LucideIcon;

  // Visual theme class helper
  const getThemeClasses = () => {
    switch (letter.styleType) {
      case "luxury":
        return "bg-gradient-to-tr from-rose-900/90 to-pink-800/90 text-pink-100 border-rose-700 box-glow-rose";
      case "rain":
        return "bg-gradient-to-tr from-slate-100/90 via-indigo-50/90 to-purple-50/90 text-slate-800 border-indigo-200/60";
      case "warm":
        return "bg-gradient-to-tr from-[#fdf0ed] via-[#f7d6cd]/40 to-[#e8af97]/30 text-slate-800 border-[#f7d6cd]/80";
      case "polaroid":
        return "bg-white text-slate-800 border-slate-200 shadow-md";
      case "diary":
        return "bg-gradient-to-tr from-amber-50/90 via-[#fff8f0]/90 to-orange-50/90 text-amber-900 border-amber-200/60";
      case "ending":
        return "bg-gradient-to-tr from-[#ffe5ec] via-[#fff5f6] to-[#fff]/90 text-rose-800 border-rose-200 box-glow-rose";
      case "pink":
      default:
        return "bg-gradient-to-tr from-[#ffe5ec]/90 via-[#fff0f3]/90 to-[#fff]/95 text-slate-800 border-pink-200/60";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={playHover}
      onClick={onOpen}
      className={`relative rounded-2xl border p-5 md:p-6 cursor-pointer overflow-hidden transition-shadow select-none group min-h-[220px] flex flex-col justify-between ${getThemeClasses()} ${
        isRead ? "shadow-inner border-pink-200/40" : "shadow-lg shadow-pink-100/40"
      }`}
    >
      {/* Decorative floating shapes in background */}
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500"></div>

      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
              letter.styleType === "luxury"
                ? "bg-pink-700/50 text-pink-200 border border-pink-600/30"
                : "bg-white/80 text-pink-600 border border-pink-100"
            }`}
          >
            Bức thư #{String(letter.id).padStart(2, "0")}
          </span>

          {/* Dynamic Emotional Icon / Locked State */}
          <div className="flex items-center gap-1.5">
            {isRead && (
              <span className="text-[10px] font-bold text-pink-500/80 bg-pink-50/80 px-2 py-0.5 rounded border border-pink-100/40 flex items-center gap-0.5">
                <Heart className="w-2.5 h-2.5 fill-pink-400 text-pink-400" />
                ĐÃ ĐỌC
              </span>
            )}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                letter.styleType === "luxury"
                  ? "bg-rose-950/40 border-rose-700 text-pink-300"
                  : "bg-white/80 border-pink-100 text-pink-500"
              }`}
            >
              {letter.isLocked && !isUnlocked ? (
                <Lock className="w-3.5 h-3.5" />
              ) : (
                <IconComponent className="w-3.5 h-3.5" />
              )}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-lg font-bold mb-2 group-hover:text-pink-600 transition-colors leading-snug ${
            letter.styleType === "luxury"
              ? "group-hover:text-pink-300 text-pink-100"
              : "text-slate-800"
          }`}
        >
          {letter.title}
        </h3>

        {/* Short Summary */}
        <p
          className={`text-xs leading-relaxed line-clamp-2 ${
            letter.styleType === "luxury" ? "text-pink-200/70" : "text-slate-500"
          }`}
        >
          {letter.isLocked && !isUnlocked
            ? "Mật mã bảo vệ... Hãy mở khóa để khám phá những lời tâm sự bí mật từ anh."
            : letter.summary}
        </p>
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-dashed border-slate-200/20 flex items-center justify-between text-[11px] font-medium opacity-80">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {letter.date}
        </span>
        <span className="flex items-center gap-1 font-semibold">
          {letter.isLocked && !isUnlocked ? "ĐANG KHÓA" : letter.mood}
        </span>
      </div>

      {/* Closed Envelope Overlay visual effect on hover */}
      <div className="absolute inset-0 bg-pink-500/5 backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
        <Mail className="w-8 h-8 text-pink-400/30 scale-75 group-hover:scale-100 transition-transform duration-300" />
      </div>
    </motion.div>
  );
}
