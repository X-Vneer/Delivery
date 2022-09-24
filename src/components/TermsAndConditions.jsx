import React from "react";
import { termsText } from "../constants";
const TermsAndConditions = ({ lang }) => {
  return (
    <section
      id="terms"
      dir={lang === "En" ? "ltr" : "rtl"}
      className={lang === "Ar" ? "font-[Tajawal]  py-20" : " py-20"}
    >
      <div className="bg-customBlack py-8">
        <div className="container">
          {lang === "En" && (
            <h1 className="text-2xl font-semibold text-customWhite relative">
              <svg
                className="absolute  -left-2 -top-1 w-[290px]"
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
              #Terms and conditions
            </h1>
          )}
          {lang === "Ar" && (
            <h1 className="text-2xl font-semibold text-customWhite relative">
              <svg
                className="absolute  -right-1 w-[240px]"
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
              #الشروط والاحكام
            </h1>
          )}
        </div>
      </div>
      <div className="container py-6">
        <div>
          <h1 className="text-2xl font-semibold text-customBlack mb-6">
            {lang === "En" ? "overview" : "نظرة عامة"}
          </h1>

          <div>
            <p>{lang === "En" ? termsText.overview : termsText.overviewAR}</p>
          </div>

          <div className="text-customBlack mt-10">
            <h1 className="text-2xl font-semibold  mb-6">
              {lang === "En" ? termsText.title : termsText.titleAR}
            </h1>
            <div className="h-[150px] overflow-y-scroll">
              <p>{lang === "En" ? termsText.dec : termsText.decAR}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
