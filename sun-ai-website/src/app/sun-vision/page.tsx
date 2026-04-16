import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sun Vision - Sun AI",
  description: "Sun Vision. Welcome to spatial computing.",
};

export default function SunVisionPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-20 overflow-hidden min-h-[85vh]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-transparent blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-sm text-[#86868b] uppercase tracking-widest mb-4">Spatial Computing</p>
          <h1 className="text-7xl md:text-9xl font-semibold tracking-tight">
            Sun Vision
          </h1>
          <p className="text-2xl md:text-3xl text-[#86868b] font-medium mt-4">
            Welcome to spatial computing.
          </p>
          <p className="text-lg text-white/60 mt-2">From $3,499</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/store" className="btn-primary">Buy</Link>
            <Link href="#experience" className="btn-secondary">Learn more</Link>
          </div>
        </div>

        {/* Vision headset visual */}
        <div className="relative z-10 mt-16 w-full max-w-lg px-6">
          <div className="relative mx-auto w-full aspect-[2/1] bg-gradient-to-b from-[#2d2d2f] to-[#1d1d1f] rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10" />
            {/* Visor glass */}
            <div className="absolute inset-3 rounded-[32px] bg-gradient-to-r from-[#1a1a1a] via-[#2d1b69]/30 to-[#1a1a1a] flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl md:text-6xl">&#127760;</div>
                <p className="text-xs text-white/30 mt-2">Infinite Canvas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 bg-black">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
            Experience. <span className="text-[#86868b]">Beyond the screen.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Apps",
                description: "Use your favorite apps in a spatial environment that extends infinitely.",
                icon: "\uD83D\uDCF1",
              },
              {
                title: "Entertainment",
                description: "Watch movies and shows on a virtual screen up to 100 feet wide.",
                icon: "\uD83C\uDFAC",
              },
              {
                title: "Productivity",
                description: "Create the ultimate workspace with multiple displays in your space.",
                icon: "\uD83D\uDCBC",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#1d1d1f] rounded-3xl p-8 text-center">
                <span className="text-5xl">{item.icon}</span>
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="text-sm text-[#86868b] mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
            Technology. <span className="text-[#86868b]">Innovation you can see.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "23M", label: "pixels", detail: "micro-OLED displays" },
              { stat: "12", label: "cameras", detail: "spatial awareness" },
              { stat: "S2", label: "chip", detail: "dual-chip design" },
              { stat: "256GB", label: "storage", detail: "on device" },
            ].map((item) => (
              <div key={item.label} className="bg-black/50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold">{item.stat}</div>
                <div className="text-xs text-[#86868b] mt-1">{item.label}</div>
                <div className="text-xs text-white/30 mt-0.5">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EyeSight */}
      <section className="py-20 bg-black">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            SunSight. <span className="text-[#86868b]">Connection without isolation.</span>
          </h2>
          <p className="text-lg text-[#86868b] max-w-2xl mx-auto mb-12">
            An outward display reveals your eyes to people nearby, letting them know when you&apos;re
            engaged or available. Natural eye and hand tracking means you control everything with intuition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-[#1d1d1f] rounded-2xl p-8">
              <span className="text-4xl">&#128064;</span>
              <h3 className="text-lg font-semibold mt-3">Eye Tracking</h3>
              <p className="text-sm text-[#86868b] mt-1">Just look at an element to select it.</p>
            </div>
            <div className="bg-[#1d1d1f] rounded-2xl p-8">
              <span className="text-4xl">&#9995;</span>
              <h3 className="text-lg font-semibold mt-3">Hand Gestures</h3>
              <p className="text-sm text-[#86868b] mt-1">Tap, pinch, and swipe to interact naturally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1d1d1f] text-center">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Get Sun Vision.
          </h2>
          <p className="text-lg text-[#86868b] mb-8">Starting at $3,499</p>
          <div className="flex gap-4 justify-center">
            <Link href="/store" className="btn-primary">Buy</Link>
            <Link href="#experience" className="btn-secondary">Explore features</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
