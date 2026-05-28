"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, X, Heart } from "lucide-react";

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (password: string) => boolean; // returns true if correct
  letterTitle: string;
  playHover: () => void;
  playSuccess: () => void;
  playError: () => void;
}

export default function PasswordModal({
  isOpen,
  onClose,
  onSubmit,
  letterTitle,
  playHover,
  playSuccess,
  playError
}: PasswordModalProps) {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = onSubmit(password);
    
    if (isCorrect) {
      playSuccess();
      setIsUnlocked(true);
      setTimeout(() => {
        setIsUnlocked(false);
        setPassword("");
        onClose();
      }, 1000);
    } else {
      playError();
      setIsError(true);
      // Reset shake animation after 0.5s
      setTimeout(() => setIsError(false), 500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 select-none">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-rose-950/20 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={
              isError
                ? { x: [0, -10, 10, -10, 10, 0], scale: 1, opacity: 1, y: 0 }
                : { scale: 1, opacity: 1, y: 0 }
            }
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={isError ? { duration: 0.4 } : { type: "spring", damping: 20 }}
            className={`w-full max-w-sm p-6 rounded-2xl glassmorphism border relative z-10 text-center ${
              isError
                ? "border-rose-400 shadow-xl shadow-rose-200/50"
                : isUnlocked
                ? "border-green-400 shadow-xl shadow-green-200/50"
                : "border-white/60 box-glow-rose"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-rose-500 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lock/Unlock Icon Circle */}
            <motion.div
              animate={isUnlocked ? { scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] } : {}}
              transition={{ duration: 0.5 }}
              className={`w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center border shadow-sm ${
                isUnlocked
                  ? "bg-green-50 border-green-200 text-green-500"
                  : isError
                  ? "bg-rose-50 border-rose-200 text-rose-500"
                  : "bg-pink-50 border-pink-100 text-pink-500"
              }`}
            >
              {isUnlocked ? <Unlock className="w-6 h-6 animate-pulse" /> : <Lock className="w-6 h-6" />}
            </motion.div>

            {/* Title & Help */}
            <h3 className="font-handwritten text-2xl font-bold text-slate-800 mb-1">
              Thư bị khóa mật mã!
            </h3>
            <p className="text-xs font-semibold text-pink-500 uppercase tracking-wider mb-6">
              “{letterTitle}”
            </p>

            {/* Unlocking Cinematic Text */}
            {isUnlocked ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-4 text-green-600 font-semibold flex flex-col items-center gap-1.5"
              >
                <div className="flex gap-1">
                  <Heart className="w-4 h-4 fill-green-500 animate-ping" />
                  <Heart className="w-4 h-4 fill-green-500 animate-bounce" />
                </div>
                <span className="text-sm">Đang giải mã tình yêu...</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật mã của anh..."
                    className={`w-full px-4 py-3 rounded-full text-center font-medium bg-white/70 border outline-none transition-all placeholder:text-slate-400 text-slate-700 text-sm ${
                      isError
                        ? "border-rose-400 focus:ring-2 focus:ring-rose-200"
                        : "border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                    }`}
                  />
                </div>

                {isError && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-semibold text-rose-500"
                  >
                    Mật mã không đúng rồi em bé ơi! Thử lại nha 🥺
                  </motion.p>
                )}



                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={playHover}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-semibold shadow-md shadow-pink-200 hover:from-pink-600 hover:to-rose-500 cursor-pointer transition-colors text-sm"
                >
                  Mở khóa thư
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
