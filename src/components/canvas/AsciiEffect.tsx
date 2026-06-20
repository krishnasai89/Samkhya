"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import { AsciiEffect as ThreeAsciiEffect } from "three-stdlib";

interface AsciiProps {
  characters?: string;
  options?: {
    invert?: boolean;
    color?: boolean;
    bgColor?: string;
    fontSize?: string;
  };
}

export default function AsciiEffect({
  characters = " .:-=+*#%@", // The gradient of density for Samkhya textures
  options = {
    invert: true,
    color: false,
    bgColor: "#000000",
    fontSize: "10px",
  },
}: AsciiProps) {
  const { gl, size, scene, camera } = useThree();

  // Create the ASCII Effect instance
  const effect = useMemo(() => {
    const eff = new ThreeAsciiEffect(gl, characters, options);
    eff.setSize(size.width, size.height);

    // Style the generated DOM element containing the text art
    if (eff.domElement) {
      eff.domElement.style.position = "absolute";
      eff.domElement.style.top = "0px";
      eff.domElement.style.left = "0px";
      eff.domElement.style.pointerEvents = "none"; // Let scrolls pass through
      eff.domElement.style.fontFamily = "monospace";
      eff.domElement.style.fontSize = options.fontSize || "10px";
    }
    return eff;
  }, [gl, characters, options, size]);

  // Append the text element to the DOM on mount, clean up on unmount
  useEffect(() => {
    gl.domElement.style.opacity = "0"; // Hide original WebGL canvas canvas
    gl.domElement.parentNode?.appendChild(effect.domElement);

    return () => {
      gl.domElement.style.opacity = "1";
      gl.domElement.parentNode?.removeChild(effect.domElement);
    };
  }, [gl, effect]);

  // Force resizing on window changes
  useEffect(() => {
    effect.setSize(size.width, size.height);
  }, [effect, size]);

  // Hijack the R3F loop to render the ASCII pass instead of standard WebGL
  useFrame(() => {
    effect.render(scene, camera);
  }, 1);

  return null;
}
