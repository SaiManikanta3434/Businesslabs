import React from "react";
import ecommerce from "../assets/ecommercee.jpg";
import { motion } from "framer-motion";
import Training from '../assets/Trainingg.png'
import Interactive from '../assets/Interactive.jpg'

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const Body = () => {
  return (
    <div className="pt-28 bg-gray-200 text-center pb-20">
      <h1 className="text-2xl font-bold">OUR SERVICES</h1>
      <p className="pt-5 text-lg font-light">
        We, at Business Labs, help you grow. Choose from one or more of our premium hacks from four main categories.
      </p>

      <div className="bg-gray-200 pt-10 flex flex-wrap gap-4 justify-center px-4">
        {/* First Card */}
        <motion.div
          className="relative w-full max-w-md h-[450px] rounded-2xl overflow-hidden text-white shadow-lg mx-auto"
          style={{ backgroundImage: `url(${Training})`, backgroundSize: "cover", backgroundPosition: "center" }}
          initial="initial"
          whileInView="whileInView"
          whileHover="hover"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <p className="text-2xl uppercase font-bold tracking-wide text-gray-200 mb-2 bg-gradient-to-r from-blue-600 to-blue-200 bg-clip-text text-transparent">
              Training
            </p>
            <h2 className="text-xl font-semibold text-gray-200 mt-4">
              Information about what’s happening around you; and knowledge about multiple domains of the business lifecycle makes your employee an Intrapreneur. Learn from our Research and share your learnings with us.
            </h2>
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="relative w-full max-w-md h-[450px] rounded-2xl overflow-hidden text-white shadow-lg mx-auto"
          style={{ backgroundImage: `url(${ecommerce})`, backgroundSize: "cover", backgroundPosition: "center" }}
          initial="initial"
          whileInView="whileInView"
          whileHover="hover"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <p className="text-2xl uppercase font-bold tracking-wide text-gray-200 mb-2 bg-gradient-to-r from-blue-600 to-blue-200 bg-clip-text text-transparent">
              E-Commerce Solutions
            </p>
            
            <h2 className="text-xl font-semibold text-gray-200 mt-4">Widen your market reach and expand your sales. We show you how. Get More Sales. Make More Money. Right Now!</h2>
          </div>
        </motion.div>

        {/* Third Card */}
        <motion.div
          className="relative w-full max-w-md h-[450px] rounded-2xl overflow-hidden text-white shadow-lg mx-auto"
          style={{ backgroundImage: `url(${Interactive})`, backgroundSize: "cover", backgroundPosition: "center" }}
          initial="initial"
          whileInView="whileInView"
          whileHover="hover"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <p className="text-2xl uppercase font-bold tracking-wide text-gray-200 mb-2 bg-gradient-to-r from-blue-600 to-blue-200 bg-clip-text text-transparent">
              Interactive Design
            </p>
            
            <h2 className="text-xl font-semibold text-gray-200 mt-4">Hire a creative UI designer and an accomplished UX expert from Business Labs, get an Interactive Design and make your customers’ interactions profoundly enriching</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Body;
