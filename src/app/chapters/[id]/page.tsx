import Link from "next/link";
import { notFound } from "next/navigation";
import samkhyaData from "@/data/samkhyaData.json";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ChapterPage({ params }: PageProps) {
  const { id } = await params;
  const data = samkhyaData.chapters.find((ch) => ch.chapter_id === id);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen font-mono text-white p-4 sm:p-8 md:p-12 selection:bg-purple-500/20 bg-[#060606]">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Navigation Action Bar */}
        <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
          <Link
            href="/"
            className="text-[10px] text-neutral-500 border border-neutral-900 hover:border-purple-500/40 px-3 py-1.5 uppercase transition-colors"
          >
            ← Main Matrix Dashboard
          </Link>
          <span className="text-[9px] text-neutral-600 uppercase tracking-widest">
            Chapter_State: Loaded
          </span>
        </div>

        {/* CHAPTER HEADING DISPLAY PANEL */}
        <div className="relative p-6 border border-neutral-900 bg-neutral-950/40 backdrop-blur-md rounded-none">
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neutral-700" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-700" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neutral-700" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neutral-700" />

          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] text-purple-400 font-bold uppercase tracking-[0.2em]">
                Adhyāya 0{data.chapter_id}
              </span>
              <h1 className="text-3xl font-black uppercase tracking-tight text-neutral-100 mt-1">
                {data.title}
              </h1>
              <p className="text-xs text-neutral-500 italic mt-0.5">
                "{data.translation}"
              </p>
            </div>
            <span className="text-xs bg-neutral-900 border border-neutral-800 px-2 py-1 text-neutral-400">
              {data.total_aphorisms} Sūtras
            </span>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-900/60">
            <span className="text-[9px] text-neutral-600 font-bold uppercase tracking-widest block mb-1">
              Macro Summary of Total Chapter
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {data.macro_summary}
            </p>
          </div>
        </div>

        {/* SHLOKAS SELECTION MAP */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] border-b border-neutral-900 pb-2">
            Aphorism Matrix Registry
          </h2>

          <div className="grid grid-cols-1 gap-3">
            {data.shlokas.map((shloka, index) => (
              <Link
                key={index}
                id={`sutra-${shloka.sutra_id}`} // Crucial anchor point targets
                href={`/chapters/${id}/sutras/${shloka.sutra_id}`}
                className="group block border border-neutral-900 bg-neutral-950/20 p-4 relative transition-all duration-200 hover:border-purple-500/30 hover:bg-neutral-950/60 scroll-mt-24"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-purple-400 font-bold">
                    Sūtra {shloka.sutra_number}
                  </span>
                  <span className="text-[8px] text-neutral-600 uppercase tracking-widest group-hover:text-purple-400 transition-colors">
                    Analyze Isolated Diagnostics →
                  </span>
                </div>
                <p className="text-xs text-neutral-300 truncate font-sans tracking-wide">
                  {shloka.sanskrit}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
