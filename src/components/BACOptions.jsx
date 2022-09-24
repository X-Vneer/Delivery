import React from "react";
import { useState } from "react";
import { SI1, SI2, SI3, SI4 } from "../assets";
import BACFeatures from "./BACFeatures";

const images = [SI1, SI2, SI3, SI4];

const BACOptions = ({ lang }) => {
  const [index, setIndex] = useState(1);
  return (
    <div className="features pt-20  ">
      <div className="flex flex-col md:flex-row gap-14 md:gap-10 items-center  ">
        <div className="relative w-[90%] md:w-1/2 flex items-center justify-center hightS min-h-[400px] md:min-h-[370px] lg:min-h-[450px]">
          {images.map((image, ind) => {
            return (
              <img
                key={ind}
                src={image}
                className={`w-full md:w-[380px] rounded-2xl lg:w-[450px] mx-auto ${
                  index === ind + 1 ? "active-image" : ""
                }`}
                role="presentation"
              />
            );
          })}
        </div>
        {/*  */}
        <div className="text-customBlack font-bold">
          <BACFeatures setIndex={setIndex} lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default BACOptions;
