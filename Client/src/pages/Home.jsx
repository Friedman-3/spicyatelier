import React from "react";
import ClientsSection from "../components/home/ClientsSection";
import VideoHero from "../components/home/VideoHero";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import ServicesSection from "../components/home/ServicesSection";
import WorksSection from "../components/home/WorksSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <WorksSection />
      <ClientsSection />
      <VideoHero />
    </div>
  );
};

export default Home;
