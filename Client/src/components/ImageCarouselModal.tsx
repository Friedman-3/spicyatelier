import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageCarouselModalProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const ImageCarouselModal: React.FC<ImageCarouselModalProps> = ({
  images,
  initialIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.scrollTo(initialIndex);

    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    setIsReady(true); // ✅ embla ya está listo

    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') emblaApi?.scrollPrev();
      if (e.key === 'ArrowRight') emblaApi?.scrollNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [emblaApi, onClose]);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
    className="fixed inset-0 bg-black/90 z-60 flex items-center justify-center"
    onClick={handleBackgroundClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
>
    {/* Counter */}
    <div className="absolute top-4 left-4 text-white z-10">
        <span className="text-lg font-light">
            {currentIndex + 1} / {images.length}
        </span>
    </div>

    {/* Close */}
    <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white z-10 hover:text-neutral-300 cursor-pointer"
        aria-label="Cerrar"
    >
        <X size={32} />
    </button>

    {/* Carousel */}
    <div className="w-full h-screen overflow-hidden" ref={emblaRef}>
        <div className="flex h-full" style={{ transform: `translate3d(-${currentIndex * 100}%, 0px, 0px)` }}> {/* Asegúrate de que currentIndex se esté utilizando aquí */}
            {images.map((src, idx) => (
                <div
                    key={idx}
                    className="min-w-full h-full flex items-center justify-center"
                >
                    <img
                        src={src}
                        alt={`Vista ${idx + 1}`}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
            ))}
        </div>
    </div>

    {/* Navigation */}
    {isReady && (
        <>
            <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-neutral-300 p-2 cursor-pointer z-20"
                aria-label="Anterior"
            >
                <ChevronLeft size={48} />
            </button>

            <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-neutral-300 p-2 cursor-pointer z-20"
                aria-label="Siguiente"
            >
                <ChevronRight size={48} />
            </button>
        </>
    )}
</motion.div>
    </AnimatePresence>
  );
};

export default ImageCarouselModal;
