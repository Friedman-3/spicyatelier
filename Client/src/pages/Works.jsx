// Works.jsx
import DynamicCollage from "../components/Works/DynamicCollage";

const Works = () => {
  return (
    <div className="bg-[#101213]">
      {/* Puedes cambiar entre collage1, collage2, collage3, collage4, collage5 */}
      <DynamicCollage collageType="collage1" />
      <DynamicCollage collageType="collage2" />
      <DynamicCollage collageType="collage3" />
      <DynamicCollage collageType="collage4" />
      <DynamicCollage collageType="collage5" />
    </div>
  );
};

export default Works;
