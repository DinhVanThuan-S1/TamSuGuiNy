"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Sparkles, Volume2, CloudRain } from "lucide-react";
import { Letter } from "@/data/letters";

interface LetterViewerProps {
  letter: Letter | null;
  isOpen: boolean;
  onClose: () => void;
  playOpenLetter: () => void;
  playHover: () => void;
}

// Subcomponent: Auto-typing text for Letter 7
function Typist({ paragraphs }: { paragraphs: string[] }) {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [currentParagraphIdx, setCurrentParagraphIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);

  useEffect(() => {
    if (currentParagraphIdx >= paragraphs.length) return;

    const currentParagraph = paragraphs[currentParagraphIdx];
    if (currentCharIdx < currentParagraph.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => {
          const next = [...prev];
          next[currentParagraphIdx] = (next[currentParagraphIdx] || "") + currentParagraph[currentCharIdx];
          return next;
        });
        setCurrentCharIdx((prev) => prev + 1);
      }, 20); // Typing speed
      return () => clearTimeout(timer);
    } else {
      // Go to next paragraph
      const timer = setTimeout(() => {
        setCurrentParagraphIdx((prev) => prev + 1);
        setCurrentCharIdx(0);
      }, 500); // Delay between paragraphs
      return () => clearTimeout(timer);
    }
  }, [currentParagraphIdx, currentCharIdx, paragraphs]);

  return (
    <div className="flex flex-col gap-4 text-left">
      {displayText.map((text, idx) => (
        <p key={idx} className="text-base md:text-lg leading-relaxed text-slate-700 font-medium">
          {text}
          {idx === currentParagraphIdx && currentCharIdx < paragraphs[idx].length && (
            <span className="inline-block w-1.5 h-4 bg-pink-500 ml-1 animate-pulse" />
          )}
        </p>
      ))}
    </div>
  );
}

