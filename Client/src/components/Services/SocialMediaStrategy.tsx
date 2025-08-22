import React from 'react';

const SocialMediaStrategy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/src/assets/images/Content/MediaBackground.webp)'
        }}
      ></div>

      {/* Overlay de color */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{ backgroundColor: '#641424' }}
      ></div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        {/* Iconos de redes sociales estilizados */}
        <div className="absolute top-20 left-20 w-12 h-12 border-2 border-white/20 rounded-lg opacity-30"></div>
        <div className="absolute top-40 left-32 w-8 h-8 bg-white/10 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-16 w-6 h-6 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded opacity-50"></div>
        
        {/* Elementos gráficos tipo interfaz */}
        <div className="absolute top-32 right-20 space-y-2 opacity-20">
          <div className="w-16 h-2 bg-white/30 rounded"></div>
          <div className="w-12 h-2 bg-white/20 rounded"></div>
          <div className="w-20 h-2 bg-white/25 rounded"></div>
        </div>
        
        {/* Iconos decorativos */}
        <div className="absolute bottom-32 right-32 grid grid-cols-2 gap-2 opacity-30">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
        </div>
        
        {/* Chile decorativo */}
        <div className="absolute bottom-20 right-10 w-8 h-16 bg-gradient-to-b from-red-400 to-red-600 rounded-full opacity-30 transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Mockups de teléfonos */}
          <div className="relative lg:order-1">
            <div className="flex justify-center space-x-6">
              {/* Teléfono 1 */}
              <div className="relative group">
                <div className="w-48 h-96 bg-gradient-to-b from-gray-800 to-black rounded-3xl p-2 shadow-2xl transform rotate-3 group-hover:rotate-1 transition-transform duration-300">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                    <img 
                      src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                      alt="Social media content 1" 
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay de interfaz de Instagram */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                        <div className="flex-1 h-2 bg-white/80 rounded"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                          <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                          <div className="w-6 h-6 border-2 border-white rounded"></div>
                          <div className="w-6 h-6 border-2 border-white rounded"></div>
                        </div>
                        <div className="w-6 h-6 border-2 border-white rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Teléfono 2 */}
              <div className="relative group mt-8">
                <div className="w-48 h-96 bg-gradient-to-b from-gray-800 to-black rounded-3xl p-2 shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                    <img 
                      src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                      alt="Social media content 2" 
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay de interfaz de TikTok */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos alrededor */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"
                  style={{animationDelay: `${i * 0.2}s`}}
                ></div>
              ))}
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="space-y-8 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                SOCIAL MEDIA
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  STRATEGY
                </span>
              </h2>
              
              <p className="text-white text-lg leading-relaxed max-w-lg">
                Diseñamos estrategias de redes sociales personalizadas, 
                enfocadas en crecimiento orgánico, posicionamiento y engagement.
              </p>
            </div>

            {/* Hashtag decorativo */}
            <div className="flex items-center space-x-3">
              <span className="text-yellow-400 font-bold text-xl italic transform -rotate-12">
                #spicytrends
              </span>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent opacity-60"></div>
            </div>

            {/* Lista de beneficios */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-xl">
                NUESTRO ENFOQUE INCLUYE:
              </h3>
              
              <div className="space-y-4">
                {[
                  'Análisis de audiencia y competencia',
                  'Calendario de contenido estratégico',
                  'Optimización de perfiles y bio',
                  'Hashtags research y trending topics',
                  'Métricas y reportes de crecimiento'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-white/90 font-medium group-hover:text-yellow-400 transition-colors cursor-pointer">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { number: '300%', label: 'Crecimiento promedio' },
                { number: '85%', label: 'Engagement rate' },
                { number: '24/7', label: 'Monitoreo activo' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaStrategy;