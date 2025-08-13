import React from 'react';
import CollectionCard from './CollectionCard';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
}

const CollectionGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-1 mb-16">
      {products.map((product) => (
        <CollectionCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CollectionGrid;