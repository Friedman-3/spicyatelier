import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import luziaTP from '../assets/images/Luzia/LuziaTP.webp';
import alaiaTP from '../assets/images/Alaia/AlaiaTP2.webp';
import mufasaTP from '../assets/images/Mufasa/MufasaTP.webp';
import { motion, useInView, useAnimation } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
};

const arrowVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: 'easeInOut' } },
};

const CampaignPanel = ({ title, media, altText, type = "image" }) => {
  const navigate = useNavigate();

  const slugify = (str) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  };

  const handleClick = () => {
    const slug = slugify(title);
    navigate(`/collection/${slug}`);
  };

  return (
    <div className="relative h-[120vh] bg-sky-50 overflow-hidden cursor-pointer group">
      {type === "image" ? (
        <img
          src={media}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <video
          src={media}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
        />
      )}

      {/* Texto centrado */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
        <motion.h2 variants={textVariants} className="text-3xl font-light mb-2">{title}</motion.h2>
        <motion.button
          onClick={handleClick}
          className="group flex items-center text-black hover:text-neutral-700 cursor-pointer"
        >
          <motion.span variants={textVariants} className="text-sm border-b border-black group-hover:border-neutral-700">
            EXPLORE
          </motion.span>
          <motion.div variants={arrowVariants} className="ml-2 w-4 h-4">
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
};

const CampaignPanelHorizontal = ({ title, media, altText }) => {
  const navigate = useNavigate();
  // ... (función slugify igual) ...
  const handleClick = () => {
    const slug = slugify(title);
    navigate(`/collection/${slug}`);
  };

  return (
    <div className="relative h-[90vh] w-full bg-sky-50 overflow-hidden cursor-pointer group">
      <img
        src={media}
        alt={altText}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Texto centrado */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
        <motion.h2 variants={textVariants} className="text-3xl font-light mb-4">{title}</motion.h2>
        <motion.button
          onClick={handleClick}
          className="group flex items-center text-black hover:text-neutral-700 cursor-pointer"
        >
          <motion.span variants={textVariants} className="text-sm border-b border-black group-hover:border-neutral-700">
            EXPLORE
          </motion.span>
          <motion.div variants={arrowVariants} className="ml-2 w-4 h-4">
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
};

const SplitCampaign = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [isInView, animation]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={animation}
      className="flex flex-col gap-1 p-2"
    >
      {/* Parte superior: Dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <CampaignPanel
          title="LUZIA"
          media={luziaTP}
          altText="Foto de campaña de Luzia"
          type="image"
        />
        <CampaignPanel
          title="ALAIA"
          media={alaiaTP}
          altText="Foto de campaña de Alaia"
          type="image"
        />
      </div>

      {/* Parte inferior: Imagen horizontal */}
      <CampaignPanelHorizontal
        title="MUFASA"
        media={mufasaTP}
        altText="Foto de campaña de Mufasa"
      />
    </motion.div>
  );
};

export default SplitCampaign;