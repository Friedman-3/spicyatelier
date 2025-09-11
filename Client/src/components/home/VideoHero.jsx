import { motion } from 'framer-motion';
import React from 'react';

const getYoutubeEmbedUrl = (url) => {
  const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^"&?\/\s]{11})/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;

  if (videoId) {
    // Parámetros para un video de fondo sin interfaz:
    // autoplay=1: reproducción automática
    // mute=1: silenciado por defecto (necesario para autoplay en muchos navegadores)
    // loop=1: reproduce en bucle
    // playlist=${videoId}: esencial para que loop=1 funcione con un solo video
    // controls=0: oculta los controles del reproductor
    // modestbranding=1: oculta el logo de YouTube
    // rel=0: no muestra videos relacionados al final
    // iv_load_policy=3: oculta las anotaciones
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&iv_load_policy=3`;
  }
  return null;
};

const VideoHero = ({
  videoUrl = "https://www.youtube.com/watch?v=kltg9w3TiLc",
  imageUrl = "", 
  title = "OPHELIA",
  subtitle = "FRASE FRASE",
  ctaText = "EXPLORE"
}) => {
  const embedUrl = getYoutubeEmbedUrl(videoUrl);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src={embedUrl}
          frameBorder="0"
          // Usamos 'allow' para autoplay y otras características necesarias para un reproductor sin interfaz
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video de YouTube"
          // Aplicamos estilos para asegurar que el iframe no tenga bordes ni rellenos extra
          style={{ border: 0 }}
        />
      )}

      <div className="absolute inset-0 bg-black/20" />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        variants={textVariants}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 tracking-wider">
          {title}
        </h1>
        <p className="text-lg sm:text-xl mb-8 tracking-wide">
          {subtitle}
        </p>
        <button className="bg-white text-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
          {ctaText}
        </button>
      </motion.div>
    </div>
  );
};

export default VideoHero;