import React from "react";
import { BACCardText } from "../constants";
import { bag, bike } from "../assets";
const BACCard = ({ lang }) => {
  let list = [];
  for (let i = 0; i < 8; i++) {
    const ele = (
      <div key={i} className="w-[260px] text-[12px]">
        Delivery
        <img src={bike} className="h-5 px-2 inline-block " alt="bike" />
        #become a courier
      </div>
    );
    list.push(ele);
  }
  return (
    <div className="BACCard aspect-square">
      <div className="text-black font-semibold left-2 absolute right-2 -top-7 ">
        <div className=" overflow-hidden   ">
          <div
            className={`${lang === "En" ? "moving" : "movingRTL"} flex w-fit`}
          >
            {list}
          </div>
        </div>
      </div>
      {/*left  */}
      <div className="text-black  font-semibold w-[137%] sm:w-[97%] h-fit top-0 -left-2 rotate-90 vertical   absolute  ">
        <div className=" overflow-hidden   ">
          <div
            className={`${lang === "En" ? "moving" : "movingRTL"} flex w-fit`}
          >
            {list}
          </div>
        </div>
      </div>
      {/* right */}
      <div className="text-black  font-semibold w-[137%] sm:w-[97%] h-fit rotate-90 vertical-sec bottom-[-18px] -left-[60px] sm:left-[35px] absolute  ">
        <div className=" overflow-hidden   ">
          <div
            className={`${lang === "En" ? "moving" : "movingRTL"} flex w-fit`}
          >
            {list}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="text-black font-semibold left-2 absolute right-2 -bottom-7 ">
        <div className=" overflow-hidden   ">
          <div
            className={`${lang === "En" ? "moving" : "movingRTL"} flex w-fit`}
          >
            {list}
          </div>
        </div>
      </div>
      {lang === "En" && (
        <div>
          <h1 className="text-white font-semibold leading-tight text-[24px] mb-3">
            {BACCardText.title}{" "}
            <img src={bag} className="inline h-7 -mt-2" alt="bag" />
          </h1>
          <p className="text-white mb-6 text-sm">{BACCardText.subText}</p>
          <a href="#become-a-courier" className="main-btn">
            {BACCardText.btn}
          </a>
        </div>
      )}
      {lang === "Ar" && (
        <div>
          <h1 className="text-white font-semibold leading-tight text-[24px] mb-3">
            {BACCardText.titleAR}
          </h1>
          <p className="text-white mb-6 text-sm">{BACCardText.subTextAR}</p>
          <a href="#become-a-courier" className="main-btn">
            {BACCardText.btnAR}
            <img src={bag} className="inline h-7 -mt-2" alt="bag" />
          </a>
        </div>
      )}
    </div>
  );
};

export default BACCard;
