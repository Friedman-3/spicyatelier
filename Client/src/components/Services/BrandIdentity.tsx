import React from 'react';

const BrandIdentity = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        {/* Letras del alfabeto decorativas */}
        <div className="absolute top-20 right-20 text-6xl font-bold text-white/5 select-none">A</div>
        <div className="absolute top-40 right-40 text-4xl font-bold text-white/5 select-none">B</div>
        <div className="absolute bottom-40 right-16 text-5xl font-bold text-white/5 select-none">Z</div>
        <div className="absolute bottom-60 left-20 text-3xl font-bold text-white/5 select-none">X</div>
        
        {/* Elementos de diseño */}
        <div className="absolute top-32 left-32 w-16 h-16 border-2 border-yellow-400/20 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded"></div>
        
        {/* Paleta de colores decorativa */}
        <div className="absolute top-1/2 left-10 space-y-2 opacity-30">
          <div className="w-4 h-4 bg-red-400 rounded-full"></div>
          <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
        </div>
        
        {/* Chile decorativo */}
        <div className="absolute bottom-20 right-10 w-8 h-16 bg-gradient-to-b from-red-400 to-red-600 rounded-full opacity-30 transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Contenido de texto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                BRAND
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  IDENTITY
                </span>
              </h2>
              
              <p className="text-white text-lg leading-relaxed max-w-lg">
                Construimos y refinamos la identidad de tu marca desde cero o 
                con base en lo que ya tienes. Logotipo, paleta de colores, 
                tipografía, estilo visual y tono de comunicación: todo lo 
                necesario para lograr una marca coherente, sólida y diferenciada.
              </p>
            </div>

            {/* Hashtag decorativo */}
            <div className="flex items-center space-x-3">
              <span className="text-yellow-400 font-bold text-xl italic transform -rotate-12">
                #spicybrand
              </span>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent opacity-60"></div>
            </div>

            {/* Servicios de branding */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-xl">
                ELEMENTOS QUE DESARROLLAMOS:
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Logotipo & Isotipo',
                  'Paleta de colores',
                  'Tipografía corporativa',
                  'Manual de marca',
                  'Aplicaciones visuales',
                  'Tono de comunicación'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-white/90 font-medium text-sm group-hover:text-yellow-400 transition-colors cursor-pointer">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proceso de trabajo */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">NUESTRO PROCESO:</h4>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Research & Análisis', desc: 'Estudiamos tu mercado y competencia' },
                  { step: '02', title: 'Conceptualización', desc: 'Desarrollamos la esencia de tu marca' },
                  { step: '03', title: 'Diseño & Refinamiento', desc: 'Creamos y perfeccionamos cada elemento' }
                ].map((process, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-black font-bold text-sm group-hover:scale-110 transition-transform">
                      {process.step}
                    </div>
                    <div>
                      <h5 className="text-white font-medium">{process.title}</h5>
                      <p className="text-white/70 text-sm">{process.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Galería de elementos de marca */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Imagen principal grande */}
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-lg transform rotate-1 group-hover:rotate-0 transition-transform"></div>
                <img 
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                  alt="Brand identity design" 
                  className="relative z-10 w-full h-48 object-cover rounded-lg shadow-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
              
              {/* Imágenes pequeñas */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-lg transform -rotate-2 group-hover:rotate-0 transition-transform"></div>
                <img 
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Logo design" 
                  className="relative z-10 w-full h-32 object-cover rounded-lg shadow-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-lg transform rotate-1 group-hover:-rotate-1 transition-transform"></div>
                <img 
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Brand applications" 
                  className="relative z-10 w-full h-32 object-cover rounded-lg shadow-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-60"></div>
              ))}
            </div>
            
            {/* Alfabeto decorativo */}
            <div className="absolute -bottom-8 -left-8 text-white/20 font-bold text-sm tracking-wider">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </div>
            
            {/* Paleta de colores */}
            <div className="absolute top-1/2 -right-12 flex flex-col space-y-2">
              {['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-pink-400', 'bg-purple-400'].map((color, i) => (
                <div key={i} className={`w-6 h-6 ${color} rounded opacity-70 hover:opacity-100 transition-opacity cursor-pointer`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;