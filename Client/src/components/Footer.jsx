import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import React from 'react';
import LogoSpicyFooter from '../assets/images/Content/LogoSpicyFooter.jpg';

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
      className="w-full bg-white text-[#641126]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Encabezado removido para reducir altura */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Brand Column */}
          <motion.div variants={textVariants} className="space-y-2">
            <motion.h3 variants={textVariants} className="text-lg font-light tracking-widest uppercase text-[#641126]">

            </motion.h3>
            <motion.p variants={textVariants} className="text-sm text-[#641126] leading-relaxed max-w-xs">
          
            </motion.p>
            <motion.div variants={iconVariants} className="flex space-x-3 pt-1">
              <motion.a
                href="https://www.instagram.com/spicy__atelier/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#641126] hover:text-[#641126]"
                variants={iconVariants}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#641126] hover:text-[#641126]"
                variants={iconVariants}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@spicy_atelier?_t=ZM-90CNZaoLC7U&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#641126] hover:text-[#641126] text-sm font-medium"
                variants={iconVariants}
                aria-label="TikTok"
              >
                TikTok
              </motion.a>
              <motion.a
                href="mailto:ATELIERSPICY@GMAIL.COM"
                className="text-[#641126] hover:text-[#641126]"
                variants={iconVariants}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links Column */}
          <motion.div variants={textVariants} className="space-y-2">
            <motion.h4 variants={textVariants} className="text-sm font-medium uppercase tracking-wide text-[#641126]">
              Navegación
            </motion.h4>
            <div className="space-y-1.5">
              <motion.a
                href="/"
                className="block text-sm text-[#641126] hover:text-[#641126]"
                variants={linkVariants}
              >
                Home
              </motion.a>
              <motion.a
                href="/works"
                className="block text-sm text-[#641126] hover:text-[#641126]"
                variants={linkVariants}
              >
                Works
              </motion.a>
              <motion.a
                href="/who-we-are"
                className="block text-sm text-[#641126] hover:text-[#641126]"
                variants={linkVariants}
              >
                Who we are
              </motion.a>
              <motion.a
                href="/services"
                className="block text-sm text-[#641126] hover:text-[#641126]"
                variants={linkVariants}
              >
                Services
              </motion.a>
              <motion.a
                href="/contact"
                className="block text-sm text-[#641126] hover:text-[#641126]"
                variants={linkVariants}
              >
                Contact
              </motion.a>
              {/* Puedes agregar más enlaces de navegación aquí */}
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={textVariants} className="space-y-2">
            <motion.h4 variants={textVariants} className="text-sm font-medium uppercase tracking-wide text-[#641126]">
              Contacto
            </motion.h4>
            <div className="space-y-1.5">
              <motion.a
                href="mailto:ATELIERSPICY@GMAIL.COM"
                className="flex items-center text-sm text-[#641126] hover:text-[#641126]"
                variants={linkVariants}
              >
                <Mail size={16} className="mr-2" />
                ATELIERSPICY@GMAIL.COM
              </motion.a>
            </div>
          </motion.div>

          {/* Logo Column (Right side) */}
          <motion.div variants={textVariants} className="flex md:justify-end items-center md:items-start">
            <img
              src={LogoSpicyFooter}
              alt="Spicy Atelier Logo"
              className="h-20 md:h-28 w-auto object-contain"
            />
          </motion.div>
        </div>

        <motion.div variants={textVariants} className="border-t border-neutral-300 mt-6 pt-3 text-center text-xs text-[#641126]">
          <p> {new Date().getFullYear()} ALY ANDRY. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;