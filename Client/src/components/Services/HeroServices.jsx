import React from 'react';
import HeroServicesImg from '../../assets/images/Content/HeroServices.jpg';

const HeroServices = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="relative w-full h-full">
        <img
          src={HeroServicesImg}
          alt="Hero Services"
          className="w-full h-full object-cover"
        />
        {/* Overlay opcional para texto futuro */}
        {/* <div className="absolute inset-0 bg-black/20" /> */}

        {/* Frase superpuesta */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider leading-tight drop-shadow-2xl">
              MARKETING SERVICES
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroServices;