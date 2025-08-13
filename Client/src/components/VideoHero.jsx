import { motion } from 'framer-motion'; // Importa motion
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import React, { useRef, useState } from 'react';

const VideoHero = ({
  videoUrl = "",
  imageUrl = "", 
  title = "OPHELIA",
  subtitle = "FRASE FRASE",
  ctaText = "EXPLORE"
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Define las variantes de animación
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black/20" />

      {/* Envuelve el contenedor del texto con motion.div y aplica la animación con whileInView */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }} // Opcional: anima solo la primera vez que se ve
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

      {videoUrl && (
        <div className="absolute bottom-8 left-8 flex gap-4">
          <button
            onClick={togglePlay}
            className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoHero;