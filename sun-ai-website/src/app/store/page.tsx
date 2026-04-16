import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store - Sun AI",
  description: "Shop the latest Sun AI products.",
};

const storeProducts = [
  {
    name: "Sun One",
    tagline: "From $999",
    icon: "\uD83D\uDCF1",
    gradient: "from-orange-500/20 to-yellow-500/20",
    href: "/sun-one",
  },
  {
    name: "Sun Pro",
    tagline: "From $1,999",
    icon: "\uD83D\uDCBB",
    gradient: "from-blue-500/20 to-cyan-500/20",
    href: "/sun-pro",
  },
  {
    name: "Sun Watch",
    tagline: "From $399",
    icon: "\u231A",
    gradient: "from-indigo-500/20 to-purple-500/20",
    href: "/sun-watch",
  },
  {
    name: "Sun Vision",
    tagline: "From $3,499",
    icon: "\uD83E\uDD7D",
    gradient: "from-purple-500/20 to-pink-500/20",
    href: "/sun-vision",
  },
  {
    name: "Sun Pods",
    tagline: "From $129",
    icon: "\uD83C\uDFA7",
    gradient: "from-green-500/20 to-emerald-500/20",
    href: "#",
  },
  {
    name: "Accessories",
    tagline: "Explore all",
    icon: "\u2328\uFE0F",
    gradient: "from-gray-500/20 to-zinc-500/20",
    href: "#",
  },
];

const featuredAccessories = [
  { name: "Sun AI Keyboard", price: "$199", icon: "\u2328\uFE0F" },
  { name: "Sun AI Pencil", price: "$129", icon: "\u270F\uFE0F" },
  { name: "Sun Charger", price: "$39", icon: "\u26A1" },
  { name: "Sun Case", price: "$49", icon: "\uD83D\uDCF1" },
];

export default function StorePage() {
  return (
    <div className="pt-24 bg-black min-h-screen">
      {/* Store Header */}
      <section className="max-w-[980px] mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-semibold">
          Store. <span className="text-[#86868b]">The best way to buy the products you love.</span>
        </h1>
      </section>

      {/* Product Categories */}
      <section className="max-w-[1200px] mx-auto px-6 pb-16">
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {storeProducts.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className={`min-w-[180px] md:min-w-[200px] snap-start bg-gradient-to-b ${product.gradient} bg-[#1d1d1f] rounded-3xl p-6 text-center flex-shrink-0 hover:scale-105 transition-transform`}
            >
              <span className="text-5xl block mb-4">{product.icon}</span>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-[#86868b] mt-1">{product.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Financing Banner */}
      <section className="bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Pay monthly at 0% APR.</h2>
            <p className="text-[#86868b] mt-1">
              You can pay over time when you choose to check out with Sun AI Pay.
            </p>
          </div>
          <div className="text-5xl">&#128179;</div>
        </div>
      </section>

      {/* Featured Accessories */}
      <section className="max-w-[980px] mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">
          Accessories. <span className="text-[#86868b]">Icons deserve Icons.</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredAccessories.map((item) => (
            <div
              key={item.name}
              className="bg-[#1d1d1f] rounded-2xl p-6 text-center hover:bg-[#2d2d2f] transition-colors cursor-pointer"
            >
              <span className="text-4xl block mb-3">{item.icon}</span>
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <p className="text-sm text-[#86868b] mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            The Sun AI Store experience.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="text-3xl">&#128666;</span>
              <h3 className="text-lg font-semibold mt-3">Free delivery</h3>
              <p className="text-sm text-[#86868b] mt-1">
                Get free delivery on all orders, or pick up available items at a Sun AI Store.
              </p>
            </div>
            <div>
              <span className="text-3xl">&#128736;</span>
              <h3 className="text-lg font-semibold mt-3">Expert help</h3>
              <p className="text-sm text-[#86868b] mt-1">
                Shop one on one with a Specialist online or at a Sun AI Store.
              </p>
            </div>
            <div>
              <span className="text-3xl">&#128257;</span>
              <h3 className="text-lg font-semibold mt-3">Trade in</h3>
              <p className="text-sm text-[#86868b] mt-1">
                Get credit toward your next purchase when you trade in an eligible device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
