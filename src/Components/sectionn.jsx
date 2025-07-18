import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

const Sectionn = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Innovative Business Growth",
        "Custom Web & AI Solutions",
        "Your Digital Growth Partner",
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="pt-16 pb-16 bg-gray-200">
      {/* Animated Main Heading */}
      <motion.div
        className="text-center px-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
          Empower Your Business <br /> with{" "}
          <span className="bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent">
            Expert Solutions
          </span>
        </h1>
      </motion.div>

      {/* Typed Animated Subtext */}
      <motion.p
        className="mt-6 text-center text-xl text-green-700 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span ref={typedEl}></span>
      </motion.p>

      {/* Call-to-Action Box */}
      <motion.div
        className="mt-10 flex justify-center px-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <p className="text-lg sm:text-xl md:text-2xl font-semibold px-4 py-3 text-center shadow-md hover:shadow-lg rounded-xl bg-black text-white transition duration-300 ease-in-out transform hover:scale-105">
          Hire an Expert. Get Your Work Done!
        </p>
      </motion.div>

      {/* Paragraph Section */}
      <motion.div
        className="pt-10 px-4 sm:px-8 md:px-16 lg:px-48"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans text-gray-800 leading-relaxed text-justify">
          We are continuously building our team and upgrading the knowledge to
          help you make your business grow. Many businesses trust Business Labs,
          and we help them with their online presence, designs, e-commerce
          consultation, content marketing, and much more. Let us chart out a
          growth plan for you with our experience gained while working with many
          successful ventures. What does your business require?
        </p>
      </motion.div>
    </div>
  );
};

export default Sectionn;
