import React from 'react';

const Reels = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/src/assets/images/Content/ReelsBackground.webp)'
        }}
      ></div>

      {/* Overlay de color */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{ backgroundColor: '#641424' }}
      ></div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        {/* Iconos de play y elementos de video */}
        <div className="absolute top-20 left-20 w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center">
          <div className="w-0 h-0 border-l-4 border-l-white/40 border-y-2 border-y-transparent ml-1"></div>
        </div>
        <div className="absolute top-40 right-32 w-8 h-8 bg-red-400/30 rounded-full"></div>
        <div className="absolute bottom-40 left-16 w-6 h-6 bg-yellow-400/40 rounded rotate-45"></div>
        
        {/* Elementos tipo estrella/sparkle */}
        <div className="absolute top-32 right-20 text-yellow-400/30 text-2xl">✦</div>
        <div className="absolute bottom-32 right-40 text-orange-400/40 text-xl">✧</div>
        <div className="absolute top-1/2 left-10 text-red-400/30 text-lg">★</div>
        
        {/* Ondas de sonido */}
        <div className="absolute bottom-1/3 right-16 space-x-1 flex opacity-30">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="w-1 bg-gradient-to-t from-yellow-400 to-orange-400 rounded animate-pulse"
              style={{
                height: `${(i + 1) * 8 + 16}px`,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Chile decorativo */}
        <div className="absolute bottom-20 right-10 w-8 h-16 bg-gradient-to-b from-red-400 to-red-600 rounded-full opacity-30 transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Mockups de teléfonos con videos */}
          <div className="relative lg:order-1">
            <div className="flex justify-center space-x-8">
              {/* Teléfono 1 - TikTok Style */}
              <div className="relative group">
                <div className="w-52 h-96 bg-gradient-to-b from-gray-900 to-black rounded-3xl p-2 shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                    <img 
                      src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop"
                      alt="TikTok style video" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* TikTok UI Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20">
                      {/* Top bar */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                        <div className="text-white text-sm font-medium">Para ti</div>
                        <div className="text-white text-sm">Siguiendo</div>
                      </div>
                      
                      {/* Side actions */}
                      <div className="absolute right-4 bottom-20 space-y-6">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="text-white text-xl">♡</div>
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="text-white text-xl">💬</div>
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="text-white text-xl">↗</div>
                        </div>
                      </div>
                      
                      {/* Bottom info */}
                      <div className="absolute bottom-4 left-4 right-16">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-white rounded-full"></div>
                          <div className="text-white font-medium text-sm">@spicyatelier</div>
                        </div>
                        <div className="text-white text-sm opacity-90">
                          Contenido que conecta ✨ #SpicyContent
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Teléfono 2 - Instagram Reels Style */}
              <div className="relative group mt-8">
                <div className="w-52 h-96 bg-gradient-to-b from-gray-900 to-black rounded-3xl p-2 shadow-2xl transform -rotate-1 group-hover:rotate-1 transition-transform duration-300">
                  <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                    <img 
                      src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop"
                      alt="Instagram Reels style video" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Instagram Reels UI Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30">
                      {/* Top bar */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                        <div className="text-white font-bold text-lg">Reels</div>
                        <div className="text-white text-xl">📷</div>
                      </div>
                      
                      {/* Side actions */}
                      <div className="absolute right-4 bottom-24 space-y-6">
                        <div className="text-center">
                          <div className="w-10 h-10 border-2 border-white rounded-full mb-1"></div>
                          <div className="text-white text-xs">1.2k</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white text-2xl mb-1">💬</div>
                          <div className="text-white text-xs">89</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white text-2xl mb-1">📤</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white text-2xl">⋯</div>
                        </div>
                      </div>
                      
                      {/* Bottom info */}
                      <div className="absolute bottom-4 left-4 right-16">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full"></div>
                          <div className="text-white font-medium text-sm">spicyatelier</div>
                          <div className="px-2 py-1 border border-white rounded text-white text-xs">Seguir</div>
                        </div>
                        <div className="text-white text-sm opacity-90">
                          Creando momentos únicos 🌶️
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos alrededor */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-60 animate-bounce"
                  style={{animationDelay: `${i * 0.3}s`}}
                ></div>
              ))}
            </div>
            
            {/* Indicadores de reproducción */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <div className="flex items-center space-x-2 text-white/60">
                <div className="w-0 h-0 border-l-3 border-l-yellow-400 border-y-2 border-y-transparent"></div>
                <span className="text-sm">2.1M views</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Live</span>
              </div>
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="space-y-8 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                REELS &
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  TIK TOKS
                </span>
              </h2>
              
              <p className="text-white text-lg leading-relaxed max-w-lg mb-4">
                Creamos contenido dinámico, visualmente atractivo y optimizado 
                para plataformas de video corto.
              </p>
              
              <p className="text-yellow-400 font-semibold text-lg">
                Nuestro objetivo: generar piezas orgánicas que conecten con tu 
                audiencia de forma auténtica y espontánea.
              </p>
            </div>

            {/* Hashtag decorativo */}
            <div className="flex items-center space-x-3">
              <span className="text-yellow-400 font-bold text-xl italic transform -rotate-12">
                #spicyviral
              </span>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent opacity-60"></div>
            </div>

            {/* Descripción detallada */}
            <div className="space-y-6">
              <p className="text-white/90 text-base leading-relaxed">
                Ideal para marcas que quieren crecer en redes sin parecer forzadas. 
                Mostramos lo mejor de tu negocio con creatividad, storytelling y un 
                toque estético que no pasa desapercibido.
              </p>
              
              {/* Características del servicio */}
              <div className="space-y-4">
                <h3 className="text-white font-bold text-xl">
                  LO QUE INCLUYE:
                </h3>
                
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Conceptualización creativa y guiones',
                    'Grabación profesional con equipo especializado',
                    'Edición dinámica con efectos y transiciones',
                    'Música y sonidos trending',
                    'Optimización para algoritmos de cada plataforma',
                    'Hashtags estratégicos y copy persuasivo'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                      <span className="text-white/90 font-medium group-hover:text-yellow-400 transition-colors cursor-pointer">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Estadísticas de rendimiento */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { number: '500K+', label: 'Views promedio' },
                { number: '15%', label: 'Engagement rate' },
                { number: '72h', label: 'Entrega rápida' },
                { number: '∞', label: 'Creatividad ilimitada' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
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

export default Reels;