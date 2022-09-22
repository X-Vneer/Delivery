import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { heroText } from "../constants";

const Hero = () => {
  return (
    <main>
      <div className="container">
        <div className="flex">
          <div className="w-1/2"></div>
          {/*  */}
          <div className="w-1/2 bg-customWhite rounded-2xl "></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
