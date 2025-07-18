import React from "react";
import Logo from "../assets/Logo2.png";

const Footer = () => {
  return (
    <div className="bg-gray-300 px-4 sm:px-6 md:px-10 pb-16">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row items-center gap-2 pt-10 pb-5 sm:pl-10">
        <img src={Logo} alt="Logo" className="w-8 h-8" />
        <h1 className="font-bold text-2xl sm:text-3xl text-green-600">Business Labs</h1>
      </div>

      <hr className="border-t border-gray-500" />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
        <p className="px-4 py-2 text-md border-2 border-gray-500 hover:text-white hover:bg-black rounded-xl transition-all duration-300">
          Recent Post
        </p>
        <p className="px-4 py-2 text-md border-2 border-gray-500 hover:text-white hover:bg-black rounded-xl transition-all duration-300">
          Important Pages
        </p>
      </div>

      {/* Lists */}
      <div className="flex flex-col md:flex-row justify-center gap-10 mt-8 text-gray-600 font-semibold text-sm sm:text-md">
        <ul className="space-y-2 max-w-md px-4">
          <li>Best Explainer Video Examples (Updated 12 Best Explainer Videos)</li>
          <li>Best Ways to Make 5000 Dollars Online – Updated List</li>
          <li>How To Write Emails That Convert For Real</li>
          <li>Best Copywriters in USA to Help your Business Grow</li>
          <li>How to Change or Increase the WordPress Upload Limits</li>
        </ul>
        <ul className="space-y-2 px-4">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <hr className="mt-10 border-t border-gray-500" />

      {/* Footer bottom */}
      <div className="pt-5 text-center text-gray-600 text-sm sm:text-base">
        <p>All Rights @ 2025 Reserved | Sai Manikanta Varikuti</p>
      </div>
    </div>
  );
};

export default Footer;
