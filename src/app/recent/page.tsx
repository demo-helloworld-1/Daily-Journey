import Image from "next/image";

export default function RecentPage() {
  return (
    <main className="pt-28 pb-20 px-6 lg:ml-64 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header Section */}
        <header className="mb-16 md:ml-[10%] max-w-2xl">
          <h1 className="font-body italic text-5xl md:text-6xl text-on-background mb-4 leading-tight">Recent Reflections</h1>
          <p className="font-label text-on-surface-variant text-sm tracking-wide uppercase">Tracing the path of your thoughts through time.</p>
        </header>

        {/* Section: This Week */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-grow bg-surface-container-high"></div>
            <h2 className="font-label text-[10px] uppercase tracking-[0.2em] text-outline italic">This Week</h2>
            <div className="h-[1px] w-12 bg-surface-container-high"></div>
          </div>

          {/* Bento Grid Layout for Recent Entries */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Entry 1: Large Featured Card */}
            <div className="md:col-span-8 group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:shadow-xl hover:shadow-stone-200/50">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAocBdYSe7ofNfhvvyCYqA6rRj-bn1hx6XcG7L_nakvmckW-Q2yg2y76kvjoNmFTSatP9LZD7LOPUZK6-15rYw8jrxPO5OpWiByYOQcpI0hY3zB2apdEHUkn4VOZO5G7sIq97U5t9yqhSPTN04U6s-an1oCnwhhbGSHm5O7sRnKKgYn8fbs73Uptq0abU3kdIlzv8U0TFq_whgXIdgk8B7mRy3CtLxupLPKYfd8b2nFMOayhifEv4c-xSz0ziRHoHFTgyoehbtPN4c" 
                    alt="misty mountain landscape"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    unoptimized
                  />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">#Mindfulness</span>
                    <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">#Nature</span>
                  </div>
                  <h3 className="font-body text-3xl text-on-background mb-4 group-hover:text-primary transition-colors">Day 12: The Sunken Garden</h3>
                  <p className="font-body text-on-surface-variant text-lg leading-relaxed line-clamp-2 italic mb-6">
                      "The morning mist clung to the ferns like a damp secret. I found myself wandering toward the old perimeter, where the stone walls have begun to surrender to the ivy..."
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-label text-xs text-outline italic">October 24, 2023</span>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Entry 2: Tall Sidebar Card */}
            <div className="md:col-span-4 group cursor-pointer">
              <div className="h-full rounded-xl bg-surface-container-lowest border border-outline-variant/10 p-6 flex flex-col transition-all duration-300 hover:bg-surface-container-low">
                <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR1UaQrjUFVMU1Q7DsYcBYpbv8yfNsZaudK5JiaLTFZ60KuIKpV9OrcWxLCmuYl0IqTQOyXhVi3Lupo68ljg6fRBmlZoq9GSi3gvhTM0PCRfJG1OD3lbAG793iqdtFMaOtrdCCqxXGj-4CD-6lbg0sKPVBvKz6b-DUAVrLOvE0BbWrbs8fswCnKFM7dbNbk7Ie-AqzB4u43P0M0iyzq82kVWiOibHJF8x1QHroY40xyKVz4UrIUkdE7g2VtLY5OO1xfdaCm-ykrfw" 
                    alt="open notebook with fountain pen"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    unoptimized
                  />
                </div>
                <div className="mb-4">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">#Rituals</span>
                </div>
                <h3 className="font-body text-2xl text-on-background mb-3">Morning Syntax</h3>
                <p className="font-body text-on-surface-variant text-base leading-relaxed mb-6">
                    Notes on the rhythm of early morning silence and the scratch of pen on paper.
                </p>
                <div className="mt-auto pt-6 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="font-label text-xs text-outline italic">October 22, 2023</span>
                  <span className="material-symbols-outlined text-outline">bookmark_add</span>
                </div>
              </div>
            </div>

            {/* Entry 3: Wide Horizontal Card */}
            <div className="md:col-span-12 group cursor-pointer">
              <div className="flex flex-col md:flex-row rounded-xl bg-surface-container-low overflow-hidden transition-all duration-300">
                <div className="relative md:w-1/3 aspect-[4/3] md:aspect-auto h-48 md:h-auto">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2DUUdpQRCRb1kbgYQXBtZSM9rWwpLncHzgWt9cNbaRO_JNyJ0jQmcDfQiy09J1MAIZvHrtEqFq9tu8oTgZdtAg1rNIVCoStTS7J1AOHVBgUwXedg8UQ6kXFOJp_KP0ru9gEM6egtk3zAqDjtscCvC1ODDXC480ggnPF4aWXRbQqE_rBjDCSNi4WFXZX7-bM_nbHiGmrpHBcTtSrJpPkjq9AOFjm0ihEdXs_tk429q2w3TXtuAUpZrxorrGMjqgc3crS9lJMeZs78" 
                    alt="abstract warm sunset colors"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                    unoptimized
                  />
                </div>
                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                  <div className="flex gap-2 mb-3">
                    <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">#Gratitude</span>
                  </div>
                  <h3 className="font-body text-3xl text-on-background mb-4">Golden Hour Residue</h3>
                  <p className="font-body text-on-surface-variant text-lg leading-relaxed italic mb-4">
                      "There is a specific kind of light that only exists for seven minutes. It turns the mundane into gold and my anxieties into dust."
                  </p>
                  <span className="font-label text-xs text-outline italic">October 20, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Last Week */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-grow bg-surface-container-high"></div>
            <h2 className="font-label text-[10px] uppercase tracking-[0.2em] text-outline italic">Last Week</h2>
            <div className="h-[1px] w-12 bg-surface-container-high"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Smaller Archive Cards */}
            <div className="group bg-surface-container-lowest p-6 rounded-xl transition-all duration-300 hover:shadow-md cursor-pointer">
              <h3 className="font-body text-xl text-on-background mb-2">The Quiet Train</h3>
              <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-3">Observing the faces of strangers during the 6:15 AM commute. Everyone is a whole world waiting to happen.</p>
              <div className="flex items-center justify-between text-[10px] font-label uppercase tracking-widest text-outline">
                <span>Oct 15</span>
                <span className="text-secondary font-bold">#Travel</span>
              </div>
            </div>
            <div className="group bg-surface-container-lowest p-6 rounded-xl transition-all duration-300 hover:shadow-md cursor-pointer">
              <h3 className="font-body text-xl text-on-background mb-2">Broken Ceramics</h3>
              <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-3">Kintsugi is not just about gold; it's about the courage to show exactly where we fell apart.</p>
              <div className="flex items-center justify-between text-[10px] font-label uppercase tracking-widest text-outline">
                <span>Oct 14</span>
                <span className="text-secondary font-bold">#Philosophy</span>
              </div>
            </div>
            <div className="group bg-surface-container-lowest p-6 rounded-xl transition-all duration-300 hover:shadow-md cursor-pointer">
              <h3 className="font-body text-xl text-on-background mb-2">Echoes of Rain</h3>
              <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-3">The sound on the tin roof reminded me of childhood summers in the valley.</p>
              <div className="flex items-center justify-between text-[10px] font-label uppercase tracking-widest text-outline">
                <span>Oct 12</span>
                <span className="text-secondary font-bold">#Memory</span>
              </div>
            </div>
          </div>
        </section>

        {/* Path Visualization Footer (Signature Element) */}
        <div className="relative py-20 flex justify-center overflow-hidden">
          <svg className="opacity-20" fill="none" height="120" viewBox="0 0 400 120" width="400" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 60C100 20 150 100 250 60C350 20 390 60 390 60" stroke="#81525f" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="2"></path>
            <circle cx="10" cy="60" fill="#ffd9e1" r="6"></circle>
            <circle cx="250" cy="60" fill="#ffd9e1" r="6"></circle>
            <circle cx="390" cy="60" fill="#ffd9e1" r="6"></circle>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-body italic text-on-surface-variant text-sm">Every entry is a step on your map.</p>
          </div>
        </div>
      </div>

      {/* Floating Action Button (FAB) relative to this page structure as a sticky bottom button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined">edit</span>
      </button>
    </main>
  );
}
