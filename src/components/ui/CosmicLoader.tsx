"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function CosmicLoader() {
  const [mounted, setMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const [sattva, setSattva] = useState("0");
  const [rajas, setRajas] = useState("0");
  const [tamas, setTamas] = useState("0");

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // 1. Force state variables update loop instantly on hardware mount
    let progress = 0;
    const glitchChars = ["Ø", "§", "Δ", "Ξ", "Ψ", "Z", "7"];

    const interval = setInterval(() => {
      progress += 5;

      if (progress <= 100) {
        setSattva(
          Math.random() > 0.85 && progress < 90
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : `${progress}`,
        );
        setRajas(
          Math.random() > 0.8 && progress < 90
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : `${progress}`,
        );
        setTamas(
          Math.random() > 0.9 && progress < 90
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : `${progress}`,
        );
      } else {
        clearInterval(interval);
        handleExit();
      }
    }, 30);

    // 2. Clear-cut emergency hardware timeout gate (3 seconds max)
    const fallbackTimeout = setTimeout(() => {
      clearInterval(interval);
      handleExit();
    }, 3000);

    const handleExit = () => {
      setSattva("100");
      setRajas("100");
      setTamas("100");
      setIsClosing(true);

      // Smooth curtain raise using GSAP over the target ref container
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: () => {
            setShowHome(true);
          },
        });
      } else {
        // Safe toggle fallback if GSAP context drops
        setShowHome(true);
      }
    };

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  if (!mounted || showHome) return null;

  return (
    <div
      ref={containerRef}
      id="loader-screen"
      className={`fixed inset-0 z-50 w-screen h-screen bg-[#060606] flex flex-col items-center justify-center font-mono select-none transition-all duration-700
        ${isClosing ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      {/* PURUSHA: Center Point Witness */}
      <div className="relative flex flex-col items-center justify-center mb-12">
        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-ping absolute" />
        <div className="w-2 h-2 bg-white rounded-full relative z-10" />
        <span className="text-[9px] tracking-[0.6em] uppercase text-white/40 mt-6 block">
          [ Consciousness Witness ]
        </span>
      </div>

      {/* PRAKRITI / GUNAS: Metrics Panel Framework */}
      <div className="w-full max-w-xs space-y-4 border border-neutral-900/60 bg-neutral-950/40 p-6 rounded-none backdrop-blur-sm z-20">
        <div className="text-[10px] text-neutral-600 tracking-wider uppercase border-b border-neutral-900 pb-2 flex justify-between">
          <span>State: Avyakta</span>
          <span className="animate-pulse text-amber-500/80">● Mutating</span>
        </div>

        {/* Sattva Grid */}
        <div className="guna-metric flex justify-between items-center text-xs text-white">
          <span className="text-blue-400 font-bold tracking-widest">
            01 SATTVA
          </span>
          <span className="font-bold text-neutral-300 w-12 text-right">
            {sattva}%
          </span>
        </div>

        {/* Rajas Grid */}
        <div className="guna-metric flex justify-between items-center text-xs text-white">
          <span className="text-red-400 font-bold tracking-widest">
            02 RAJAS
          </span>
          <span className="font-bold text-neutral-300 w-12 text-right">
            {rajas}%
          </span>
        </div>

        {/* Tamas Grid */}
        <div className="guna-metric flex justify-between items-center text-xs text-white">
          <span className="text-neutral-500 font-bold tracking-widest">
            03 TAMAS
          </span>
          <span className="font-bold text-neutral-300 w-12 text-right">
            {tamas}%
          </span>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 text-[8px] text-neutral-700 tracking-widest uppercase">
        PRIME_MATRICES_INITIALIZE // v1.0.26
      </div>
    </div>
  );
}
