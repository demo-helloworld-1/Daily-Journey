import Image from "next/image";
import Link from "next/link";

export default function EntryPage() {
  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-24 py-12 pt-28 lg:ml-64 relative">
      {/* Breadcrumb / Back Navigation */}
      <nav className="mb-12 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group">
          <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span className="font-label text-xs uppercase tracking-widest font-semibold">Journey Overview</span>
        </Link>
      </nav>

      {/* Article Header */}
      <header className="mb-16 space-y-6">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-widest uppercase">Fundamentals</span>
          <span className="text-outline-variant font-label text-xs">8 MIN READ</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter text-on-background leading-tight">
          Day 1: Getting Started with Design Systems
        </h1>

        <div className="flex items-center gap-6 py-4">
          <div className="flex flex-col">
            <span className="text-4xl font-headline font-light text-primary">October 24</span>
            <span className="text-sm font-label text-on-surface-variant uppercase tracking-widest">Thursday, 2024</span>
          </div>

          <div className="h-12 w-px bg-surface-container-highest"></div>

          <div className="flex flex-col justify-center">
            <span className="text-sm font-label text-on-surface-variant italic">Mood: Focused &amp; Curious</span>
            <div className="flex gap-1 mt-1 text-primary">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-16 rounded-xl overflow-hidden bg-surface-container-low aspect-[16/9] relative">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAgMPrGoErGKXofVGqY8SSMcPKlSz2Cw0IUDB-6uamsHlDpBKrl8Kv13tq_IlkmD8krBqmywOrQNRhfflAQOaeBpUvjiDLgRLmCRpMrjIoq-Iyg7q99GGTFRz9ZbBwYeaNva7cUfzKYtZyv_Hm_Ljy2UL220yEccNuyql-GWN36oFQZp29jIkvVZHGcWXUAUto3UCFFnh7mtm10o2ijCWWaYNuXg4EpNUZMtid5GsZQHZpVoL3MZkr4yVdZSXjS-hMXWccr1plqhs" 
          alt="Design workspace" 
          fill
          unoptimized
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Content Area */}
      <article className="font-body text-lg leading-relaxed text-on-background space-y-8 max-w-2xl">
        <p className="text-xl italic text-on-surface-variant leading-relaxed border-l-4 border-primary-fixed pl-6 py-2">
          "A design system is not a project. It’s a product serving other products." — Nathan Curtis
        </p>

        <p>
          Today marked the beginning of a deliberate shift in my creative process. For years, I've approached design as a series of isolated problems—each screen a unique canvas, each interaction a bespoke creation. But as I sat down this morning with my coffee, looking at the sprawling complexity of my current projects, I realized that I was drowning in inconsistency.
        </p>

        <h3 className="font-headline text-2xl font-bold tracking-tight text-on-background mt-12 mb-4">The First Realization</h3>
        <p>
          The core of today's learning was understanding that a design system isn't just a UI kit. It's an ecosystem of shared language. When I define a primary blue as <code>#2060a5</code>, I'm not just picking a color; I'm establishing a signal for "action" that must resonate across every touchpoint.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 -mx-4 md:-mx-12">
          <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4">auto_awesome</span>
            <h4 className="font-headline font-bold mb-2">Foundations</h4>
            <p className="text-base text-on-surface-variant">Defining typography scales and color roles that provide emotional continuity.</p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl mb-4">schema</span>
            <h4 className="font-headline font-bold mb-2">Components</h4>
            <p className="text-base text-on-surface-variant">Building buttons and inputs that aren't just elements, but predictable patterns.</p>
          </div>
        </div>

        <p>
          The most difficult part of today wasn't the technical setup—it was the mental discipline of restraint. I found myself wanting to add a custom shadow here, a unique border radius there. But the "Living Archive" I'm building demands rhythm over novelty.
        </p>

        <p>
          I spent the afternoon mapping out the "Path" for the next 30 days. It feels like I'm not just documenting my learning, but building the very tools I'll use to document it. A meta-journal, if you will.
        </p>
      </article>

      {/* Footer Section of Post */}
      <footer className="mt-24 pt-12 border-t border-surface-container-highest">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-container transition-colors cursor-pointer text-primary">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-container transition-colors cursor-pointer text-primary">
              <span className="material-symbols-outlined">share</span>
            </div>
          </div>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-label text-sm font-bold uppercase tracking-widest shadow-lg hover:translate-y-[-2px] active:scale-95 transition-all">
            Complete Day 1
          </button>
        </div>

        <Link href="/" className="contents">
          <div className="mt-16 flex items-center justify-between group cursor-pointer p-6 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors">
            <div className="flex flex-col">
              <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest mb-1">Coming Tomorrow</span>
              <span className="text-xl font-headline font-bold text-on-background">Day 2: The Color of Emotional Resonance</span>
            </div>
            <span className="material-symbols-outlined text-3xl text-primary group-hover:translate-x-2 transition-transform">chevron_right</span>
          </div>
        </Link>
      </footer>
    </main>
  );
}
