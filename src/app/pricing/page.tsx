import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Session pricing for pet & animal sessions, portrait sessions, and custom requests in Seguin, TX.",
};

export default function PricingPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-moss py-14 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-cream text-sm font-semibold uppercase tracking-widest mb-3">
          Just getting started
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-4">Sessions & Pricing</h1>
        <p className="text-cream/80 max-w-md mx-auto">
          Friendly starting rates while I build my portfolio in Seguin, TX. Not seeing what you want? Just ask.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="sr-only">Available Sessions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <PricingCard key={service.id} service={service} />
          ))}
        </div>

        {/* Payment note */}
        <div className="mt-10 bg-sand-dark border border-sand-dark rounded-2xl p-6 text-center max-w-xl mx-auto">
          <p className="text-sm text-charcoal-light">
            Where a <strong className="text-charcoal">Book & Pay</strong> button is available, it takes you to
            a secure Stripe checkout page. Otherwise, reach out and we&apos;ll sort out payment directly.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-clay/20 border-t border-clay/30 py-14 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
          Not sure what you need yet?
        </h2>
        <p className="text-charcoal-light mb-6 max-w-md mx-auto">
          That&apos;s totally fine. Tell me what you have in mind and we&apos;ll figure out a plan and price together.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-moss text-cream font-semibold px-8 py-3 rounded-full hover:bg-moss-light transition-colors"
        >
          Let&apos;s Talk
        </Link>
      </section>
    </>
  );
}
