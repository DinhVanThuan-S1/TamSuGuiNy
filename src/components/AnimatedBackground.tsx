"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Floater {
  id: number;
  type: "heart" | "sparkle" | "letter";
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [floaters, setFloaters] = useState<Floater[]>([]);

  useEffect(() => {
    // Generate organic particles on mount
    const types: ("heart" | "sparkle" | "letter")[] = ["heart", "sparkle", "letter"];
    const items = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      type: types[i % types.length],
      x: Math.random() * 100, // percentage offset left
      y: 100 + Math.random() * 20, // start below viewport
      size: Math.random() * 20 + 10, // size in px
      duration: Math.random() * 15 + 15, // float duration in seconds
      delay: Math.random() * 10, // animation delay
    }));
    setFloaters(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-gradient-to-tr from-[#ffe5ec] via-[#fff5f6] to-[#ffcad4]">
      {/* Drifting blurred rose blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-pink-200/40 blur-[120px] animate-float"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-peach-200/40 blur-[120px] animate-float-delayed"></div>
      <div className="absolute top-[35%] right-[-5%] w-[35%] h-[35%] rounded-full bg-pink-100/50 blur-[100px] animate-float"></div>

      {/* Floating particles */}
      {floaters.map((floater) => (
        <motion.div
          key={floater.id}
          initial={{ y: "110vh", x: `${floater.x}vw`, opacity: 0, rotate: 0 }}
          animate={{
            y: "-15vh",
            x: [
              `${floater.x}vw`,
              `${floater.x + (Math.random() * 15 - 7.5)}vw`,
              `${floater.x + (Math.random() * 20 - 10)}vw`,
              `${floater.x}vw`
            ],
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: floater.duration,
            repeat: Infinity,
            delay: floater.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: floater.size,
            height: floater.size,
          }}
          className="flex items-center justify-center text-pink-400/30"
        >
          {floater.type === "heart" && (
            <svg
              className="fill-pink-400/20"
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}

          {floater.type === "sparkle" && (
            <svg
              className="fill-pink-300/30"
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          )}

          {floater.type === "letter" && (
            <svg
              className="stroke-pink-400/20 fill-none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="100%"
              height="100%"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
