import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "@/data/site-info";

export default function Hero() {
  return (
    <section className="relative bg-charcoal overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/_DSC1692.JPG"
          alt="Rooster silhouetted at sunset"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-sand text-sm font-semibold uppercase tracking-widest mb-4">
            {siteInfo.location}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-sand leading-tight mb-6">
            Pets, Nature &
            <br />
            <span className="text-clay">the Little Details.</span>
          </h1>
          <p className="text-sand/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            {siteInfo.tagline}. Animal and nature/macro photography is my specialty — and I'm now
            taking portraits, families, and events too, at friendly starting rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="inline-block bg-clay text-charcoal font-semibold px-8 py-3 rounded-full text-center hover:bg-clay-light transition-colors"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-sand/40 text-sand font-semibold px-8 py-3 rounded-full text-center hover:bg-sand/10 transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L480 20L960 50L1440 10V60H0Z" fill="#FAF6EE" />
        </svg>
      </div>
    </section>
  );
}
