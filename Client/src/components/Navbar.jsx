import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo izquierdo */}
          <div className="flex justify-start">
            <Link to="/" className="block">
              <h1 className="text-2xl font-extrabold uppercase tracking-widest text-black">
                LOGO
              </h1>
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
                    className="relative text-sm font-semibold uppercase tracking-wider text-black hover:text-gray-700 transition-colors duration-300 group"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
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