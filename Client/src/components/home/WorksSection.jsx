import { motion } from 'framer-motion';
import React from 'react';

// Placeholder images from existing assets, similar to DynamicCollage
import img7 from '../../assets/images/Content/Collage1_0.webp'; // Right side 4
import img1 from '../../assets/images/Content/Collage1_3.webp'; // Large top-left
import img3 from '../../assets/images/Content/Collage2_1.webp'; // Bottom-left 2
import img4 from '../../assets/images/Content/Collage3_1.webp'; // Right side 1
import img5 from '../../assets/images/Content/Collage4_0.webp'; // Right side 2
import img2 from '../../assets/images/Content/Collage5_1.webp'; // Bottom-left 1
import img6 from '../../assets/images/Content/Collage5_2.webp'; // Right side 3

const ImageCard = ({ src, alt, className }) => (
  <motion.div
    className={`overflow-hidden ${className}`}
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </motion.div>
);

const WorksSection = () => {
  return (
    <div className="bg-[#F5F1E9] relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="w-full h-full max-w-[1920px] max-h-[1080px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
          {/* Left Column (Red Box) */}
          <div className="grid grid-rows-2 gap-4 min-h-0">
            {/* Top Row: 1 Image */}
            <ImageCard src={img1} alt="Main work highlight" className="row-span-1" />
            {/* Bottom Row: 2 Images */}
            <div className="grid grid-cols-2 gap-4 row-span-1 min-h-0">
              <ImageCard src={img2} alt="Work detail 1" />
              <ImageCard src={img3} alt="Work detail 2" />
            </div>
          </div>

          {/* Right Column (Blue Box) */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 min-h-0">
            <ImageCard src={img4} alt="Right grid image 1" />
            <ImageCard src={img5} alt="Right grid image 2" />
            <ImageCard src={img6} alt="Right grid image 3" />
            <ImageCard src={img7} alt="Right grid image 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
