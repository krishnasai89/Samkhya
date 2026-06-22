import Link from "next/link";
import { notFound } from "next/navigation";
import samkhyaData from "@/data/samkhyaData.json";

interface PageProps {
  params: Promise<{
    id: string;
    sutraId: string;
  }>;
}

export default async function SutraDetailPage({ params }: PageProps) {
  const { id, sutraId } = await params;

  // Track the unique clean parameter safely inside dynamic router tree bounds
  const chapter = samkhyaData.chapters.find((ch) => ch.chapter_id === id);
  const sutra = chapter?.shlokas.find((s) => s.sutra_id === sutraId);

  if (!chapter || !sutra) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#060606] font-mono text-white p-4 sm:p-8 md:p-12 selection:bg-purple-500/20 flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl space-y-8 border border-neutral-900 bg-neutral-950/40 backdrop-blur-md p-6 md:p-10 relative">
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neutral-700" />
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-700" />
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neutral-700" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neutral-700" />

        <div className="flex justify-between items-center text-[9px] text-neutral-600 font-bold uppercase tracking-widest border-b border-neutral-900 pb-3">
          <span>
            Adhyāya 0{chapter.chapter_id} / {chapter.title}
          </span>
          <span className="text-purple-400">Sūtra {sutra.sutra_number}</span>
        </div>

        <div className="space-y-2">
          <span className="text-[8px] text-amber-500 uppercase tracking-widest block font-bold">
            Original Canonical Vector
          </span>
          <div className="text-lg sm:text-2xl font-black text-amber-200 tracking-wide font-sans leading-relaxed py-2 pl-4 border-l-2 border-amber-500/40">
            {sutra.sanskrit}
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-[8px] text-neutral-500 uppercase tracking-widest block font-bold">
            Structural Translation
          </span>
          <p className="text-sm text-neutral-200 leading-relaxed italic">
            "{sutra.translation}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-neutral-900/60">
          <div className="p-4 bg-red-950/5 border border-red-950/20 space-y-2">
            <span className="text-[9px] text-red-400 font-bold uppercase tracking-wider block">
              How People Misunderstand
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {sutra.misconception}
            </p>
          </div>

          <div className="p-4 bg-emerald-950/5 border border-emerald-950/20 border-l-2 border-l-emerald-500 space-y-2">
            <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider block">
              Canonical Reality Breakdown
            </span>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {sutra.reality}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-900 flex justify-between items-center">
          <Link
            href={`/chapters/${id}`}
            className="text-[10px] text-purple-400 border border-neutral-900 hover:border-purple-500/40 px-3 py-1.5 uppercase transition-colors"
          >
            ← Back to Chapter Catalog
          </Link>
          <span className="text-[8px] text-neutral-700 font-bold uppercase tracking-tighter">
            System: Safe_Leaf_Isolation_Mode
          </span>
        </div>
      </div>
    </main>
  );
}
