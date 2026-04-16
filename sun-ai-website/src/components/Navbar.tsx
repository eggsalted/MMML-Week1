"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Store", href: "/store" },
  { name: "Sun One", href: "/sun-one" },
  { name: "Sun Pro", href: "/sun-pro" },
  { name: "Sun Watch", href: "/sun-watch" },
  { name: "Sun Vision", href: "/sun-vision" },
  { name: "Support", href: "/support" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-[rgba(0,0,0,0.8)]">
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="flex items-center justify-between h-11">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 text-lg font-semibold text-[#f5f5f7] hover:opacity-80 transition-opacity">
            <span className="sun-icon text-xl">&#9728;</span>
            <span className="text-sm">Sun AI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-[#d2d2d7] hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button aria-label="Search" className="text-[#d2d2d7] hover:text-white transition-colors">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M10 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-.3 3.9a5 5 0 1 1 .7-.7l3.7 3.7-.7.7-3.7-3.7Z" fill="currentColor"/>
              </svg>
            </button>
            <button aria-label="Shopping Bag" className="text-[#d2d2d7] hover:text-white transition-colors">
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                <path d="M4 4a3 3 0 1 1 6 0v1H4V4Zm-1 1V4a4 4 0 1 1 8 0v1h2a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h2Zm1 3v-1h6v1a1 1 0 1 1-2 0V7H6v1a1 1 0 1 1-2 0Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#d2d2d7] hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 nav-blur border-t border-white/10">
          <div className="max-w-[1024px] mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg text-[#d2d2d7] hover:text-white transition-colors py-2 border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
