import Image from 'next/image';
import { useState, useEffect } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

interface GalleryProps {
  images: GalleryImage[];
  title: string;
  description: string;
}

export const Gallery = ({ images, title, description }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const basePath = process.env.NODE_ENV === 'production' ? '/ciftlik' : '';

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <section id="gallery-section" className="py-12 sm:py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary">{title}</h2>
        <p className="text-text-light text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] cursor-pointer group overflow-hidden rounded-lg"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={`${basePath}${image.src}`}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-110"
                loading={image.priority ? "eager" : "lazy"}
                quality={85}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Görüntüle</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-12 right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                aria-label="Kapat"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${basePath}${images[currentIndex].src}`}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                aria-label="Önceki"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                aria-label="Sonraki"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}; 