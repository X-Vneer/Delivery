import React from "react";
import {
  googlePlay,
  AppStore,
  hello,
  candy,
  email,
  terms,
  phone,
  emailIcon,
  tel,
  whats,
  insta,
} from "../assets";
import { footerText } from "../constants";
import Icon from "./Icon";

const Footer = ({ lang }) => {
  return (
    <footer
      id="footer"
      dir={lang === "En" ? "ltr" : "rtl"}
      className={
        lang === "Ar"
          ? "font-[Tajawal] bg-customBlack pb-20 pt-10"
          : "bg-customBlack pb-20 pt-10"
      }
    >
      <div className="container py-5">
        <div className="flex gap-5  justify-center sm:justify-end mb-5">
          <a href="">
            <img src={whats} className="w-10 bg-white rounded-full" alt="" />
          </a>
          <a href=" ">
            <img src={insta} className="w-10" alt="instagram" />
          </a>
          <a href=" ">
            <img src={tel} className="w-10" alt="instagram" />
          </a>
        </div>
        <div className="flex gap-5  sm:gap-9 mb-16">
          <Icon icon={hello} />
          <div>
            <h1 className="text-white font-semibold text-lg sm:text-xl uppercase">
              {lang === "En" ? " Download the application" : "تحميل التطبيق"}
            </h1>
            <div className="flex gap-4 py-6 justify-center md:justify-start flex-wrap f-full shrink">
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
        </div>
        {/*  */}
        <div className="flex gap-5  sm:gap-9 mb-16">
          <Icon icon={email} />
          <div>
            <h1 className="text-white font-semibold text-lg sm:text-xl mb-8 uppercase">
              {lang === "En" ? "Support and contact" : "التواصل والدعم"}
            </h1>
            <div>
              {/*  */}
              <div className="mb-10">
                <h1 className="text-white font-semibold mb-4  text  uppercase">
                  {lang === "En"
                    ? footerText.contact.title1
                    : footerText.contact.title1AR}
                </h1>
                <div className="flex flex-col sm:flex-row gap-5">
                  <a href="# " className="text-main hover:underline ">
                    <img
                      src={phone}
                      className="w-10 inline-block px-2"
                      alt="icon"
                    />
                    <span>{footerText.contact.num1}</span>
                  </a>
                  <a href="# " className="text-main hover:underline   ">
                    <img
                      src={emailIcon}
                      className="w-10 inline-block px-2"
                      alt="icon"
                    />
                    <span>{footerText.contact.mail1}</span>
                  </a>
                </div>
              </div>
              {/*  */}
              <div className="mb-10">
                <h1 className="text-white font-semibold mb-4  text  uppercase">
                  {lang === "En"
                    ? footerText.contact.title2
                    : footerText.contact.title2AR}
                </h1>

                <div className="flex flex-col sm:flex-row gap-5">
                  <a href="# " className="text-main hover:underline ">
                    <img
                      src={phone}
                      className="w-10 inline-block px-2"
                      alt="icon"
                    />
                    <span>{footerText.contact.num2}</span>
                  </a>
                  <a href="# " className="text-main hover:underline  ">
                    <img
                      src={emailIcon}
                      className="w-10 inline-block px-2"
                      alt="icon"
                    />
                    <span>{footerText.contact.mail2}</span>
                  </a>
                </div>
              </div>
              {/*  */}
              <div className="mb-10">
                <h1 className="text-white font-semibold mb-4  text  uppercase">
                  {lang === "En"
                    ? footerText.contact.title3
                    : footerText.contact.title3AR}
                </h1>
                <div className="flex flex-col sm:flex-row gap-5">
                  <a href="# " className="text-main hover:underline ">
                    <img
                      src={phone}
                      className="w-10 inline-block px-2"
                      alt="icon"
                    />
                    <span>{footerText.contact.num3}</span>
                  </a>
                  <a href="# " className="text-main hover:underline  ">
                    <img
                      src={emailIcon}
                      className="w-10 inline-block px-2"
                      alt="icon"
                    />
                    <span>{footerText.contact.mail3}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="flex gap-5  sm:gap-9 mb-16">
            <Icon icon={candy} />
            <div>
              <h1 className="text-white font-semibold mb-8 text-lg sm:text-xl uppercase">
                {lang === "En" ? footerText.title : footerText.titleAR}
              </h1>
              <p className="text-white">
                {lang === "En" ? footerText.dec : footerText.decAR}
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="flex gap-5  sm:gap-9 mb-10">
            <Icon icon={terms} />
            <div>
              <h1 className="text-white font-semibold mb-8 text-lg sm:text-xl uppercase">
                {lang === "En" ? "Terms and Conditions" : "الشروط والاحكام"}
              </h1>
              {lang === "En" ? (
                <p className="text-white">
                  Please, read the terms of use. <br /> and refund policies.
                </p>
              ) : (
                <p className="text-white">
                  الرجاء قرائة الشروط والاحكام <br />و سياسات الاسترداد
                </p>
              )}
              <a href="#terms" className="text-main text-sm">
                general terms of use
              </a>
            </div>
          </div>
        </div>
        <hr className="border-customWhite bg-customWhite" />
        <div>
          {lang === "En" ? (
            <span className="block py-4 text-white">
              All rights reserved &copy; 2022
            </span>
          ) : (
            <span className="block py-4 text-white">
              جميع الحقوق محفوظة &copy; 2022
            </span>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
