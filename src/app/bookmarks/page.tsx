import Image from "next/image";

export default function BookmarksPage() {
  return (
    <main className="lg:ml-64 pt-28 pb-20 px-6 md:px-12 min-h-screen">
      {/* Page Header & Asymmetrical Intro */}
      <header className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-xl">
          <span className="font-headline font-semibold text-secondary text-xs uppercase tracking-[0.2em] mb-4 block">Personal Collection</span>
          <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-on-background leading-tight">Curated <br/>Reflections.</h1>
          <p className="font-body text-xl text-on-surface-variant mt-6 leading-relaxed">
              A quiet space for the thoughts that resonated most. Each bookmark is a milestone in your evolving narrative.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pb-2">
          <span className="px-4 py-2 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-headline font-bold uppercase tracking-wider">All Moments</span>
          <span className="px-4 py-2 bg-surface-container text-on-surface-variant rounded-full text-xs font-headline font-bold uppercase tracking-wider hover:bg-tertiary-container transition-colors cursor-pointer">Nature</span>
          <span className="px-4 py-2 bg-surface-container text-on-surface-variant rounded-full text-xs font-headline font-bold uppercase tracking-wider hover:bg-tertiary-container transition-colors cursor-pointer">Solitude</span>
          <span className="px-4 py-2 bg-surface-container text-on-surface-variant rounded-full text-xs font-headline font-bold uppercase tracking-wider hover:bg-tertiary-container transition-colors cursor-pointer">Epiphanies</span>
        </div>
      </header>

      {/* Gallery-style Bento Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Featured Large Entry */}
        <article className="md:col-span-8 group cursor-pointer">
          <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-surface-container-low">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJR90m7yawyC1tArVpYOyzToeRbNF1QknA4H8r-UcKBdQbXKR1aYwjAfGW-Jh7bIdeN-WU-AyNXSznbBQVv5_zb5uFPTHWvGaY3m2mEFgZ-WoLEacn6oWDPAVeEhCiNeqPkkeiRh4YLBi8hBDJXNVeAtqGMlDiFnpMOTvKXlxSdVkN-VC5-E6oPdj0r38eP_mAk4G2sAMphWEbZmyLbxi4ZQK7XM8BWxM4fK5QRWPWIhgbercnBedGGqPayPrrz5IZJQGiRktXevs" 
              alt="majestic misty mountain peaks at dawn"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white z-10 w-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-white">Oct 14, 2023</span>
                <span className="material-symbols-outlined text-secondary-fixed text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
              <h2 className="font-headline font-bold text-3xl mb-2 text-shadow-subtle">The Silence of the High Peaks</h2>
              <p className="font-body text-white/90 max-w-md line-clamp-2 italic">"Standing here, the world feels both infinitely large and perfectly small. I found a piece of clarity today that I've been searching for months..."</p>
            </div>
          </div>
        </article>

        {/* Side Card 1 */}
        <article className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col h-full border border-transparent hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 cursor-pointer">
            <div className="relative mb-6 overflow-hidden rounded-xl aspect-square">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDglyb-v6t9s957NAK5TONqclFM2-6kEBLjea3qC16uRosqsLa5S8UcqJ31H9zL8UT4rzmnYnEfoSmMnpqajAO_0I7bwPKphWFiDww7p-jkQHQ1-CYGbDDQ_aNbdWVIhPiN1SgTQNI35ZNK3zl1g9lliuy_8S4ofF-3Otf9BY7Lix0Do9U0TZ6hv_ethMpbqdoRn0Zanwg6KuSs6ZdAyhRsQ1sprfdnkRKGRhxobVuAYGFzmmpgMleQA6O4ysjzwGSp1CRN4PhMxDI" 
                alt="old leather-bound journal on a wooden table"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105" 
                unoptimized
              />
            </div>
            <span className="font-headline font-bold text-[10px] text-primary uppercase tracking-widest mb-2">Internal Monologue</span>
            <h3 className="font-headline font-bold text-xl mb-4 leading-snug text-on-background">Morning Rituals &amp; Quiet Mornings</h3>
            <p className="font-body text-on-surface-variant flex-grow">Establishing a rhythm isn't about productivity; it's about making space for the soul to arrive before the day begins.</p>
          </div>
        </article>

        {/* Path Connector Row (Signature Component) */}
        <div className="md:col-span-12 py-12 flex items-center justify-center relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1000 100">
            <path d="M0,50 C250,10 750,90 1000,50" fill="none" opacity="0.4" stroke="#81525f" strokeDasharray="8 8" strokeWidth="2"></path>
          </svg>
          <div className="relative z-10 flex gap-12 md:gap-24">
            <div className="flex flex-col items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-secondary-container ring-4 ring-background"></div>
              <span className="font-label text-[10px] text-secondary font-bold uppercase tracking-tighter">Sept</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-primary-container ring-4 ring-background"></div>
              <span className="font-label text-[10px] text-primary font-bold uppercase tracking-tighter">Oct</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-secondary-container ring-4 ring-background"></div>
              <span className="font-label text-[10px] text-secondary font-bold uppercase tracking-tighter">Nov</span>
            </div>
          </div>
        </div>

        {/* More Gallery Cards */}
        <article className="md:col-span-4 group cursor-pointer">
          <div className="bg-surface-container-low rounded-2xl overflow-hidden aspect-[4/5] flex flex-col hover:shadow-lg transition-all">
            <div className="relative h-1/2 overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC56TJ-2DeZhgiwvl3HJMF9sHdIHBWUEw0vAPO_uFbnDbwBHVTaDYSdhGEqaDwSn1Vw5iS565QcIzrfAPw14xSw365O-bihx7H0u5GaF7XqyB-FzkrteyxRKfStBs_P843eSv-lelQ-hu8EdQw6hBqHsZtVeugDnGV4Sks0W4FEXwGdjaN5j5vY7ak5jO7MR6LHZ5sdQ7zsObl39AZGddQY2kqmBGo-3Z1VhFCWTG0zhnNQ8O-jvb11p4fuXTldDAJ3GN_eemLFHU" 
                alt="tranquil lake at sunset"
                fill
                className="object-cover transition-transform group-hover:scale-110 duration-500" 
                unoptimized
              />
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <span className="font-headline font-bold text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 block">Nov 02, 2023</span>
                <h3 className="font-headline font-bold text-xl text-on-background">Echoes in the Valley</h3>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs italic text-on-surface-variant">4 min read</span>
                <span className="material-symbols-outlined text-secondary transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </div>
        </article>

        <article className="md:col-span-4 group cursor-pointer">
          <div className="bg-surface-container-low rounded-2xl overflow-hidden aspect-[4/5] flex flex-col hover:shadow-lg transition-all">
            <div className="relative h-1/2 overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlnYuIw2nyxdFz4lP2P5Mjc_h24jioHythUvNBAoSnWK152XO7bmr4RpCUdELTzJ9oSxfJNdr3OUlJK9Y-u7tUSQhnF3qGSoJIx6fs4KmAsryC7kP_emGaalYW4GilGkt5ROaG2MkrAlE-IeAmwbhCBxLuC2ZUc1ZwI12bcWgo3spFW40sV7NOlHN4t4ZyOqwHicXzdeLRHVsZgf4V1ATb62fpETDtuAeJ4SFDoZbjBHHAmCKP3IEWo5kmcE-zV_E-gxoJzOc514U" 
                alt="abstract warm sunset light through wild grass"
                fill
                className="object-cover transition-transform group-hover:scale-110 duration-500" 
                unoptimized
              />
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <span className="font-headline font-bold text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 block">Nov 15, 2023</span>
                <h3 className="font-headline font-bold text-xl text-on-background">The Warmth of Memory</h3>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs italic text-on-surface-variant">2 min read</span>
                <span className="material-symbols-outlined text-secondary transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </div>
        </article>

        <article className="md:col-span-4 group cursor-pointer">
          <div className="bg-surface-container-low rounded-2xl overflow-hidden aspect-[4/5] flex flex-col hover:shadow-lg transition-all">
            <div className="relative h-1/2 overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALBJG9GkZ2-ocOcIvM9ZAmz2aTBEXc26g2Jzgzr9h4KXn5YaOg7RYDjKZloRXy_mT-YKZv7c0mCLfWKtbfi1Gu8U1VLFU0-jFLWVR6qmwm2AWLfQHsX7u0s3LNJi96JEt-UmvEodXjZ1Xs6giWlLg0Wf0TWs34n0o5voujcE23K1ujr8ZPkHor1gwwoYRXKeMv9IF_61rFT2FsIDajX0SqoFc361R-_XUaAkhBchcs8__UnLYT9lFFCsCdJzj7c5EyDdKglrno_lk" 
                alt="macro photo of raindrops on a vibrant green leaf"
                fill
                className="object-cover transition-transform group-hover:scale-110 duration-500" 
                unoptimized
              />
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <span className="font-headline font-bold text-[10px] text-on-surface-variant uppercase tracking-widest mb-2 block">Dec 01, 2023</span>
                <h3 className="font-headline font-bold text-xl text-on-background">Petrichor &amp; Patience</h3>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs italic text-on-surface-variant">6 min read</span>
                <span className="material-symbols-outlined text-secondary transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </div>
        </article>

        {/* Quote/Reflection Bento Piece */}
        <div className="md:col-span-12 lg:col-span-6 bg-primary text-on-primary p-12 rounded-3xl flex flex-col justify-center relative overflow-hidden min-h-[400px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <span className="material-symbols-outlined text-6xl opacity-20 mb-6">format_quote</span>
          <p className="font-body italic text-3xl md:text-4xl leading-snug relative z-10 w-full text-white">
              "We do not remember days, we remember moments."
          </p>
          <div className="mt-8 flex items-center gap-4 relative z-10">
            <div className="w-10 h-[1px] bg-on-primary/50"></div>
            <span className="font-headline text-sm uppercase tracking-widest opacity-80 text-white">Cesare Pavese</span>
          </div>
        </div>

        {/* Simple Location Card */}
        <div className="md:col-span-12 lg:col-span-6 bg-surface-container p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-full md:w-1/2 h-64 rounded-2xl overflow-hidden shadow-sm">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa5Ngz_YmLaYp39Cu3ARQ6YCOjHXZCtRrEBziI7FNFoETy6kKLwjfejQlulP4Y5TMVUBspBhrx3U0IIV4nzJSLGyd9t-EfFAU9u1VN0sq85S-H4cLe_QH11CeC-J-3akWG9saWtK0j_ayepS9j7WnEZ5o2XWiBwJUGHlvgUIuId-C8lwy4_uS6z0Uy_D_wiI4KW3OVzNttHPoIsqXusiGtJQIXPeQh6WLk4T_l68ntuMn7I4UCWqu1eiaBhTtACYOnkpcYxSl86y8" 
              alt="stylized satellite map view of coastal cliffs"
              fill
              className="object-cover" 
              unoptimized
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="font-headline font-bold text-[10px] text-on-tertiary-fixed-variant uppercase tracking-widest mb-4 block">Pinned Location</span>
            <h3 className="font-headline font-bold text-2xl mb-2 text-on-background">The Old Man of Storr</h3>
            <p className="font-body text-on-surface-variant mb-6">A collection of 12 entries from the rugged landscapes of the inner Hebrides.</p>
            <button className="flex items-center gap-2 text-primary font-bold font-headline text-xs uppercase tracking-wider group cursor-pointer hover:text-primary-dim transition-colors">
                Explore Map
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">north_east</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-24 pt-12 border-t border-stone-200/50 flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
        <span className="font-headline text-sm font-medium text-on-surface-variant">© 2026 The Living Archive</span>
        <div className="flex gap-8 font-headline text-xs uppercase tracking-widest font-bold text-on-surface-variant">
          <span className="hover:text-primary transition-colors cursor-pointer">Privacy</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Export Data</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Archive Settings</span>
        </div>
      </footer>
    </main>
  );
}
