import { useEffect, useRef, useState } from "react";

// Web Audio API Synthesizer for high-fidelity, zero-dependency sound effects
class SoundSynthesizer {
  private ctx: AudioContext | null = null;

  private initCtx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playHover() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "sine";
      // E5 note (sweet high frequency)
      osc.frequency.setValueAtTime(659.25, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch (e) {
      // Fail silently if not supported
    }
  }

  playOpenLetter() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      // Synthesize a soft wind/whoosh sound for envelope tearing
      const bufferSize = this.ctx.sampleRate * 0.3; // 0.3 seconds
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      
      // White noise generator
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      
      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.3);
      
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      
      noise.start();
      noise.stop(this.ctx.currentTime + 0.3);
    } catch (e) {}
  }

  playSuccess() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // Arpeggio of C major 7th chord (C5 - E5 - G5 - B5)
      const notes = [523.25, 659.25, 783.99, 987.77];
      notes.forEach((freq, index) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + index * 0.08);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.setValueAtTime(0.06, now + index * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.4);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 0.4);
      });
    } catch (e) {}
  }

  playError() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(100, this.ctx.currentTime + 0.25);
      
      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(300, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {}
  }
}

// Background Music Playlist URLs
const BG_MUSIC_URL = "https://res.cloudinary.com/duciwkvqs/video/upload/v1779984226/S%C6%A0N_T%C3%99NG_M-TP_-_%C4%90%E1%BB%AANG_L%C3%80M_TR%C3%81I_TIM_ANH_%C4%90AU_-_OFFICIAL_MUSIC_VIDEO_-_YouTube_1_m1vdi5.mp3";

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthRef = useRef<SoundSynthesizer | null>(null);

  useEffect(() => {
    synthRef.current = new SoundSynthesizer();
    
    const audio = new Audio(BG_MUSIC_URL);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked, wait for next gesture
        });
    }
  };

  const playBackground = () => {
    if (!audioRef.current || isPlaying) return;
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  const stopBackground = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const changeVolume = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return {
    isPlaying,
    volume,
    togglePlay,
    playBackground,
    stopBackground,
    changeVolume,
    playHover: () => synthRef.current?.playHover(),
    playOpenLetter: () => synthRef.current?.playOpenLetter(),
    playSuccess: () => synthRef.current?.playSuccess(),
    playError: () => synthRef.current?.playError(),
  };
}
