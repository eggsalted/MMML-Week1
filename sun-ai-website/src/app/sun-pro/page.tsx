import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sun Pro - Sun AI",
  description: "Sun Pro. The ultimate workstation supercharged by Sun AI.",
};

const specs = [
  { label: "Chip", value: "S1 Ultra", detail: "24-core CPU, 76-core GPU" },
  { label: "Memory", value: "Up to 192GB", detail: "Unified architecture" },
  { label: "Storage", value: "Up to 8TB", detail: "SSD" },
  { label: "Display", value: "32\" 6K", detail: "XDR Retina" },
  { label: "Neural Engine", value: "32-core", detail: "18 TOPS" },
  { label: "Connectivity", value: "Thunderbolt 5", detail: "Up to 120 Gb/s" },
];

const workflows = [
  {
    title: "AI Development",
    description: "Train and fine-tune models locally with massive unified memory.",
    icon: "\uD83E\uDDE0",
  },
  {
    title: "3D Rendering",
    description: "GPU performance that handles cinema-quality rendering in real time.",
    icon: "\uD83C\uDFAC",
  },
  {
    title: "Music Production",
    description: "Run thousands of tracks and plugins with zero latency.",
    icon: "\uD83C\uDFB5",
  },
  {
    title: "Software Engineering",
    description: "Compile, test, and deploy at unprecedented speeds.",
    icon: "\u2328\uFE0F",
  },
];

export default function SunProPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-20 overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-500/15 via-cyan-500/10 to-transparent blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-sm text-[#86868b] uppercase tracking-widest mb-4">Workstation</p>
          <h1 className="text-7xl md:text-9xl font-semibold tracking-tight">
            Sun Pro
          </h1>
          <p className="text-2xl md:text-3xl text-[#86868b] font-medium mt-4">
            The ultimate workstation. Supercharged by Sun AI.
          </p>
          <p className="text-lg text-white/60 mt-2">From $1,999</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/store" className="btn-primary">Buy</Link>
            <Link href="#specs" className="btn-secondary">Learn more</Link>
          </div>
        </div>

        {/* Device Visual */}
        <div className="relative z-10 mt-16 w-full max-w-3xl px-6">
          <div className="relative mx-auto w-full aspect-[16/10] bg-gradient-to-b from-[#1d1d1f] to-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2997ff]/10 via-transparent to-[#5ac8fa]/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-bold gradient-text-blue">S1 Ultra</div>
                <p className="text-sm text-white/40 mt-2">Most powerful chip ever in a desktop</p>
              </div>
            </div>
          </div>
          {/* Stand */}
          <div className="mx-auto w-32 h-4 bg-gradient-to-b from-[#2d2d2f] to-[#1d1d1f] rounded-b-lg" />
          <div className="mx-auto w-48 h-2 bg-[#1d1d1f] rounded-b-lg" />
        </div>
      </section>

      {/* Specs Grid */}
      <section id="specs" className="py-20 bg-black">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
            Specs. <span className="text-[#86868b]">Power beyond measure.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specs.map((spec) => (
              <div key={spec.label} className="bg-[#1d1d1f] rounded-2xl p-6 md:p-8">
                <p className="text-xs text-[#86868b] uppercase tracking-wider">{spec.label}</p>
                <p className="text-2xl md:text-3xl font-bold mt-2 gradient-text-blue">{spec.value}</p>
                <p className="text-sm text-[#86868b] mt-1">{spec.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="py-20 bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Performance. <span className="text-[#86868b]">Monster benchmarks.</span>
          </h2>
          <div className="mt-12 space-y-6 max-w-xl mx-auto">
            {[
              { label: "CPU Multi-Core", value: 95 },
              { label: "GPU Compute", value: 88 },
              { label: "Neural Engine", value: 98 },
              { label: "Memory Bandwidth", value: 92 },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#f5f5f7]">{bar.label}</span>
                  <span className="text-[#86868b]">{bar.value}%</span>
                </div>
                <div className="w-full bg-black/50 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#2997ff] to-[#5ac8fa]"
                    style={{ width: `${bar.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section className="py-20 bg-black">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
            Built for pros. <span className="text-[#86868b]">Every kind.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflows.map((w) => (
              <div key={w.title} className="bg-[#1d1d1f] rounded-3xl p-8 flex items-start gap-4">
                <span className="text-4xl">{w.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold">{w.title}</h3>
                  <p className="text-[#86868b] mt-1">{w.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1d1d1f] text-center">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            <span className="gradient-text-blue">Get Sun Pro.</span>
          </h2>
          <p className="text-lg text-[#86868b] mb-8">Starting at $1,999 or $83.29/mo. for 24 mo.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/store" className="btn-primary">Buy</Link>
            <Link href="#specs" className="btn-secondary">View all specs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
