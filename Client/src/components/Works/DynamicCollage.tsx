import React from 'react';

const DynamicCollage = () => {
  return (
    <section className="relative bg-white py-20 mb-20">
      <div className="w-full max-w-7xl mx-auto h-[85vh] grid grid-cols-3 gap-2 px-4">
        {/* Columna 1 */}
        <div className="col-span-1 grid grid-rows-[2fr_1fr] gap-2">
          {/* Fila 1 */}
          <div className="bg-gray-200 overflow-hidden rounded-lg shadow-sm">
            <img 
              src="https://images.pexels.com/photos/1769490/pexels-photo-1769490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Pareja" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
          {/* Fila 2 */}
          <div className="bg-gray-300 overflow-hidden rounded-lg shadow-sm">
            <img 
              src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Libro" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>

        {/* Columna 2 */}
        <div className="col-span-1">
          <div className="bg-gray-400 h-full overflow-hidden rounded-lg shadow-sm">
            <img 
              src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Mujer en el centro" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>

        {/* Columna 3 */}
        <div className="col-span-1 grid grid-rows-[2fr_1fr] gap-2">
          {/* Fila 1 */}
          <div className="bg-gray-500 overflow-hidden rounded-lg shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1622378546115-4e78a2d1d4d0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1260&h=750&fit=crop" 
              alt="Bolso verde" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
          {/* Fila 2 */}
          <div className="bg-gray-600 overflow-hidden rounded-lg shadow-sm">
            <img 
              src="https://images.pexels.com/photos/6601662/pexels-photo-6601662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Bolsos pequeños" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicCollage;