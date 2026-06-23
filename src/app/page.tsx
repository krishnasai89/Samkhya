import TextReveal from "@/components/ui/TextReveal";
import CosmicPipeline from "@/components/ui/CosmicPipeline";
import CosmicGlossary from "@/components/ui/CosmicGlossary";
import CosmicHistory from "@/components/ui/CosmicHistory";
import ModernPerspectives from "@/components/ui/ModernPerspectives";
import ModernTechMapping from "@/components/ui/ModernTechMapping";
import CosmicMyths from "@/components/ui/CosmicMyths";
import CosmicChapters from "@/components/ui/CosmicChapters";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-[300vh] text-white bg-black/50 overflow-hidden font-mono selection:bg-purple-500/20 scroll-smooth">
      {/* Dynamic 3D WebGL ASCII Backdrop Canvas */}
      <CustomCursor />
      {/* Core UI Narrative Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-40 space-y-24">
        {/* HUD Technical Header */}
        <header className="space-y-4">
          <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
            System Framework // Rational Metaphysics of Kapila
          </p>

          <div className="relative p-6 sm:p-8 border border-neutral-800 bg-neutral-950/40 backdrop-blur-md rounded-none w-full max-w-4xl group transition-all duration-300 hover:border-neutral-700">
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-700 group-hover:border-white transition-colors" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-700 group-hover:border-white transition-colors" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-700 group-hover:border-white transition-colors" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-700 group-hover:border-white transition-colors" />

            <div className="text-[9px] text-amber-500 tracking-[0.5em] uppercase mb-3">
              COSMIC_CODE_DECONSTRUCT // v1.0.26
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-neutral-100 to-cyan-400 select-none">
              SAMKHYA
            </h1>

            <p className="mt-4 text-[11px] sm:text-xs text-neutral-500 leading-relaxed uppercase tracking-wider max-w-xl">
              An analytical system mapping the linear descent of unmanifested
              nature into the structural mechanics of observation and physical
              reality.
            </p>
          </div>
        </header>

        {/* Cinematic Title Reveal Sequence */}
        <TextReveal
          text="Reality is an empirical equation. By isolating the conscious observer from the biological tools of the mind, the system systematically maps out the termination of human suffering."
          className="border-l-2 border-neutral-800 pl-6 text-neutral-400 max-w-3xl"
        />

        {/* Node Group 1: The Interactive Link Map */}
        <section id="tattvas-pipeline" className="space-y-4 scroll-mt-24">
          <div className="text-center w-full">
            <span className="text-lg tracking-[0.4em] text-yellow-500 uppercase">
              01 / The 25 Tattvas Cascading Pipeline
            </span>
          </div>
          <CosmicPipeline />
        </section>

        {/* Node Group 2: Canonical Archives */}
        <section id="glossary-archive" className="space-y-4 pt-12 scroll-mt-24">
          <div className="text-center w-full">
            <span className="text-lg tracking-[0.4em] text-purple-400 uppercase">
              02 / Core Definition Glossary Archive
            </span>
          </div>
          <CosmicGlossary />
        </section>

        {/* 03 / Myths Audit Panel */}
        <section id="myths-audit" className="space-y-4 pt-12 scroll-mt-24">
          <div className="text-center w-full">
            <span className="text-lg tracking-[0.4em] text-amber-500 uppercase">
              03 / Deconstructing Common Misconceptions
            </span>
          </div>
          <CosmicMyths />
        </section>

        {/* Node Group 4: Historical Records */}
        <section
          id="chronicle-timeline"
          className="space-y-4 pt-12 scroll-mt-24"
        >
          <div className="text-center w-full">
            <span className="text-lg text-amber-500 tracking-[0.4em] uppercase">
              04 / Chronicle Timeline & Textual Linage
            </span>
          </div>
          <CosmicHistory />
        </section>

        {/* Node Group 5: Computer Science Architecture Alignment */}
        <section id="tech-mapping" className="space-y-4 pt-12 scroll-mt-24">
          <div className="text-center w-full">
            <span className="text-lg tracking-[0.4em] text-emerald-500 uppercase">
              05 / Cognitive Software & AI Modeling Parallel
            </span>
          </div>
          <ModernTechMapping />
        </section>

        {/* Node Group 6: Modern Exegesis */}
        <section
          id="modern-perspectives"
          className="space-y-4 pt-12 scroll-mt-24"
        >
          <div className="text-center w-full">
            <span className="text-lg tracking-[0.4em] text-cyan-400 uppercase">
              06 / Contemporary Perspectives & Interpretations
            </span>
          </div>
          <ModernPerspectives />
        </section>

        {/* Node Group 7: Chapter Sūtras Hub */}
        <section id="chapters-hub" className="space-y-4 pt-12 scroll-mt-24">
          <div className="text-center w-full">
            <span className="text-lg tracking-[0.4em] text-purple-400 uppercase">
              07 / Sāṃkhyapravacana Sūtra Six Chapters Hub
            </span>
          </div>
          <CosmicChapters />
        </section>
      </div>
    </main>
  );
}
