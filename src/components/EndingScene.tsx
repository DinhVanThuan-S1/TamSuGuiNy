"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, RefreshCw } from "lucide-react";

interface EndingSceneProps {
  onReset: () => void;
  playHover: () => void;
  playSuccess: () => void;
  isVisible: boolean;
}

interface Petal {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
}

export default function EndingScene({ onReset, playHover, playSuccess, isVisible }: EndingSceneProps) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (isVisible) {
      // Generate a rich array of falling cherry blossom petals when visible
      const items = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 14 + 6,
        delay: Math.random() * 8,
        duration: Math.random() * 6 + 6,
      }));
      setPetals(items);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 py-16 text-center select-none overflow-hidden z-10 bg-gradient-to-b from-transparent to-[#ffeef1]">
      {/* Falling Cherry Blossoms Particles Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="petal bg-gradient-to-r from-pink-300 to-rose-300 rounded-full"
            style={{
              left: `${petal.x}%`,
              width: petal.size,
              height: petal.size * 0.7,
              borderRadius: "50% 0 50% 50%", // petal shape
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-2xl px-6 py-12 md:py-16 rounded-3xl glassmorphism box-glow-rose flex flex-col items-center relative z-10"
      >
        {/* Pulsing Beating Glowing Heart */}
        <motion.div
          animate={{
            scale: [1, 1.18, 1, 1.28, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex items-center justify-center w-28 h-28 mb-8"
        >
          <Heart className="w-20 h-20 text-rose-500 fill-rose-500 filter drop-shadow-[0_0_20px_rgba(244,63,94,0.7)]" />
          <div className="absolute inset-0 rounded-full bg-rose-400/20 blur-xl animate-ping"></div>
        </motion.div>

        {/* Emotion End Message */}
        <h2 className="font-handwritten text-4xl md:text-5xl font-bold text-rose-600 mb-6 text-glow">
          Cảm ơn em đã đọc hết những điều anh muốn nói 💗
        </h2>

        {/* Closing Paragraph Quote */}
        <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed italic max-w-xl mb-12">
          “Anh không cần một tình yêu hoàn hảo. Anh chỉ muốn mỗi ngày chúng mình hiểu nhau hơn một chút.”
        </p>

        {/* Reset Read Progress Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={playHover}
          onClick={() => {
            playSuccess();
            onReset();
          }}
          className="px-8 py-3.5 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-semibold shadow-lg shadow-pink-200 hover:from-pink-600 hover:to-rose-500 cursor-pointer transition-colors flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4 animate-spin-slow" />
          <span>Đọc lại cùng anh nhé?</span>
        </motion.button>
      </motion.div>
    </section>
  );
}
