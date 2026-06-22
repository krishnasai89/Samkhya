"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function ModernPerspectives() {
  useEffect(() => {
    // Standard utility selector transition bypasses any Next.js hot-reload ref bugs
    gsap.fromTo(
      ".perspective-card",
      { opacity: 0, scale: 0.98, y: 10 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      },
    );
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 border border-neutral-900 bg-neutral-950/40 backdrop-blur-md rounded-none font-mono text-white selection:bg-purple-500/30 overflow-hidden">
      <div className="border-b border-neutral-900 px-6 py-3 flex justify-between items-center text-[10px] tracking-wider text-lime-600 uppercase">
        <span>Modern Exegesis // Contemporary Adaptation Matrix</span>
        <span className="flex items-center gap-1.5 text-cyan-400">
          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />{" "}
          Stream Active
        </span>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Pillar 1: Traditional & Yogic */}
        <div className="perspective-card space-y-4 opacity-0">
          <div className="border-b border-neutral-900 pb-2">
            <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest block">
              Category 01
            </span>
            <h2 className="text-base font-black text-white uppercase tracking-tight">
              Traditional & Yogic Perspectives
            </h2>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Spiritual masters and Swamis interpret Samkhya as the strict
            theoretical foundation behind classical{" "}
            <span className="text-neutral-200 font-bold">Raja Yoga</span>.
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-none">
              <h4 className="text-xs font-bold text-neutral-200 uppercase">
                Swami Vivekananda
              </h4>
              <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">
                His lectures on Jnana and Raja Yoga popularized the system
                globally, translating Purusha and Prakriti into highly
                accessible psychological principles of observation and nature.
              </p>
            </div>
            <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-none">
              <h4 className="text-xs font-bold text-neutral-200 uppercase">
                B.K.S. Iyengar
              </h4>
              <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">
                Bridged the gap between theoretical dualism and experiential
                physiology, mapping the 25 Tattvas directly onto physical
                execution and breath mastery.
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 2: Academic & Comparative */}
        <div className="perspective-card space-y-4 opacity-0">
          <div className="border-b border-neutral-900 pb-2">
            <span className="text-[9px] text-red-400 font-bold uppercase tracking-widest block">
              Category 02
            </span>
            <h2 className="text-base font-black text-white uppercase tracking-tight">
              Academic & Comparative Studies
            </h2>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            University academics examine Samkhya through rational lenses,
            comparing it to Western metaphysics, quantum mechanics, and
            conservation laws.
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-none">
              <h4 className="text-xs font-bold text-neutral-200 uppercase">
                Dr. Gerald James Larson
              </h4>
              <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">
                Author of{" "}
                <span className="italic text-neutral-400">
                  Classical Sāṃkhya
                </span>
                . His rigorous historical work serves as a standard contemporary
                analysis of the system's structural history and meaning.
              </p>
            </div>
            <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-none">
              <h4 className="text-xs font-bold text-neutral-200 uppercase">
                Dr. S. Radhakrishnan
              </h4>
              <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">
                His monumental volumes on{" "}
                <span className="text-neutral-400">Indian Philosophy</span>{" "}
                analyze Samkhya's evolutionary causality engines using standard
                academic comparative paradigms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Options Footer */}
      <div className="border-t border-neutral-900 bg-neutral-950/60 p-4 flex flex-wrap gap-2 justify-center items-center">
        <span className="text-[9px] text-neutral-600 uppercase tracking-wider mr-2 font-bold">
          Query Adaptations:
        </span>
        <button className="text-[9px] border border-neutral-800 hover:border-purple-500/40 text-neutral-400 px-2 py-1 transition-colors rounded-none">
          Introduction Literature
        </button>
        <button className="text-[9px] border border-neutral-800 hover:border-purple-500/40 text-neutral-400 px-2 py-1 transition-colors rounded-none">
          Science & Quantum Connections
        </button>
        <button className="text-[9px] border border-neutral-800 hover:border-purple-500/40 text-neutral-400 px-2 py-1 transition-colors rounded-none">
          Practical Tattva Application
        </button>
      </div>
    </div>
  );
}
