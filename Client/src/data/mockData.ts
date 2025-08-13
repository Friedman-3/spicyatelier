import { Product } from "../types";
import mufasaC0 from "../assets/images/Mufasa/MufasaC0.webp";
import mufasaC1 from "../assets/images/Mufasa/MufasaC1.webp";
import lumiereC0 from "../assets/images/Lumiere/LumiereC0.webp";
import lumiereC1 from "../assets/images/Lumiere/LumiereC1.webp";
import opheliaC0 from "../assets/images/Ophelia/OpheliaC0.webp";
import opheliaC1 from "../assets/images/Ophelia/OpheliaC1.webp";
import aureliaC0 from "../assets/images/Aurelia/AureliaC0.webp";
import alaiaC0 from "../assets/images/Alaia/AlaiaC0.webp";
import alaiaC1 from "../assets/images/Alaia/AlaiaC1.webp";
import luziaC0 from "../assets/images/Luzia/LuziaTP.webp";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "MUFASA",
    price: 35.0,
    media: [
      { type: "image", src: mufasaC0, alt: "Foto de Mufasa 1" },
      { type: "image", src: mufasaC1, alt: "Foto de Mufasa 2" },
    ],
    colors: 2,
  },
  {
    id: 2,
    name: "LUMIÈRE",
    price: 35.0,
    media: [
      { type: "image", src: lumiereC0, alt: "Foto de Lumiere 1" },
      { type: "image", src: lumiereC1, alt: "Foto de Lumiere 2" },
    ],
    colors: 2
  },
  {
    id: 3,
    name: "OPHELIA",
    price: 40.0,
    media: [
      { type: "image", src: opheliaC0, alt: "Foto de Ophelia 1" },
      { type: "image", src: opheliaC1, alt: "Foto de Ophelia 2" },
    ],
    colors: 3
  },
  {
    id: 4,
    name: "AURELIA",
    price: 35.0,
    media: [
      { type: "image", src: aureliaC0, alt: "Foto de Aurelia 1" },
    ]
  },
  {
    id: 5,
    name: "ALAÏA",
    price: 50.0,
    media:[
      { type: 'image', src: alaiaC0, alt: 'Foto de Alaia 1'},
      { type: 'image', src: alaiaC1, alt: 'Foto de Alaia 2'},
    ],
    colors: 3
  },
  {
    id: 6,
    name: "LUZIA",
    price: 50.0,
    media:[
      { type: 'image', src: luziaC0, alt: 'Foto de Luzia 1'},
    ],
    colors: 2
  },
];
