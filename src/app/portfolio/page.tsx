import type { Metadata } from "next";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A look at recent photography work in Seguin, TX, including nature and animals.",
};

export default function PortfolioPage() {
  const categories = Array.from(new Set(portfolio.map((photo) => photo.category)));

  return (
    <>
      {/* Header */}
      <section className="bg-moss py-14 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sand text-sm font-semibold uppercase tracking-widest mb-3">A look at the work</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-sand mb-4">Portfolio</h1>
        <p className="text-sand/80 max-w-md mx-auto">
          Still building this up. More photos (and more categories) coming soon.
        </p>
      </section>

      {/* Gallery by category */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-6">{category}</h2>
            <PhotoGallery photos={portfolio.filter((photo) => photo.category === category)} />
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-sand-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
          Like what you see?
        </h2>
        <p className="text-charcoal-light mb-6">
          Let&apos;s talk about a session for whatever you have in mind.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-moss text-sand font-semibold px-8 py-3 rounded-full hover:bg-moss-light transition-colors"
        >
          Book a Session
        </Link>
      </section>
    </>
  );
}
