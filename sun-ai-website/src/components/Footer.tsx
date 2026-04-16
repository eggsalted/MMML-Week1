import Link from "next/link";

const footerSections = [
  {
    title: "Shop and Learn",
    links: [
      { name: "Store", href: "/store" },
      { name: "Sun One", href: "/sun-one" },
      { name: "Sun Pro", href: "/sun-pro" },
      { name: "Sun Watch", href: "/sun-watch" },
      { name: "Sun Vision", href: "/sun-vision" },
      { name: "Accessories", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Sun One+", href: "#" },
      { name: "Sun Cloud", href: "#" },
      { name: "Sun Pay", href: "#" },
      { name: "Sun Care+", href: "#" },
    ],
  },
  {
    title: "Sun AI Store",
    links: [
      { name: "Find a Store", href: "#" },
      { name: "Genius Bar", href: "#" },
      { name: "Today at Sun AI", href: "#" },
      { name: "Sun AI Camp", href: "#" },
      { name: "Financing", href: "#" },
      { name: "Order Status", href: "#" },
    ],
  },
  {
    title: "For Business",
    links: [
      { name: "Sun AI and Business", href: "#" },
      { name: "Shop for Business", href: "#" },
    ],
  },
  {
    title: "Sun AI Values",
    links: [
      { name: "Accessibility", href: "#" },
      { name: "Environment", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Supply Chain", href: "#" },
    ],
  },
  {
    title: "About Sun AI",
    links: [
      { name: "Newsroom", href: "#" },
      { name: "Leadership", href: "#" },
      { name: "Career Opportunities", href: "#" },
      { name: "Investors", href: "#" },
      { name: "Ethics & Compliance", href: "#" },
      { name: "Events", href: "#" },
      { name: "Contact Sun AI", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-[#86868b] text-xs">
      <div className="max-w-[980px] mx-auto px-6 pt-5 pb-2">
        {/* Promo text */}
        <p className="text-xs leading-5 pb-4 border-b border-white/10">
          1. Trade-in values will vary based on the condition, year, and
          configuration of your eligible trade-in device. Not all devices are
          eligible for credit. You must be at least 18 years old to be eligible
          to trade in for credit. Trade-in value may be applied toward qualifying
          new device purchase. Actual value awarded is based on receipt of a
          qualifying device matching the description provided when estimate was
          made. Sales tax may be assessed on full value of a new device purchase.
        </p>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-6">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[#f5f5f7] font-semibold text-xs mb-2">
                {section.title}
              </h3>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-[#f5f5f7] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <p>Copyright &copy; 2026 Sun AI Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="#" className="hover:text-[#f5f5f7] transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#f5f5f7] transition-colors">
                Terms of Use
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#f5f5f7] transition-colors">
                Sales and Refunds
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#f5f5f7] transition-colors">
                Legal
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#f5f5f7] transition-colors">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
