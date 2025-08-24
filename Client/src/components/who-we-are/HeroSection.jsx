import React from 'react';
import heroImage from '../../assets/images/Content/ChiliPepperElegance.webp';

const HeroSection = () => {
  return (
    <div 
      className="h-screen relative flex items-center justify-center text-center"
    >
      {/* CSS inline para cargar la fuente */}
      <style>
        {`
          @font-face {
            font-family: 'AriataDisplay';
            src: url('/fonts/ariata_display_black-webfont.woff2') format('woff2'),
                 url('/fonts/ariata_display_black-webfont.woff') format('woff');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>

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
      <div className="relative z-10 text-white px-4">
        <h1 
          className="text-5xl md:text-7xl leading-tight drop-shadow-lg"
          style={{
            fontFamily: 'AriataDisplay, Impact, Arial Black, sans-serif',
            fontWeight: 900
          }}
        >
          " ESTRATEGIAS DE <br />
          MARKETING <br />
          QUE PICAN"
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;