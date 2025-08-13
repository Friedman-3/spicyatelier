import React from 'react';
import ProductDetail from '../components/ProductDetail';
import ProductHero from '../components/ProductHero'; 
import mufasaHero0 from '../assets/images/Mufasa/MufasaC2.webp'
import mufasaHero1 from '../assets/images/Mufasa/MufasaC1.webp'
import mufasaHero2 from '../assets/images/Mufasa/MufasaC0.webp'

const Mufasa = () => {
  const productData = {
    id: 1,
    name: "MUFASA",
    price: 50.00,
    description: "Bolso de mano con detalle de nudo en el asa.",
    colors: [
      { name: "Brown", code: "#864F2C" },
      { name: "Max Red", code: "#B83027" },
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
    mufasaHero0,
    mufasaHero1,
    mufasaHero2,
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

export default Mufasa;