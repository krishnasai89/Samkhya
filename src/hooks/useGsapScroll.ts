"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapScroll(
  meshRef: React.RefObject<any>,
  asciiOptionsRef: React.RefObject<any>,
) {
  useEffect(() => {
    if (!meshRef.current) return;

    // Timeline to animate parameters down the page
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth dragging animation matching scroll speed
      },
    });

    // 1. Zoom into the mesh as we go deeper into physical manifestation
    tl.to(
      meshRef.current.position,
      {
        z: 1.5,
        y: -0.5,
        ease: "none",
      },
      0,
    );

    // 2. Accelerate rotation speed to mimic chaotic matter (Rajas)
    tl.to(
      meshRef.current.rotation,
      {
        z: Math.PI * 2,
        ease: "none",
      },
      0,
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [meshRef, asciiOptionsRef]);
}
