import React from "react";
import AliceCarousel from "react-alice-carousel";
import { ClintsText } from "../constants";

import Card from "./Card";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Clints = ({ lang }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  let myArray = ClintsText.map((ele, ind) => {
    return <Card key={ind} lang={lang} isInView={isInView} Text={ele} />;
  });

  return (
    <section
      id="clients"
      dir={lang === "En" ? "ltr" : "rtl"}
      className={
        lang === "Ar"
          ? "font-[Tajawal] bg-customBlack py-20"
          : "bg-customBlack py-20"
      }
      ref={ref}
    >
      <div className="container">
        {lang === "En" && (
          <h3 className="font-semibold text-white mb-10 text-2xl relative">
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
            #Clints or Partners
          </h3>
        )}
        {lang === "Ar" && (
          <h3 className="font-semibold text-white mb-10 text-2xl relative">
            <svg
              className="absolute top-1 -right-1 w-[200px]"
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
            #الزبائن والشركاء
          </h3>
        )}
        <div>
          <AliceCarousel
            mouseTracking
            items={myArray}
            activeIndex={2}
            animationDuration={600}
            autoPlay={true}
            disableButtonsControls={true}
            infinite
            autoPlayInterval={8000}
            autoPlayDirection={lang === "En" ? "ltr" : "rtl"}
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 2,
              },
              1150: {
                items: 3,
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Clints;
