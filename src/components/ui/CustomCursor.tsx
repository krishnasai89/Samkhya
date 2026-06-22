"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type GunaState =
  | "equilibrium"
  | "rajas_chaos"
  | "tamas_inertia"
  | "purusha_pure";

export default function CustomCursor() {
  const purushaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [guna, setGuna] = useState<GunaState>("equilibrium");

  // SVG Path constants representing the physical state mutations of the Gunas
  const PATHS = {
    // Sattva: Pristine, smooth geometric circular flow (balanced nature)
    equilibrium: "M 25,25 A 20,20 0 1,1 24.99,25 Z",
    // Rajas: Distorted, jagged sharp energy spikes (turbulent activity/passion)
    rajas_chaos:
      "M 25,5 L 35,20 L 48,15 L 40,32 L 45,48 L 28,40 L 15,48 L 18,28 L 5,20 L 20,18 Z",
    // Tamas: Blocky, heavy geometric structural mass (inertia/matter weight)
    tamas_inertia: "M 5,5 L 45,5 L 45,45 L 5,45 Z",
  };

  useEffect(() => {
    const purusha = purushaRef.current;
    const container = containerRef.current;
    const path = pathRef.current;
    if (!purusha || !container || !path) return;

    if (window.matchMedia("(pointer: coarse)").matches) {
      purusha.style.display = "none";
      container.style.display = "none";
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Purusha: Instant positioning (Consciousness has no latency delay)
      gsap.to(purusha, { x, y, duration: 0, overwrite: "auto" });

      // Prakriti: Glides behind with mathematical fluid drag
      gsap.to(container, { x, y, duration: 0.4, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Track intersection zones across the Samkhya Diagram nodes
    const targets = document.querySelectorAll(".cosmic-node");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        if (target.className.includes("bg-blue")) {
          // Hovering Purusha: Nature detaches completely. Outer wrapper vanishes.
          setGuna("purusha_pure");
          gsap.to(container, { scale: 0, opacity: 0, duration: 0.3 });
        } else if (target.className.includes("bg-red")) {
          // Hovering Prakriti: Gunas split out of equilibrium! Force Rajas chaos path morph
          setGuna("rajas_chaos");
          gsap.to(container, { scale: 1.6, rotation: 180, duration: 0.4 });
          gsap.to(path, {
            attr: { d: PATHS.rajas_chaos },
            stroke: "#ef4444",
            fill: "rgba(239, 68, 68, 0.05)",
            duration: 0.4,
            ease: "back.out(1.5)",
          });
        } else {
          // Hovering Buddhi: Intellect processes structural realities. Morph to Tamas heavy frame.
          setGuna("tamas_inertia");
          gsap.to(container, { scale: 1.2, rotation: 90, duration: 0.4 });
          gsap.to(path, {
            attr: { d: PATHS.tamas_inertia },
            stroke: "#fbbf24",
            fill: "rgba(251, 191, 36, 0.05)",
            duration: 0.4,
            ease: "power3.out",
          });
        }
      });

      target.addEventListener("mouseleave", () => {
        // Return to standard unmanifested Sattva equilibrium ring
        setGuna("equilibrium");
        gsap.to(container, {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.4,
        });
        gsap.to(path, {
          attr: { d: PATHS.equilibrium },
          stroke: "#a3a3a3",
          fill: "transparent",
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      {/* PURUSHA NODE: Pure, detached, steady center spark */}
      <div
        ref={purushaRef}
        className="fixed top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
      />

      {/* PRAKRITI LAYER: Vector shape canvas morphing in real-time */}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 flex items-center justify-center will-change-transform"
      >
        <svg
          viewBox="0 0 50 50"
          className={`w-full h-full transition-opacity duration-300 ${guna === "rajas_chaos" ? "animate-[spin_4s_linear_infinite]" : ""}`}
        >
          <path
            ref={pathRef}
            d={PATHS.equilibrium}
            fill="transparent"
            stroke="#525252"
            strokeWidth="1.5"
            strokeDasharray={guna === "equilibrium" ? "3 3" : "none"}
            className="transition-all duration-300"
          />
        </svg>
      </div>
    </>
  );
}
