"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SamkhyaNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  // Map Navigation links straight onto your page's anchor IDs
  const navLinks = [
    { name: "25 Tattvas Registry", href: "/#tattvas-pipeline" },
    { name: "Glossary", href: "/#glossary-archive" },
    { name: "Misconceptions Audit", href: "/#myths-audit" },
    { name: "Sūtras Hub", href: "/#chapters-hub" },
    { name: "AI/Tech Mapping", href: "/#tech-mapping" },
    { name: "Modern Perspectives", href: "/#modern-perspectives" },
    { name: "Chronicle Timeline", href: "/#chronicle-timeline" },
  ];

  // Monitor layout state to highlight active section tab links
  useEffect(() => {
    setActiveHash(window.location.hash || "#tattvas-pipeline");

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="sticky top-0 z-50 h-[70px] border-b border-amber-900/40 bg-stone-950 text-stone-100 shadow-md font-mono">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6">
        {/* Brand Identity / Root Matrix */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setActiveHash("")}
        >
          <span className="h-3 w-3 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-lg font-bold tracking-widest text-stone-200 group-hover:text-amber-400 transition-colors">
            SAMKHYA_CORE
          </span>
        </Link>

        {/* Desktop & Tablet Navigation: Tabs Layout */}
        <ul className="hidden lg:flex items-center gap-1 h-full">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <li key={link.name} className="h-full flex items-center">
                <Link
                  href={link.href}
                  onClick={() => setActiveHash(link.href)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 ${
                    isActive
                      ? "text-amber-400 bg-stone-900 border-b-2 border-amber-500 rounded-b-none"
                      : "text-stone-400 hover:text-stone-100 hover:bg-stone-900"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* System State Callout Action */}
        <div className="hidden lg:flex items-center">
          <button className="border border-amber-500/50 bg-amber-950/30 text-amber-400 hover:bg-amber-500 hover:text-stone-950 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded transition-all duration-200">
            Isolate Viewer (Viveka)
          </button>
        </div>

        {/* Fixed Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between w-6 h-[16px] lg:hidden z-50 focus:outline-none group"
          aria-label="Toggle Metaphysical Menu"
        >
          <span
            className={`w-full h-[2px] bg-amber-400 transition-all duration-300 origin-left ${
              isOpen ? "rotate-45 translate-x-[2px] -translate-y-[1px]" : ""
            }`}
          />
          <span
            className={`w-full h-[2px] bg-amber-400 transition-all duration-300 ${
              isOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`w-full h-[2px] bg-amber-400 transition-all duration-300 origin-left ${
              isOpen ? "-rotate-45 translate-x-[2px] translate-y-[1px]" : ""
            }`}
          />
        </button>

        {/* Mobile Off-Screen Drawer Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-[290px] bg-stone-950 border-l border-amber-900/40 p-6 pt-24 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col gap-6 z-45 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="border-b border-stone-800 pb-3">
            <p className="text-[10px] font-bold tracking-widest text-amber-500 uppercase">
              Tantra-Sāra Navigation
            </p>
          </div>

          <ul className="flex flex-col gap-1 w-full">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <li key={link.name} className="w-full">
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveHash(link.href);
                      setIsOpen(false);
                    }}
                    className={`block w-full px-4 py-3 text-sm font-medium tracking-wide rounded transition-all ${
                      isActive
                        ? "text-amber-400 border-l-2 border-amber-500 bg-stone-900/60 font-semibold"
                        : "text-stone-400 hover:text-stone-100 hover:bg-stone-900/30"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button className="w-full mt-auto border border-amber-500/50 bg-amber-950/40 text-amber-400 hover:bg-amber-500 hover:text-stone-950 text-xs font-bold uppercase tracking-widest py-3.5 rounded transition-all">
            Isolate Viewer (Viveka)
          </button>
        </div>

        {/* Backdrop Overlay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-stone-950/80 backdrop-blur-xs lg:hidden z-40 transition-opacity duration-300"
          />
        )}
      </div>
    </nav>
  );
}
