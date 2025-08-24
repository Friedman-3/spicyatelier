import React from "react";
import { Link } from "react-router-dom";
import chileVainillaImage from '../assets/images/Content/ChileVainilla.png';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 py-6">
          {/* Logo izquierdo */}
          <div className="flex justify-start">
            <Link to="/" className="block">
              <img src={chileVainillaImage} alt="Spicy Atelier Logo" className="h-20" />
            </Link>
          </div>

          {/* Navegación derecha */}
          <nav className="flex justify-end">
            <ul className="flex items-center space-x-12">
              {["Home", "Works", "Who We Are", "Services"].map((item, idx) => (
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
    </header>
  );
};

export default Navbar;