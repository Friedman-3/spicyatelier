import React from 'react';
import VideoHero from '../components/VideoHero';

const WhoWeAre = () => {
  return (
    <div>
      <VideoHero 
        imageUrl="https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Meet Our Talented Team"
      />

      <div className="text-center p-16 md:p-24">
        <p className="text-xl md:text-2xl mb-6">Hola, somos Aly y Fernanda.
Dos mentes creativas que cruzaron caminos en Barcelona mientras cursábamos un Máster en Marketing de Moda. Aly,
 desde Bolivia; Fernanda, desde Perú. Veníamos de orillas distintas, pero al encontrarnos descubrimos que éramos
 el match perfecto: estrategia afilada, creatividad sin límites y una estética que no solo se ve bien, sino que conecta.</p>
        <p className="text-xl md:text-2xl mb-6">Creemos en el branding que enamora, en las ideas con fondo y forma, y en 
        acompañar a marcas reales a crecer en el universo digital con contenido que vibra, inspira y vende.</p>
        <p className="text-xl md:text-2xl">Así nació Spicy Atelier: nuestro espacio creativo, donde lo que mejor sabemos hacer se encuentra con lo que más nos apasiona. Aquí, cada proyecto se construye con cercanía, diseño con intención y ese toque spicy que convierte lo bueno… en inolvidable.</p>
      </div>

      <div className="bg-gray-50 p-8 md:p-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Founder 1 */}
          <div className="text-center md:text-left">
            <img src="https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Founder 1" className="w-full h-auto object-cover mb-6"/>
            <h2 className="text-3xl font-semibold mb-2">Founder One Name</h2>
            <h3 className="text-xl text-gray-600 mb-4">Co-Founder & Creative Director</h3>
            <p className="text-gray-700">
              Hey, nice to meet you! What originally started as a passion project quickly evolved into something bigger than I could've expected. With over 10 years of experience in the industry, I have helped brands to their full potential. Your goals + my expertise—let's make it happen!
            </p>
          </div>

          {/* Founder 2 */}
          <div className="text-center md:text-left">
            <img src="https://images.pexels.com/photos/3772506/pexels-photo-3772506.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Founder 2" className="w-full h-auto object-cover mb-6"/>
            <h2 className="text-3xl font-semibold mb-2">Founder Two Name</h2>
            <h3 className="text-xl text-gray-600 mb-4">Co-Founder & Strategic Lead</h3>
            <p className="text-gray-700">
              It's great to have you here! My journey has been driven by a love for strategy and seeing brands grow. Since we started, I've had the chance to work with amazing people and build a talented team. My focus is on turning your vision into a reality with clear, effective strategies.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default WhoWeAre;
