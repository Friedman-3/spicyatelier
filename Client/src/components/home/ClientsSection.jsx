import React from 'react';

// Import client logos
import CarolinaMarti from '../../assets/images/Content/CarolinaMarti1.png';
import CasaElena from '../../assets/images/Content/CasaElena.png';
import LG from '../../assets/images/Content/LG.png';
import MiBellaBarna from '../../assets/images/Content/MiBellabarna.png';
import SanYork from '../../assets/images/Content/SanYork.png';
import Wira from '../../assets/images/Content/Wira.png';

const logos = [
  { src: Wira, alt: 'Wira' },
  { src: SanYork, alt: 'SanYork' },
  { src: CarolinaMarti, alt: 'Carolina Marti' },
  { src: CasaElena, alt: 'Casa Elena' },
  { src: MiBellaBarna, alt: 'Mi Bella Barna' },
  { src: LG, alt: 'LG' },
];

// Duplicate logos for a seamless loop
const extendedLogos = [...logos, ...logos];

const ClientsSection = () => {
  return (
    <div className="bg-[#F5F1E9] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-serif font-bold text-[#641126]">
          NUESTROS CLIENTES
        </h2>
      </div>
      <div className="relative w-full">
        <div className="flex animate-scroll items-center">
          {extendedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-12 flex items-center justify-center" style={{ width: '200px' }}>
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`w-auto object-contain transition-transform duration-300 ${logo.alt === 'Casa Elena' || logo.alt === 'Carolina Marti' || logo.alt === 'Wira' ? 'h-28' : 'h-20'}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
