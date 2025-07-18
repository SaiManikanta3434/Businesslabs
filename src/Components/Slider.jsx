import React, { useEffect, useState } from "react";
import Shopping from "../assets/commerce.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Solutions from "../assets/Stretegy.jpg";
import Design from "../assets/Design.jpg";
import Gen from "../assets/generative.jpg";

const Slider = () => {
  const slides = [
    {
      image: Shopping,
      title: "Next-Gen E-commerce Solutions That Scale With You",
      subtitle:
        "Business Labs delivers full-stack e-commerce development designed to drive engagement, conversions, and customer loyalty. From intuitive UI/UX and responsive storefronts to secure payment gateways, inventory management, and personalized user journeys — we build platforms that sell smarter. Whether you’re a startup launching your first store or an enterprise expanding globally, our solutions are built for performance, flexibility, and scalability.",
    },
    {
      image: Gen,
      title: "Empowering Innovation with Generative AI",
      subtitle:
        "At Business Labs, we harness the power of Generative AI to unlock new levels of efficiency, creativity, and personalization. Whether you're automating content generation, building intelligent chatbots, optimizing workflows, or crafting tailored user experiences—our AI solutions are designed to deliver results. With the perfect blend of human insight and AI capabilities, we help startups and enterprises innovate at scale.",
    },
    {
      image: Solutions,
      title: "Learn. Build. Scale.",
      subtitle: "Empowering startups with powerful tech stacks.",
    },
    {
      image: Design,
      title: "We Build your Vision",
      subtitle:
        "Transforming ideas into reality with cutting-edge design and technology.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    setCurrentSlide(isFirstSlide ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    setCurrentSlide(isLastSlide ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // smoother timing
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="pb-20 bg-gradient-to-b from-gray-200 via-green-400 to-gray-200">
      <div className="max-w-[1400px] w-full mx-auto py-10 px-4 relative group">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] rounded-2xl overflow-hidden shadow-lg duration-500">
          {/* Background Image */}
          <img
            src={slides[currentSlide].image}
            alt="slide"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>

          {/* Text Content */}
          <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-10 lg:px-20 text-center">
            <h2 className="bg-gradient-to-b from-green-700 to-green-300 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>

        {/* Left Arrow */}
        <div
          className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer z-10"
          onClick={prevSlide}
        >
          <FaArrowLeft size={30} />
        </div>

        {/* Right Arrow */}
        <div
          className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer z-10"
          onClick={nextSlide}
        >
          <FaArrowRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
