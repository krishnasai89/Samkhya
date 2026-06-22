"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = "" }: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const target = textRef.current;
    const chars = text.split("");

    // Clear initial text and wrap each character in a styled span
    target.innerHTML = chars
      .map(
        (char) =>
          `<span class="inline-block opacity-0 font-mono transition-colors duration-200">${char === " " ? "&nbsp;" : char}</span>`,
      )
      .join("");

    const spans = target.querySelectorAll("span");

    // GSAP Timeline to stagger character appearances with a "glitch code" matrix phase
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        end: "top 50%",
        scrub: 0.5,
      },
    });

    tl.to(spans, {
      opacity: 1,
      stagger: 0.02,
      ease: "power1.out",
      onUpdate: function () {
        // Scramble effect during initialization
        spans.forEach((span) => {
          if (Math.random() > 0.85 && span.innerHTML !== "&nbsp;") {
            const randomChars = "XØ//\\_$+=%@#*";
            span.innerHTML =
              randomChars[Math.floor(Math.random() * randomChars.length)];
            span.classList.add("text-red-500");
          } else if (span.innerHTML !== "&nbsp;") {
            // Restore the original character once the animation settles
            const index = Array.from(spans).indexOf(span);
            span.innerHTML = chars[index];
            span.classList.remove("text-red-500");
          }
        });
      },
    });

    return () => {
      if (ScrollTrigger.getById(target.id))
        ScrollTrigger.getById(target.id)?.kill();
    };
  }, [text]);

  return (
    <div
      ref={textRef}
      className={`text-xl md:text-2xl font-light tracking-wide text-neutral-300 leading-relaxed max-w-3xl ${className}`}
    />
  );
}
