export interface Service {
  id: string;
  name: string;
  description: string;
  startingPrice: number | null; // null = "let's talk" pricing, no fixed number
  duration: string;
  stripePaymentLink: string;
}

// -----------------------------------------------------------------------
// HOW TO UPDATE:
//   1. Change startingPrice / description here to update what's displayed.
//   2. Log into your Stripe Dashboard -> Payment Links to create a link
//      for any package you want people to be able to pay for online
//      (e.g. a deposit to hold their date).
//   3. Paste the Payment Link URL into stripePaymentLink below.
//      Leave it as "#" to show a "Contact to book" button instead.
// -----------------------------------------------------------------------

export const services: Service[] = [
  {
    id: "mini-session",
    name: "Mini Session",
    description: "A short, simple session at one location — great for a quick portrait, a pet, or a small gift idea.",
    startingPrice: 25,
    duration: "~30 minutes, one location",
    stripePaymentLink: "#",
  },
  {
    id: "standard-session",
    name: "Standard Session",
    description: "A full session with a few different looks or spots — good for families, couples, or personal portraits.",
    startingPrice: 60,
    duration: "~1 hour, multiple setups",
    stripePaymentLink: "#",
  },
  {
    id: "event-session",
    name: "Event Coverage",
    description: "Longer coverage for parties, small gatherings, or events where you want the whole day documented.",
    startingPrice: 120,
    duration: "2+ hours",
    stripePaymentLink: "#",
  },
  {
    id: "custom",
    name: "Something Else in Mind?",
    description: "Not seeing what you need? Tell me what you're picturing and I'll put together a price that works.",
    startingPrice: null,
    duration: "Custom",
    stripePaymentLink: "#",
  },
];
