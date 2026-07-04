"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ClickableImageProps {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  imageClassName?: string;
}

export default function ClickableImage({ src, alt, fit = "cover", imageClassName = "" }: ClickableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative block w-full h-full cursor-zoom-in"
        aria-label={`View larger image: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`${fit === "cover" ? "object-cover" : "object-contain"} hover:scale-105 transition-transform duration-300 ${imageClassName}`}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-cream text-4xl leading-none hover:text-clay-light transition-colors cursor-pointer"
            aria-label="Close"
          >
            &times;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded cursor-default"
          />
        </div>
      )}
    </>
  );
}
