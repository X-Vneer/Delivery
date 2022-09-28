import React from "react";
import { motion } from "framer-motion";
const HTOCard = ({ isInView, icon, text, ind, lang }) => {
  const delay = Math.round((ind * 0.2 + 0.2) * 100) / 100;
  return (
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
                delay,
                duration: 0.7,
              },
            }
          : {}
      }
      className="bg-customWhite rounded-3xl  p-10 flex flex-col justify-between text-customBlack max-w-[400px] mx-auto min-h-[330px] h-full"
    >
      <img src={icon} className="w-10 mb-8" alt="icon" />
      <div>
        <h1 className="text-lg uppercase font-bold ">
          {lang === "En" && text.title}
          {lang === "Ar" && text.titleAR}
        </h1>
        <p>
          {lang === "En" && text.dec}
          {lang === "Ar" && text.decAR}
        </p>
      </div>
    </motion.div>
  );
};

export default HTOCard;
