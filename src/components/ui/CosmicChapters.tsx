"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface Adhyaya {
  num: number;
  title: string;
  translation: string;
  focus: string;
  aphorisms: number;
}

export default function CosmicChapters() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Smooth initial staggering reveal sequence
    gsap.fromTo(
      ".chapter-card",
      { opacity: 0, scale: 0.98, y: 12 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.06,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      },
    );
  }, []);

  // Mathematical 3D bending transformation handler
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate cursor positions normalized between -0.5 and 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Twist dimensions: tilt angle limits (max 12 degrees of bend)
    const tiltX = y * -12;
    const tiltY = x * 12;

    gsap.to(card, {
      transformPerspective: 600,
      rotateX: tiltX,
      rotateY: tiltY,
      scale: 1.02,
      borderColor: "rgba(168, 85, 247, 0.4)", // Highlight border glow
      backgroundColor: "rgba(10, 10, 10, 0.8)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Gracefully retract card vector positions back to flat baseline orientation
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      borderColor: "rgba(38, 38, 38, 1)", // Reset to text-neutral-900 baseline
      backgroundColor: "rgba(10, 10, 10, 0.4)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const chapters: Adhyaya[] = [
    {
      num: 1,
      title: "Viṣayādhyāya",
      translation: "Topics of Reality",
      focus:
        "Analytical breakdown of suffering, the definition of Puruṣa and Prakṛti, and the explicit refutation of a creationist deity.",
      aphorisms: 164,
    },
    {
      num: 2,
      title: "Pradhānādhyāya",
      translation: "The Evolution of Nature",
      focus:
        "Detailed linear progression of Prakṛti's manifest evolutes (Mahad, Ahaṃkāra, Manas) and the mechanics of cosmic transformation.",
      aphorisms: 47,
    },
    {
      num: 3,
      title: "Vairāgyādhyāya",
      translation: "Detachment and Bondage",
      focus:
        "Analysis of the subtle body, psychological dispositions, transmigration, and the development of complete emotional dispassion.",
      aphorisms: 84,
    },
    {
      num: 4,
      title: "Ākhyāyikādhyāya",
      translation: "Philosophical Allegories",
      focus:
        "Fables, parables, and classic case stories demonstrating practical, lived lessons in discriminative knowledge and observation.",
      aphorisms: 28,
    },
    {
      num: 5,
      title: "Parapakṣanirākaraṇa",
      translation: "Refutation of Rival Schools",
      focus:
        "Rigorous dialectical debates disproving competing ontological claims from rival schools of ancient Indian thought.",
      aphorisms: 129,
    },
    {
      num: 6,
      title: "Tantrasāradhyāya",
      translation: "The Essence of the Doctrine",
      focus:
        "A systematic recapitulation of aphoristic axioms consolidating the true path to isolating consciousness (Kaivalya).",
      aphorisms: 69,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full max-w-5xl mx-auto mt-12 font-mono text-white select-none relative"
      style={{ perspective: "1000px" }} // Set high-level 3D container context depth pass
    >
      {/* Grid Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((ch) => (
          <Link
            key={ch.num}
            href={`/chapters/${ch.num}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="chapter-card group block border border-neutral-900 bg-neutral-950/40 backdrop-blur-md p-5 rounded-none relative transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] opacity-0 will-change-transform select-none"
            style={{ transformStyle: "preserve-3d" }} // Forces internal layers to render on unique Z depths
          >
            {/* Corner bracket HUD accents */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neutral-800 group-hover:border-purple-500 transition-colors" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-800 group-hover:border-purple-500 transition-colors" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neutral-800 group-hover:border-purple-500 transition-colors" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neutral-800 group-hover:border-purple-500 transition-colors" />

            {/* Meta Line - Pushed out slightly in 3D space */}
            <div
              className="flex justify-between items-center text-[9px] text-neutral-600 font-bold uppercase tracking-widest mb-3 transition-transform duration-300"
              style={{ transform: "translateZ(20px)" }}
            >
              <span>Adhyāya 0{ch.num}</span>
              <span className="text-purple-500/70 group-hover:text-purple-400">
                {ch.aphorisms} Sūtras
              </span>
            </div>

            {/* Title Block */}
            <div
              className="space-y-0.5 border-b border-neutral-900 pb-2 mb-3"
              style={{ transform: "translateZ(25px)" }}
            >
              <h3 className="text-sm font-black text-neutral-200 uppercase tracking-tight group-hover:text-white transition-colors">
                {ch.title}
              </h3>
              <span className="text-[10px] text-neutral-500 italic block mt-0.5">
                <q>{ch.translation}</q>
              </span>
            </div>

            {/* Description Summary */}
            <p
              className="text-[11px] text-neutral-400 leading-relaxed min-h-[60px]"
              style={{ transform: "translateZ(15px)" }}
            >
              {ch.focus}
            </p>

            {/* Interactive Route Pointer */}
            <div
              className="mt-4 pt-2 border-t border-neutral-900/60 text-[8px] text-neutral-600 group-hover:text-purple-400 tracking-widest uppercase flex justify-between items-center transition-colors"
              style={{ transform: "translateZ(10px)" }}
            >
              <span>Execute Core Read Loop</span>
              <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
