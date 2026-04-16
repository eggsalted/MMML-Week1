import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sun Watch - Sun AI",
  description: "Sun Watch. Smarter. Brighter.",
};

const healthFeatures = [
  { name: "Heart Rate", icon: "\u2764\uFE0F", description: "Continuous monitoring with AI-powered anomaly detection." },
  { name: "Blood Oxygen", icon: "\uD83E\uDE78", description: "SpO2 tracking with clinical-grade accuracy." },
  { name: "Sleep Tracking", icon: "\uD83D\uDE34", description: "Comprehensive sleep analysis with AI coaching." },
  { name: "Temperature", icon: "\uD83C\uDF21\uFE0F", description: "Wrist temperature sensing for cycle tracking." },
  { name: "ECG", icon: "\uD83D\uDCC8", description: "Take an ECG anytime, right from your wrist." },
  { name: "Crash Detection", icon: "\uD83D\uDE97", description: "Automatically calls emergency services when needed." },
];

export default function SunWatchPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-16 overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-sm text-[#86868b] uppercase tracking-widest mb-4">Wearable</p>
          <h1 className="text-7xl md:text-9xl font-semibold tracking-tight">
            Sun Watch
          </h1>
          <p className="text-2xl md:text-3xl text-[#86868b] font-medium mt-4">
            Smarter. Brighter.
          </p>
          <p className="text-lg text-white/60 mt-2">From $399</p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/store" className="btn-primary">Buy</Link>
            <Link href="#health" className="btn-secondary">Learn more</Link>
          </div>
        </div>

        {/* Watch Visual */}
        <div className="relative z-10 mt-16">
          <div className="relative w-52 h-64 mx-auto">
            {/* Watch body */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2d2d2f] to-[#1d1d1f] rounded-[40px] border border-white/10 shadow-2xl">
              {/* Screen */}
              <div className="absolute inset-3 rounded-[32px] bg-gradient-to-br from-indigo-900/50 via-black to-purple-900/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-light">9:41</div>
                  <div className="text-xs text-white/40 mt-1">Wednesday, April 16</div>
                  <div className="flex justify-center gap-3 mt-3">
                    <span className="text-xs">&#10084;&#65039; 72</span>
                    <span className="text-xs">&#127939; 847</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Crown */}
            <div className="absolute right-[-6px] top-16 w-2 h-8 bg-[#3d3d3f] rounded-r-sm" />
            <div className="absolute right-[-6px] top-28 w-2 h-4 bg-[#3d3d3f] rounded-r-sm" />
            {/* Band top */}
            <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[42%] h-8 bg-[#2d2d2f] rounded-t-lg" />
            {/* Band bottom */}
            <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[42%] h-8 bg-[#2d2d2f] rounded-b-lg" />
          </div>
        </div>
      </section>

      {/* Health Features */}
      <section id="health" className="py-20 bg-black">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4">
            Health. <span className="text-[#86868b]">Insights that look out for you.</span>
          </h2>
          <p className="text-center text-[#86868b] max-w-xl mx-auto mb-16">
            Powerful health sensors and intelligent algorithms work together to give you
            a comprehensive picture of your well-being.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {healthFeatures.map((f) => (
              <div key={f.name} className="bg-[#1d1d1f] rounded-2xl p-6">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="text-lg font-semibold mt-3">{f.name}</h3>
                <p className="text-sm text-[#86868b] mt-1">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Display */}
      <section className="py-20 bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Display. <span className="text-[#86868b]">Bright. Brilliant. Beautiful.</span>
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="bg-black/50 rounded-2xl p-6">
              <div className="text-2xl font-bold">2000</div>
              <div className="text-xs text-[#86868b] mt-1">nits</div>
            </div>
            <div className="bg-black/50 rounded-2xl p-6">
              <div className="text-2xl font-bold">Always</div>
              <div className="text-xs text-[#86868b] mt-1">on display</div>
            </div>
            <div className="bg-black/50 rounded-2xl p-6">
              <div className="text-2xl font-bold">OLED</div>
              <div className="text-xs text-[#86868b] mt-1">LTPO3</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-center">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Get Sun Watch.
          </h2>
          <p className="text-lg text-[#86868b] mb-8">Starting at $399 or $16.62/mo. for 24 mo.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/store" className="btn-primary">Buy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
