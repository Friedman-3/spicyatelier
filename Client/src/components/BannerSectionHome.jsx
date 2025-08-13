import React from 'react';
import { motion } from 'framer-motion';

const BannerSectionHome = ({ title, subtitle, backgroundColor, textColor, padding }) => {
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      variants={textVariants}
      className={`w-full ${backgroundColor} ${padding}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h2
            variants={textVariants}
            className={`text-5xl font-light italic mb-4 ${textColor}`}
            style={{ fontFamily: 'Switzer, sans-serif' }}
          >
            {title}
          </motion.h2>
          <motion.p
            variants={textVariants}
            transition={{ delay: 0.4 }}
            className={`text-sm tracking-wider uppercase ${textColor}`}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default BannerSectionHome;