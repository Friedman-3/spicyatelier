import { Plus, X } from 'lucide-react';
import React, { useState } from 'react';

const servicesData = [
  {
    title: "Redes sociales",
    description: "Libere todo el potencial de su marca en las redes sociales con nuestros servicios integrales de gestión digital. Nuestro equipo está al tanto de las últimas tendencias y aprovecha el poder del contenido seleccionado y la planificación estratégica para optimizar su impacto en línea. Nos convertimos en expertos en su marca y creamos una estrategia social personalizada diseñada para la interacción con la comunidad.",
    points: [
      "Gestión de Instagram y TikTok",
      "Investigación de tendencias y competencia",
      "Desarrollar e implementar una estrategia de redes sociales",
      "Desarrollar un tono de voz en las redes sociales",
      "Calendario mensual de redes sociales",
      "Creación de feeds seleccionados",
      "Creación y curación de todo el contenido de las redes sociales.",
      "Redacción de textos publicitarios",
      "Publicación diaria",
      "Participación diaria de la comunidad",
      "Analizar el rendimiento de todas las métricas clave",
    ]
  },
  { title: "Creación de contenido", description: "Contenido para Creación de contenido.", points: ["Point 1", "Point 2"] },
  { title: "Marketing por correo electrónico", description: "Contenido para Marketing por correo electrónico.", points: ["Point 1", "Point 2"] },
  { title: "Diseño gráfico y marca", description: "Contenido para Diseño gráfico y marca.", points: ["Point 1", "Point 2"] },
  { title: "Dirección de arte y producción", description: "Contenido para Dirección de arte y producción.", points: ["Point 1", "Point 2"] },
  { title: "Gestión de Influencers", description: "Contenido para Gestión de Influencers.", points: ["Point 1", "Point 2"] },
  { title: "Gestión de TikTok", description: "Contenido para Gestión de TikTok.", points: ["Point 1", "Point 2"] },
];

const ServicesAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {servicesData.map((service, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <button onClick={() => toggleService(index)} className="w-full flex justify-between items-center text-left">
            <h3 className="text-xl font-medium">{service.title}</h3>
            <span>{openIndex === index ? <X size={24} /> : <Plus size={24} />}</span>
          </button>
          {openIndex === index && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-gray-700">{service.description}</p>
              <ul className="list-disc pl-5 space-y-2">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
        <div className="text-center mt-8">
            <button className="bg-black text-white px-8 py-3">CONTÁCTENOS</button>
        </div>
    </div>
  );
};

export default ServicesAccordion;
