"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectCarousel({
  images,
  title,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <div className="relative w-full h-full">
      <Image
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        fill
        className="object-contain object-center"
      />

      <button
        type="button"
        onClick={previousImage}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-900/70 text-white flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={nextImage}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-900/70 text-white flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-full bg-slate-900/70 text-white text-xs">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}