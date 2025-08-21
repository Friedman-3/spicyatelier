import React from 'react';
import Masonry from 'react-masonry-css';
import WorkCard from '../components/WorkCard';
import { worksData } from '../data/worksData';

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
