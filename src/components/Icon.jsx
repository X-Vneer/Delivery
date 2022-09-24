import React from "react";

const Icon = ({ icon }) => {
  return (
    <div className=" w-12  h-12 min-w-[45px] sm:w-16 sm:h-16 rounded-full bg-[#3f3f3f] flex items-center justify-center ">
      <img src={icon} className=" w-5 sm:w-10" alt="icon" />
    </div>
  );
};

export default Icon;
