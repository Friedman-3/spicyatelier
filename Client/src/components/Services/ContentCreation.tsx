import React from 'react';

const ContentCreation = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-6 h-6 bg-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-orange-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-red-400 rounded-full opacity-50"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute top-1/3 right-10 w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-40 rotate-45"></div>
        <div className="absolute bottom-1/3 left-10 w-20 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 opacity-30 -rotate-12"></div>
        
        {/* Chile decorativo */}
        <div className="absolute bottom-20 right-10 w-8 h-16 bg-gradient-to-b from-red-400 to-red-600 rounded-full opacity-30 transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Contenido de texto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                CONTENT 
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  CREATION
                </span>
                <span className="text-yellow-400 text-5xl">:</span>
              </h2>
              
              <p className="text-white text-lg leading-relaxed max-w-lg">
                Creamos contenido visual y narrativo con 
                estética editorial y propósito estratégico.
              </p>
            </div>

            {/* Hashtag decorativo */}
            <div className="flex items-center space-x-3">
              <span className="text-yellow-400 font-bold text-xl italic transform -rotate-12">
                #spicyvisual
              </span>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent opacity-60"></div>
            </div>

            {/* Descripción adicional */}
            <div className="space-y-4">
              <p className="text-white/90 text-base leading-relaxed">
                Nuestro enfoque combina creatividad visual con estrategia de marca, 
                creando contenido que no solo se ve increíble, sino que también 
                conecta con tu audiencia y cumple objetivos específicos.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {['Fotografía', 'Diseño Gráfico', 'Storytelling', 'Branding Visual'].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Galería de imágenes */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 h-96">
              {/* Imagen 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-lg transform rotate-2 group-hover:rotate-1 transition-transform"></div>
                <img 
                  src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
                  alt="Fashion content creation" 
                  className="relative z-10 w-full h-full object-cover rounded-lg shadow-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
              
              {/* Imagen 2 */}
              <div className="relative group mt-8">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-lg transform -rotate-1 group-hover:rotate-1 transition-transform"></div>
                <img 
                  src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
                  alt="Lifestyle content" 
                  className="relative z-10 w-full h-full object-cover rounded-lg shadow-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
              
              {/* Imagen 3 */}
              <div className="relative group mt-4">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-lg transform rotate-1 group-hover:-rotate-1 transition-transform"></div>
                <img 
                  src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
                  alt="Brand content" 
                  className="relative z-10 w-full h-full object-cover rounded-lg shadow-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Elementos decorativos alrededor de las imágenes */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-yellow-400 opacity-40 rotate-45"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-400 opacity-30 rounded-full"></div>
            <div className="absolute top-1/2 -right-8 flex flex-col space-y-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1 bg-gradient-to-b from-yellow-400 to-orange-400 rounded opacity-60"
                  style={{height: `${(i + 1) * 8}px`}}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreation;