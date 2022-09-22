import { aboutUsText } from "../constants";
import { useRef } from "react";
import AboutUsCard from "./AboutUsCard";
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
          ? "font-[Tajawal] bg-customBlack py-10"
          : "bg-customBlack py-10"
      }
    >
      <div className="container overflow-hidden">
        {lang === "En" && (
          <h1 className="text-2xl font-semibold text-customWhite mb-4">
            #About US
          </h1>
        )}
        {lang === "Ar" && (
          <h1 className="text-2xl font-semibold text-customWhite mb-4">
            #من نحن
          </h1>
        )}
        <div className="flex items-center flex-col  md:flex-row gap-32  py-10">
          <AboutUsCard lang={lang} isInView={isInView} />

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
