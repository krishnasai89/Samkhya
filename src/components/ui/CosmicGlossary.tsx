"use client";

import { useState } from "react";

interface PhilosophyTab {
  id: string;
  title: string;
  subtitle: string;
  canonicalText: string;
  principles: string[];
  modernInsight: string;
}

export default function CosmicGlossary() {
  const [activeTab, setActiveTab] = useState<string>("purusha");

  const library: Record<string, PhilosophyTab> = {
    purusha: {
      id: "purusha",
      title: "Puruṣa",
      subtitle: "The Witness-Consciousness // Tattva 01",
      canonicalText:
        "Absolute, independent, free, beyond perception, and impossible to describe in words. It remains pure, nonattributive consciousness that neither produces nor is produced.",
      principles: [
        "Passive Witness (Bhoktā)",
        "Plurality of Souls",
        "Pure Subjectivity",
      ],
      modernInsight:
        "In modern psychology, Puruṣa represents the quiet meta-awareness—the detached observer that watches the constant flow of thoughts, memories, and sensory events without being altered by them.",
    },
    prakriti: {
      id: "prakriti",
      title: "Prakṛti",
      subtitle: "Primordial Matrix & Matter // Tattva 02",
      canonicalText:
        "The unmanifested first cause of the world of our experiences. It is active, unconscious, infinite, and is a perfect baseline equilibrium of the three innate tendencies (Guṇas).",
      principles: [
        "First Cause (Pradhāna)",
        "Unconscious Energy (Jaḍa)",
        "Prakṛti-Parināma (Evolution)",
      ],
      modernInsight:
        "Comparable to the field of quantum potentiality or the absolute laws of energy conservation in physics—nothing is created or destroyed, only transformed through structural updates.",
    },
    antahkarana: {
      id: "antahkarana",
      title: "Antaḥkaraṇa",
      subtitle: "The Internal Psychic Apparatus // Tattvas 03–05",
      canonicalText:
        "Composed of Buddhi (Intellect/Judgment), Ahaṃkāra (Ego/I-Principle), and Manas (Mind/Sensory Coordinator). It translates unconscious material inputs into distinct mental structures.",
      principles: [
        "Buddhi // Cosmic Intellect",
        "Ahaṃkāra // Personalization",
        "Manas // Processing Hub",
      ],
      modernInsight:
        "The ultimate cognitive processing stack. Manas filters raw data input, Ahaṃkāra tags it with subjective ownership ('This is happening to me'), and Buddhi executes critical determination.",
    },
    gunas: {
      id: "gunas",
      title: "Triguṇa",
      subtitle: "The Three Innate Tendencies // Matrix Code Components",
      canonicalText:
        "Sattva (poise, illumination, joy), Rajas (dynamism, activity, pain), and Tamas (inertia, coarseness, obstruction). The shifting proportions of these three govern all physical and mental matter.",
      principles: [
        "Sattva // Balance & Light",
        "Rajas // Energy & Motion",
        "Tamas // Inertia & Mass",
      ],
      modernInsight:
        "The cosmic code's balance settings. When Rajas is high, the mind experiences restless anxiety; when Tamas rules, it falls into stagnation; when Sattva stabilizes, clear perception emerges.",
    },
  };

  const current = library[activeTab];

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 border border-neutral-900 bg-neutral-950/40 backdrop-blur-md rounded-none font-mono text-white selection:bg-purple-500/30 overflow-hidden">
      {/* HUD Header Bar */}
      <div className="border-b border-neutral-900 px-6 py-3 flex justify-between items-center text-[10px] tracking-wider text-neutral-500 uppercase">
        <span>System Framework // Canonical Archives</span>
        <span className="flex items-center gap-1.5 animate-pulse text-purple-400">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Read Ready
        </span>
      </div>

      <div className="flex flex-col md:flex-row min-h-[380px]">
        {/* Navigation Sidebar */}
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-neutral-900 bg-neutral-950/60 p-4 space-y-2">
          {Object.values(library).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 rounded-none text-xs transition-all duration-200 border flex flex-col gap-0.5 relative group
                ${
                  activeTab === tab.id
                    ? "border-purple-500/40 bg-purple-950/10 text-purple-300"
                    : "border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/40"
                }`}
            >
              {activeTab === tab.id && (
                <span className="absolute left-0 top-0 h-full w-[2px] bg-purple-500" />
              )}
              <span className="font-bold tracking-widest uppercase text-sm">
                {tab.title}
              </span>
              <span className="text-[9px] opacity-60 truncate">
                {tab.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* Content Showcase Window */}
        <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[9px] text-amber-500 font-bold uppercase tracking-[0.2em]">
                {current.subtitle}
              </span>
              <h2 className="text-2xl font-black tracking-tight text-white uppercase mt-0.5">
                {current.title}
              </h2>
            </div>

            {/* Canonical Definition Box */}
            <div className="relative p-4 border border-neutral-900 bg-black/40 text-xs text-neutral-300 leading-relaxed border-l-2 border-l-neutral-700">
              <span className="absolute top-2 right-2 text-[8px] text-neutral-700 font-bold uppercase">
                Source: Karika
              </span>
              <q>{current.canonicalText}</q>
            </div>

            {/* Bullet Matrix Options */}
            <div className="space-y-2">
              <span className="text-[9px] text-neutral-600 font-bold uppercase tracking-widest block">
                Structural Vectors
              </span>
              <div className="flex flex-wrap gap-2">
                {current.principles.map((p, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-neutral-900 border border-neutral-800 text-neutral-400 px-2.5 py-1 rounded-none"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modern Paradigm Insight Footer */}
          <div className="border-t border-neutral-900/60 pt-4 mt-auto">
            <span className="text-[9px] text-purple-400 font-bold uppercase tracking-widest block mb-1">
              Modern Commentary Insight
            </span>
            <p className="text-[11px] text-neutral-500 leading-relaxed italic">
              {current.modernInsight}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
