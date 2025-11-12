import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500
        ${
          scrolled ? "backdrop-blur-md bg-black/60 shadow-lg" : "bg-transparent"
        }
        ${location.pathname === "/" ? "text-white" : "text-gray-200"}
      `}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between 
        px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-3"
      >
        {/* --- Left: Logo --- */}
        <span
          onClick={() => navigate("/")}
          className="font-bold text-3xl md:text-4xl cursor-pointer tracking-wide
            transition-transform duration-500 ease-out
            transform hover:scale-110 hover:text-[#ffc66d] hover:drop-shadow-lg"
        >
          CoffeeGo
        </span>

        {/* --- Center: Nav Links --- */}
        <div className="flex-1 flex justify-center">
          <ul
            className="hidden md:flex items-center justify-center gap-12 
              text-lg font-medium transition-all duration-500 ease-in-out"
          >
            {["Home", "Menu", "About", "Shop", "Contact"].map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer py-3 flex items-center"
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
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffc66d] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Right: Buttons (Desktop + Mobile Hamburger) --- */}
        <div className="flex items-center gap-4">
          {/* ✅ Fixed Desktop Order Now button */}
          <button
            onClick={() => navigate("/ordernow")}
            className="hidden md:inline-flex group relative items-center justify-center gap-2 rounded-full text-lg font-semibold
              bg-[#371301]
              px-8 py-3 text-white shadow-[0_4px_10px_rgba(0,0,0,0.5)]
              transition-all duration-500 ease-out
              hover:scale-105 hover:shadow-[0_0_20px_#37130180]
              hover:bg-[#8b5a2b]
              active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#371301]/60
              backdrop-blur-sm"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#ffd7a3]">
              Order Now
            </span>
          </button>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden hover:text-[#ffc66d] transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown --- */}
      <ul
        className={`absolute md:hidden top-16 left-0 w-full bg-[#3c1b03] backdrop-blur-md 
          text-lg font-medium transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          overflow-hidden text-center px-6 sm:px-10
        `}
      >
        {["Home", "Menu", "About", "Shop", "Contact"].map((item, index) => (
          <li
            key={index}
            className="relative group cursor-pointer py-3 flex items-center justify-center"
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
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ffc66d] transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}

        {/* ✅ Mobile "Order Now" button (kept same style) */}
        <li className="flex justify-center py-4">
          <button
            className="inline-flex group relative items-center justify-center gap-2 rounded-full text-lg font-semibold
      bg-[#954015]
      px-8 py-3 text-white shadow-[0_4px_10px_rgba(0,0,0,0.5)]
      transition-all duration-500 ease-out
      hover:scale-105 hover:shadow-[0_0_20px_#37130180]
      hover:bg-[#8b5a2b]
      active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#371301]/60
      backdrop-blur-sm"
            onClick={() => {
              setIsOpen(false);
              navigate("/ordernow");
            }}
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#ffd7a3]">
              Order Now
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
