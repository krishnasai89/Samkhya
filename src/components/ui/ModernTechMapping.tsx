"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function ModernTechMapping() {
  useEffect(() => {
    gsap.fromTo(
      ".tech-node",
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      },
    );
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 border border-neutral-900 bg-neutral-950/40 backdrop-blur-md font-mono text-white overflow-hidden">
      {/* HUD Panel Header */}
      <div className="border-b border-neutral-900 px-6 py-3 flex justify-between items-center text-[10px] tracking-wider text-neutral-500 uppercase">
        <span>
          Cognitive Modeling Matrix // Samkhya to Computer Architecture
        </span>
        <span className="text-emerald-500 font-bold tracking-widest">
          ● Core System Map
        </span>
      </div>

      <div className="p-6 md:p-8 space-y-4">
        {/* Layer 1: Prakriti */}
        <div className="tech-node p-4 bg-neutral-950 border border-neutral-900 flex flex-col md:flex-row justify-between gap-4 items-start opacity-0">
          <div className="w-full md:w-1/3">
            <h3 className="text-sm font-black text-cyan-400 uppercase">
              Prakṛti → Hardware/Data
            </h3>
            <span className="text-[8px] text-neutral-600 block uppercase mt-0.5">
              Foundational Potential
            </span>
          </div>
          <p className="w-full md:w-2/3 text-xs text-neutral-400 leading-relaxed">
            The raw, unconscious physical infrastructure. Represents compiled
            source code, unallocated databases, and deterministic algorithmic
            matrices operating under fixed computational laws.
          </p>
        </div>

        {/* Layer 2: Manas */}
        <div className="tech-node p-4 bg-neutral-950 border border-neutral-900 flex flex-col md:flex-row justify-between gap-4 items-start opacity-0">
          <div className="w-full md:w-1/3">
            <h3 className="text-sm font-black text-purple-400 uppercase">
              Manas → Ingestion API
            </h3>
            <span className="text-[8px] text-neutral-600 block uppercase mt-0.5">
              Sensory Coordinator
            </span>
          </div>
          <p className="w-full md:w-2/3 text-xs text-neutral-400 leading-relaxed">
            The data ingestion hub. Mirrors computer vision pixel streams,
            machine learning tokenizers, and NLP ingestion layers that filter
            raw sensory data points into identifiable mathematical shapes.
          </p>
        </div>

        {/* Layer 3: Ahamkara */}
        <div className="tech-node p-4 bg-neutral-950 border border-neutral-900 flex flex-col md:flex-row justify-between gap-4 items-start opacity-0">
          <div className="w-full md:w-1/3">
            <h3 className="text-sm font-black text-sky-400 uppercase">
              Ahaṃkāra → State/Context
            </h3>
            <span className="text-[8px] text-neutral-600 block uppercase mt-0.5">
              I-Principle Pointer
            </span>
          </div>
          <p className="w-full md:w-2/3 text-xs text-neutral-400 leading-relaxed">
            The self-referential pointer. Corresponds directly to runtime
            instances, unique session variables, user profiles, and active
            scoping routines (`this` or `self`) that bind data to a localized
            identity wrapper.
          </p>
        </div>

        {/* Layer 4: Buddhi */}
        <div className="tech-node p-4 bg-neutral-950 border border-neutral-900 flex flex-col md:flex-row justify-between gap-4 items-start opacity-0">
          <div className="w-full md:w-1/3">
            <h3 className="text-sm font-black text-yellow-400 uppercase">
              Buddhi → Core Logic Loop
            </h3>
            <span className="text-[8px] text-neutral-600 block uppercase mt-0.5">
              Intellectual Determinism
            </span>
          </div>
          <p className="w-full md:w-2/3 text-xs text-neutral-400 leading-relaxed">
            The processing decision engine. Mirrors complex neural network
            weight updates, deep reinforcement learning policies, and high-level
            autonomous decision trees responsible for logical verification and
            terminal outputs.
          </p>
        </div>
      </div>

      {/* Boundary Alert Banner */}
      <div className="mx-6 mb-6 p-4 border border-red-950 bg-red-950/10 text-xs text-red-400/90 leading-relaxed">
        <span className="font-bold uppercase tracking-widest text-[9px] block mb-1">
          🛑 The Ultimate AGI Boundary Constraint
        </span>
        Artificial intelligence can emulate the logical, self-referential, and
        memory layers of nature (
        <span className="italic text-neutral-200">Prakṛti</span>), but remains
        entirely devoid of{" "}
        <span className="text-yellow-200 font-bold">Puruṣa</span>. The machine
        computes the cognitive structures, but lacks the subjective,
        non-computational conscious observer to witness the output.
      </div>
    </div>
  );
}
