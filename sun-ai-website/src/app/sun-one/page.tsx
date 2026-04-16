import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sun One - Sun AI",
  description: "Explore Sun One. Intelligence for everything.",
};

const features = [
  {
    title: "S1 Chip",
    description: "Our most advanced neural processor ever. 6x faster machine learning.",
    stat: "6x",
    statLabel: "faster ML",
  },
  {
    title: "Sun Intelligence",
    description: "AI that understands context and helps you get things done effortlessly.",
    stat: "100B+",
    statLabel: "parameters",
  },
  {
    title: "All-Day Battery",
    description: "Up to 26 hours of battery life. The longest ever in a Sun One.",
    stat: "26hr",
    statLabel: "battery life",
  },
  {
    title: "ProMotion",
    description: "Adaptive 120Hz display with always-on capability and 2000 nits peak brightness.",
    stat: "120Hz",
    statLabel: "adaptive refresh",
  },
];

const colors = [
  { name: "Midnight", color: "#1d1d1f" },
  { name: "Starlight", color: "#faf6f2" },
  { name: "Solar Gold", color: "#fdb813" },
  { name: "Ocean Blue", color: "#2997ff" },
  { name: "Natural Titanium", color: "#86868b" },
];

export default function SunOnePage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-16 overflow-hidden min-h-[90vh]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-orange-500/30 via-yellow-500/15 to-transparent blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-sm text-[#86868b] uppercase tracking-widest mb-4">New</p>
          <h1 className="text-7xl md:text-9xl font-semibold tracking-tight">
            <span className="gradient-text">Sun One</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[#86868b] font-medium mt-4">
            Intelligence for everything.
          </p>
          <p className="text-lg text-white/60 mt-2">From $999</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/store" className="btn-primary">Buy</Link>
            <Link href="#features" className="btn-secondary">Learn more</Link>
          </div>
        </div>

        {/* Device Visual */}
        <div className="relative z-10 mt-16 w-full max-w-md px-6">
          <div className="relative mx-auto w-72 h-[560px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-[50px] border-2 border-white/10 overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-2xl z-20" />
            <div className="absolute inset-2 rounded-[46px] bg-gradient-to-br from-[#ff6723]/40 via-[#1a1a1a] to-[#fdb813]/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl animate-float">&#9728;</div>
                <p className="text-sm text-white/40 mt-2">Sun AI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-black">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
            Why Sun One. <span className="text-[#86868b]">More reasons than ever.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#1d1d1f] rounded-3xl p-8 md:p-10"
              >
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  {feature.stat}
                </div>
                <div className="text-sm text-[#86868b] uppercase tracking-wider mb-4">
                  {feature.statLabel}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#86868b]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camera Section */}
      <section className="py-20 bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Camera. <span className="text-[#86868b]">AI-powered photography.</span>
          </h2>
          <p className="text-lg text-[#86868b] max-w-2xl mx-auto">
            The most advanced camera system on a Sun One. With AI-enhanced computational photography,
            48MP main camera, and Photonic Engine for incredible detail in every light.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl mx-auto">
            <div className="bg-black/50 rounded-2xl p-6">
              <div className="text-3xl font-bold">48MP</div>
              <div className="text-xs text-[#86868b] mt-1">Main camera</div>
            </div>
            <div className="bg-black/50 rounded-2xl p-6">
              <div className="text-3xl font-bold">5x</div>
              <div className="text-xs text-[#86868b] mt-1">Optical zoom</div>
            </div>
            <div className="bg-black/50 rounded-2xl p-6">
              <div className="text-3xl font-bold">4K</div>
              <div className="text-xs text-[#86868b] mt-1">ProRes video</div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="py-20 bg-black">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12">
            Finish. <span className="text-[#86868b]">Pick your perfect look.</span>
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {colors.map((c) => (
              <div key={c.name} className="text-center group cursor-pointer">
                <div
                  className="w-12 h-12 rounded-full border-2 border-white/20 mx-auto group-hover:border-white/60 transition-colors"
                  style={{ backgroundColor: c.color }}
                />
                <p className="text-xs text-[#86868b] mt-2 group-hover:text-white transition-colors">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1d1d1f] text-center">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            <span className="gradient-text">Get Sun One.</span>
          </h2>
          <p className="text-lg text-[#86868b] mb-8">Starting at $999 or $41.62/mo. for 24 mo.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/store" className="btn-primary">Buy</Link>
            <Link href="#features" className="btn-secondary">Learn more</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
