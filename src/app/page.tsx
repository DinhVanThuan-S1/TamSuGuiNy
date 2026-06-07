"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "@/hooks/useAudio";
import { lettersData, Letter } from "@/data/letters";
import CinematicLoader from "@/components/CinematicLoader";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import MusicPlayer from "@/components/MusicPlayer";
import ProgressTracker from "@/components/ProgressTracker";
import LetterCard from "@/components/LetterCard";
import LetterViewer from "@/components/LetterViewer";
import PasswordModal from "@/components/PasswordModal";
import EndingScene from "@/components/EndingScene";

export default function Home() {
  const audio = useAudio();
  const [showPreloader, setShowPreloader] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [readLetters, setReadLetters] = useState<number[]>([]);
  const [unlockedLetters, setUnlockedLetters] = useState<number[]>([]);
  
  // Modal states
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordTargetLetter, setPasswordTargetLetter] = useState<Letter | null>(null);

  const lettersSectionRef = useRef<HTMLDivElement>(null);

  // Avoid hydration mismatch by waiting for client-side mounting
  useEffect(() => {
    setMounted(true);
    try {
      const storedRead = localStorage.getItem("tam_su_read_letters");
      if (storedRead) {
        setReadLetters(JSON.parse(storedRead));
      }
      const storedUnlocked = localStorage.getItem("tam_su_unlocked_letters");
      if (storedUnlocked) {
        setUnlockedLetters(JSON.parse(storedUnlocked));
      }
    } catch (e) {
      console.error("Local storage error:", e);
    }
  }, []);

  // Update read progress to local storage
  const markAsRead = (id: number) => {
    if (!readLetters.includes(id)) {
      const updated = [...readLetters, id];
      setReadLetters(updated);
      localStorage.setItem("tam_su_read_letters", JSON.stringify(updated));
    }
  };

  // Update unlocked state to local storage
  const handleUnlockSuccess = (letterId: number) => {
    if (!unlockedLetters.includes(letterId)) {
      const updated = [...unlockedLetters, letterId];
      setUnlockedLetters(updated);
      localStorage.setItem("tam_su_unlocked_letters", JSON.stringify(updated));
    }
  };

  const handleCardClick = (letter: Letter) => {
    const isUnlocked = !letter.isLocked || unlockedLetters.includes(letter.id);
    
    if (isUnlocked) {
      setSelectedLetter(letter);
      setIsViewerOpen(true);
      markAsRead(letter.id);
    } else {
      setPasswordTargetLetter(letter);
      setIsPasswordModalOpen(true);
    }
  };

  const handlePasswordSubmit = (password: string): boolean => {
    if (!passwordTargetLetter) return false;
    
    if (password.toLowerCase() === passwordTargetLetter.password?.toLowerCase()) {
      handleUnlockSuccess(passwordTargetLetter.id);
      
      // Auto open letter viewer after unlock
      setTimeout(() => {
        setSelectedLetter(passwordTargetLetter);
        setIsViewerOpen(true);
        markAsRead(passwordTargetLetter.id);
      }, 1000);
      
      return true;
    }
    return false;
  };

  const handleResetProgress = () => {
    setReadLetters([]);
    setUnlockedLetters([]);
    localStorage.removeItem("tam_su_read_letters");
    localStorage.removeItem("tam_su_unlocked_letters");
    // Scroll smoothly to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToLetters = () => {
    lettersSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const allRead = mounted && readLetters.length === lettersData.length;

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-tr from-[#ffe5ec] via-[#fff5f6] to-[#ffcad4]"></div>
    );
  }

  return (
    <>
      {/* Immersive cinematic loader */}
      <AnimatePresence>
        {showPreloader && (
          <CinematicLoader
            onComplete={() => {
              setShowPreloader(false);
              audio.playBackground();
              
              // Automatically open the 10th special letter immediately
              const letter10 = lettersData.find((l) => l.id === 10);
              if (letter10) {
                setSelectedLetter(letter10);
                setIsViewerOpen(true);
                markAsRead(letter10.id);
              }
            }}
            playHover={audio.playHover}
            playSuccess={audio.playSuccess}
          />
        )}
      </AnimatePresence>

      {/* Main Love Letters Website layout */}
      {!showPreloader && (
        <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden font-sans">
          
          {/* Audio vinyl controller */}
          <MusicPlayer
            isPlaying={audio.isPlaying}
            volume={audio.volume}
            togglePlay={audio.togglePlay}
            changeVolume={audio.changeVolume}
            playHover={audio.playHover}
          />

          {/* Magical animated floaters background */}
          <AnimatedBackground />

          <main className="flex-1 w-full flex flex-col relative z-10">
            {/* Landing Intro Hero Section */}
            <HeroSection
              onScrollToLetters={scrollToLetters}
              playHover={audio.playHover}
            />

            {/* Reading Grid Container */}
            <div
              ref={lettersSectionRef}
              className="w-full max-w-5xl mx-auto px-4 py-16 flex flex-col gap-12 text-center"
            >
              <div className="flex flex-col items-center max-w-lg mx-auto gap-2">
                <span className="text-xs font-bold text-pink-500 bg-pink-100/50 px-3 py-1 rounded-full border border-pink-200/20 uppercase tracking-widest">
                  Hộp Thư Tình Kỹ Thuật Số
                </span>
                <h2 className="font-handwritten text-4xl md:text-5xl font-bold text-slate-800 tracking-wide text-glow">
                  Lời muốn nói gửi em
                </h2>
                <p className="text-xs font-medium text-slate-500 leading-relaxed italic">
                  “Cảm ơn em đã bước vào cuộc sống của anh và dạy anh cách yêu thương một người thương trọn vẹn.”
                </p>
              </div>

              {/* Progress Ribbon */}
              <ProgressTracker
                readLettersCount={readLetters.length}
                totalLetters={lettersData.length}
              />

              {/* Grid lists of letters */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {lettersData.map((letter) => (
                  <LetterCard
                    key={letter.id}
                    letter={letter}
                    isUnlocked={!letter.isLocked || unlockedLetters.includes(letter.id)}
                    isRead={readLetters.includes(letter.id)}
                    onOpen={() => handleCardClick(letter)}
                    playHover={audio.playHover}
                  />
                ))}
              </div>
            </div>

            {/* Scrolled High Emotion Ending Scene */}
            <EndingScene
              onReset={handleResetProgress}
              playHover={audio.playHover}
              playSuccess={audio.playSuccess}
              isVisible={allRead}
            />
          </main>

          {/* Letter Peeling Envelope Viewer Modal */}
          <LetterViewer
            letter={selectedLetter}
            isOpen={isViewerOpen}
            onClose={() => {
              setIsViewerOpen(false);
              setSelectedLetter(null);
            }}
            playOpenLetter={audio.playOpenLetter}
            playHover={audio.playHover}
            playTick={audio.playTick}
          />

          {/* Unlocking password popup screen */}
          <PasswordModal
            isOpen={isPasswordModalOpen}
            onClose={() => {
              setIsPasswordModalOpen(false);
              setPasswordTargetLetter(null);
            }}
            onSubmit={handlePasswordSubmit}
            letterTitle={passwordTargetLetter?.title || ""}
            playHover={audio.playHover}
            playSuccess={audio.playSuccess}
            playError={audio.playError}
          />
        </div>
      )}
    </>
  );
}
