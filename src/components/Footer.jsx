import React from "react";
import { googlePlay, AppStore } from "../assets";

const Footer = ({ lang }) => {
  return (
    <footer
      id="footer"
      dir={lang === "En" ? "ltr" : "rtl"}
      className={
        lang === "Ar"
          ? "font-[Tajawal] bg-customBlack py-20"
          : "bg-customBlack py-20"
      }
    >
      <div className="container">
        <div>
          <h1 className="text-white font-semibold text-lg uppercase">
            Download the app
          </h1>
          <div className="flex gap-6 py-6 justify-center md:justify-start flex-wrap">
            <a href="#">
              <img
                className="h-10 hover:-rotate-3 transition-all duration-300"
                src={AppStore}
                alt="download from app store"
              />
            </a>
            <a href="#">
              <img
                className="h-10 hover:-rotate-3 transition-all duration-300"
                src={googlePlay}
                alt="download from google play"
              />
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-white font-semibold text-lg uppercase">
            Contact us
          </h1>
        </div>
        <div>
          <h1 className="text-white font-semibold text-lg uppercase">
            Contact us
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
