import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { siteInfo } from "@/data/site-info";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteInfo.name} to book a session in Seguin, TX.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-moss py-14 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-cream text-sm font-semibold uppercase tracking-widest mb-3">Say hello</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-4">
          Book a Session
        </h1>
        <p className="text-cream/80 max-w-md mx-auto">
          Tell me what you&apos;re picturing: portraits, family, pets, or something else entirely.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal mb-5">Contact Info</h2>
              <ul className="space-y-4">
                {siteInfo.email && (
                  <li className="flex items-start gap-3">
                    <span className="text-clay text-lg mt-0.5">✉</span>
                    <div>
                      <p className="text-xs text-charcoal-light uppercase tracking-widest mb-1">Email</p>
                      <a
                        href={`mailto:${siteInfo.email}`}
                        className="text-charcoal hover:text-moss dark:hover:text-moss-light transition-colors"
                      >
                        {siteInfo.email}
                      </a>
                    </div>
                  </li>
                )}
                {siteInfo.phone && (
                  <li className="flex items-start gap-3">
                    <span className="text-clay text-lg mt-0.5">📞</span>
                    <div>
                      <p className="text-xs text-charcoal-light uppercase tracking-widest mb-1">Phone</p>
                      <a
                        href={`tel:${siteInfo.phone}`}
                        className="text-charcoal hover:text-moss dark:hover:text-moss-light transition-colors"
                      >
                        {siteInfo.phone}
                      </a>
                    </div>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <span className="text-clay text-lg mt-0.5">📍</span>
                  <div>
                    <p className="text-xs text-charcoal-light uppercase tracking-widest mb-1">Location</p>
                    <p className="text-charcoal">{siteInfo.location}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-sand-dark rounded-2xl p-6">
              <h3 className="font-semibold text-charcoal mb-2">Not sure what you need?</h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                That&apos;s okay! Just describe what you have in mind and we&apos;ll figure out the
                right session and price together.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-card border border-sand-dark rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 className="font-heading text-xl font-semibold text-charcoal mb-6">Send a Request</h2>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
