import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "../components/ProductCard";
import alaiaSC from "../assets/images/Alaia/AlaiaSC.webp";
import aureliaSC from "../assets/images/Aurelia/AureliaSC.webp";
import lumiereSC from "../assets/images/Lumiere/LumiereSC.webp";
import luziaSC from "../assets/images/Luzia/LuziaTP.webp";
const mufasaSC = "https://videos.pexels.com/video-files/853877/853877-hd_1280_720_25fps.mp4";
const opheliaSC = "https://videos.pexels.com/video-files/853877/853877-hd_1280_720_25fps.mp4";
import { motion, useInView, useAnimation } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const ProductGrid = ({
  products = [
    {
      id: 1,
      media: { type: "image", src: aureliaSC },
      name: "AURELIA",
      price: "€35",
      isNew: true,
      colors: [{ id: "verde", name: "Verde", hex: "#11503E" }],
    },
    {
      id: 2,
      media: { type: "video", src: mufasaSC },
      name: "MUFASA",
      price: "€40",
      isNew: true,
      colors: [
        { id: "carmesi", name: "Carmesi", hex: "#DD4633" },
        { id: "cafe", name: "Cafe", hex: "#7C4D31" },
      ],
    },
    {
      id: 3,
      media: { type: "image", src: luziaSC },
      name: "LUZIA",
      price: "€50",
      isNew: true,
      colors: [
        { id: "azul", name: "Azul", hex: "#153456" },
        { id: "sangre", name: "Sangre", hex: "#C50015" },
      ],
    },
    {
      id: 4,
      media: { type: "video", src: opheliaSC },
      name: "OPHELIA",
      price: "€40",
      isNew: true,
      colors: [
        { id: "tomate", name: "Tomate", hex: "#D10413" },
        { id: "rosadito", name: "Rosadito", hex: "#F1C4C9" },
        { id: "patito", name: "Patito", hex: "#EDD76E" },
      ],
    },
    {
      id: 5,
      media: { type: "image", src: alaiaSC, alt: "Alaia" },
      name: "ALAÏA",
      price: "€50",
      isNew: true,
      colors: [
        { id: "red", name: "Red", hex: "#790006" },
        { id: "softpink", name: "Soft Pink", hex: "#EFBEB9" },
        { id: "lettuce", name: "Verde Lechu", hex: "#ABBFA1" },
      ],
    },
    {
      id: 6,
      media: { type: "image", src: lumiereSC },
      name: "LUMIÈRE",
      price: "€35",
      isNew: false,
      colors: [
        { id: "purple", name: "Purple", hex: "#C3B4CF" },
        { id: "pink", name: "Pink", hex: "#E4C4BD" },
      ],
    },
  ],
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [isInView, animation]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const slugify = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const handleCardClick = (name) => {
    const slug = slugify(name);
    navigate(`/collection/${slug}`);
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={animation}
      className="pb-16 px-6 sm:px-8 lg:px-12 relative"
    >
      <div className="relative">
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                onClick={() => handleCardClick(product.name)}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition"
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductGrid;