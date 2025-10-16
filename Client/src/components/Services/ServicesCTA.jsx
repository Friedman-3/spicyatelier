import React from 'react';
import MarcaAguaSpicy from '../../assets/images/Content/MarcaAguaSpicy.png';
import FraseServices from '../../assets/images/Content/FraseServices.png';

const ServicesDescription = () => {
  const brandColor = '#641126';

  const services = [
    {
      title: "Branding & identidad de marca",
      description: "Creamos gráficos y identidades de marca llamativos y sofisticados que te aseguran destacar en un mar de opciones"
    },
    {
      title: "Creación y edición de contenido",
      description: "Transformamos ideas en contenido visual y digital impactante, desde la creación hasta la edición, para que tu marca cuente historias que conecten."
    },
    {
      title: "Gestión de Redes Sociales",
      description: "Nos encargamos de planificar, crear y publicar contenido estratégico que mantiene tu marca activa y relevante en todas tus redes sociales."
    },
    {
      title: "Email Marketing",
      description: "Entre tanta bandeja saturada de spam y promociones, tus emails merecen brillar. Creamos mensajes que tus clientes esperan abrir y disfrutar"
    },
    {
      title: "Gestión y organización de eventos",
      description: "Planificamos y coordinamos cada detalle de tus eventos para que todo fluya a la perfección y deje una impresión inolvidable"
    }
  ];

  return (
    <section 
      className="w-full py-16 md:py-20 bg-[#FAF7F0] relative overflow-hidden"
      style={{
        backgroundImage: `url(${MarcaAguaSpicy})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '70%',
        backgroundBlendMode: 'multiply',
        opacity: 0.95
      }}
    >
      {/* Contenido */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Imagen de la frase */}
        <div className="mb-12 md:mb-16">
          <img
            src={FraseServices}
            alt="Let's turn your brand into a story worth sharing"
            className="w-full max-w-4xl mx-auto"
          />
        </div>

        {/* Lista de servicios */}
        <div className="space-y-8 md:space-y-10">
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
      </div>
    </section>
  );
};

export default ServicesDescription;