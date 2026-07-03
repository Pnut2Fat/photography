import { portfolio, PortfolioPhoto } from "@/data/portfolio";
import ClickableImage from "@/components/ClickableImage";

export default function PhotoGallery({ photos = portfolio }: { photos?: PortfolioPhoto[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {photos.map(({ src, alt }) => (
        <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
          <ClickableImage src={src} alt={alt} />
        </div>
      ))}
    </div>
  );
}
