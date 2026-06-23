"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CosmicPipeline() {
  const pipelineRef = useRef<HTMLDivElement | null>(null);

  // Precision DOM Anchor Nodes
  const anchors = {
    purusha: useRef<HTMLSpanElement | null>(null),
    prakriti: useRef<HTMLSpanElement | null>(null),
    mahadIn: useRef<HTMLSpanElement | null>(null),
    mahadOut: useRef<HTMLSpanElement | null>(null),
    ahamkarIn: useRef<HTMLSpanElement | null>(null),
    ahamkarOut: useRef<HTMLSpanElement | null>(null),
    manasIn: useRef<HTMLSpanElement | null>(null),
    manasOut: useRef<HTMLSpanElement | null>(null),
    sattvaIn: useRef<HTMLSpanElement | null>(null),
    rajasIn: useRef<HTMLSpanElement | null>(null),
    tamasIn: useRef<HTMLSpanElement | null>(null),
  };

  const [paths, setPaths] = useState<Record<string, string>>({});

  useEffect(() => {
    const calculateCoordinates = () => {
      if (!pipelineRef.current) return;

      const pipelineRect = pipelineRef.current.getBoundingClientRect();

      const getPos = (el: HTMLSpanElement | null) => {
        if (!el) return { x: 0, y: 0 };
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left - pipelineRect.left + rect.width / 2,
          y: rect.top - pipelineRect.top + rect.height / 2,
        };
      };

      const posP = getPos(anchors.purusha.current);
      const posPR = getPos(anchors.prakriti.current);
      const posMI = getPos(anchors.mahadIn.current);
      const posMO = getPos(anchors.mahadOut.current);
      const posAI = getPos(anchors.ahamkarIn.current);
      const posAO = getPos(anchors.ahamkarOut.current);
      const posMNS_I = getPos(anchors.manasIn.current);
      const posMNS_O = getPos(anchors.manasOut.current);
      const posS = getPos(anchors.sattvaIn.current);
      const posR = getPos(anchors.rajasIn.current);
      const posT = getPos(anchors.tamasIn.current);

      setPaths({
        purushaToMahad: `M ${posP.x} ${posP.y} Q ${(posP.x + posMI.x) / 1.4} ${posMI.y - 30} ${posMI.x} ${posMI.y}`,
        prakritiToMahad: `M ${posPR.x} ${posPR.y} Q ${(posPR.x + posMI.x) / 1.1} ${posMI.y - 30} ${posMI.x} ${posMI.y}`,
        mahadToAhamkar: `M ${posMO.x} ${posMO.y} L ${posAI.x} ${posAI.y}`,
        ahamkarToManas: `M ${posAO.x} ${posAO.y} L ${posMNS_I.x} ${posMNS_I.y}`,
        manasToSattva: `M ${posMNS_O.x} ${posMNS_O.y} Q ${posMNS_O.x} ${posS.y - 40} ${posS.x} ${posS.y}`,
        manasToRajas: `M ${posMNS_O.x} ${posMNS_O.y} L ${posR.x} ${posR.y}`,
        manasToTamas: `M ${posMNS_O.x} ${posMNS_O.y} Q ${posMNS_O.x} ${posT.y - 40} ${posT.x} ${posT.y}`,
      });
    };

    setTimeout(calculateCoordinates, 150);
    window.addEventListener("resize", calculateCoordinates);

    const element = pipelineRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pipeline-node",
        { scale: 0.96, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        },
      );

      gsap.to(".cosmic-stream", {
        strokeDashoffset: -20,
        duration: 1.2,
        repeat: -1,
        ease: "none",
      });
    }, element);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", calculateCoordinates);
    };
  }, []);

  return (
    <div
      ref={pipelineRef}
      className="w-full max-w-6xl mx-auto mt-24 px-4 font-mono select-none text-white relative pb-32"
    >
      {/* Background Flow Vector System */}
      <div className="absolute inset-0 pointer-events-none z-0 w-full h-full">
        <svg className="w-full h-full text-neutral-800" fill="none">
          <path
            d={paths.purushaToMahad}
            stroke="#eab308"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="cosmic-stream opacity-40"
          />
          <path
            d={paths.prakritiToMahad}
            stroke="#06b6d4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="cosmic-stream opacity-40"
          />
          <path
            d={paths.mahadToAhamkar}
            stroke="#a855f7"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="cosmic-stream opacity-40"
          />
          <path
            d={paths.ahamkarToManas}
            stroke="#a855f7"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="cosmic-stream opacity-40"
          />
          <path
            d={paths.manasToSattva}
            stroke="#3b82f6"
            strokeWidth="1.2"
            strokeDasharray="5 3"
            className="cosmic-stream opacity-30"
          />
          <path
            d={paths.manasToRajas}
            stroke="#ef4444"
            strokeWidth="1.2"
            strokeDasharray="7 3"
            className="cosmic-stream opacity-30"
          />
          <path
            d={paths.manasToTamas}
            stroke="#737373"
            strokeWidth="1.2"
            strokeDasharray="9 3"
            className="cosmic-stream opacity-30"
          />
        </svg>
      </div>

      {/* STAGE 1: SOURCE AXIS (PURUSHA vs PRAKRITI) */}
      <div className="flex justify-between items-center w-full max-w-3xl mx-auto relative z-10 mb-20">
        {/* Purusha: Added cosmic-node and bg-blue targets to trigger detaching pure state */}
        <div className="pipeline-node cosmic-node bg-blue-950/20 group relative w-32 h-32 md:w-36 md:h-36 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center cursor-none transition-all duration-300 hover:border-yellow-500/40 hover:bg-yellow-500/10">
          <h3 className="text-sm md:text-base font-bold text-yellow-200 group-hover:text-yellow-400 transition-colors">
            Purusha
          </h3>
          <span className="text-[7px] text-yellow-500/50 tracking-widest uppercase mt-0.5">
            Consciousness
          </span>
          <span
            ref={anchors.purusha}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 opacity-0"
          />
        </div>

        {/* Prakriti: Added cosmic-node and bg-red to spark Rajas chaotic morph loop */}
        <div className="pipeline-node cosmic-node bg-red-950/20 group relative w-32 h-32 md:w-36 md:h-36 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center cursor-none transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10">
          <h3 className="text-sm md:text-base font-bold text-cyan-200 group-hover:text-cyan-400 transition-colors">
            Prakriti
          </h3>
          <span className="text-[7px] text-cyan-500/50 tracking-widest uppercase mt-0.5">
            Matter Potential
          </span>
          <span
            ref={anchors.prakriti}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 opacity-0"
          />
        </div>
      </div>

      {/* STAGE 2: MAHAD (THE INTELLECT MATRIX) */}
      <div className="flex flex-col items-center justify-center my-16 relative z-10">
        {/* Mahad/Buddhi: Added cosmic-node (falls to 'else' block, morphing into Tamas frame) */}
        <div className="pipeline-node cosmic-node bg-neutral-950/40 group relative w-40 h-20 md:w-44 md:h-24 bg-purple-950/10 border border-purple-500/20 rounded-[50%_50%_50%_50%_/_40%_40%_60%_60%] flex flex-col items-center justify-center p-4 text-center cursor-none transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-950/20">
          <span
            ref={anchors.mahadIn}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 opacity-0"
          />
          <h3 className="text-xs md:text-sm font-bold text-purple-200 group-hover:text-purple-400 transition-colors">
            Mahad / Buddhi
          </h3>
          <span className="text-[7px] text-purple-400 tracking-widest uppercase mt-0.5">
            Cosmic Intellect
          </span>
          <span
            ref={anchors.mahadOut}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 opacity-0"
          />
        </div>
      </div>

      {/* STAGE 3: AHAMKARA */}
      <div className="flex flex-col items-center justify-center my-16 relative z-10">
        <div className="pipeline-node cosmic-node bg-neutral-950/40 group relative w-20 h-20 md:w-24 md:h-24 bg-sky-950/10 border border-sky-400/20 rounded-[00%_00%_100%_100%] flex flex-col items-center justify-center cursor-none transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-950/20">
          <span
            ref={anchors.ahamkarIn}
            className="absolute top-0 left-0 w-1 h-1 opacity-0"
          />
          <div className="text-center">
            <h3 className="text-xs md:text-sm font-bold text-sky-200 group-hover:text-sky-400 transition-colors">
              Ahamkara
            </h3>
            <span className="text-[7px] text-sky-400 tracking-wider uppercase block mt-0.5">
              I-Principle
            </span>
          </div>
          <span
            ref={anchors.ahamkarOut}
            className="absolute bottom-full left-full w-1 h-1 opacity-0 -rotate-45"
          />
        </div>
      </div>

      {/* STAGE 4: MANAS (THE COGNITIVE HUB BRIDGE) */}
      <div className="flex flex-col items-center justify-center mb-20 relative z-10">
        <div className="pipeline-node cosmic-node bg-neutral-950/40 group relative w-48 h-12 bg-neutral-950/80 border border-purple-500/30 rounded-sm flex flex-col items-center justify-center p-2 text-center cursor-none transition-all duration-300 hover:border-purple-500/50">
          <span
            ref={anchors.manasIn}
            className="absolute top-0 left-1/2 w-1 h-1 opacity-0"
          />
          <h4 className="text-xs font-bold text-purple-100 tracking-widest group-hover:text-purple-300 transition-colors">
            Manas (The Mind)
          </h4>
          <span className="text-[7px] text-neutral-500 uppercase tracking-widest mt-0.5">
            Sensory Coordinator
          </span>
          <span
            ref={anchors.manasOut}
            className="absolute bottom-0 left-1/2 w-1 h-1 opacity-0"
          />
        </div>
      </div>

      {/* STAGE 5: GUNA CHANNELS & FLUID OUTCOMES */}
      <div className="grid grid-cols-3 gap-3 md:gap-6 w-full relative z-10 items-start">
        {/* SATTVA RE-ROUTE */}
        <div className="flex flex-col items-center space-y-6">
          <div className="pipeline-node cosmic-node bg-neutral-950/40 relative w-24 h-24 bg-blue-950/10 border border-blue-500/20 rounded-[50%_50%_50%_50%_/_70%_70%_40%_40%] flex flex-col items-center justify-center text-center cursor-none transition-all duration-300 hover:border-blue-500/40">
            <span
              ref={anchors.sattvaIn}
              className="absolute top-0 left-1/2 w-1 h-1 opacity-0"
            />
            <h4 className="text-xs font-bold text-blue-300">Sattva</h4>
            <span className="text-[6px] text-neutral-500 uppercase tracking-widest">
              Illumination
            </span>
          </div>

          <div className="w-full space-y-1.5">
            <div className="text-[7px] md:text-[8px] text-blue-500 font-bold uppercase tracking-widest border-b border-blue-950 pb-1 mb-2">
              Jñānendriyas
            </div>
            {[
              "Ears (Hearing)",
              "Skin (Touch)",
              "Eyes (Sight)",
              "Tongue (Taste)",
              "Nose (Smell)",
            ].map((sense, i) => (
              <div
                key={i}
                className="pipeline-node cosmic-node bg-neutral-950/70 border border-neutral-900 px-2 py-1.5 text-neutral-400 rounded-sm cursor-none hover:border-blue-500/30 transition-all duration-200 hover:text-blue-200"
              >
                <span className="text-blue-500/60 mr-1.5 font-bold">
                  {i + 6}
                </span>{" "}
                {sense}
              </div>
            ))}
          </div>
        </div>

        {/* RAJAS RE-ROUTE */}
        <div className="flex flex-col items-center space-y-6">
          <div className="pipeline-node cosmic-node bg-red-950/20 relative w-20 h-20 bg-red-950/10 border border-red-500/20 rounded-xl flex flex-col items-center justify-center text-center rotate-45 cursor-none transition-all duration-300 hover:border-red-500/40">
            <span
              ref={anchors.rajasIn}
              className="absolute top-0 left-1/2 w-1 h-1 opacity-0"
            />
            <div className="text-center -rotate-45">
              <h4 className="text-xs font-bold text-red-300">Rajas</h4>
              <span className="text-[6px] text-neutral-500 uppercase tracking-widest block mt-0.5">
                Action Force
              </span>
            </div>
          </div>

          <div className="w-full space-y-1.5 pt-2">
            <div className="text-[7px] md:text-[8px] text-red-500 font-bold uppercase tracking-widest border-b border-red-950 pb-1 mb-2">
              Karmendriyas
            </div>
            {[
              "Hands (Hasta)",
              "Feet (Pada)",
              "Speech (Vak)",
              "Anus (Guda)",
              "Genitals (Upastha)",
            ].map((act, i) => (
              <div
                key={i}
                className="pipeline-node cosmic-node bg-red-950/20 text-[9px] md:text-[10px] bg-neutral-950/70 border border-neutral-900 px-2 py-1.5 text-neutral-400 rounded-sm cursor-none hover:border-red-500/30 transition-all duration-200 hover:text-red-200"
              >
                <span className="text-red-500/60 mr-1.5 font-bold">
                  {i + 11}
                </span>{" "}
                {act}
              </div>
            ))}
          </div>
        </div>

        {/* TAMAS RE-ROUTE */}
        <div className="flex flex-col items-center space-y-6">
          <div className="pipeline-node cosmic-node bg-neutral-950/40 relative w-24 h-24 bg-neutral-900/60 border border-neutral-700/40 rounded-full flex flex-col items-center justify-center text-center cursor-none transition-all duration-300 hover:border-neutral-500">
            <span
              ref={anchors.tamasIn}
              className="absolute top-0 left-1/2 w-1 h-1 opacity-0"
            />
            <h4 className="text-xs font-bold text-neutral-400">Tamas</h4>
            <span className="text-[6px] text-neutral-600 uppercase tracking-widest">
              Inertia / Mass
            </span>
          </div>

          <div className="w-full space-y-1.5">
            <div className="text-[7px] md:text-[8px] text-neutral-500 font-bold uppercase tracking-widest border-b border-neutral-950 pb-1 mb-2">
              Tanmatras → Bhutas
            </div>
            {[
              { label: "Sound → Ether", id: "16 / 21" },
              { label: "Touch → Air", id: "17 / 22" },
              { label: "Form → Fire", id: "18 / 23" },
              { label: "Taste → Water", id: "19 / 24" },
              { label: "Smell → Earth", id: "20 / 25" },
            ].map((element, i) => (
              <div
                key={i}
                className="pipeline-node cosmic-node bg-neutral-950/40 text-[9px] md:text-[10px] bg-neutral-950/70 border border-neutral-900 px-2 py-1.5 text-neutral-400 rounded-sm leading-tight cursor-none hover:border-neutral-500 transition-all duration-200 hover:text-neutral-200"
              >
                <span className="text-neutral-600 font-bold mr-1.5">
                  {element.id}
                </span>{" "}
                {element.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
