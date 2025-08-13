import { motion } from 'framer-motion';
import React from 'react';

const WorkCard = ({ imageUrl, title }) => {
  return (
    <motion.div 
      className="relative overflow-hidden group cursor-pointer"
      layout
    >
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
        <div className="absolute bottom-0 left-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
