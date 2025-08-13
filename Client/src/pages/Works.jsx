import React from 'react';
import Masonry from 'react-masonry-css';
import WorkCard from '../components/WorkCard';

// Import local images
import AlaiaC0 from '../assets/images/Alaia/AlaiaC0.webp';
import AlaiaC1 from '../assets/images/Alaia/AlaiaC1.webp';
import AureliaC1 from '../assets/images/Aurelia/AureliaC1.webp';
import LumiereC1 from '../assets/images/Lumiere/LumiereC1.webp';
import MufasaC1 from '../assets/images/Mufasa/MufasaC1.webp';
import OpheliaC1 from '../assets/images/Ophelia/OpheliaC1.webp';

const worksData = [
  { id: 1, title: 'Alaia', imageUrl: AlaiaC0 },
  { id: 2, title: 'Aurelia', imageUrl: AureliaC1 },
  { id: 3, title: 'Lumiere', imageUrl: LumiereC1 },
  { id: 4, title: 'Mufasa', imageUrl: MufasaC1 },
  { id: 5, title: 'Ophelia', imageUrl: OpheliaC1 },
  { id: 6, title: 'Alaia Look', imageUrl: AlaiaC1 },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const Works = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {worksData.map(work => (
          <WorkCard key={work.id} imageUrl={work.imageUrl} title={work.title} />
        ))}
      </Masonry>
    </div>
  );
};

export default Works;
