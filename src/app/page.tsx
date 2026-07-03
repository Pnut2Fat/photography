import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import PricingCard from "@/components/PricingCard";
import { siteInfo } from "@/data/site-info";
import { portfolio } from "@/data/portfolio";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: `${siteInfo.name} | Photography in Seguin, TX`,
  description: `${siteInfo.tagline}. Portraits, families, pets, events, and more.`,
};

const perks = [
  {
    icon: "📸",
    title: "Just Getting Started",
    body: "I'm new to this, which means friendly rates while I build my portfolio — a great time to book.",
  },
  {
    icon: "🌱",
    title: "Whatever You Need",
    body: "Portraits, families, pets, events, or something totally different — tell me what you're picturing.",
  },
  {
    icon: "📍",
    title: "Based in Seguin, TX",
    body: "Local to Seguin and happy to travel nearby for the right shot.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Perks */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {perks.map(({ icon, title, body }) => (
            <div key={title} className="text-center">
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">{title}</h3>
              <p className="text-charcoal-light text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-sand-dark max-w-6xl mx-auto" />

      {/* Portfolio teaser */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-clay text-sm font-semibold uppercase tracking-widest mb-2">Recent Work</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal">Portfolio</h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden sm:inline text-sm text-moss font-semibold hover:text-moss-light transition-colors"
          >
            See all →
          </Link>
        </div>
        <PhotoGallery photos={portfolio.slice(0, 6)} />
        <div className="mt-8 text-center sm:hidden">
          <Link href="/portfolio" className="text-sm text-moss font-semibold hover:text-moss-light">
            See full portfolio →
          </Link>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="bg-sand-dark py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-clay text-sm font-semibold uppercase tracking-widest mb-2">
                Getting started rates
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal">Sessions</h2>
            </div>
            <Link
              href="/pricing"
              className="hidden sm:inline text-sm text-moss font-semibold hover:text-moss-light transition-colors"
            >
              See all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <PricingCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-clay py-14 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-3">
          Have something specific in mind?
        </h2>
        <p className="text-charcoal/70 mb-6 max-w-md mx-auto">
          I&apos;m happy to chat about what you&apos;re picturing and put a plan together.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-moss text-sand font-semibold px-8 py-3 rounded-full hover:bg-moss-light transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
