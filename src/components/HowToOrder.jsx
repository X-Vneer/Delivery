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

const HowToOrder = ({ lang }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <section
      ref={ref}
      id="how-to-order"
      dir={lang === "En" ? "ltr" : "rtl"}
      className={lang === "Ar" ? "font-[Tajawal]  py-20" : " py-20"}
    >
      <div className="container">
        {lang === "En" && (
          <h1 className="text-2xl font-semibold text-customBlack capitalize mb-4">
            #how to order
          </h1>
        )}
        {lang === "Ar" && (
          <h1 className="text-2xl font-semibold text-customBlack capitalize mb-4">
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
          {/*  */}
          <HTOCard
            ind={2}
            isInView={useInView}
            icon={icon2}
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
          <HTOCard
            ind={4}
            isInView={isInView}
            icon={icon3}
            text={HTOText[2]}
            lang={lang}
          />
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
