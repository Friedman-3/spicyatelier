import React from 'react';
import { Mail, Instagram, Facebook, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2 } },
  };

  const linkVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.4, stiffness: 100, damping: 10 } },
  };

  const iconVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { delay: 0.6, stiffness: 200, damping: 15 } },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mt-auto"
      style={{ backgroundColor: '#845334' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <motion.div variants={textVariants} className="space-y-4">
            <motion.h3 variants={textVariants} className="text-xl font-light tracking-widest uppercase text-white">
              ALY ANDRY
            </motion.h3>
            <motion.p variants={textVariants} className="text-sm text-neutral-200 leading-relaxed max-w-xs">
              TEXTOOO.
            </motion.p>
            <motion.div variants={iconVariants} className="flex space-x-4 pt-2">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-neutral-300"
                variants={iconVariants}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-neutral-300"
                variants={iconVariants}
              >
                <Facebook size={20} />
              </motion.a>
              {/* Puedes agregar más iconos de redes sociales aquí */}
            </motion.div>
          </motion.div>

          {/* Links Column */}
          <motion.div variants={textVariants} className="space-y-4">
            <motion.h4 variants={textVariants} className="text-sm font-medium uppercase tracking-wide text-neutral-200">
              Navegación
            </motion.h4>
            <div className="space-y-2">
              <motion.a
                href="/"
                className="block text-sm text-neutral-200 hover:text-neutral-300"
                variants={linkVariants}
              >
                Inicio
              </motion.a>
              <motion.a
                href="/collection"
                className="block text-sm text-neutral-200 hover:text-neutral-300"
                variants={linkVariants}
              >
                Colección
              </motion.a>
              <motion.a
                href="/about-us"
                className="block text-sm text-neutral-200 hover:text-neutral-300"
                variants={linkVariants}
              >
                Nosotros
              </motion.a>
              {/* Puedes agregar más enlaces de navegación aquí */}
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={textVariants} className="space-y-4">
            <motion.h4 variants={textVariants} className="text-sm font-medium uppercase tracking-wide text-neutral-200">
              Contacto
            </motion.h4>
            <div className="space-y-2">
              <motion.a
                href="mailto:alycisneros66@gmail.com"
                className="flex items-center text-sm text-neutral-200 hover:text-neutral-300"
                variants={linkVariants}
              >
                <Mail size={16} className="mr-2" />
                alycisneros66@gmail.com
              </motion.a>
              <motion.a
                href="tel:+34663323018"
                className="flex items-center text-sm text-neutral-200 hover:text-neutral-300"
                variants={linkVariants}
              >
                <Phone size={16} className="mr-2" />
                +34 663 32 30 18
              </motion.a>
              {/* Puedes agregar información de contacto adicional aquí, como un teléfono */}
            </div>
          </motion.div>
        </div>

        <motion.div variants={textVariants} className="border-t border-neutral-300 mt-10 pt-6 text-center text-xs text-neutral-200">
          <p>© {new Date().getFullYear()} ALY ANDRY. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;