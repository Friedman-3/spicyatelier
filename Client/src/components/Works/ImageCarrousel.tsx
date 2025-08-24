import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Actualizar el índice cuando cambie el initialIndex
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevenir scroll
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Botón de cerrar */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 cursor-pointer"
        >
          <X size={32} />
        </motion.button>

        {/* Navegación izquierda */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 cursor-pointer"
        >
          <ChevronLeft size={48} />
        </motion.button>

        {/* Navegación derecha */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 cursor-pointer"
        >
          <ChevronRight size={48} />
        </motion.button>

        {/* Imagen principal */}
        <div className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>
        </div>

        {/* Thumbnails en la parte inferior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-[90vw] overflow-x-auto pb-2"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-16 h-16 object-cover cursor-pointer rounded transition-all duration-200 ${
                  index === currentIndex
                    ? "ring-2 ring-white opacity-100"
                    : "opacity-60 hover:opacity-80"
                }`}
                onClick={() => goToSlide(index)}
              />
              {index === currentIndex && (
                <motion.div
                  layoutId="activeThumb"
                  className="absolute inset-0 ring-2 ring-white rounded"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contador de imágenes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute top-6 left-6 text-white text-lg font-light"
        >
          {currentIndex + 1} / {images.length}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageCarousel;