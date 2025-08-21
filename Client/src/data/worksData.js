const imageModules = import.meta.glob('../assets/images/**/*.webp', { eager: true });

const works = [
  { id: 1, title: 'Alaia', imagePath: '../assets/images/Alaia/AlaiaC0.webp' },
  { id: 2, title: 'Aurelia', imagePath: '../assets/images/Aurelia/AureliaC1.webp' },
  { id: 3, title: 'Lumiere', imagePath: '../assets/images/Lumiere/LumiereC1.webp' },
  { id: 4, title: 'Mufasa', imagePath: '../assets/images/Mufasa/MufasaC1.webp' },
  { id: 5, title: 'Ophelia', imagePath: '../assets/images/Ophelia/OpheliaC1.webp' },
  { id: 6, title: 'Alaia Look', imagePath: '../assets/images/Alaia/AlaiaC1.webp' },
];

export const worksData = works.map(work => {
  const module = imageModules[work.imagePath];
  return {
    ...work,
    imageUrl: module ? module.default : ''
  };
});
