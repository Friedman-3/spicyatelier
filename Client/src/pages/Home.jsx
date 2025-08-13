import React from "react";
import BannerSectionHome from "../components/BannerSectionHome";
import ProductGrid from "../components/ProductGrid";
import SplitCampaign from "../components/SplitCampaign";
import VideoHero from "../components/VideoHero";
const videoOphelia = "https://videos.pexels.com/video-files/853877/853877-hd_1280_720_25fps.mp4";

const Home = () => {
  return (
    <div>
      <VideoHero videoUrl={videoOphelia} />
      <BannerSectionHome
        title="novedades"
        subtitle="DESCUBRE LA NUEVA COLECCIÓN PARA ESTA PRIMAVERA/VERANO"
        backgroundColor="bg-[#FFFFFF]"
        textColor="text-[#000000]"
        padding="py-16"
      />
      <SplitCampaign />
      <BannerSectionHome
        title="novedades"
        subtitle="DESCUBRE LA NUEVA COLECCIÓN PARA ESTA PRIMAVERA/VERANO"
        backgroundColor="bg-[#FFFFFF]"
        textColor="text-[#000000]"
        padding="py-16"
      />
      <ProductGrid />
      
    </div>
  );
};

export default Home;
