import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const map = () => {
  return (
    <div className="w-full h-screen items-center justify-center bg-gray-200 pb-20">
        <div>
            <h3 className="text-2xl font-bold text-black text-center pb-5">OUR CLIENTS ARE ALL OVER THE WORLD</h3>
        </div>
      <DotLottieReact
        src="https://lottie.host/f047e676-288b-40f3-a0d7-b30296adae70/TwHtvIPNaQ.lottie"
        loop
        autoplay
        style={{ width: 1200, height: 700 }}
        className="justify-center mx-auto"
      />
    </div>
  );
};

export default map;