export default function LetterViewer({
  letter,
  isOpen,
  onClose,
  playOpenLetter,
  playHover
}: LetterViewerProps) {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [showLetterSheet, setShowLetterSheet] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && letter) {
      setIsEnvelopeOpened(false);
      setShowLetterSheet(false);
      
      // Step-by-step envelope opening sequence
      const t1 = setTimeout(() => {
        playOpenLetter();
        setIsEnvelopeOpened(true);
      }, 500);

      const t2 = setTimeout(() => {
        setShowLetterSheet(true);
      }, 1200);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [isOpen, letter]);

  if (!letter) return null;

  // Custom themed styling helper for the letter contents page
  const getContentStyle = () => {
    switch (letter.styleType) {
      case "luxury":
        return "bg-gradient-to-br from-rose-950 via-pink-950 to-rose-900 text-pink-100 border-rose-700/60 box-glow-rose";
      case "rain":
        return "bg-gradient-to-b from-indigo-50/95 via-purple-50/95 to-slate-100 text-slate-800 border-indigo-200/50";
      case "warm":
        return "bg-gradient-to-b from-[#fdf0ed] via-[#fbf7f4] to-[#f4e2db] text-slate-800 border-[#f4e2db]";
      case "polaroid":
        return "bg-white text-slate-800 border-slate-200";
      case "diary":
        return "bg-gradient-to-b from-[#fffaf4] via-[#fffbf7] to-[#f9e9d6] text-amber-950 border-amber-200/50 shadow-inner";
      case "ending":
        return "bg-gradient-to-b from-[#fff5f6] via-[#ffffff] to-[#ffe5ec] text-rose-900 border-rose-200/50 box-glow-rose";
      case "pink":
      default:
        return "bg-gradient-to-b from-[#fff3f5] via-[#ffffff] to-[#ffeef1] text-slate-800 border-pink-100";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto overflow-x-hidden">
          {/* Blur backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-rose-950/25 backdrop-blur-md"
          />

          {/* Letter Opening Sequence Container */}
          <div ref={containerRef} className="relative w-full max-w-2xl min-h-[450px] flex items-center justify-center my-8 z-10">
            
            {/* Envelope Opening Stage */}
            {!showLetterSheet && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="w-full max-w-md h-64 bg-pink-100 rounded-lg relative shadow-2xl border border-pink-200 overflow-hidden flex flex-col items-center justify-end pb-8"
              >
                {/* Envelope Flap Front */}
                <div className="absolute inset-0 border-t-[120px] border-t-pink-200 border-x-[200px] border-x-transparent border-b-[130px] border-b-pink-300/30 pointer-events-none"></div>
                
                {/* Envelope Flap Top 3D Animated */}
                <motion.div
                  initial={{ rotateX: 0 }}
                  animate={isEnvelopeOpened ? { rotateX: 180 } : {}}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ originY: 0 }}
                  className="absolute top-0 inset-x-0 h-[120px] bg-pink-300 border-b border-pink-400 shadow-inner z-20 pointer-events-none"
                />

                {/* Heart Wax Seal */}
                <motion.div
                  animate={isEnvelopeOpened ? { scale: 0, opacity: 0 } : {}}
                  transition={{ duration: 0.4 }}
                  className="absolute top-[90px] w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-md z-30"
                >
                  <Heart className="w-6 h-6 fill-white" />
                </motion.div>

                <span className="text-sm font-semibold text-pink-500/80 uppercase tracking-widest z-10">
                  Đang mở thư...
                </span>
              </motion.div>
            )}

            {/* Letter Sheet Full View Stage */}
            {showLetterSheet && (
              <motion.div
                initial={{ opacity: 0, y: 150, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 150, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`w-full rounded-3xl border shadow-2xl p-6 md:p-10 relative overflow-hidden flex flex-col gap-6 select-none ${getContentStyle()}`}
              >
                {/* Themed Visual Layers */}
                {letter.styleType === "rain" && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                    <CloudRain className="rain-drop absolute top-5 left-10 text-indigo-400 w-4 h-4" />
                    <CloudRain className="rain-drop absolute top-12 left-1/3 text-purple-400 w-5 h-5" style={{ animationDelay: "0.5s" }} />
                    <CloudRain className="rain-drop absolute top-20 right-20 text-indigo-400 w-4 h-4" style={{ animationDelay: "1s" }} />
                    <CloudRain className="rain-drop absolute top-8 right-1/3 text-purple-400 w-5 h-5" style={{ animationDelay: "1.5s" }} />
                  </div>
                )}

                {letter.styleType === "ending" && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Floating Petals within the letter frame */}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-rose-300/40 rounded-full pointer-events-none"
                        style={{
                          width: Math.random() * 12 + 6,
                          height: Math.random() * 8 + 4,
                          left: `${Math.random() * 90}%`,
                          top: `-${Math.random() * 20}px`,
                          animation: `petal-fall ${Math.random() * 4 + 4}s linear infinite`,
                          animationDelay: `${i * 0.8}s`
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Header Section */}
                <div className="flex items-center justify-between border-b border-dashed border-slate-300/30 pb-4 relative z-10">
                  <div className="flex flex-col text-left">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${
                      letter.styleType === "luxury" ? "text-pink-300" : "text-pink-600"
                    }`}>
                      Bức thư #{String(letter.id).padStart(2, "0")} • {letter.mood}
                    </span>
                    <h2 className="font-handwritten text-3xl md:text-4xl font-bold tracking-wide mt-1">
                      {letter.title}
                    </h2>
                  </div>
                  
                  {/* Small Close Top Right */}
                  <button
                    onClick={onClose}
                    onMouseEnter={playHover}
                    className="w-10 h-10 rounded-full flex items-center justify-center border bg-white/20 hover:bg-rose-500 hover:text-white cursor-pointer transition-colors shadow-sm"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Date Tag */}
                <div className="flex items-center gap-1.5 text-xs font-semibold opacity-70 border-b border-slate-200/10 pb-4 text-left">
                  <span>Tạo lúc:</span>
                  <span>{letter.date}</span>
                </div>

                {/* Main Content Area */}
                <div className="max-h-[50vh] overflow-y-auto pr-2 relative z-10 custom-scrollbar">
                  {/* Polaroid Memory Layout for Letter 6 */}
                  {letter.styleType === "polaroid" && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: -3 }}
                        className="bg-white p-3 rounded shadow-md border border-slate-100 flex flex-col gap-2 rotate-[-2deg]"
                      >
                        <div className="w-full aspect-square bg-[#ffe5ec] rounded flex items-center justify-center text-pink-400">
                          <Heart className="w-8 h-8 fill-pink-300 animate-pulse" />
                        </div>
                        <span className="font-handwritten text-xs text-center font-bold text-slate-500">Hoàng hôn bên em 🌅</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        className="bg-white p-3 rounded shadow-md border border-slate-100 flex flex-col gap-2 rotate-[2deg]"
                      >
                        <div className="w-full aspect-square bg-[#fff0f3] rounded flex items-center justify-center text-pink-400">
                          <Sparkles className="w-8 h-8 animate-sparkle" />
                        </div>
                        <span className="font-handwritten text-xs text-center font-bold text-slate-500">Lúc em dỗi anh 🤭</span>
                      </motion.div>
                    </div>
                  )}

                  {/* Letter content text rendering */}
                  {letter.styleType === "mist" ? (
                    <Typist paragraphs={letter.content} />
                  ) : (
                    <div className="flex flex-col gap-4 text-left">
                      {letter.content.map((p, idx) => (
                        <p
                          key={idx}
                          className={`text-base md:text-lg leading-relaxed font-medium ${
                            letter.styleType === "luxury" ? "text-pink-100/90" : "text-slate-700"
                          }`}
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Signoff */}
                <div className="flex flex-col items-center gap-4 border-t border-dashed border-slate-300/30 pt-6 mt-2 relative z-10">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-heart-pulse" />
                    <span className="font-handwritten text-xl font-bold">Thương em thật nhiều 💗</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={playHover}
                    onClick={onClose}
                    className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-bold shadow-md shadow-pink-200 hover:from-pink-600 hover:to-rose-500 cursor-pointer text-sm"
                  >
                    Đóng thư lại
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
