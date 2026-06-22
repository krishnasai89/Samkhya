"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

interface MythItem {
  id: string;
  title: string;
  misconception: string;
  reality: string;
  tag: string;
}

export default function CosmicMyths() {
  const [activeMyth, setActiveMyth] = useState<string>("atheism");

  useEffect(() => {
    // Smooth entry sequence for panel elements using clean utility classes
    gsap.fromTo(
      ".myth-panel-node",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      },
    );
  }, [activeMyth]);

  const archive: Record<string, MythItem> = {
    atheism: {
      id: "atheism",
      title: "01 // Anti-Theism Myth",
      misconception:
        "Because classical Samkhya does not rely on a creator God to govern or explain the cosmos, it must be a dogmatic, anti-God religion or an aggressive atheistic belief system.",
      reality:
        "Samkhya is essentially an agnostic/non-theistic rational science. It does not actively deny a deity, but rather demonstrates that a creator is a metaphysically unnecessary assumption. The cosmos operates autonomously via the natural, mathematical friction between Purusha (Consciousness) and Prakriti (Nature).",
      tag: "Theistic Axiom Audit",
    },
    illusion: {
      id: "illusion",
      title: "02 // Physical Illusion Myth",
      misconception:
        "Confusing Samkhya with Advaita Vedanta leads to the assumption that the material world (Prakriti) is just Maya—a fake hallucination, dream state, or an ultimate unreality.",
      reality:
        "Samkhya is a system of absolute dualistic realism. It establishes that both the material world (matter, intellect, body, emotions) and pure consciousness are completely, independently real. Suffering does not exist because reality is fake; it exists because consciousness misidentifies with material configurations.",
      tag: "Ontological Realism Status",
    },
    mind: {
      id: "mind",
      title: "03 // Mind as Self Myth",
      misconception:
        "Strongly identifying with our internal monologues, emotional currents, and critical reasoning loops under the classic premise of 'I think, therefore I am.'",
      reality:
        "Samkhya provides a cold psychological anatomy proving that the mind (Manas), ego (Ahamkara), and intellect (Buddhi) are organic, mechanical products of matter (Prakriti). Your authentic identity is Purusha—the silent, unaltering witness-consciousness sitting completely detached behind those processing programs.",
      tag: "Cognitive Ego Scoping",
    },
    theory: {
      id: "theory",
      title: "04 // Dry Intellectualism Myth",
      misconception:
        "Because it separates reality into an exhaustive taxonomic chart of 25 structural elements, it is perceived as a dry, pedantic mental exercise with no practical value.",
      reality:
        "The terminal objective of Samkhya is intensely therapeutic: the total destruction of the threefold human suffering (Duḥkha). It serves as the diagnostic and theoretical blueprint behind Classical Yoga and Ayurveda, weaponizing analytical discernment to decouple you from material stressors.",
      tag: "Soteriological Utility Engine",
    },
  };

  const current = archive[activeMyth];

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 border border-neutral-900 bg-neutral-950/40 backdrop-blur-md rounded-none font-mono text-white selection:bg-purple-500/30 overflow-hidden">
      {/* Top HUD Frame Header */}
      <div className="border-b border-neutral-900 px-6 py-3 flex justify-between items-center text-[10px] tracking-wider text-neutral-500 uppercase">
        <span>
          System Diagnostics // Deconstructing the Reality Matrix Myths
        </span>
        <span className="flex items-center gap-1.5 text-amber-500 font-bold uppercase tracking-widest">
          ● Logic Clear
        </span>
      </div>

      <div className="flex flex-col md:flex-row min-h-[360px]">
        {/* Navigation Sidebar Selector */}
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-neutral-900 bg-neutral-950/60 p-4 space-y-2">
          {Object.values(archive).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMyth(item.id)}
              className={`w-full text-left px-4 py-3 rounded-none text-xs transition-all duration-200 border flex flex-col gap-0.5 relative group
                ${
                  activeMyth === item.id
                    ? "border-amber-500/40 bg-amber-950/10 text-amber-400"
                    : "border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/40"
                }`}
            >
              {activeMyth === item.id && (
                <span className="absolute left-0 top-0 h-full w-[2px] bg-amber-500" />
              )}
              <span className="font-bold tracking-widest uppercase text-[11px]">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* Evaluation Read Window */}
        <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col space-y-5 justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[9px] text-neutral-600 font-bold uppercase tracking-[0.2em]">
                {current.tag}
              </span>
              <h2 className="text-lg font-black tracking-tight text-white uppercase mt-0.5">
                Paradigm Verification Check
              </h2>
            </div>

            {/* Misconception Panel */}
            <div className="myth-panel-node p-4 bg-red-950/10 border border-red-950/30 text-xs rounded-none">
              <span className="text-[9px] text-red-400 font-bold uppercase block mb-1">
                Common Misconception
              </span>
              <q className="text-neutral-400 leading-relaxed">
                {current.misconception}
              </q>
            </div>

            {/* Verified Reality Panel */}
            <div className="myth-panel-node p-4 bg-emerald-950/10 border border-emerald-950/30 text-xs rounded-none border-l-2 border-l-emerald-500">
              <span className="text-[9px] text-emerald-400 font-bold uppercase block mb-1">
                Canonical Reality Engine
              </span>
              <p className="text-neutral-300 leading-relaxed">
                {current.reality}
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-900/60 pt-3 text-[9px] text-neutral-600 uppercase flex justify-between">
            <span>
              Audit Ref // {current.id.toUpperCase()}_MATRIX_STABILIZE
            </span>
            <span>Verified Core</span>
          </div>
        </div>
      </div>
    </div>
  );
}
