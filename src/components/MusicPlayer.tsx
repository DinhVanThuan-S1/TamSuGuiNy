"use client";

import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";
import { useState } from "react";

interface MusicPlayerProps {
  isPlaying: boolean;
  volume: number;
  togglePlay: () => void;
  changeVolume: (v: number) => void;
  playHover: () => void;
}

export default function MusicPlayer({
  isPlaying,
  volume,
  togglePlay,
  changeVolume,
  playHover
}: MusicPlayerProps) {
  const [showVolume, setShowVolume] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-3">
      {/* Track Name Bubble (Hover/State trigger) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isPlaying ? 1 : 0.6, x: 0 }}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-white/50 backdrop-blur-md text-xs font-semibold text-pink-600/80 shadow-sm"
      >
        <Music className={`w-3 h-3 ${isPlaying ? "animate-bounce" : ""}`} />
        <span>Giai điệu tình yêu 💗</span>
      </motion.div>

      {/* Main Player Bubble Container */}
      <div 
        onMouseEnter={() => setShowVolume(true)}
        onMouseLeave={() => setShowVolume(false)}
        className="flex items-center gap-2 p-1.5 rounded-full bg-white/50 border border-white/60 backdrop-blur-md shadow-lg shadow-pink-100/50 hover:bg-white/70 transition-colors duration-300"
      >
        {/* Sliding Volume Bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: showVolume ? 80 : 0,
            opacity: showVolume ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden flex items-center pl-2"
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => changeVolume(parseFloat(e.target.value))}
            className="w-16 h-1 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-pink-500"
          />
        </motion.div>

        {/* Vinyl disk and control toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={playHover}
          onClick={togglePlay}
          className="relative w-11 h-11 rounded-full cursor-pointer flex items-center justify-center overflow-hidden bg-slate-900 border border-slate-700/50 group focus:outline-none"
        >
          {/* Vinyl grooves */}
          <div className="absolute inset-1 rounded-full border border-slate-800/40 opacity-70"></div>
          <div className="absolute inset-2 rounded-full border border-slate-800/40 opacity-70"></div>
          <div className="absolute inset-3 rounded-full border border-slate-800/40 opacity-70"></div>

          {/* Vinyl Spin Animation */}
          <div
            className={`absolute inset-0 rounded-full bg-slate-900 transition-transform duration-[20000ms] ease-linear ${
              isPlaying ? "animate-spin-slow" : ""
            }`}
          >
            {/* Center Label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-pink-400 border border-slate-900 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-white"></div>
            </div>
          </div>

          {/* Play/Pause Button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors z-10">
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white drop-shadow-md" />
            ) : (
              <Play className="w-4 h-4 text-white fill-white ml-0.5 drop-shadow-md" />
            )}
          </div>
        </motion.button>
      </div>
    </div>
  );
}
