import React, { useState, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { AnimatePresence, motion, useInView, useAnimation } from 'framer-motion';
import ImageCarouselModal from './ImageCarouselModal'; // Asegúrate de que la ruta sea correcta

interface ProductDetailProps {
  name: string;
  price: number;
  description: string;
  colors?: Array<{
    name: string;
    code: string;
  }>;
  deliveryTime?: string;
  composition?: string;
  care?: string;
  images: string[];
}

const imageGridVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const infoVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const ProductDetail: React.FC<ProductDetailProps> = ({
  name,
  price,
  description,
  colors,
  deliveryTime,
  composition,
  care,
  images,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const imageButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const imageGridAnimation = useAnimation();
  const infoAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      imageGridAnimation.start('visible');
      infoAnimation.start('visible');
    } else {
      imageGridAnimation.start('hidden');
      infoAnimation.start('hidden');
    }
  }, [isInView, imageGridAnimation, infoAnimation]);

  const handleCloseCarousel = () => {
    if (selectedImageIndex !== null && imageButtonRefs.current[selectedImageIndex]) {
      imageButtonRefs.current[selectedImageIndex]?.blur();
    }
    setSelectedImageIndex(null);
  };

  useEffect(() => {
    imageButtonRefs.current = Array(images.slice(0, 4).length).fill(null);
  }, [images]);

  return (
    <motion.div
      ref={containerRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12">
        {/* Image Grid */}
        <motion.div
          variants={imageGridVariants}
          initial="hidden"
          animate={imageGridAnimation}
        >
          <div className="grid grid-cols-2 gap-1 bg-white">
            {images.slice(0, 4).map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                ref={(el) => (imageButtonRefs.current[index] = el)}
                className="cursor-pointer" // Para cambiar el cursor al pasar el ratón
              >
                <img
                  src={image}
                  alt={`${name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          variants={infoVariants}
          initial="hidden"
          animate={infoAnimation}
        >
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-light tracking-wide text-neutral-900">{name}</h1>
              <p className="mt-4 text-2xl text-neutral-900">{price.toFixed(2)} €</p>
            </div>

            {colors && (
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-wide">Color</p>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <div
                      key={color.code}
                      className="w-12 h-12 rounded-full border ring-1 ring-neutral-200"
                      style={{ backgroundColor: color.code }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Expandable Sections */}
            <div className="space-y-4 pt-8">
              <ExpandableSection title="Descripción">
                <p className="text-neutral-600">{description}</p>
              </ExpandableSection>

              {composition && (
                <ExpandableSection title="Composición y cuidados">
                  <div className="space-y-4 text-neutral-600">
                    <p>{composition}</p>
                    {care && <p>{care}</p>}
                  </div>
                </ExpandableSection>
              )}

              <ExpandableSection title="Envío y devoluciones">
                <p className="text-neutral-600">
                  Envío gratuito en pedidos superiores a 50€. Devoluciones gratuitas dentro de los 30 días posteriores a la compra.
                </p>
              </ExpandableSection>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal Carrusel */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <ImageCarouselModal
            images={images}
            initialIndex={selectedImageIndex}
            onClose={handleCloseCarousel}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Expandable section
const ExpandableSection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-neutral-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm uppercase tracking-wide">{title}</span>
        <Plus
          size={16}
          className={`transform transition-transform ${isOpen ? 'rotate-45' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="pb-4">{children}</div>
      </div>
    </div>
  );
};

export default ProductDetail;