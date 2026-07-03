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
    id: "pet-animal-session",
    name: "Pet & Animal Session",
    description: "My specialty — a relaxed shoot with your pets, farm animals, or critters, wherever they're most comfortable.",
    startingPrice: 25,
    duration: "~30-45 minutes, one location",
    stripePaymentLink: "#",
  },
  {
    id: "nature-macro-session",
    name: "Nature & Macro Session",
    description: "Close-up, detail-focused shots — flowers, bugs, textures, whatever catches the light.",
    startingPrice: 25,
    duration: "~30-45 minutes",
    stripePaymentLink: "#",
  },
  {
    id: "portrait-session",
    name: "Portrait Session",
    description: "New to portraits, so I'm keeping the rate low while I build experience — a great time to be one of my first clients.",
    startingPrice: 30,
    duration: "~45 minutes, one location",
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
