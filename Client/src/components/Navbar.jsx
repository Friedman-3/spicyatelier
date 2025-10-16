import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SpicyBlancoImage from "../assets/images/Content/LogoSpicyNavBar.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (location.pathname === "/who-we-are") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  // Cerrar menú móvil cuando cambia la ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isWhoWeAre = location.pathname === "/who-we-are";

  const gradientStyle = {
    background: isWhoWeAre && !scrolled 
      ? 'transparent' 
      : 'linear-gradient(to bottom, rgba(100, 17, 38, 0.65) 0%, rgba(100, 17, 38, 0.5) 20%, rgba(100, 17, 38, 0.35) 40%, rgba(100, 17, 38, 0.22) 60%, rgba(100, 17, 38, 0.12) 75%, rgba(100, 17, 38, 0.05) 90%, transparent 100%)',
    height: '160px'
  };

  const menuItems = ["Home", "Works", "Who We Are", "Services", "Contact"];

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-50 transition-all duration-700 pointer-events-none"
        style={gradientStyle}
      >
        {/* Contenido del navbar con pointer-events habilitado */}
        <div className="container mx-auto px-6 pointer-events-auto">
          <div className="flex items-center justify-between h-20 py-6">
            {/* Logo izquierdo */}
            <div className="flex justify-start">
              <Link to="/" className="block">
                <img
                  src={SpicyBlancoImage}
                  alt="Spicy Atelier Logo"
                  className="h-12 md:h-16"
                />
              </Link>
            </div>

            {/* Navegación desktop */}
            <nav className="hidden lg:flex justify-end">
              <ul className="flex items-center space-x-12">
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : "/" + item.toLowerCase().replace(/\s+/g, "-")
                      }
                      className="relative text-sm font-medium uppercase tracking-wider text-white hover:text-white/80 transition-colors duration-300 group"
                    >
                      {item}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Botón hamburguesa móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#641126] z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-start justify-center h-full px-8 space-y-8">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={
                item === "Home"
                  ? "/"
                  : "/" + item.toLowerCase().replace(/\s+/g, "-")
              }
              className="text-lg font-medium uppercase tracking-wider text-white hover:text-white/80 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay oscuro cuando el menú está abierto */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default Navbar;