import React from 'react';
import ServicesAccordion from '../components/ServicesAccordion';
import VideoHero from '../components/VideoHero';

const Services = () => {
  return (
    <div>
      <VideoHero 
        imageUrl="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Vea lo que podemos hacer por usted."
      />
      <div className="text-center p-24">
        <h2 className="text-2xl mb-4">Nuestros servicios no se tratan solo de marcar casillas; se trata de crear narraciones visuales en múltiples canales.</h2>
        <p>Anso Atiler se especializa en la creación de contenido hermoso y atractivo en todas las plataformas de redes sociales (Instagram, Tiktok, etc.), marketing por correo electrónico, marketing de influencia y campañas de dirección de arte que resuenan con la Generación Z y las audiencias millennials.</p>
      </div>
      <ServicesAccordion />
    </div>
  );
};

export default Services;
