import React, { useEffect, useRef } from 'react';
import introVideo from '../../assets/images/Content/IntroSectionVideo.mp4';

const IntroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.muted = true; // Asegurar que esté muted para autoplay
        await video.play();
      } catch (error) {
        console.error('Error playing intro video:', error);
        // Intentar de nuevo con muted si falla
        video.muted = true;
        video.play().catch(() => {
          console.error('Failed to play video even when muted');
        });
      }
    };

    const handleCanPlay = () => {
      tryPlay();
    };

    const handleError = (e) => {
      console.error('Intro video failed to load:', e);
    };

    // Event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Intentar reproducir inmediatamente si ya está listo
    if (video.readyState >= 3) { // HAVE_FUTURE_DATA
      tryPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="bg-[#F5F1E9] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-[#641126] leading-snug">
              SOMOS UNA <span className="font-extrabold">AGENCIA CREATIVA</span> QUE TRANSFORMA MARCAS CON ESTRATEGIA, DISEÑO Y ACTITUD.
            </h2>
          </div>

          {/* Right Column: Video */}
          <div className="w-full h-80 rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={introVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Button below columns */}
        <div className="text-center mt-20">
          <button className="bg-[#641126] text-white font-bold uppercase tracking-wider py-4 px-12 hover:bg-opacity-90 transition-colors duration-300">
            HABLEMOS
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;