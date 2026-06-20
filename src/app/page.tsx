import Scene from "@/components/canvas/Scene";
import PrakritiMesh from "@/components/canvas/PrakritiMesh";
import AsciiEffect from "@/components/canvas/AsciiEffect";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white select-none">
      {/* 3D WebGL to ASCII Background Layer */}
      <Scene>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <directionalLight position={[-5, 5, 5]} intensity={1.5} />

        <PrakritiMesh />
        <AsciiEffect
          characters=" .:-=+*#%@"
          options={{
            invert: true,
            color: false,
            bgColor: "#000000",
            fontSize: "9px",
          }}
        />
      </Scene>

      {/* HTML DOM Content Scrolling Over the ASCII Art */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-96 bg-black/70">
        <header className="mb-24 mix-blend-difference">
          <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase font-mono mb-2">
            Dualistic Cosmology // School of Kapila
          </p>
          <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl font-sans uppercase">
            Samkhya
          </h1>
        </header>

        <section className="max-w-xl font-mono text-sm leading-relaxed text-neutral-400">
          <p className="mb-6">
            The cosmos is an interplay of two eternal realities:
            <span className="text-white"> Purusha</span> (pure consciousness)
            and
            <span className="text-white"> Prakriti</span> (primordial matter).
          </p>
          <p>
            Scroll down to watch unmanifested code crystallize into the 24
            Tattvas of existence.
          </p>
        </section>
      </div>
    </main>
  );
}
