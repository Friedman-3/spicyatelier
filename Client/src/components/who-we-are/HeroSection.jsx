import React from 'react';

const HeroSection = () => {
  return (
    <div 
      className="h-screen bg-red-900 bg-opacity-80 flex items-center justify-center relative text-center p-4"
      // Add your background image here
      // style={{ backgroundImage: 'url(YOUR_IMAGE_PATH)' }}
    >
      <div className="text-white font-serif italic">
        <h1 className="text-5xl md:text-7xl leading-tight">
          “ ESTRATEGIAS DE <br />
          MARKETING <br />
          QUE PICAN”
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;