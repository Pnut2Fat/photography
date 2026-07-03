import Link from "next/link";
import { Service } from "@/data/services";

interface PricingCardProps {
  service: Service;
}

export default function PricingCard({ service }: PricingCardProps) {
  const hasPaymentLink = service.stripePaymentLink !== "#";

  return (
    <div className="bg-white border border-sand-dark rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow p-6 gap-4">
      <div className="flex-1">
        <h3 className="font-heading text-xl font-semibold text-charcoal mb-1">{service.name}</h3>
        <p className="text-charcoal-light text-sm leading-relaxed mb-3">{service.description}</p>
        <p className="text-xs text-charcoal-light uppercase tracking-widest">{service.duration}</p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-sand-dark">
        <div>
          {service.startingPrice !== null ? (
            <>
              <span className="text-xs text-charcoal-light">Starting at</span>
              <div className="text-2xl font-bold text-moss">${service.startingPrice}</div>
            </>
          ) : (
            <span className="text-sm text-charcoal-light italic">Let&apos;s talk pricing</span>
          )}
        </div>

        {hasPaymentLink ? (
          <a
            href={service.stripePaymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-moss text-sand text-sm font-semibold px-5 py-2 rounded-full hover:bg-moss-light transition-colors"
          >
            Book & Pay
          </a>
        ) : (
          <Link
            href="/contact"
            className="border-2 border-moss text-moss text-sm font-semibold px-5 py-2 rounded-full hover:bg-moss/5 transition-colors"
          >
            Contact to Book
          </Link>
        )}
      </div>
    </div>
  );
}
