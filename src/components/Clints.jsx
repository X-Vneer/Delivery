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
      id="clints"
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
          <h3 className="font-semibold text-white mb-10 text-2xl">
            #Clints or Partners
          </h3>
        )}
        {lang === "Ar" && (
          <h3 className="font-semibold text-white mb-10 text-2xl">
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
