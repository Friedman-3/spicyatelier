import React, { useEffect, useRef } from 'react';
import heroVideo from '../../assets/images/Content/HeroSectionVideo.mp4';
import posterImg from '../../assets/images/Content/ServiceHead.webp';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.then === 'function') {
        p.catch(() => {
          v.muted = true; // ensure muted for autoplay policies
          v.play().catch(() => {});
        });
      }
    };

    const onLoadedMetadata = () => tryPlay();
    const onCanPlay = () => tryPlay();

    v.addEventListener('loadedmetadata', onLoadedMetadata);
    v.addEventListener('canplay', onCanPlay);
    tryPlay();

    return () => {
      v.removeEventListener('loadedmetadata', onLoadedMetadata);
      v.removeEventListener('canplay', onCanPlay);
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
        poster={posterImg}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full flex overflow-hidden">
      <div className="w-1/2 h-full">
        <VideoPlayer />
      </div>
      <div className="w-1/2 h-full">
        <VideoPlayer />
      </div>
      {/* The Navbar will be overlaid on top of this section due to its fixed position. */}
    </div>
  );
};

export default HeroSection;