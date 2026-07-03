import Link from "next/link";
import { siteInfo } from "@/data/site-info";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-moss text-cream mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-2">{siteInfo.name}</h3>
            <p className="text-sm text-cream/90">{siteInfo.tagline}</p>
            <p className="text-sm text-cream/90 mt-2">{siteInfo.location}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-cream mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-cream/80 hover:text-cream transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-cream mb-3">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              {siteInfo.email && (
                <li>
                  <a href={`mailto:${siteInfo.email}`} className="hover:text-cream transition-colors">
                    {siteInfo.email}
                  </a>
                </li>
              )}
              {siteInfo.phone && (
                <li>
                  <a href={`tel:${siteInfo.phone}`} className="hover:text-cream transition-colors">
                    {siteInfo.phone}
                  </a>
                </li>
              )}
              <li>
                <Link href="/contact" className="hover:text-cream transition-colors">
                  Send a message →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-moss-light text-center text-xs text-cream/80">
          © {year} {siteInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
