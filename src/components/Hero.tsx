import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "@/data/site-info";

export default function Hero() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/_DSC1692.JPG"
          alt="Rooster silhouetted at sunset"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-cream text-sm font-semibold uppercase tracking-widest mb-4">
            {siteInfo.location}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
            Pets, Nature &
            <br />
            <span className="text-clay">the Little Details.</span>
          </h1>
          <p className="text-cream/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            {siteInfo.tagline}. Animal and nature/macro photography is my specialty, and I'm now
            taking portraits and families too, at friendly starting rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="inline-block bg-clay text-black font-semibold px-8 py-3 rounded-full text-center hover:bg-clay-light transition-colors"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-cream/40 text-cream font-semibold px-8 py-3 rounded-full text-center hover:bg-cream/10 transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L480 20L960 50L1440 10V60H0Z" className="fill-sand" />
        </svg>
      </div>
    </section>
  );
}
