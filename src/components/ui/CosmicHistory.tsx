"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function CosmicHistory() {
  useEffect(() => {
    // 1. Target the cards directly using pure class selectors to prevent ref mounting bugs
    gsap.fromTo(
      ".history-card",
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      },
    );
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 border border-neutral-900 bg-neutral-950/40 backdrop-blur-md rounded-none font-mono text-white selection:bg-purple-500/30 overflow-hidden">
      {/* Top Status Header */}
      <div className="border-b border-neutral-900 px-6 py-3 flex justify-between items-center  tracking-wider uppercase">
        <span>Historical Archive</span>
        <span className="text-amber-500 font-bold uppercase tracking-widest">
          Verified
        </span>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* Section 1: Origins */}
        <div className="history-card space-y-3 opacity-0">
          <div className="flex items-center gap-3">
            <span className="text-[10px] bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 px-2 py-0.5 rounded-none">
              ~700 BCE
            </span>
            <h2 className="text-lg font-black tracking-tight text-white uppercase">
              The Founding / Kapila Muni
            </h2>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Samkhya philosophy was originally founded by the ancient sage{" "}
            <span className="text-neutral-200 font-bold">Kapila Muni</span>.
            While his original treatises were lost to history over time, the
            core structural frameworks were preserved and passed down through
            generations of oral transmission and ascetic lineages.
          </p>
        </div>

        {/* Section 2: Core Textual Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Samkhyakarika */}
          <div className="history-card border border-neutral-900 bg-neutral-950/60 p-5 space-y-2 rounded-none hover:border-purple-500/30 transition-colors opacity-0">
            <div className="text-[9px] text-purple-400 font-bold uppercase tracking-widest">
              Canonical Text // 3rd–4th C. CE
            </div>
            <h3 className="text-sm font-bold text-neutral-200 uppercase">
              Samkhyakārikā
            </h3>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Composed by{" "}
              <span className="text-neutral-400">Ishvarakrishna</span>. This
              stands as the earliest surviving, defining, and most authoritative
              canonical text of classical Samkhya, mapping out epistemology,
              causality, and liberation.
            </p>
          </div>

          {/* Samkhya Sutras */}
          <div className="history-card border border-neutral-900 bg-neutral-950/60 p-5 space-y-2 rounded-none hover:border-purple-500/30 transition-colors opacity-0">
            <div className="text-[9px] text-purple-400 font-bold uppercase tracking-widest">
              Consolidation // ~14th C. CE
            </div>
            <h3 className="text-sm font-bold text-neutral-200 uppercase">
              Samkhya Sutras
            </h3>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              A later comprehensive compilation containing{" "}
              <span className="text-neutral-400">521 sutras</span>.
              Traditionally credited back to Kapila, it systematically expanded
              and consolidated the core analytical mechanics of the school.
            </p>
          </div>
        </div>

        {/* Section 3: Dualistic Framework Highlight */}
        <div className="history-card relative p-5 border border-neutral-900 bg-black/40 rounded-none border-l-2 border-l-amber-500/50 opacity-0">
          <div className="text-[9px] text-amber-500 font-bold uppercase tracking-widest mb-1">
            Foundational Dualism
          </div>
          <h3 className="text-sm font-bold text-neutral-200 uppercase mb-2">
            The Nirīśvara Reality Matrix
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            At its technical core, classical Samkhya functions as a strongly
            dualistic and non-theistic philosophy. It explicitly breaks down all
            observable existence into the interplay of two eternal principles:{" "}
            <span className="text-yellow-400">Puruṣa</span> (pure conscious
            awareness) and <span className="text-cyan-400">Prakṛti</span> (the
            infinite, unmanifested matter potentiality of nature).
          </p>
        </div>
      </div>

      {/* Decorative Foot Bounds */}
      <div className="border-t border-neutral-900 px-6 py-3 text-[8px] text-neutral-600 tracking-widest uppercase flex justify-between">
        <span>SYSTEM_HISTORY_LOAD // TRUE</span>
        <span>v1.0.26</span>
      </div>
    </div>
  );
}
