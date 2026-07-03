import Image from "next/image";
import { portfolio, PortfolioPhoto } from "@/data/portfolio";

export default function PhotoGallery({ photos = portfolio }: { photos?: PortfolioPhoto[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {photos.map(({ src, alt }) => (
        <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
