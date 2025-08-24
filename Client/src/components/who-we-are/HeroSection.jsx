import React from 'react';
import heroImage from '../../assets/images_spicy/hero_section.png';

const HeroSection = () => {
  return (
    <div 
      className="h-screen relative flex items-center justify-center text-center"
    >
      {/* Imagen de fondo con brillo reducido */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(75%) saturate(01.15)'
        }}
      />

      {/* Overlay rosado suave */}
      <div 
        className="absolute inset-0 mix-blend-multiply"
        style={{ 
          backgroundColor: 'rgba(165, 105, 125, 0.52)' // Vino rosado un poquito más colorido
        }}
      ></div>

      {/* Overlay adicional muy sutil */}
      <div 
        className="absolute inset-0 mix-blend-soft-light"
        style={{ 
          backgroundColor: 'rgba(212, 145, 165, 0.4)' // Rosado medio vivo un poco más presente
        }}
      ></div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-white font-serif italic px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
          " ESTRATEGIAS DE <br />
          MARKETING <br />
          QUE PICAN"
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;