import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />

      {/* The latest section */}
      <section className="py-20 bg-black">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-sm text-[#86868b] font-semibold uppercase tracking-wider mb-8">
            The latest. <span className="text-[#f5f5f7]">Take a look at what&apos;s new, right now.</span>
          </h2>

          {/* Scrollable tiles */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {/* Tile 1 */}
            <div className="min-w-[280px] md:min-w-[340px] snap-start bg-[#1d1d1f] rounded-2xl overflow-hidden flex-shrink-0">
              <div className="p-6 h-[400px] flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#86868b] font-semibold uppercase">Announcement</p>
                  <h3 className="text-2xl font-semibold mt-2">
                    Introducing <span className="gradient-text">Sun Intelligence</span>
                  </h3>
                  <p className="text-sm text-[#86868b] mt-2">
                    AI that understands context, anticipates needs, and acts seamlessly across every Sun AI device.
                  </p>
                </div>
                <div className="flex items-end justify-center flex-1 mt-4">
                  <span className="text-7xl opacity-40">&#129302;</span>
                </div>
              </div>
            </div>

            {/* Tile 2 */}
            <div className="min-w-[280px] md:min-w-[340px] snap-start bg-[#1d1d1f] rounded-2xl overflow-hidden flex-shrink-0">
              <div className="p-6 h-[400px] flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#86868b] font-semibold uppercase">New Release</p>
                  <h3 className="text-2xl font-semibold mt-2">
                    SunOS 5
                  </h3>
                  <p className="text-sm text-[#86868b] mt-2">
                    A redesigned experience with AI at the core. New features, new capabilities, same simplicity.
                  </p>
                </div>
                <div className="flex items-end justify-center flex-1 mt-4">
                  <span className="text-7xl opacity-40">&#128187;</span>
                </div>
              </div>
            </div>

            {/* Tile 3 */}
            <div className="min-w-[280px] md:min-w-[340px] snap-start bg-[#1d1d1f] rounded-2xl overflow-hidden flex-shrink-0">
              <div className="p-6 h-[400px] flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#86868b] font-semibold uppercase">Event</p>
                  <h3 className="text-2xl font-semibold mt-2">
                    Sun AI Keynote 2026
                  </h3>
                  <p className="text-sm text-[#86868b] mt-2">
                    Watch the highlights from our latest product launch event.
                  </p>
                </div>
                <div className="flex items-end justify-center flex-1 mt-4">
                  <span className="text-7xl opacity-40">&#127902;</span>
                </div>
              </div>
            </div>

            {/* Tile 4 */}
            <div className="min-w-[280px] md:min-w-[340px] snap-start bg-[#1d1d1f] rounded-2xl overflow-hidden flex-shrink-0">
              <div className="p-6 h-[400px] flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#86868b] font-semibold uppercase">Developer</p>
                  <h3 className="text-2xl font-semibold mt-2">
                    Sun AI Developer Portal
                  </h3>
                  <p className="text-sm text-[#86868b] mt-2">
                    Build the next generation of intelligent apps with our AI-first SDK and tools.
                  </p>
                </div>
                <div className="flex items-end justify-center flex-1 mt-4">
                  <span className="text-7xl opacity-40">&#128296;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Banner */}
      <section className="bg-[#1d1d1f] py-16">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-4xl">&#127981;</span>
              <h3 className="text-xl font-semibold mt-3">Sun AI Store</h3>
              <p className="text-sm text-[#86868b] mt-1">Visit or shop online.</p>
              <Link href="/store" className="cta-link text-sm mt-2 inline-block">Shop now</Link>
            </div>
            <div>
              <span className="text-4xl">&#128257;</span>
              <h3 className="text-xl font-semibold mt-3">Trade In</h3>
              <p className="text-sm text-[#86868b] mt-1">Get credit toward your new device.</p>
              <Link href="/store" className="cta-link text-sm mt-2 inline-block">See what your device is worth</Link>
            </div>
            <div>
              <span className="text-4xl">&#128272;</span>
              <h3 className="text-xl font-semibold mt-3">Sun AI Account</h3>
              <p className="text-sm text-[#86868b] mt-1">All your Sun AI devices and services in one place.</p>
              <Link href="#" className="cta-link text-sm mt-2 inline-block">Manage your account</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
