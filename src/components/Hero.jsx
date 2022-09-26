import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { heroText } from "../constants";
import { motion } from "framer-motion";
import {
  googlePlay,
  AppStore,
  image1,
  image2,
  image3,
  image4,
  image5,
} from "../assets";
const handleDragStart = (e) => e.preventDefault();
const items = [
  <img
    src={image1}
    className="mx-auto"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={image2}
    className="mx-auto"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={image3}
    className="mx-auto"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={image4}
    className="mx-auto"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src={image5}
    className="mx-auto"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];
const SVGVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
const Hero = ({ lang }) => {
  return (
    <main
      id="home"
      dir={lang === "En" ? "ltr" : "rtl"}
      className={lang === "Ar" ? "font-[Tajawal]" : ""}
    >
      <div className="container pt-10 pb-14">
        <div className="flex gap-6 items-center justify-between flex-col-reverse md:flex-row">
          <div className="md:w-1/2 ">
            {lang === "En" && (
              <div>
                <h1 className="text-[55px] text-center md:text-left font-bold uppercase text-customBlack tracking-[2px] leading-tight">
                  {heroText.title} <br />{" "}
                  <span className="inline-block relative">
                    <svg
                      className="absolute top-2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 565 92"
                    >
                      <motion.path
                        variants={SVGVariants}
                        initial="hidden"
                        animate="visible"
                        d="M83.246 33.193c-7.645 2.243-136.128 28.625-54.162 46.922C111.05 98.412 515.7 96.346 559.886 42.098 604.073-12.15 186.419.772 138.86 11.057"
                        stroke="#00DBD1"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></motion.path>
                    </svg>
                    {heroText.mainWord}
                  </span>
                </h1>
                <p className="text-sm text-gray-700 py-5 max-w-[310px] mx-auto md:mx-[unset] text-center md:text-left">
                  {heroText.subText}
                </p>
              </div>
            )}
            {/*  */}
            {lang === "Ar" && (
              <div>
                <h1 className="text-[55px] text-center md:text-right font-bold uppercase text-customBlack tracking-[2px] leading-tight">
                  {heroText.titleAR} <br />{" "}
                  <span className="inline-block relative">
                    <svg
                      className="absolute top-7 -left-2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 565 92"
                    >
                      <motion.path
                        variants={SVGVariants}
                        initial="hidden"
                        animate="visible"
                        d="M83.246 33.193c-7.645 2.243-136.128 28.625-54.162 46.922C111.05 98.412 515.7 96.346 559.886 42.098 604.073-12.15 186.419.772 138.86 11.057"
                        stroke="#00DBD1"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></motion.path>
                    </svg>
                    {heroText.mainWordAR}
                  </span>
                </h1>
                <p className="text-sm text-gray-700 py-5 max-w-[310px] mx-auto md:mx-[unset] text-center md:text-right">
                  {heroText.subTextAR}
                </p>
              </div>
            )}
            <div>
              <div className="flex gap-6 py-6 justify-center md:justify-start flex-wrap">
                <a href="#" title="download from app store">
                  <img
                    className="h-12 hover:-rotate-3 transition-all duration-300"
                    src={AppStore}
                    alt="download from app store"
                  />
                </a>
                <a href="#" title="download from google play">
                  <img
                    className="h-12 hover:-rotate-3 transition-all duration-300"
                    src={googlePlay}
                    alt="download from google play"
                  />
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div className=" w-full md:w-1/2 max-w-[400px] bg-customWhite rounded-3xl shadow-md overflow-hidden">
            <AliceCarousel
              mouseTracking
              items={items}
              activeIndex={2}
              animationDuration={600}
              autoPlay={true}
              disableButtonsControls={true}
              disableDotsControls={true}
              infinite
              autoPlayInterval={2000}
              autoPlayDirection={lang === "En" ? "ltr" : "rtl"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
