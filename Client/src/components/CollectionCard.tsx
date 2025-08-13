import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const CollectionCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const slugify = (str: string) =>
    str.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

  const handleClick = () => {
    navigate(`/collection/${slugify(product.name)}`);
  };

  const firstMedia = product.media[0];
  const secondMedia = product.media[1];

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Media Preview */}
      <div className="aspect-[2/3] bg-neutral-100 overflow-hidden relative">
        {firstMedia?.type === 'image' && (
          <img
            src={firstMedia.src}
            alt={firstMedia.alt || product.name}
            className={`w-full h-full object-cover object-center absolute top-0 left-0 transition-opacity duration-300 ${
              isHovered && secondMedia?.type === 'image' ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}
        {secondMedia?.type === 'image' && (
          <img
            src={secondMedia.src}
            alt={secondMedia.alt || product.name}
            className={`w-full h-full object-cover object-center absolute top-0 left-0 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="text-sm uppercase tracking-wider font-medium text-neutral-900">
          {product.name}
        </h3>
        {product.colors && (
          <p className="text-xs text-neutral-500 mt-1">+ {product.colors} colores</p>
        )}
        <p className="mt-2 text-sm font-medium text-neutral-900">
          {product.price.toFixed(2)} €
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;
