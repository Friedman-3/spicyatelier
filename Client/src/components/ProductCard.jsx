import React from 'react';

const ProductCard = ({ 
  media = {
    type: "image",
    src: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    alt: "Luxury handbag"
  },
  name = "Woven Leather Tote",
  price = "€1,850",
  isNew = false,
  colors = [
    { id: 'black', name: 'Black', hex: '#000000' },
    { id: 'brown', name: 'Brown', hex: '#8B4513' },
    { id: 'navy', name: 'Navy', hex: '#000080' },
    { id: 'beige', name: 'Beige', hex: '#F5F5DC' }
  ]
}) => {
  

  return (
    <div 
      className="group max-w-[380px] mx-auto cursor-pointer"
    >
      <div className="aspect-[3/4] overflow-hidden bg-neutral-100 mb-2 relative">
        {media.type === 'video' ? (
          <video
            src={media.src}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img 
            src={media.src} 
            alt={media.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        
        {isNew && (
          <div className="absolute top-3 left-3 bg-black text-white text-xs uppercase tracking-wider py-1 px-2">
            New
          </div>
        )}
      </div>

      {/* Solo nombre, precio y bolitas de color */}
      <div className="space-y-0.5 text-center">
        <p className="font-medium">{name}</p>
        <p className="text-sm">{price}</p>

        <div className="flex justify-center gap-1 pt-1">
          {colors.map((color) => (
            <div
              key={color.id}
              className="w-4 h-4 rounded-full border border-neutral-200 transition-transform hover:scale-110"
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
