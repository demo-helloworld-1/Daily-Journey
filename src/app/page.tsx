import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-12 lg:ml-64 lumina-gradient">
      <div className="max-w-5xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Journey Map Section */}
        <div className="lg:col-span-8 flex flex-col items-center">
          <header className="w-full mb-16 text-left">
            <h1 className="text-5xl font-body italic text-on-surface mb-2">The Journey Map</h1>
            <p className="text-on-surface-variant font-label tracking-wide text-sm uppercase">Curated Timeline • October 2023</p>
          </header>

          {/* Modern Timeline Path */}
          <div className="relative w-full max-w-md">
            {/* The Structural Path Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full journey-line opacity-20"></div>

            {/* Nodes */}
            <div className="relative space-y-24 py-12">
              {/* Day 12 (Completed) */}
              <div className="flex items-center justify-center relative group">
                <div className="absolute left-0 w-1/2 pr-12 text-right hidden md:block">
                  <span className="block font-label text-xs text-on-surface-variant mb-1">Oct 12</span>
                  <span className="font-body text-lg italic text-on-surface">The Sunken Garden</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center relative z-10 shadow-sm transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                </div>
                <div className="absolute right-0 w-1/2 pl-12 md:hidden">
                  <span className="block font-label text-xs text-on-surface-variant">Oct 12</span>
                  <span className="font-body text-sm italic">The Sunken Garden</span>
                </div>
              </div>

              {/* Day 13 (Completed) */}
              <div className="flex items-center justify-center relative group">
                <div className="absolute right-0 w-1/2 pl-12 text-left hidden md:block">
                  <span className="block font-label text-xs text-on-surface-variant mb-1">Oct 13</span>
                  <span className="font-body text-lg italic text-on-surface">Echoes of Morning</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center relative z-10 shadow-sm transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                </div>
                <div className="absolute left-0 w-1/2 pr-12 md:hidden text-right">
                  <span className="block font-label text-xs text-on-surface-variant">Oct 13</span>
                  <span className="font-body text-sm italic">Echoes of Morning</span>
                </div>
              </div>

              {/* Day 14 (Today - Highlighted) */}
              <div className="flex items-center justify-center relative group cursor-pointer transition-transform hover:scale-105">
                {/* Link to detail view to make it actionable */}
                <Link href="/entry" className="contents">
                  {/* Floating Node Card */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-16 bg-surface-container-lowest p-4 rounded-xl shadow-xl border border-primary/5 w-64 text-center z-20 transition-all group-hover:-translate-y-2 group-hover:shadow-2xl">
                    <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-[10px] font-bold tracking-widest uppercase mb-3">
                      Today
                    </span>
                    <h3 className="font-body text-xl text-on-surface mb-1">Untethered Thoughts</h3>
                    <p className="text-xs font-label text-on-surface-variant leading-relaxed">Waiting for your reflection...</p>
                  </div>

                  {/* Central Node */}
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center relative z-10 shadow-2xl ring-8 ring-primary/10 transition-colors group-hover:bg-primary-dim">
                    <span className="material-symbols-outlined text-on-primary text-3xl">edit_note</span>
                  </div>

                  {/* Decorative Bezier connector */}
                  <svg className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-20" viewBox="0 0 100 100">
                    <circle className="text-primary" cx="50" cy="50" fill="none" r="48" stroke="currentColor" strokeDasharray="4 4" strokeWidth="0.5"></circle>
                  </svg>
                </Link>
              </div>

              {/* Day 15 (Locked/Upcoming) */}
              <div className="flex items-center justify-center relative group opacity-40 grayscale-[0.5]">
                <div className="absolute left-0 w-1/2 pr-12 text-right hidden md:block">
                  <span className="block font-label text-xs text-on-surface-variant">Oct 15</span>
                  <span className="font-body text-lg italic text-on-surface">Unwritten Story</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center relative z-10">
                  <span className="material-symbols-outlined text-outline text-lg">lock</span>
                </div>
              </div>

              {/* Day 16 (Locked/Upcoming) */}
              <div className="flex items-center justify-center relative group opacity-30 grayscale-[0.8]">
                <div className="absolute right-0 w-1/2 pl-12 text-left hidden md:block">
                  <span className="block font-label text-xs text-on-surface-variant">Oct 16</span>
                  <span className="font-body text-lg italic text-on-surface">Future Reflection</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center relative z-10">
                  <span className="material-symbols-outlined text-outline text-lg">lock</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel Widget */}
        <div className="lg:col-span-4 space-y-8">
          {/* Memory Streak Widget */}
          <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-container transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-8">
              <span className="font-label text-xs font-bold tracking-widest text-secondary uppercase">Memory Streak</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
            </div>
            <div className="flex flex-col items-center text-center mb-10">
              <span className="text-7xl font-body font-light text-on-surface leading-none mb-2">12</span>
              <span className="font-label text-sm text-on-surface-variant">Consecutive Days</span>
            </div>

            {/* Mini Weekly Progress */}
            <div className="grid grid-cols-7 gap-2 mb-8">
              {['M', 'T', 'W', 'T'].map((day, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  <span className="text-[9px] font-label text-on-surface-variant font-bold">{day}</span>
                </div>
              ))}
              <div className="flex flex-col items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-container ring-4 ring-primary/5"></div>
                <span className="text-[9px] font-label text-primary font-bold">F</span>
              </div>
              {['S', 'S'].map((day, i) => (
                <div key={`we-${i}`} className="flex flex-col items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-surface-container"></div>
                  <span className="text-[9px] font-label text-on-surface-variant font-bold">{day}</span>
                </div>
              ))}
            </div>
            <button className="w-full py-3 text-sm font-label text-on-surface-variant hover:text-on-surface border border-surface-container rounded-xl transition-colors cursor-pointer hover:bg-surface-container-low">
              View Milestones
            </button>
          </section>

          {/* Editorial Insight Card */}
          <section className="relative overflow-hidden group rounded-2xl aspect-square cursor-pointer">
            {/* Ensure remote images work properly or just link directly */}
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Zs5BNjfankQ_3-SkmZsezHKI92RatbUlGJVCg7Dj6igUKoXPgZhF7yGlMj8u7Z9BdfLQ9HtRjz1lPRWDuzXdKn5KlyJAJ42bP-HZt491Vv1XJAqgkH5UA6kpRpB06y4cwhSUZyvwsqjbHkjHCfHW9n2BQ-lNb9wsWqtkRNlwauMGpQKJNMowgD_eUqvwuJE0ZcjdWCLzlh4hQHqfiXqYINB-xa3c23SCpz_g8UXU6N7j2rE4PjdLOtUt0aVL1G1MfMLRUv9zpVA"
              alt="Mist mountains"
              fill
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <span className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Reflective Prompt</span>
              <h4 className="text-white text-xl font-body italic mb-4">What was the quietest moment of your week?</h4>
              <button className="flex items-center gap-2 text-white text-xs font-label opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Begin Writing</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
