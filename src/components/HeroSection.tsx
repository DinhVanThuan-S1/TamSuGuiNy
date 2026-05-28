"use client";

import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToLetters: () => void;
  playHover: () => void;
}

export default function HeroSection({ onScrollToLetters, playHover }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 text-center select-none z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl px-6 py-10 md:py-14 rounded-3xl glassmorphism box-glow-rose flex flex-col items-center relative overflow-hidden"
      >
        {/* Sparkle details */}
        <div className="absolute top-4 left-6 text-pink-400/40 animate-sparkle">✦</div>
        <div className="absolute bottom-6 right-8 text-pink-400/40 animate-sparkle">✦</div>

        {/* Outer pulsing ring for cute effect */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 mb-6 flex items-center justify-center bg-white/80 border border-pink-100 rounded-full shadow-md text-pink-500"
        >
          <Heart className="w-8 h-8 fill-pink-400 text-pink-500 animate-heart-pulse" />
        </motion.div>

        {/* Main Title */}
        <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 tracking-wide text-glow mb-4">
          Học cách yêu em
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg font-medium text-slate-600 leading-relaxed max-w-lg mb-8">
          “Anh không viết những điều này để trách em, anh chỉ muốn chúng mình hiểu nhau hơn một chút.”
        </p>

        {/* Dynamic call to action button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={playHover}
          onClick={onScrollToLetters}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-semibold shadow-lg shadow-pink-200 hover:from-pink-600 hover:to-rose-500 transition-all cursor-pointer flex items-center gap-2 group"
        >
          <span>Mở hộp thư của anh</span>
          <Heart className="w-4 h-4 fill-white text-white group-hover:scale-125 transition-transform" />
        </motion.button>
      </motion.div>

      {/* Floating soft scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.6, y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut",
        }}
        onClick={onScrollToLetters}
        className="absolute bottom-6 flex flex-col items-center gap-1 cursor-pointer text-pink-500/70"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">Cuộn để xem thư</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
