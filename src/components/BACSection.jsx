import React from "react";
import { BACimage } from "../assets";
import { motion } from "framer-motion";
import BACCard from "./BACCard";
import BACOptions from "./BACOptions";

const BACSection = ({ lang }) => {
  return (
    <section
      id="become-a-courier"
      dir={lang === "En" ? "ltr" : "rtl"}
      className={
        lang === "Ar" ? "font-[Tajawal] bg-customWhite" : "bg-customWhite"
      }
    >
      <div className="container py-20">
        {lang === "En" && (
          <h3 className="font-semibold text-customBlack mb-10 text-2xl relative">
            <svg
              className="absolute  -left-1 w-[240px]"
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
            #Become a caurier
          </h3>
        )}
        {lang === "Ar" && (
          <h3 className="font-semibold text-customBlack mb-10 text-2xl relative">
            <svg
              className="absolute top-2 -right-2 w-[150px]"
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
            #كن موصلاً
          </h3>
        )}
        <div className="flex gap-6 flex-col md:flex-row items-center justify-center">
          <div className="w-1/2 flex  justify-center">
            <BACCard lang={lang} />
          </div>
          <div className="w-1/2 flex justify-center">
            <motion.img
              initial={{
                borderRadius: "230px",
              }}
              transition={{
                duration: 0.4,
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
              src={BACimage}
              className=" w-full min-w-[290px] sm:min-w-[360px]  max-w-[450px] "
              alt="A courier"
            />
          </div>
        </div>
        {/*  */}
        <div>
          <BACOptions lang={lang} />
        </div>
      </div>
    </section>
  );
};

export default BACSection;
