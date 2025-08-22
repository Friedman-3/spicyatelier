import React from 'react';

const Servicess = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/src/assets/images/Content/ServiceBackground.webp)'
        }}
      ></div>
      
      {/* Overlay de color */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{ backgroundColor: '#641424' }}
      ></div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 z-10">
        {/* Círculos decorativos */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-yellow-300 rounded-full opacity-80"></div>
        <div className="absolute top-60 left-20 w-3 h-3 bg-orange-400 rounded-full opacity-70"></div>
        <div className="absolute top-80 left-40 w-2 h-2 bg-red-400 rounded-full opacity-60"></div>
        
        {/* Elementos gráficos superiores */}
        <div className="absolute top-10 right-20 grid grid-cols-3 gap-2 opacity-40">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
          ))}
        </div>
        
        {/* Formas geométricas */}
        <div className="absolute top-32 right-32 w-8 h-8 border-2 border-yellow-400 opacity-30 rotate-45"></div>
        <div className="absolute bottom-40 right-10 w-6 h-6 bg-orange-400 opacity-20 rotate-12"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute bottom-20 left-10 w-20 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-50 rotate-12"></div>
        <div className="absolute top-96 right-40 w-16 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 opacity-40 -rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Contenido principal */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight helvetica-regular">
                SERVICIOS
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  QUE OFRECEMOS
                </span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-white text-lg leading-relaxed max-w-md">
                En <span className="font-semibold text-yellow-400">Spicy Atelier</span>, transformamos 
                ideas en experiencias. 
                <br /><br />
                Desde la esencia de tu marca 
                hasta la creación de contenido 
                que cautiva, diseñamos 
                estrategias de marketing digital 
                hechas a la medida de tus 
                objetivos.
              </p>
            </div>
          </div>

          {/* Imagen y elementos decorativos del lado derecho */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Imagen principal con overlay */}
              <div className="relative z-10 bg-gradient-to-br from-orange-400 via-red-500 to-red-600 rounded-2xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-300">
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                    alt="Spicy pepper illustration" 
                    className="w-full h-64 object-cover"
                  />
                  {/* Overlay con color #641424 - más visible */}
                  <div 
                    className="absolute inset-0 opacity-75"
                    style={{ backgroundColor: '#641424' }}
                  ></div>
                </div>
              </div>
              
              {/* Elementos decorativos alrededor */}
              <div className="absolute -top-6 -right-6 grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 bg-yellow-400 rounded-full opacity-70 animate-pulse"
                    style={{animationDelay: `${i * 0.1}s`}}
                  ></div>
                ))}
              </div>
              
              {/* Iconos decorativos */}
              <div className="absolute -bottom-4 -left-4 space-y-2">
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-yellow-400 rounded opacity-80"></div>
                  <div className="w-4 h-4 bg-orange-400 rounded-full opacity-70"></div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded opacity-60"></div>
                  <div className="w-5 h-5 border-2 border-yellow-400 opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elemento decorativo inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
  );
};

export default Servicess;