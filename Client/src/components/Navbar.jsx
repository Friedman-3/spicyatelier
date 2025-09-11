import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SpicyBlancoImage from "../assets/images/Content/LogoSpicyNavBar.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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

  const isWhoWeAre = location.pathname === "/who-we-are";

  const gradientStyle = {
    background: isWhoWeAre && !scrolled 
      ? 'transparent' 
      : 'linear-gradient(to bottom, rgba(100, 17, 38, 0.65) 0%, rgba(100, 17, 38, 0.5) 20%, rgba(100, 17, 38, 0.35) 40%, rgba(100, 17, 38, 0.22) 60%, rgba(100, 17, 38, 0.12) 75%, rgba(100, 17, 38, 0.05) 90%, transparent 100%)',
    height: '160px'
  };

  return (
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
                className="h-16"
              />
            </Link>
          </div>

          {/* Navegación derecha */}
          <nav className="flex justify-end">
            <ul className="flex items-center space-x-12">
              {["Home", "Works", "Who We Are", "Services", "Contact"].map((item, idx) => (
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;