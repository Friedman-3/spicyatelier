import React from 'react';
import aboutUsImage from '../../assets/images/Content/CreativeCollaborationHub.webp';

const AboutSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column: Story */}
        <div className="font-serif">
          <h2 className="w-full text-[#641126] px-4 py-2 text-7xl">¿QUIENES</h2>
          <h2 className="w-full text-[#641126] px-4 py-2 mb-4 text-7xl">SOMOS?</h2>
          <p className="text-[#641126] mb-4 text-2xl">
            Hola, somos Aly y Fernanda - dos creativas que unieron caminos en Barcelona mientras estudiábamos un Máster en marketing de Moda. Aly es boliviana, Fernanda es peruana, y desde que nos conocimos descubrimos que juntas hacemos el match perfecto entre estrategia, creatividad y una estética que realmente conecta.
          </p>
          <p className="text-[#641126] mb-4 text-2xl">
            Nos encanta el branding bonito, las ideas que tienen fondo (no solo forma) y ayudar a negocios reales a crecer en el mundo digital con contenido que vibra, inspira y vende.
          </p>
          <p className="text-[#641126] text-2xl">
            Así nació Spicy Atelier: nuestro espacio creativo donde mezclamos lo que mejor sabemos hacer con lo que más nos apasiona. Apostamos por la cercanía, el diseño con intención y ese toque spicy que hace la diferencia.
          </p>
        </div>

        {/* Right Column: Only Image */}
        <div>
          <div className="bg-gray-200 w-full h-130 mb-8 flex items-center justify-center">
            <img src={aboutUsImage} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
