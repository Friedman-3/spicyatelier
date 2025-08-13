import React from 'react';
import ProductDetail from '../components/ProductDetail';
import ProductHero from '../components/ProductHero'; 
//Imagenes del Hero
import lumiereHero0 from '../assets/images/Lumiere/LumiereC0.webp'
import lumiereHero1 from '../assets/images/Lumiere/LumiereC2.webp'
import lumiereHero2 from '../assets/images/Lumiere/LumiereC3.webp'

const Lumiere = () => {
  const productData = {
    id: 1,
    name: "LUMIÈRE",
    price: 35.00,
    description: "Bolso de mano con detalle de nudo en el asa.",
    colors: [
      { name: "Pink", code: "#E6C1BA" },
      { name: "Violet", code: "#A887C5" },
    ],
    deliveryTime: "Recíbelo en 1-5 días",
    composition: "100% Poliéster reciclado",
    care: "Limpiar con un paño húmedo",
    images: [
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg", // Imagen 0
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg", // Imagen 1
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg", // Imagen 2
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg", // Imagen 3
    ]
  };

  // Define un array de imágenes separado para el ProductHero
  const heroImages = [
    lumiereHero0,
    lumiereHero1,
    lumiereHero2,
  ];

  return (
    <div>
      {/* Renderiza el componente ProductHero y le pasa el nombre y el array de imágenes específico para el hero */}
      <ProductHero title={productData.name} images={heroImages} />

      {/* Renderiza el componente ProductDetail y le pasa todos los datos del producto (incluyendo el array original de imágenes) */}
      <ProductDetail {...productData} />
    </div>
  );
};

export default Lumiere;