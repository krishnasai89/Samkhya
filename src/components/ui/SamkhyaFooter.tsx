"use client";

import Link from "next/link";

export default function SamkhyaFooter() {
  const currentYear = new Date().getFullYear();

  // Unified system configuration mapping to page anchors
  const footerLinks = [
    { name: "25 Tattvas Registry", href: "/#tattvas-pipeline" },
    { name: "Glossary Archive", href: "/#glossary-archive" },
    { name: "Misconceptions Audit", href: "#myths-audit" },
    { name: "Sūtras Hub", href: "/#chapters-hub" },
    { name: "AI/Tech Mapping", href: "/#tech-mapping" },
  ];

  const philosophyMetadata = [
    { title: "Root Cause", desc: "Avyakta (Unmanifest Matrix)" },
    { title: "Dual Pillars", desc: "Puruṣa (Observer) // Prakṛti (Matter)" },
    { title: "Ultimate Goal", desc: "Kaivalya (Absolute Isolation)" },
  ];

  return (
    <footer className="w-full border-t border-amber-900/30 bg-stone-950 text-stone-400 font-mono text-xs relative overflow-hidden">
      {/* HUD Accent Top Border Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-12">
        {/* Top Segment: Brand Grid & Structural Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-stone-900">
          {/* Identity Block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500/70" />
              <span className="text-sm font-bold tracking-widest text-stone-200 uppercase">
                SAMKHYA_CORE
              </span>
            </div>
            <p className="text-[11px] text-stone-500 leading-relaxed uppercase tracking-wider">
              Kapila's rational metaphysics database engine. An analytical
              architecture decrypting the evolution of nature and the liberation
              of absolute consciousness.
            </p>
          </div>

          {/* Quick Click-to-Scroll Anchor Paths */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-widest text-amber-500 uppercase">
              System Navigation //
            </p>
            <ul className="grid grid-cols-1 gap-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="text-stone-700 group-hover:text-amber-500 transition-colors">
                      &gt;
                    </span>
                    <span className="uppercase tracking-wide text-[11px]">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Teleological Parameters */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
              System Metadata Vector //
            </p>
            <div className="space-y-3 bg-stone-900/30 border border-stone-900 p-4 rounded-none">
              {philosophyMetadata.map((meta) => (
                <div key={meta.title} className="flex flex-col gap-0.5">
                  <span className="text-[9px] text-stone-600 uppercase tracking-widest">
                    {meta.title}
                  </span>
                  <span className="text-[11px] text-stone-300 uppercase tracking-wide">
                    {meta.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Segment: HUD System Diagnostics Status Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-stone-600 uppercase tracking-[0.2em]">
          {/* Left: Dynamic Build Stamp */}
          <div className="flex items-center gap-3">
            <span>© {currentYear} SAMKHYA_ENGINE</span>
            <span className="text-stone-800">|</span>
            <span className="text-amber-600/60 font-bold">
              STATUS: ISOLATED_VIEWER_ACTIVE
            </span>
          </div>

          {/* Right: Category Registry Index */}
          <div className="flex items-center gap-4">
            <span className="hover:text-stone-400 transition-colors cursor-help">
              Tattvas_Count: 25
            </span>
            <span className="hover:text-stone-400 transition-colors cursor-help">
              Chapters: 06
            </span>
            <span className="hover:text-stone-400 transition-colors cursor-help">
              Engine: v1.0.26
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Technical HUD corner brackets */}
      <span className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-stone-800" />
      <span className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-stone-800" />
    </footer>
  );
}
