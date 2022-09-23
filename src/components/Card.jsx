import { motion } from "framer-motion";

const Card = ({ lang, isInView, Text }) => {
  const varaints = {
    hidden: {
      opacity: 0,
      rotate: 0,
    },
    inView: {
      rotate: -14,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 200,
        delay: 0.25,
      },
    },
  };

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
    <div
      className={`max-w-[390px] relative m-8 pointer-events-none ${
        lang === "En" ? "" : "text-right"
      }`}
    >
      <motion.div
        variants={varaints}
        initial="hidden"
        whileInView="inView"
        className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl bg-[#3f3f3f] "
      ></motion.div>
      {lang === "En" && (
        <div className="relative bg-customWhite rounded-3xl p-10 ">
          <motion.h3
            variants={textVaraints}
            custom={0}
            initial="hidden"
            animate={isInView && "visible"}
            className="font-semibold mb-3 text-xl"
          >
            {Text.cardTitle}
          </motion.h3>

          <motion.p
            variants={textVaraints}
            custom={1}
            initial="hidden"
            animate={isInView && "visible"}
            className="pb-6 text-gray-700 "
          >
            {Text.cardText1}
          </motion.p>

          <motion.p
            variants={textVaraints}
            custom={2}
            initial="hidden"
            animate={isInView && "visible"}
            className=" text-gray-700 "
          >
            {Text.cardText2}
          </motion.p>
        </div>
      )}
      {lang === "Ar" && (
        <div className="relative bg-customWhite rounded-3xl p-10 ">
          <motion.h3
            variants={textVaraints}
            custom={0}
            initial="hidden"
            animate={isInView && "visible"}
            className="font-semibold mb-3 text-xl"
          >
            {Text.cardTitleAR}
          </motion.h3>

          <motion.p
            variants={textVaraints}
            custom={1}
            initial="hidden"
            animate={isInView && "visible"}
            className="pb-6 text-gray-700 "
          >
            {Text.cardText1AR}
          </motion.p>

          <motion.p
            variants={textVaraints}
            custom={2}
            initial="hidden"
            animate={isInView && "visible"}
            className=" text-gray-700 "
          >
            {Text.cardText2AR}
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default Card;
