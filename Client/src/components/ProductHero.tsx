import React from 'react';
import { motion } from 'framer-motion';

interface ProductHeroProps {
  title: string;
  images: string[];
}

const ProductHero: React.FC<ProductHeroProps> = ({ title, images }) => {
  return (
    <section className="relative min-h-[100vh] bg-neutral-100">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-3">
        <div className="relative overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden hidden lg:block">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
            src={images[1]}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            src={images[2]}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/10">
        <div className="h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-wider text-white mb-6">
              {title}
            </h1>
            <div className="h-[1px] w-24 bg-white mx-auto"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;