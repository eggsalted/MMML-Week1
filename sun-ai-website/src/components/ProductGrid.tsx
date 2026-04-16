import ProductCard from "./ProductCard";

const products = [
  {
    title: "Sun Watch",
    subtitle: "Smarter. Brighter.",
    description:
      "Advanced health monitoring, AI-powered insights, and a brilliant always-on display.",
    bgGradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    href: "/sun-watch",
    icon: "\u231A",
    dark: true,
  },
  {
    title: "Sun Vision",
    subtitle: "Welcome to spatial computing.",
    description:
      "An infinite canvas that transforms how you work, learn, play, and connect.",
    bgGradient: "linear-gradient(135deg, #1a1a1a 0%, #2d1b69 50%, #1a1a1a 100%)",
    href: "/sun-vision",
    icon: "\uD83E\uDD7D",
    dark: true,
  },
  {
    title: "Sun Cloud",
    subtitle: "All your AI, everywhere.",
    description:
      "Store, sync, and access your AI models and data across every device seamlessly.",
    bgGradient: "linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 50%, #d2d2d7 100%)",
    href: "#",
    icon: "\u2601\uFE0F",
    dark: false,
  },
  {
    title: "Sun Care+",
    subtitle: "Protection that thinks ahead.",
    description:
      "AI-powered diagnostics, priority support, and coverage for accidental damage.",
    bgGradient: "linear-gradient(135deg, #ff6723 0%, #ff9500 50%, #fdb813 100%)",
    href: "#",
    icon: "\uD83D\uDEE1\uFE0F",
    dark: false,
  },
];

export default function ProductGrid() {
  return (
    <section className="py-3 bg-black">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
