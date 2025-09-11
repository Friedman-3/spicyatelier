import React from 'react';
import servicesBackground from '../../assets/images/Content/ServicesSection.png';

const ServicesSection = () => {
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
    },
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
    }
  ];

  return (
    <div 
      className="py-20 px-6 relative bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${servicesBackground})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '100vh',
      }}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-5xl font-bold text-[#641126] leading-tight">
            NUESTROS<br />
            SERVICIOS
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {/* Primera fila - 3 servicios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-base font-bold text-[#641126] leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#641126] text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Segunda fila - 3 servicios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(3, 6).map((service, index) => (
              <div key={index + 3} className="space-y-3">
                <h3 className="text-base font-bold text-[#641126] leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#641126] text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tercera fila - 2 servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {services.slice(6, 8).map((service, index) => (
              <div key={index + 6} className="space-y-3">
                <h3 className="text-base font-bold text-[#641126] leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#641126] text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Botón Saber más */}
        <div className="flex justify-end mt-8">
          <button className="bg-[#641126] text-white px-8 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#4a0c1c] transition-colors duration-300 shadow-lg">
            SABER MÁS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;