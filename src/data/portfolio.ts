export interface PortfolioPhoto {
  src: string;
  alt: string;
  category: string;
}

// -----------------------------------------------------------------------
// HOW TO ADD YOUR OWN PHOTOS:
//   1. Drop your photo files into public/images/
//   2. Add an entry below with the file path, a short description (alt),
//      and a category (e.g. "Nature & Macro", "Portraits", "Pets & Animals").
//   3. New categories show up automatically on the portfolio page.
// -----------------------------------------------------------------------

export const portfolio: PortfolioPhoto[] = [
  // Placeholder photos below are borrowed from an earlier project of Mike's
  // (the family's egg farm) just so the gallery isn't empty. Swap these out
  // for real nature/macro and portrait shots whenever you're ready.
  { src: "/images/IDG_20251213_113405_920.JPG", alt: "The flock roaming outside", category: "Farm & Animals" },
  { src: "/images/IMG_2497.JPG", alt: "Hen with her chicks", category: "Farm & Animals" },
  { src: "/images/IMG_6670.JPG", alt: "Chickens in the yard", category: "Farm & Animals" },
  { src: "/images/IMG_8342.jpg", alt: "Baby chicks", category: "Farm & Animals" },
  { src: "/images/IMG_9462.jpg", alt: "Holding a chicken", category: "Farm & Animals" },
  { src: "/images/IMG_4034.jpg", alt: "Close-up detail shot", category: "Nature & Macro" },
];
