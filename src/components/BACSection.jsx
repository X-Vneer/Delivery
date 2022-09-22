import React from "react";
import { BACimage } from "../assets";
import { motion } from "framer-motion";
import BACCard from "./BACCard";

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
              whileHover={{
                borderRadius: "28px",
                transition: {
                  type: "spring",
                  stiffness: 150,
                  duration: 1,
                },
              }}
              src={BACimage}
              className=" w-full min-w-[290px] sm:min-w-[380px]  max-w-[450px] "
              alt="A courier"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BACSection;
