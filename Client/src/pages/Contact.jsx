import React, { useState } from 'react';
import HeroContact from '../assets/images/Content/HeroContact.jpg';
import FraseContact from '../assets/images/Content/FraseFormularioContact.jpg';
import RedesContact from '../assets/images/Content/FraseRedesContact.jpg';

const ContactPage = () => {
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', comentarios: '' });
  const brandColor = '#641126';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrar envío real (API/Email). Por ahora solo mostramos en consola.
    console.log('Contacto enviado:', form);
    alert('¡Gracias! Hemos recibido tu mensaje.');
    setForm({ nombre: '', email: '', empresa: '', comentarios: '' });
  };

  // Galería social: 4 tarjetas con enlaces en orden: Instagram, LinkedIn, TikTok, Email
  // Nota: Usamos temporalmente la misma imagen como placeholder. Reemplazar src por tus 4 imágenes definitivas.
  const socialCards = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/spicy__atelier/',
      src: HeroContact,
      alt: 'Instagram Spicy Atelier',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com',
      src: HeroContact,
      alt: 'LinkedIn Spicy Atelier',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@spicy_atelier?_t=ZM-90CNZaoLC7U&_r=1',
      src: HeroContact,
      alt: 'TikTok Spicy Atelier',
    },
    {
      label: 'Email',
      href: 'mailto:ATELIERSPICY@GMAIL.COM',
      src: HeroContact,
      alt: 'Email Spicy Atelier',
    },
  ];

  return (
    <main className="w-full">
      {/* 1) Hero de Contact */}
      <section className="w-full h-screen">
        <div className="relative w-full h-full">
          <img
            src={HeroContact}
            alt="Hero Contact"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 15%' }}
          />
          {/* Overlay opcional para texto futuro */}
          {/* <div className="absolute inset-0 bg-black/20" /> */}
        </div>
      </section>

      {/* 2) Formulario */}
      <section className="w-full bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Lado Izquierdo: Mensaje */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif" style={{ color: brandColor }}>
                YA HABLAMOS MUCHO DE NOSOTROS,
                <br /> AHORA QUEREMOS CONOCER TU PROYECTO
                <br /> <span className="italic font-semibold">(Y PONERLE PICANTE).</span>
              </h2>
              <div className="text-sm" style={{ color: brandColor }}>
                <p className="mb-1">Consultas generales:</p>
                <p>atelierspicy@gmail.com</p>
              </div>
              <img 
                src={FraseContact} 
                alt="Vamos a darle sabor" 
                className="w-auto h-16 md:h-32 object-contain"
              />
            </div>

            {/* Lado Derecho: Form */}
            <form onSubmit={handleSubmit} className="space-y-6" style={{ color: brandColor }}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                    Nombre:
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-[#B68DA0] focus:border-[#641126] focus:ring-0 rounded-none bg-transparent py-2"
                    placeholder=""
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email:
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-[#B68DA0] focus:border-[#641126] focus:ring-0 rounded-none bg-transparent py-2"
                    placeholder=""
                    required
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                    Empresa:
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    value={form.empresa}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-[#B68DA0] focus:border-[#641126] focus:ring-0 rounded-none bg-transparent py-2"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="comentarios" className="block text-sm font-medium mb-2">
                    Comentarios:
                  </label>
                  <textarea
                    id="comentarios"
                    name="comentarios"
                    rows={4}
                    value={form.comentarios}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-[#B68DA0] focus:border-[#641126] focus:ring-0 rounded-none bg-transparent py-2 resize-none"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="flex md:justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#641126] text-white tracking-wide hover:opacity-90 transition rounded"
                >
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 3) Redes Sociales con 4 imágenes clicables */}
      <section className="w-full bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-3xl md:text-4xl font-serif mb-8" style={{ color: brandColor }}>
            NUESTRAS REDES
          </h3>
          
          {/* Grid de 4 imágenes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {socialCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block overflow-hidden rounded shadow-sm hover:shadow-md transition"
                aria-label={card.label}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-48 object-cover transform group-hover:scale-[1.02] transition"
                />
              </a>
            ))}
          </div>

          {/* Sección inferior: Enlaces de texto a la izquierda, imagen a la derecha */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Columna izquierda: Enlaces de redes sociales */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-lg font-medium" style={{ color: brandColor }}>
                <a 
                  href={socialCards[0].href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  INSTAGRAM
                </a>
                <a 
                  href={socialCards[2].href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  TIK TOK
                </a>
                <a 
                  href={socialCards[1].href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  LINKEDIN
                </a>
                <a 
                  href={socialCards[3].href}
                  className="hover:opacity-70 transition"
                >
                  EMAIL
                </a>
              </div>
            </div>

            {/* Columna derecha: Imagen FraseRedesContact */}
            <div className="flex justify-end">
              <img 
                src={RedesContact} 
                alt="Follow us - Spicy Atelier" 
                className="w-full max-w-[200px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
