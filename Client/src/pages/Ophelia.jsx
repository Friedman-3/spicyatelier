import React from 'react';
import ProductDetail from '../components/ProductDetail';
import ProductHero from '../components/ProductHero';
//Imagenes del Hero
import opheliaHero0 from '../assets/images/Ophelia/OpheliaC2.webp'
import opheliaHero1 from '../assets/images/Ophelia/OpheliaC3.webp'
import opheliaHero2 from '../assets/images/Ophelia/OpheliaC4.webp'

const Ophelia = () => {
  const productData = {
    id: 1,
    name: "OPHELIA",
    price: 40.00,
    description: "Bolso de mano con detalle de nudo en el asa.",
    colors: [
      { name: "Yellow", code: "#EBD368" },
      { name: "Red", code: "#C6010E" },
      { name: "Pink", code: "#F2C5C9" },
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
    opheliaHero0,
    opheliaHero1,
    opheliaHero2,
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

export default Ophelia;