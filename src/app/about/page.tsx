import type { Metadata } from "next";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";
import ClickableImage from "@/components/ClickableImage";
import { siteInfo } from "@/data/site-info";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteInfo.name}, a photographer based in Seguin, TX just getting started.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-moss py-14 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-cream text-sm font-semibold uppercase tracking-widest mb-3">The photographer</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-4">About Me</h1>
        <p className="text-cream/80 max-w-md mx-auto">
          Getting started in photography, right here in Seguin, TX.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-6">
              My Story
            </h2>
            <div className="space-y-4">
              {siteInfo.story.map((paragraph, i) => (
                <p key={i} className="text-charcoal-light leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Gear */}
          <div className="bg-sand-dark rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 gap-1 bg-black/5">
              <div className="relative h-56 sm:h-72 w-full">
                <ClickableImage src="/images/IMG_5619.jpg" alt="Camera bodies and lenses side by side" fit="contain" />
              </div>
              <div className="relative h-56 sm:h-72 w-full">
                <ClickableImage
                  src="/images/IMG_5613.jpg"
                  alt="Full camera kit laid out, including cameras, lenses, batteries, and an iPad"
                  fit="contain"
                />
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-5">My Gear</h3>
              <ul className="space-y-4">
                {siteInfo.gear.map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="text-clay text-lg mt-0.5">📷</span>
                    <div>
                      <p className="text-charcoal font-medium leading-snug">{item.name}</p>
                      <p className="text-charcoal-light text-sm leading-snug mt-0.5">{item.fact}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-sand-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-2 text-center">
            A Few Favorites
          </h2>
          <p className="text-charcoal-light text-center mb-10 text-sm">
            Click any photo for a closer look.
          </p>
          <PhotoGallery photos={portfolio.slice(0, 6)} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
          Ready to book a session?
        </h2>
        <p className="text-charcoal-light mb-6">
          See pricing or reach out to talk through what you have in mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pricing"
            className="inline-block bg-moss text-cream font-semibold px-8 py-3 rounded-full hover:bg-moss-light transition-colors"
          >
            See Pricing
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-moss dark:border-moss-lighter text-moss dark:text-moss-lighter font-semibold px-8 py-3 rounded-full hover:bg-moss/5 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
