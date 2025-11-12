import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect scroll position to add blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center 
        px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 
        py-3 fixed w-full top-0 z-50 transition-all duration-500 
        ${
          scrolled
            ? "backdrop-blur-md bg-black/60 shadow-lg"
            : "bg-transparent"
        } 
        ${location.pathname === "/" ? "text-white" : "text-gray-200"}
      `}
    >
      {/* Logo */}
      <span
        onClick={() => navigate("/")}
        className="font-bold text-3xl md:text-4xl cursor-pointer tracking-wide coffee
          transition-transform duration-500 ease-out
          transform hover:scale-110 hover:text-[#ffc66d] hover:drop-shadow-lg"
      >
        CoffeeGo
      </span>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden hover:text-[#03fcfc] transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Nav Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black/80 md:bg-transparent backdrop-blur-md 
          md:flex md:space-x-16 text-lg font-medium 
          transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "max-h-60 opacity-100"
              : "max-h-0 opacity-0 md:opacity-100"
          }
          overflow-hidden md:overflow-visible text-center md:text-left
          px-6 sm:px-10 md:px-0
        `}
      >
        {["Home", "Menu", "About", "Shop", "Contact"].map((item, index) => (
          <li
            key={index}
            className="relative group cursor-pointer py-3 md:py-0 md:pb-2 flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`block transition-all duration-300 transform group-hover:-translate-y-1 
                group-hover:text-[#ffc66d]
                ${
                  location.pathname === "/" && item === "Home"
                    ? "text-[#ffc66d]"
                    : ""
                }
              `}
            >
              {item}
            </Link>
            {/* Underline animation */}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffc66d] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Account Button */}
      <button
        className="inline-flex group relative items-center justify-center gap-2 rounded-full text-lg font-semibold
      bg-linear-to-r from-[#b66d33] via-[#80542e] to-[#7a5020]
      px-8 py-3 text-white
      shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out
      hover:scale-105 hover:shadow-[0_0_20px_#80542e80]
      hover:from-[#80542e] hover:to-[#3b1a0b]
      active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#80542e]/40"
      >
        <span className="relative z-10 transition-colors duration-500 group-hover:text-[#ffd07a]">
          Order Now
        </span>
        
      </button>
    </nav>
  );
}

export default Navbar;
