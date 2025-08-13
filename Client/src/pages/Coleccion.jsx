import React from "react";
import BannerSectionHome from "../components/BannerSectionHome";
import Collection from "../components/Collection";

const Coleccion = () => {
  return (
    <div style={{ paddingTop: '62px' }}> {/* Añade un padding-top de 48px */}
      <BannerSectionHome
        title="COLECCIÓN"
        subtitle="DESCUBRE LA NUEVA COLECCIÓN PARA ESTA PRIMAVERA/VERANO"
        backgroundColor="bg-[#FFFFFF]"
        textColor="text-[#000000]"
        padding="py-10"
      />
      <Collection />
    </div>
  );
};

export default Coleccion;
