import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesCTA = () => {
  const navigate = useNavigate();
  const brandColor = '#641126';

  const services = [
    {
      title: "Diseño e implementación de Webs",
      description: "Transformamos ideas en webs que impactan: diseño elegante, navegación intuitiva y presencia online que no pasa desapercibida."
    },
    {
      title: "Estrategia & Planificación de contenido",
      description: "Creamos estrategias de contenido sólidas y planificadas que alinean tus objetivos de marca con las necesidades de tu audiencia, asegurando consistencia y resultados."
    },
    {
      title: "Contenido UGC",
      description: "Impulsamos la autenticidad de tu marca aprovechando contenido generado por tus propios clientes, creando confianza y conexión real con tu audiencia."
    },
    {
      title: "Meta Ads (Facebook & Instagram)",
      description: "No se trata solo de pautar, se trata de impactar. Creamos campañas en Meta Ads que optimizan tu inversión, llegan al público correcto y generan resultados reales. More reach, more clicks, more sales."
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full py-16 md:py-20 bg-[#FAF7F0]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Lista de servicios */}
        <div className="space-y-8 md:space-y-10 mb-16">
          {services.map((service, index) => (
            <div key={index} className="space-y-2">
              <h3 
                className="text-base md:text-lg font-bold"
                style={{ color: brandColor }}
              >
                {service.title}
              </h3>
              <p 
                className="text-sm md:text-base leading-relaxed"
                style={{ color: brandColor }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Botón centrado */}
        <div className="flex justify-center">
          <button
            onClick={handleContactClick}
            className="px-12 py-4 font-bold text-base md:text-lg uppercase tracking-wider transition-all duration-300 cursor-pointer relative overflow-hidden group"
            style={{
              backgroundColor: brandColor,
              color: 'white'
            }}
          >
            <span className="relative z-10">READY TO SPICE IT UP?</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;