"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface CinematicLoaderProps {
  onComplete: () => void;
  playHover: () => void;
  playSuccess: () => void;
}

export default function CinematicLoader({ onComplete, playHover, playSuccess }: CinematicLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDone(true);
          return 100;
        }
        // Organic irregular progress increments
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    playSuccess();
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  const captions = [
    "Khởi tạo ký ức ngọt ngào...",
    "Lấp đầy những khoảng trống...",
    "Gom nhặt từng tia nắng nhỏ...",
    "Đang niêm phong những phong thư...",
    "Tất cả đã sẵn sàng dành cho em..."
  ];

  const getCaption = () => {
    const idx = Math.min(Math.floor((progress / 100) * captions.length), captions.length - 1);
    return captions[idx];
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-tr from-[#ffe5ec] via-[#fff0f3] to-[#ffcad4] text-slate-800"
        >
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-pink-300 blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-peach-300 blur-3xl animate-float-delayed"></div>
          </div>

          <div className="relative flex flex-col items-center max-w-md px-6 text-center z-10">
            {/* Pulsing Glowing Heart */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1, 1.25, 1],
                rotate: [0, -3, 3, -3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative flex items-center justify-center w-24 h-24 mb-8"
            >
              <Heart className="w-16 h-16 text-pink-500 fill-pink-400 filter drop-shadow-[0_0_12px_rgba(244,63,94,0.6)]" />
              <div className="absolute inset-0 rounded-full bg-pink-400/20 blur-md animate-ping"></div>
            </motion.div>

            {/* Title */}
            <h1 className="font-handwritten text-4xl font-bold text-pink-600 mb-2 tracking-wide text-glow">
              Học cách yêu em
            </h1>

            {/* Progress Percentage */}
            <motion.span 
              key={progress}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.8, y: 0 }}
              className="text-sm font-semibold text-pink-500/80 uppercase tracking-widest mb-6"
            >
              {progress}%
            </motion.span>

            {/* Progress Bar Container */}
            <div className="w-48 h-1.5 bg-pink-100 rounded-full overflow-hidden mb-6 border border-pink-200/50 shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"
              />
            </div>

            {/* Dynamic romantic subtitle captions */}
            <div className="h-6 mb-12">
              <AnimatePresence mode="wait">
                <motion.p
                  key={getCaption()}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs font-medium text-slate-500 italic"
                >
                  {getCaption()}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Entrance Button (Interactive Autoplay Bypass) */}
            <div className="h-16">
              <AnimatePresence>
                {isDone && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={playHover}
                    onClick={handleStart}
                    className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold shadow-lg shadow-pink-300/50 cursor-pointer hover:from-pink-600 hover:to-rose-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300 flex items-center gap-2"
                  >
                    <span>Mở cánh cửa trái tim</span>
                    <Heart className="w-4 h-4 fill-white" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
