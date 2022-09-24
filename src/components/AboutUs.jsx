import { aboutUsText } from "../constants";

import Card from "./Card";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
const AboutUs = ({ lang }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const textVaraints = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: custom * 0.2,
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="about-us"
      dir={lang === "En" ? "ltr" : "rtl"}
      className={
        lang === "Ar"
          ? "font-[Tajawal] bg-customBlack py-20"
          : "bg-customBlack py-20"
      }
    >
      <div className="container pt-10 overflow-hidden">
        {lang === "En" && (
          <h1 className="text-2xl font-semibold text-customWhite mb-4 relative">
            <svg
              className="absolute top-1 -left-1 w-[170px]"
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
            #About US
          </h1>
        )}
        {lang === "Ar" && (
          <h1 className="text-2xl font-semibold text-customWhite mb-4 relative">
            <svg
              className="absolute top-2 -right-3 w-[120px]"
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
            #من نحن
          </h1>
        )}
        <div className="flex items-center flex-col  md:flex-row gap-32  py-10">
          <Card lang={lang} isInView={isInView} Text={aboutUsText} />

          {/*  */}
          {lang === "En" && (
            <div className="p-4">
              <motion.h3
                variants={textVaraints}
                custom={0}
                initial="hidden"
                animate={isInView && "visible"}
                className="font-semibold mb-3 text-xl text-white"
              >
                {aboutUsText.sideTitle}
              </motion.h3>

              <motion.p
                variants={textVaraints}
                custom={1}
                initial="hidden"
                animate={isInView && "visible"}
                className="pb-6 text-gray-300"
              >
                {aboutUsText.cardText1}
              </motion.p>

              <motion.p
                variants={textVaraints}
                custom={2}
                initial="hidden"
                animate={isInView && "visible"}
                className=" text-gray-300 "
              >
                {aboutUsText.cardText2}
              </motion.p>
            </div>
          )}
          {lang === "Ar" && (
            <div className="p-4">
              <motion.h3
                variants={textVaraints}
                custom={0}
                initial="hidden"
                animate={isInView && "visible"}
                className="font-semibold mb-3 text-xl text-white"
              >
                {aboutUsText.sideTitleAR}
              </motion.h3>

              <motion.p
                variants={textVaraints}
                custom={1}
                initial="hidden"
                animate={isInView && "visible"}
                className="pb-6 text-gray-300"
              >
                {aboutUsText.cardText1AR}
              </motion.p>

              <motion.p
                variants={textVaraints}
                custom={2}
                initial="hidden"
                animate={isInView && "visible"}
                className=" text-gray-300 "
              >
                {aboutUsText.cardText2AR}
              </motion.p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
