// Importar todas las imágenes
// Formación 2, 1, 2 (5 imágenes)
import collage1_0 from '../../assets/images/Content/Collage1_0.webp';
import collage2_0 from '../../assets/images/Content/Collage1_1.webp';
import collage3_0 from '../../assets/images/Content/Collage1_2.webp';
import collage4_0 from '../../assets/images/Content/Collage1_3.webp'; 
import collage5_0 from '../../assets/images/Content/Collage1_4.webp';

// Formación 1, 2, 1 (4 imágenes)
import collage6_0 from '../../assets/images/Content/Collage2_0.webp';
import collage7_0 from '../../assets/images/Content/Collage2_1.webp';
import collage8_0 from '../../assets/images/Content/Collage2_2.webp';
import collage9_0 from '../../assets/images/Content/Collage2_3.webp'; 

// Formación 2, 1 (3 imágenes)
import collage10_0 from '../../assets/images/Content/Collage3_0.webp';
import collage11_0 from '../../assets/images/Content/Collage3_1.webp';
import collage12_0 from '../../assets/images/Content/Collage3_2.webp';

// Formación 1 (1 imagen)
import collage13_0 from '../../assets/images/Content/Collage4_0.webp';

// Formación 1, 2, 1 (4 imágenes)
import collage14_0 from '../../assets/images/Content/Collage5_0.webp';
import collage15_0 from '../../assets/images/Content/Collage5_1.webp';
import collage16_0 from '../../assets/images/Content/Collage5_2.webp';
import collage17_0 from '../../assets/images/Content/Collage5_3.webp';

const DynamicCollage = ({ collageType = 'collage1' }) => {
  // Definir todos los grupos de imágenes
  const imageGroups = {
    // Formación 2, 1, 2 - Layout: 3 columnas, 2 filas
    collage1: {
      images: [
        { src: collage1_0, alt: 'Collage 1 - Image 1' },
        { src: collage2_0, alt: 'Collage 1 - Image 2' },
        { src: collage3_0, alt: 'Collage 1 - Image 3' },
        { src: collage4_0, alt: 'Collage 1 - Image 4' },
        { src: collage5_0, alt: 'Collage 1 - Image 5' },
      ],
      containerClass: "w-screen h-screen grid grid-cols-3 grid-rows-2",
      layout: [
        { imageIndex: 0, className: "object-cover w-full h-full " }, // Col 1, Row 1
        { imageIndex: 3, className: "object-cover w-full h-full row-span-2 " }, // Col 2, Both rows
        { imageIndex: 2, className: "object-cover w-full h-full " }, // Col 3, Row 1
        { imageIndex: 1, className: "object-cover w-full h-full " }, // Col 1, Row 2
        { imageIndex: 4, className: "object-cover w-full h-full " }, // Col 3, Row 2
      ]
    },

    // Formación 1, 2, 1 - Layout: 4 columnas con tamaños 1fr-2fr-2fr-1fr, 2 filas
    collage2: {
      images: [
        { src: collage6_0, alt: 'Collage 2 - Image 1' },
        { src: collage7_0, alt: 'Collage 2 - Image 2' },
        { src: collage8_0, alt: 'Collage 2 - Image 3' },
        { src: collage9_0, alt: 'Collage 2 - Image 4' },
      ],
      containerClass: "w-screen h-screen grid grid-cols-3 grid-rows-2",
      layout: [
        { imageIndex: 0, className: "object-cover w-full h-full  row-span-2" }, // Col 1, Both rows
        { imageIndex: 1, className: "object-cover w-full h-full " }, // Col 2, Row 1
        { imageIndex: 3, className: "object-cover w-full h-full  row-span-2" }, // Col 3, Both rows
        { imageIndex: 2, className: "object-cover w-full h-full " }, // Col 2, Row 2
      ]
    },

    // Formación 2, 1 - Layout: 2 columnas, 2 filas
    collage3: {
      images: [
        { src: collage10_0, alt: 'Collage 3 - Image 1' },
        { src: collage11_0, alt: 'Collage 3 - Image 2' },
        { src: collage12_0, alt: 'Collage 3 - Image 3' },
      ],
      containerClass: "w-screen h-screen grid grid-cols-2 grid-rows-2",
      layout: [
        { imageIndex: 0, className: "object-cover w-full h-full " }, // Col 1, Row 1
        { imageIndex: 2, className: "object-cover w-full h-full  row-span-2" }, // Col 2, Both rows
        { imageIndex: 1, className: "object-cover w-full h-full " }, // Col 1, Row 2
      ]
    },

    // Formación 1 - Layout: 1 imagen ocupando toda la pantalla
    collage4: {
      images: [
        { src: collage13_0, alt: 'Collage 4 - Single Image' },
      ],
      containerClass: "w-screen h-screen flex items-center justify-center",
      layout: [
        { imageIndex: 0, className: "object-cover w-full h-full " },
      ]
    },

    // Formación 1, 2, 1 - Layout: 4 columnas con tamaños 1fr-2fr-2fr-1fr, 2 filas
    collage5: {
      images: [
        { src: collage14_0, alt: 'Collage 5 - Image 1' },
        { src: collage15_0, alt: 'Collage 5 - Image 2' },
        { src: collage16_0, alt: 'Collage 5 - Image 3' },
        { src: collage17_0, alt: 'Collage 5 - Image 4' },
      ],
      containerClass: "w-screen h-screen grid grid-cols-3 grid-rows-2",
      layout: [
        { imageIndex: 0, className: "object-cover w-full h-full  row-span-2" }, // Col 1, Both rows
        { imageIndex: 1, className: "object-cover w-full h-full " }, // Col 2, Row 1
        { imageIndex: 3, className: "object-cover w-full h-full  row-span-2" }, // Col 3, Both rows
        { imageIndex: 2, className: "object-cover w-full h-full " }, // Col 2, Row 2
      ]
    }
  };

  const currentCollage = imageGroups[collageType];

  if (!currentCollage) {
    return <div className="w-screen h-screen flex items-center justify-center text-red-500">Collage type not found</div>;
  }

  return (
    <div className={currentCollage.containerClass}>
      {currentCollage.layout.map((item, index) => (
        <img 
          key={`${collageType}-${index}`}
          src={currentCollage.images[item.imageIndex].src} 
          alt={currentCollage.images[item.imageIndex].alt} 
          className={item.className}
        />
      ))}
    </div>
  );
};


export default DynamicCollage;