import React from "react";
import {
  HTO1,
  HTO2,
  icon1,
  icon2,
  icon3,
  AppStore,
  googlePlay,
} from "../assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HTOCard from "./HTOCard";
import { HTOText } from "../constants";
const SVGVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      delay: 1.6,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
const SVGVariants2 = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      delay: 3,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const HowToOrder = ({ lang }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section
      ref={ref}
      id="how-to-order"
      dir={lang === "En" ? "ltr" : "rtl"}
      className={lang === "Ar" ? "font-[Tajawal]  py-20" : " py-20"}
    >
      <div className="container">
        {lang === "En" && (
          <h1 className="text-2xl font-semibold text-customBlack capitalize mb-4 relative">
            <svg
              className="absolute  -left-2 top-1 w-[200px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 565 92"
            >
              <path
                d="M83.246 33.193c-7.645 2.243-136.128 28.625-54.162 46.922C111.05 98.412 515.7 96.346 559.886 42.098 604.073-12.15 186.419.772 138.86 11.057"
                stroke="#00DBD1"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
            #how to order
          </h1>
        )}
        {lang === "Ar" && (
          <h1 className="text-2xl font-semibold text-customBlack capitalize mb-4 relative">
            <svg
              className="absolute  -right-2 top-1 w-[170px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 565 92"
            >
              <path
                d="M83.246 33.193c-7.645 2.243-136.128 28.625-54.162 46.922C111.05 98.412 515.7 96.346 559.886 42.098 604.073-12.15 186.419.772 138.86 11.057"
                stroke="#00DBD1"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
            #كيفية الطلب
          </h1>
        )}

        <div className="HTO-grid py-10 mx-auto max-w-[1350px] bg-white ">
          {/*  */}
          <HTOCard
            ind={0}
            isInView={isInView}
            icon={icon1}
            text={HTOText[0]}
            lang={lang}
          />
          {/*  */}
          <div className="relative">
            {lang === "En" && (
              <>
                <svg
                  className="absolute -left-9 -right-9 hidden lg:block"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 282 109"
                >
                  <motion.path
                    variants={SVGVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : ""}
                    d="M1 18.05c5.27-.84 68.9-30.97 119.36-7.85 58.73 26.92 24.7 71.09 6.02 54.96-9.41-8.13 36.52-38.7 64.38-12.34 27.87 26.36 54.22 45.7 89.24 51.03"
                    stroke="#00DAD0"
                  ></motion.path>
                  <motion.path
                    variants={SVGVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : ""}
                    d="m273.14 96 7.16 8.13-11.3 3.65"
                    stroke="#00DAD0"
                  ></motion.path>
                </svg>
                <svg
                  className="absolute origin-top-left left-[80%] -top-10 rotate-90 -bottom-10 h-[170px] md:h-[100px] md:left-0 md:bottom-0 md:top-[unset]  lg:hidden"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 282 109"
                >
                  <motion.path
                    variants={SVGVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : ""}
                    d="M1 18.05c5.27-.84 68.9-30.97 119.36-7.85 58.73 26.92 24.7 71.09 6.02 54.96-9.41-8.13 36.52-38.7 64.38-12.34 27.87 26.36 54.22 45.7 89.24 51.03"
                    stroke="#00DAD0"
                  ></motion.path>
                  <motion.path
                    variants={SVGVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : ""}
                    d="m273.14 96 7.16 8.13-11.3 3.65"
                    stroke="#00DAD0"
                  ></motion.path>
                </svg>
              </>
            )}
            {lang === "Ar" && (
              <>
                <svg
                  className="absolute -left-9 -right-9 -rotate-180 hidden lg:block"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 282 109"
                >
                  <motion.path
                    variants={SVGVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : ""}
                    d="M1 18.05c5.27-.84 68.9-30.97 119.36-7.85 58.73 26.92 24.7 71.09 6.02 54.96-9.41-8.13 36.52-38.7 64.38-12.34 27.87 26.36 54.22 45.7 89.24 51.03"
                    stroke="#00DAD0"
                  ></motion.path>
                  <motion.path
                    variants={SVGVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : ""}
                    d="m273.14 96 7.16 8.13-11.3 3.65"
                    stroke="#00DAD0"
                  ></motion.path>
                </svg>
                <svg
                  className="absolute origin-top-left left-[80%] -top-10 rotate-90 -bottom-10 h-[170px] md:h-[100px] md:left-[620px] md:bottom-0 md:top-[unset]  lg:hidden"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 282 109"
                >
                  <motion.path
                    variants={SVGVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : ""}
                    d="M1 18.05c5.27-.84 68.9-30.97 119.36-7.85 58.73 26.92 24.7 71.09 6.02 54.96-9.41-8.13 36.52-38.7 64.38-12.34 27.87 26.36 54.22 45.7 89.24 51.03"
                    stroke="#00DAD0"
                  ></motion.path>
                  <motion.path
                    variants={SVGVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : ""}
                    d="m273.14 96 7.16 8.13-11.3 3.65"
                    stroke="#00DAD0"
                  ></motion.path>
                </svg>
              </>
            )}
            <motion.img
              initial={{
                y: 150,
                opacity: 0,
              }}
              animate={
                isInView
                  ? {
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.4,
                        duration: 0.7,
                      },
                    }
                  : {}
              }
              src={HTO1}
              className="rounded-3xl w-full max-w-[400px] mx-auto"
              alt=""
            />
          </div>
          {/*  */}
          <HTOCard
            ind={2}
            isInView={isInView}
            icon={icon3}
            text={HTOText[1]}
            lang={lang}
          />
          {/*  */}
          <motion.img
            initial={{
              borderRadius: "230px",
              y: 150,
              opacity: 0,
            }}
            animate={
              isInView
                ? {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.8,
                      duration: 0.7,
                    },
                  }
                : {}
            }
            transition={{
              duration: 0.7,
            }}
            whileTap={{
              borderRadius: "28px",
              transition: {
                type: "spring",
                stiffness: 150,
                duration: 1,
              },
            }}
            whileHover={{
              borderRadius: "28px",
              transition: {
                type: "spring",
                stiffness: 150,
                duration: 1,
              },
            }}
            src={HTO2}
            className=" w-full max-w-[400px] mx-auto"
            alt="A courier"
          />
          {/*  */}
          <div className="relative">
            {lang === "En" && (
              <>
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 190 128"
                  className="absolute w-[190px] hidden lg:block -top-24 -right-24"
                >
                  <motion.path
                    variants={SVGVariants2}
                    initial="hidden"
                    animate={isInView ? "visible" : ""}
                    d="M6.8 126.2 1.34 116M6.8 126.2l8.6-6.57m-8.6 6.57c3.52-15.67 14.9-51 32.3-66.94 10.43-9.57 20.82-9.25 28.95-5.08M188.38.56c-10.17 16.58-47.76 1.84-75.82 11.53-18.19 6.28-35.4 24.3-44.51 42.1m0 0c-4.38 8.55-6.9 17.05-6.76 24.17.42 21.97 25.74 24.6 22.4-4.64-.69-5.95-6.84-15-15.64-19.53Z"
                    stroke="#00DAD0"
                  ></motion.path>
                </svg>
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 190 128"
                  className="absolute w-[170px]  lg:hidden  left-16
               -top-[75px]"
                >
                  <motion.path
                    variants={SVGVariants2}
                    initial="hidden"
                    animate={isInView ? "visible" : ""}
                    d="M6.8 126.2 1.34 116M6.8 126.2l8.6-6.57m-8.6 6.57c3.52-15.67 14.9-51 32.3-66.94 10.43-9.57 20.82-9.25 28.95-5.08M188.38.56c-10.17 16.58-47.76 1.84-75.82 11.53-18.19 6.28-35.4 24.3-44.51 42.1m0 0c-4.38 8.55-6.9 17.05-6.76 24.17.42 21.97 25.74 24.6 22.4-4.64-.69-5.95-6.84-15-15.64-19.53Z"
                    stroke="#00DAD0"
                  ></motion.path>
                </svg>
              </>
            )}
            {lang === "Ar" && (
              <>
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 190 128"
                  className="absolute w-[190px] hidden -rotate-90 origin-bottom-left lg:block -top-24 left-8"
                >
                  <motion.path
                    variants={SVGVariants2}
                    initial="hidden"
                    animate={isInView ? "visible" : ""}
                    d="M6.8 126.2 1.34 116M6.8 126.2l8.6-6.57m-8.6 6.57c3.52-15.67 14.9-51 32.3-66.94 10.43-9.57 20.82-9.25 28.95-5.08M188.38.56c-10.17 16.58-47.76 1.84-75.82 11.53-18.19 6.28-35.4 24.3-44.51 42.1m0 0c-4.38 8.55-6.9 17.05-6.76 24.17.42 21.97 25.74 24.6 22.4-4.64-.69-5.95-6.84-15-15.64-19.53Z"
                    stroke="#00DAD0"
                  ></motion.path>
                </svg>
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 190 128"
                  className="absolute w-[170px]  lg:hidden  left-16 -top-[75px]"
                >
                  <motion.path
                    variants={SVGVariants2}
                    initial="hidden"
                    animate={isInView ? "visible" : ""}
                    d="M6.8 126.2 1.34 116M6.8 126.2l8.6-6.57m-8.6 6.57c3.52-15.67 14.9-51 32.3-66.94 10.43-9.57 20.82-9.25 28.95-5.08M188.38.56c-10.17 16.58-47.76 1.84-75.82 11.53-18.19 6.28-35.4 24.3-44.51 42.1m0 0c-4.38 8.55-6.9 17.05-6.76 24.17.42 21.97 25.74 24.6 22.4-4.64-.69-5.95-6.84-15-15.64-19.53Z"
                    stroke="#00DAD0"
                  ></motion.path>
                </svg>
              </>
            )}

            <HTOCard
              ind={4}
              isInView={isInView}
              icon={icon3}
              text={HTOText[2]}
              lang={lang}
            />
          </div>
          {/*  */}
          <motion.div
            initial={{
              y: 150,
              opacity: 0,
            }}
            animate={
              isInView
                ? {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 1.2,
                      duration: 0.7,
                    },
                  }
                : {}
            }
            className="bg-main rounded-3xl min-h-[330px] max-w-[400px] mx-auto flex justify-end flex-col p-10 "
          >
            <div>
              <h1 className="uppercase font-bold text-3xl text-white  ">
                {lang === "En" ? "Download the app" : "حمل التطبيق"}
              </h1>
              <div className="flex gap-4 py-6 justify-center md:justify-start ">
                <a href="#">
                  <img
                    className="h-7 hover:-rotate-3 transition-all duration-300"
                    src={AppStore}
                    alt="download from app store"
                  />
                </a>
                <a href="#">
                  <img
                    className="h-7 hover:-rotate-3 transition-all duration-300"
                    src={googlePlay}
                    alt="download from google play"
                  />
                </a>
              </div>
            </div>
          </motion.div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
