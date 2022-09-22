import React from "react";
import { BACCardText } from "../constants";

const BACCard = ({ lang }) => {
  return (
    <div className="px-10 py-20 uppercase bg-main rounded-3xl sm:min-w-[350px] max-w-[370px]">
      {lang === "En" && (
        <>
          <h1 className="text-white font-semibold leading-tight text-[26px] mb-3">
            {BACCardText.title}
          </h1>
          <p className="text-white mb-6 text-sm">{BACCardText.subText}</p>
          <a href="#become-a-courier" className="main-btn">
            {BACCardText.btn}
          </a>
        </>
      )}
      {lang === "Ar" && (
        <>
          <h1 className="text-white font-semibold leading-tight text-[26px] mb-3">
            {BACCardText.titleAR}
          </h1>
          <p className="text-white mb-6 text-sm">{BACCardText.subTextAR}</p>
          <a href="#become-a-courier" className="main-btn">
            {BACCardText.btnAR}
          </a>
        </>
      )}
    </div>
  );
};

export default BACCard;
