"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Main Hero - Sun One */}
      <section className="relative flex flex-col items-center justify-center text-center pt-24 pb-8 bg-black overflow-hidden min-h-[85vh]">
        {/* Background glow effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-500/20 via-yellow-500/10 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight mb-2 animate-fade-in-up">
            <span className="gradient-text">Sun One</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[#86868b] font-medium mt-2 animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            Intelligence for everything.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200" style={{ opacity: 0 }}>
            <Link href="/sun-one" className="btn-primary">
              Learn more
            </Link>
            <Link href="/store" className="btn-secondary">
              Buy
            </Link>
          </div>
        </div>

        {/* Hero device mockup */}
        <div className="relative z-10 mt-12 animate-scale-in delay-300 w-full max-w-4xl px-6" style={{ opacity: 0 }}>
          <div className="relative mx-auto w-full aspect-[16/9] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Screen content */}
            <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-[#ff6723]/30 via-[#1a1a1a] to-[#fdb813]/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl md:text-9xl animate-float">&#9728;</div>
                <p className="text-lg md:text-xl text-white/60 mt-4 font-light">Sun AI Intelligence</p>
              </div>
            </div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-b-xl" />
          </div>
        </div>
      </section>

      {/* Secondary Hero - Sun Pro */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 bg-black overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-1">
            Sun Pro
          </h2>
          <p className="text-xl md:text-2xl text-[#86868b] font-medium mt-2">
            The ultimate workstation. Supercharged by Sun AI.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sun-pro" className="btn-primary">
              Learn more
            </Link>
            <Link href="/store" className="btn-secondary">
              Buy
            </Link>
          </div>
        </div>

        {/* Pro mockup */}
        <div className="mt-12 w-full max-w-5xl px-6">
          <div className="relative mx-auto w-full aspect-[16/8] bg-gradient-to-b from-[#1d1d1f] to-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2997ff]/10 via-transparent to-[#5ac8fa]/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex gap-6 items-end">
                {/* Monitor */}
                <div className="w-64 md:w-80 h-40 md:h-52 bg-[#1a1a1a] rounded-lg border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold gradient-text-blue">S1 Ultra</div>
                    <p className="text-xs text-white/40 mt-1">24-core Neural Engine</p>
                  </div>
                </div>
                {/* Stats */}
                <div className="hidden md:flex flex-col gap-3">
                  <div className="bg-white/5 rounded-lg px-4 py-2 border border-white/5">
                    <div className="text-2xl font-bold text-white">192GB</div>
                    <div className="text-xs text-white/40">Unified Memory</div>
                  </div>
                  <div className="bg-white/5 rounded-lg px-4 py-2 border border-white/5">
                    <div className="text-2xl font-bold text-white">8TB</div>
                    <div className="text-xs text-white/40">SSD Storage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
