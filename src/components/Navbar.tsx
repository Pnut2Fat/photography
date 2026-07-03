"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteInfo } from "@/data/site-info";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-sand border-b border-moss-light shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / business name */}
          <Link
            href="/"
            className="text-xl font-heading font-bold text-moss tracking-tight hover:text-moss-light transition-colors"
          >
            {siteInfo.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-clay border-b-2 border-clay"
                    : "text-charcoal-light hover:text-charcoal"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-moss text-sand text-sm font-medium px-4 py-2 rounded-full hover:bg-moss-light transition-colors"
            >
              Book a Session
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-sand border-t border-sand-dark px-4 pb-4 pt-2 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium py-1 transition-colors ${
                pathname === href ? "text-clay" : "text-charcoal-light hover:text-charcoal"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-moss text-sand text-sm font-medium px-4 py-2 rounded-full text-center hover:bg-moss-light transition-colors"
          >
            Book a Session
          </Link>
        </div>
      )}
    </nav>
  );
}
