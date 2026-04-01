import Image from "next/image";

export default function ArchivesPage() {
  return (
    <main className="lg:ml-64 min-h-screen pt-28 px-6 md:px-12 lg:px-20 pb-12">
      <header className="mb-16 max-w-5xl">
        <h1 className="font-body italic text-5xl md:text-7xl text-on-background mb-4">Historical Collection</h1>
        <p className="font-label text-on-surface-variant text-sm tracking-wide max-w-md">Browsing the timeline of your evolving self. Select a period to rediscover stored reflections.</p>
      </header>

      <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 max-w-6xl gap-4">
        <div className="flex flex-wrap gap-8 items-center">
          <h2 className="font-body text-3xl text-secondary">2023</h2>
          <div className="flex gap-4">
            <button className="px-4 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant text-[10px] uppercase tracking-widest hover:bg-surface-container transition-colors">2022</button>
            <button className="px-4 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant text-[10px] uppercase tracking-widest hover:bg-surface-container transition-colors">2021</button>
          </div>
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant cursor-pointer hover:text-on-background transition-colors">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>filter_list</span>
          <span className="text-[10px] uppercase tracking-widest">Chronological</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {/* Month Card: December */}
        <div className="group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
          <div className="relative h-48 w-full overflow-hidden">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJzzctVff9im_Paz1-W0G4qjCr1aDPCuP1Bj-qIgHW3m3laTXJ1mEJHe56A6pZqbDimRJ1UG05x75y0r3yiX0KJL2nvpF51JoloTnHBJJw-MDJtQ2XfmGtbdB7sNGmVgj4uURZF_uEmb1dcJbTeHI1uk7mPiEJTzW53qfcn206sWjTkLjbmCbEIk_nX6G-eSRLibh4lL9J3lRozts38E8psPtY3WUb_9_voe0JxngkDSUDSn4Q1bc1MjmDMwHtJLTKNQeD-gQY1ts" 
              alt="misty forest with frost on pine trees"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
          </div>
          <div className="p-8 -mt-12 relative z-10 bg-surface-container-low">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Vol. 12</span>
                <h3 className="font-body text-3xl mt-1 text-on-background">December</h3>
              </div>
              <div className="bg-surface-container-lowest p-2 rounded-lg shadow-sm">
                <span className="font-label text-xs font-bold text-primary block text-center">31</span>
                <span className="font-label text-[8px] block uppercase text-on-surface-variant">Days</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">edit_note</span>
                <span className="font-label text-xs text-on-surface-variant">28 Entries recorded</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">auto_awesome</span>
                <span className="font-label text-xs text-on-surface-variant">3 New core memories</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
              <span className="font-body italic text-sm text-on-surface-variant">"The quiet of the first snow..."</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Month Card: November */}
        <div className="group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
          <div className="relative h-48 w-full overflow-hidden">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeXL0pK5_MyCAI7QCCPY6FY_1f6pLo6LtxhNn4HKGZHzbXVBgJA9Oj54RvgUE5xrLEdkjyDoh1bQNOWwrEGeHDeJhWZQYgOwEmkjl-Q6oC9iK7KBFkKPnOOinIOFjuYxRkauzwmEzZptY7XoIwBRKD7i62vzTDx8pdRYvGZg0YpHffANasKv1rpn22uH0z6_S_5gUzYKNob_Oyd20rTAzI89uW_gXKTtbSedsuf1evz6mXMpROjr4G6J5b-1JVO76JfZ_WIlflyT8" 
              alt="warm cozy interior"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
          </div>
          <div className="p-8 -mt-12 relative z-10 bg-surface-container-low">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Vol. 11</span>
                <h3 className="font-body text-3xl mt-1 text-on-background">November</h3>
              </div>
              <div className="bg-surface-container-lowest p-2 rounded-lg shadow-sm">
                <span className="font-label text-xs font-bold text-primary block text-center">15</span>
                <span className="font-label text-[8px] block uppercase text-on-surface-variant">Days</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">edit_note</span>
                <span className="font-label text-xs text-on-surface-variant">12 Entries recorded</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">psychology</span>
                <span className="font-label text-xs text-on-surface-variant">Introspective focus</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
              <span className="font-body italic text-sm text-on-surface-variant">"Transitioning into soft winter..."</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Stats/Highlight Bento Card */}
        <div className="bg-secondary-container rounded-xl p-8 flex flex-col justify-between row-span-1 md:row-span-2 shadow-inner">
          <div>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-secondary-container font-bold mb-8 block">Yearly Summary</span>
            <div className="space-y-12">
              <div>
                <div className="font-body text-6xl text-secondary">312</div>
                <div className="font-label text-[10px] uppercase tracking-widest text-on-secondary-container mt-2">Total Reflections</div>
              </div>
              <div>
                <div className="font-body text-6xl text-secondary">18</div>
                <div className="font-label text-[10px] uppercase tracking-widest text-on-secondary-container mt-2">Skills Documented</div>
              </div>
              
              <div className="relative h-24 mt-8 w-full">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 80">
                  <path d="M0,60 C40,60 60,20 100,40 S160,10 200,30" fill="none" stroke="#81525f" strokeWidth="2" strokeDasharray="4,4"></path>
                  <circle cx="40" cy="55" fill="#81525f" r="4"></circle>
                  <circle cx="100" cy="40" fill="#81525f" r="4"></circle>
                  <circle cx="160" cy="18" fill="#81525f" r="4"></circle>
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-[8px] uppercase tracking-tighter text-on-secondary-container/60">
                  <span>Jan</span><span>Jun</span><span>Dec</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-10 border-t border-on-secondary-container/10">
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-secondary-container group hover:text-secondary transition-colors cursor-pointer">
              Download full 2023 archive
              <span className="material-symbols-outlined text-sm group-hover:-translate-y-1 transition-transform">download</span>
            </button>
          </div>
        </div>

        {/* Month Card: October */}
        <div className="group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
          <div className="relative h-48 w-full overflow-hidden">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1zdx9NrGexd0gNzABdR3_WYj8PjcDFlY7cfmlPcvFCYRK4RwToGxKi17OfZKQ2GDoQUSqG7mhFc-gVDluWY4UUlFkOPtbpJNZsWLYMNpyfVUBPR5cJS5_Hcks2ZMgNtmgMkhEl10_VjxlqYAKahIMOqA2llEjds59hDFbq3hnVUOnkg4NiFEhXdqOqUYS4hSKiVjIikk-lMfrDYBAkiM_v6TAc_op64HeJ2UTk50KSS7J3uqATZqlU9aHvAPAMm6YzguB_w2EBgE" 
              alt="colorful autumn maple leaves"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
          </div>
          <div className="p-8 -mt-12 relative z-10 bg-surface-container-low">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Vol. 10</span>
                <h3 className="font-body text-3xl mt-1 text-on-background">October</h3>
              </div>
              <div className="bg-surface-container-lowest p-2 rounded-lg shadow-sm">
                <span className="font-label text-xs font-bold text-primary block text-center">31</span>
                <span className="font-label text-[8px] block uppercase text-on-surface-variant">Days</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">edit_note</span>
                <span className="font-label text-xs text-on-surface-variant">31 Entries recorded</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">fitness_center</span>
                <span className="font-label text-xs text-on-surface-variant">Peak physical growth</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
              <span className="font-body italic text-sm text-on-surface-variant">"Finding rhythm in routine..."</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Month Card: September */}
        <div className="group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
          <div className="relative h-48 w-full overflow-hidden">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNYefrVzujCxe_R35F82z0u78rqr-mtbd2MUPcejMULjnJapgT32sKfLhS3Vf3RQ7q_EfiApLLTzDRcuSEUF64GGQUfg7WJ_BPubGTCSfX-s7On26LSDpcDR_BuqSrzOAo027ngdVGc06XcxoMJy6qJ7jynEmizWymPPtUaLZxmKUNFpwSzfOk213cF_NU6qrzCNr9YKhBxHKLhRSoemwQIrffX6xCsg4r_Q_YEvHyLmiPn3dvfFj9T6OrC_zAKy0_4BRGXSnwh60" 
              alt="abstract vintage paper textures"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
          </div>
          <div className="p-8 -mt-12 relative z-10 bg-surface-container-low">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Vol. 09</span>
                <h3 className="font-body text-3xl mt-1 text-on-background">September</h3>
              </div>
              <div className="bg-surface-container-lowest p-2 rounded-lg shadow-sm">
                <span className="font-label text-xs font-bold text-primary block text-center">24</span>
                <span className="font-label text-[8px] block uppercase text-on-surface-variant">Days</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">edit_note</span>
                <span className="font-label text-xs text-on-surface-variant">24 Entries recorded</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-lg">school</span>
                <span className="font-label text-xs text-on-surface-variant">4 New skills unlocked</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
              <span className="font-body italic text-sm text-on-surface-variant">"The beginning of the shift..."</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 text-center">
        <button className="px-8 py-3 rounded-xl border border-outline-variant/30 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer">
          Load Historical Volume 2022
        </button>
      </footer>
    </main>
  );
}
