import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Sun AI",
  description: "Sun AI Support. We're here to help.",
};

const supportTopics = [
  { name: "Sun One", icon: "\uD83D\uDCF1", href: "/sun-one" },
  { name: "Sun Pro", icon: "\uD83D\uDCBB", href: "/sun-pro" },
  { name: "Sun Watch", icon: "\u231A", href: "/sun-watch" },
  { name: "Sun Vision", icon: "\uD83E\uDD7D", href: "/sun-vision" },
  { name: "SunOS", icon: "\u2699\uFE0F", href: "#" },
  { name: "Sun Cloud", icon: "\u2601\uFE0F", href: "#" },
  { name: "Sun Pay", icon: "\uD83D\uDCB3", href: "#" },
  { name: "Sun AI Account", icon: "\uD83D\uDE4D", href: "#" },
];

export default function SupportPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center">
        <div className="max-w-[980px] mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-semibold">
            Sun AI Support
          </h1>
          <p className="text-lg text-[#86868b] mt-4 max-w-lg mx-auto">
            Get help with your Sun AI products. Start by choosing a product below, or search for what you need.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#86868b]" width="20" height="20" viewBox="0 0 15 15" fill="none">
                <path d="M10 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-.3 3.9a5 5 0 1 1 .7-.7l3.7 3.7-.7.7-3.7-3.7Z" fill="currentColor"/>
              </svg>
              <input
                type="text"
                placeholder="Search for topics, products, and more"
                className="w-full bg-[#1d1d1f] text-[#f5f5f7] rounded-xl pl-12 pr-4 py-4 text-base outline-none border border-white/10 focus:border-[#2997ff] transition-colors placeholder-[#86868b]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-16">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supportTopics.map((topic) => (
              <Link
                key={topic.name}
                href={topic.href}
                className="bg-[#1d1d1f] rounded-2xl p-6 text-center hover:bg-[#2d2d2f] transition-colors"
              >
                <span className="text-4xl">{topic.icon}</span>
                <p className="text-sm font-semibold mt-3">{topic.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Set up your new Sun One",
              "Transfer data to your new device",
              "Update SunOS on your device",
              "Reset your Sun AI Account password",
              "If your Sun Watch won\u2019t charge",
              "Sun Cloud storage plans and pricing",
              "Manage your subscriptions",
              "Contact Sun AI Support",
            ].map((topic) => (
              <Link
                key={topic}
                href="#"
                className="flex items-center justify-between bg-black/30 rounded-xl px-6 py-4 hover:bg-black/50 transition-colors group"
              >
                <span className="text-sm">{topic}</span>
                <svg className="text-[#86868b] group-hover:text-white transition-colors flex-shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get Support */}
      <section className="py-16 bg-black">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Get Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1d1d1f] rounded-2xl p-8 text-center">
              <span className="text-4xl">&#128172;</span>
              <h3 className="text-lg font-semibold mt-4">Chat</h3>
              <p className="text-sm text-[#86868b] mt-2">
                Chat with our AI-powered support assistant for instant help.
              </p>
              <Link href="#" className="cta-link text-sm mt-4 inline-block">Start a chat</Link>
            </div>
            <div className="bg-[#1d1d1f] rounded-2xl p-8 text-center">
              <span className="text-4xl">&#128222;</span>
              <h3 className="text-lg font-semibold mt-4">Call</h3>
              <p className="text-sm text-[#86868b] mt-2">
                Talk to a Sun AI Support advisor. Available 24/7.
              </p>
              <Link href="#" className="cta-link text-sm mt-4 inline-block">Get a call</Link>
            </div>
            <div className="bg-[#1d1d1f] rounded-2xl p-8 text-center">
              <span className="text-4xl">&#127981;</span>
              <h3 className="text-lg font-semibold mt-4">Visit</h3>
              <p className="text-sm text-[#86868b] mt-2">
                Make an appointment at the Genius Bar at your nearest Sun AI Store.
              </p>
              <Link href="#" className="cta-link text-sm mt-4 inline-block">Find a store</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
