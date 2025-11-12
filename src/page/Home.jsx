import React from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import { Coffee, Croissant, CupSoda, Heart } from "lucide-react";
import Footer from "../Components/Footer";

function Home() {
  const coffees = [
    {
      id: 1,
      name: "Black Aroma",
      desc: "Rich taste, smooth essence",
      img: "/Image/Image4.jpg",
    },
    {
      id: 2,
      name: "Macarone Bliss",
      desc: "Perfectly sweet & creamy",
      img: "/Image/Image5.jpg",
    },
    {
      id: 3,
      name: "Rustic Roast",
      desc: "Bold flavor, elegant texture",
      img: "/Image/Image6.jpg",
    },
  ];

  return (
    <div className="overflow-x-hidden overflow-y-auto"> 
      {/* ===== Section 1: Hero Section ===== */}
      <section
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat text-white flex flex-col justify-center "
        style={{
          backgroundImage: 'url("/Image/Hero.png")',
        }}
      >
        {/* ✅ Fixed Navbar — positioned absolutely so it doesn’t push content down */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* ✅ Adjusted padding-top to visually balance with fixed Navbar */}
        <motion.div
          className="flex flex-col justify-center px-6 md:px-16 max-w-xl sm:max-w-2xl mt-28 md:mt-32"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest mb-4 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-[#ffc66d] block">COFFEE</span>
            <span className="block sm:ml-10 md:ml-20">GALLERY</span>
          </motion.h1>

          <motion.article
            className="text-base sm:text-lg leading-relaxed text-gray-200 bg-black/40 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
          >
            <p>
              Discover the aroma and artistry of every brew in our Coffee
              Gallery — where rich flavors, warmth, and passion come together in
              each cup. Each blend tells a story of dedication, from bean to
              brew, crafted with love for true coffee enthusiasts.
            </p>
          </motion.article>

          <motion.button
            className="mt-6 w-fit px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold
                bg-gradient-to-r from-[#2b1d0b] via-[#3b2312] to-[#231709]
                text-white tracking-wide
                shadow-[0_4px_15px_rgba(0,0,0,0.5)]
                hover:shadow-[0_0_25px_#d96b2b]
                hover:text-[#ffc66d]
                transition-all duration-500 ease-out hover:-translate-y-1
                relative overflow-hidden group"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-[#03fcfc]/10 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></span>
            <span className="relative z-10">Explore More</span>
          </motion.button>
        </motion.div>
      </section>

      {/* ===== Section 2: Info & Icons ===== */}
      <section className="bg-[#1a1a1a] text-gray-200 py-16 sm:py-20 px-6 sm:px-10 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/Image/Image3.jpg"
            alt="Coffee and Macarons"
            className="rounded-2xl shadow-lg w-[90%] sm:w-[400px] md:w-[450px] object-cover"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(210,180,140,0.6)",
              rotate: 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-[#d2b48c]">
              Name Coffee Deal Station
            </h2>
            <p className="text-base sm:text-lg italic text-gray-400">
              Flavor, atmosphere, and cozy moments
            </p>
          </motion.div>

          <motion.p
            className="text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A delightful blend of aroma and warmth, served with artisan macarons
            and crafted perfection. Relax and enjoy the balance of flavors in
            every sip, paired with sweet indulgence.
          </motion.p>

          {/* Icons Section */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {[
              { Icon: Coffee, title: "Coffee", desc: "Warm & Energizing" },
              {
                Icon: Croissant,
                title: "Serving",
                desc: "Great with Desserts",
              },
              { Icon: CupSoda, title: "Taste", desc: "Smooth & Aromatic" },
              { Icon: Heart, title: "Love", desc: "Made with Passion" },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.1,
                  color: "#d2b48c",
                  transition: { type: "spring", stiffness: 200, damping: 12 },
                }}
              >
                <Icon className="w-8 h-8 text-[#d2b48c] mb-2 transition-all duration-300" />
                <p className="font-semibold text-sm sm:text-base">{title}</p>
                <p className="text-xs sm:text-sm text-gray-500">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Text */}
          <motion.div
            className="mt-10 sm:mt-12 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-base sm:text-lg font-medium tracking-wide text-[#d2b48c]">
              ENJOY GOOD FLAVOR
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Experience the magic blend of coffee and sweet macarons that
              brings joy to your taste buds.
            </p>

            <p className="text-base sm:text-lg font-medium tracking-wide text-[#d2b48c] mt-6 sm:mt-8">
              PREMIUM COFFEE
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Brewed to perfection with premium beans for a smooth, rich flavor.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== Section 3: Coffee Cards ===== */}
      <section className="bg-[#1a1a1a] text-gray-200 py-14 sm:py-20 px-6 sm:px-8 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#d2b48c] mb-3">
            COFFEE BIGLOW
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            The best experience that turns your mornings into something special,
            served in every unforgettable cup.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 w-full max-w-7xl mx-auto">
          {coffees.map((coffee) => (
            <motion.div
              key={coffee.id}
              className="bg-[#222] rounded-3xl overflow-hidden shadow-lg cursor-pointer
                   transition-transform duration-500 hover:-translate-y-3 hover:shadow-[0_0_30px_#d2b48c80]"
              initial={{ opacity: 0, scale: 0.85, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-t-3xl">
                <motion.img
                  src={coffee.img}
                  alt={coffee.name}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover brightness-95 transition-transform duration-700 ease-out"
                  whileHover={{
                    scale: 1.15,
                    rotate: 1,
                    transition: { type: "spring", stiffness: 150, damping: 12 },
                  }}
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col items-center text-center space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-[#d2b48c] tracking-wide">
                  {coffee.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {coffee.desc}
                </p>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-3 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold
                       bg-gradient-to-r from-[#3b2312] to-[#231709]
                       text-[#d2b48c] shadow-md hover:shadow-[0_0_15px_#d2b48c60]
                       transition-all duration-300"
                >
                  Taste Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
    
  );
}

export default Home;
