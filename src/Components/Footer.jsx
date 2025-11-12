import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#f8e6d1] py-10 px-5 sm:px-10 lg:px-20">
      {/* Top Icons / Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-12">
        {/* Phone */}
        <motion.div variants={fadeIn(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="flex justify-center mb-3 cursor-pointer">
            <Phone className="w-7 h-7 text-[#d4a373]" />
          </div>
          <p className="text-sm cursor-pointer break-words">(+91) 9876 543 210</p>
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeIn(0.4)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="flex justify-center mb-3 cursor-pointer">
            <Mail className="w-7 h-7 text-[#d4a373]" />
          </div>
          <p className="text-sm cursor-pointer break-words">contact@coffeego.com</p>
        </motion.div>

        {/* Location */}
        <motion.div variants={fadeIn(0.6)} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="flex justify-center mb-3 cursor-pointer">
            <MapPin className="w-7 h-7 text-[#d4a373]" />
          </div>
          <p className="text-sm cursor-pointer max-w-xs mx-auto">
            101 Roast St., Bean Town, Brew City, USA
          </p>
        </motion.div>
      </div>

      {/* Footer Links */}
      <motion.div
        variants={fadeIn(0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left"
      >
        {/* About */}
        <div>
          <h3 className="text-[#f8e6d1] font-semibold mb-3">About CoffeeGo</h3>
          <ul className="space-y-2 text-sm text-[#e3cbaa]">
            <li className="cursor-pointer hover:text-[#f8e6d1] transition">Our Story</li>
            <li className="cursor-pointer hover:text-[#f8e6d1] transition">Our Baristas</li>
            <li className="cursor-pointer hover:text-[#f8e6d1] transition">Careers</li>
            <li className="cursor-pointer hover:text-[#f8e6d1] transition">Awards</li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-[#f8e6d1] font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-sm text-[#e3cbaa]">
            <li className="cursor-pointer hover:text-[#f8e6d1] transition">Espresso</li>
            <li className="cursor-pointer hover:text-[#f8e6d1] transition">Cappuccino</li>
            <li className="cursor-pointer hover:text-[#f8e6d1] transition">Latte</li>
            <li className="cursor-pointer hover:text-[#f8e6d1] transition">Cold Brew</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-[#f8e6d1] font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-[#e3cbaa]">
            <li className="cursor-pointer hover:text-[#f8e6d1] transition">Blog</li>
            <li className="cursor-pointer hover:text-[#f8e6d1] transition">Community</li>
            <li className="cursor-pointer hover:text-[#f8e6d1] transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-[#f8e6d1] font-semibold mb-3">Subscribe</h3>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none w-full sm:w-48 bg-[#2b1d0e] text-[#f8e6d1] border border-[#d4a373] focus:outline-none placeholder-[#b3926a]"
            />
            <button className="bg-[#d4a373] px-5 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-[#b38350] text-[#1A1A1A] text-sm font-semibold transition cursor-pointer w-full sm:w-auto">
              Join
            </button>
          </div>
          <p className="text-xs text-[#c9a87b] mt-2 text-center sm:text-left">
            Get our latest brews & offers directly to your inbox.
          </p>
        </div>
      </motion.div>

      {/* Divider and Social Icons */}
      <motion.div
        variants={fadeIn(1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border-t border-[#d4a373]/30 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#b3926a] gap-4"
      >
        <p className="text-center md:text-left">©2025 CoffeeGo. All rights reserved.</p>

        <div className="flex space-x-5">
          {[Facebook, Instagram, Twitter].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-2 rounded-full bg-[#2b1d0e] text-[#d4a373] hover:bg-[#d4a373] hover:text-[#1A1A1A] transition-all duration-300 cursor-pointer"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
