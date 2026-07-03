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
  // Animals & Wildlife
  { src: "/images/_DSC1692.JPG", alt: "Rooster silhouetted at sunset", category: "Animals & Wildlife" },
  { src: "/images/DSC03251.JPG", alt: "Cat mid-yawn", category: "Animals & Wildlife" },
  { src: "/images/DSC04351.JPG", alt: "Macaws perched together", category: "Animals & Wildlife" },
  { src: "/images/DSC04531.JPG", alt: "Giraffe and zebra", category: "Animals & Wildlife" },
  { src: "/images/DSC04445.JPG", alt: "Mallard ducks swimming", category: "Animals & Wildlife" },
  { src: "/images/DSC04634.JPG", alt: "Bird perched in the branches", category: "Animals & Wildlife" },
  { src: "/images/DSC05683.JPG", alt: "Cardinal on a branch", category: "Animals & Wildlife" },
  { src: "/images/DSC05232.JPG", alt: "Hawk silhouette at dusk", category: "Animals & Wildlife" },
  { src: "/images/DSC03982.JPG", alt: "Bird against a stormy sky", category: "Animals & Wildlife" },

  // Nature & Macro
  { src: "/images/DSC04136.JPG", alt: "Rose with water droplets", category: "Nature & Macro" },
  { src: "/images/DSC04986.JPG", alt: "Backlit pink rose", category: "Nature & Macro" },
  { src: "/images/DSC03606.JPG", alt: "Bee on a cactus flower", category: "Nature & Macro" },
  { src: "/images/DSC04805.JPG", alt: "Bee on a yellow wildflower", category: "Nature & Macro" },
  { src: "/images/DSC05378.JPG", alt: "Insect on a backlit leaf", category: "Nature & Macro" },
  { src: "/images/DSC05736.JPG", alt: "Swallowtail butterfly on a thistle", category: "Nature & Macro" },
  { src: "/images/DSC05770.JPG", alt: "Insect on a thistle bud", category: "Nature & Macro" },
  { src: "/images/DSC05979.JPG", alt: "Crepe myrtle blossoms", category: "Nature & Macro" },
];
