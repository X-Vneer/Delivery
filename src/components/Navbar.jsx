import React, { useState } from "react";
import { logo } from "../assets";

const Navbar = ({ lang, setLang }) => {
  const [opened, setOpened] = useState(false);

  return (
    <header
      dir={lang === "En" ? "ltr" : "rtl"}
      className={lang === "Ar" ? "font-[Tajawal]" : ""}
    >
      <div className="container relative py-2">
        <div className="flex items-center justify-between">
          <img className="fill-main  h-12 lg:h-14" src={logo} alt="logo" />

          {lang === "En" && (
            <nav className="nav">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about-us">About us</a>
                </li>
                <li>
                  <a href="#terms-and-conditions">terms & conditions </a>
                </li>
                <li>
                  <a href="#become-a-courier">become a courier </a>
                </li>
                <li>
                  <a href="#contact-us">contact us</a>
                </li>
                <li>
                  <select
                    name="lang"
                    id="lang"
                    className="hover:text-main transition-all duration-300 focus:outline-none uppercase mx-auto"
                    value={lang}
                    onChange={(e) => {
                      setLang(e.target.value);
                    }}
                  >
                    <option value="En">en</option>
                    <option value="Ar">ar</option>
                  </select>
                </li>
              </ul>
              <a href="#become-a-courier" className="main-btn">
                become a courier
              </a>
            </nav>
          )}
          {lang === "Ar" && (
            <nav className="nav">
              <ul>
                <li>
                  <a href="#home">رئيسية</a>
                </li>
                <li>
                  <a href="#about-us">من نحن</a>
                </li>
                <li>
                  <a href="#terms-and-conditions">الشروط و الاحكام </a>
                </li>
                <li>
                  <a href="#become-a-courier">كن موصلاً </a>
                </li>
                <li>
                  <a href="#contact-us">تواصل معنا</a>
                </li>
                <li>
                  <select
                    name="lang"
                    id="lang"
                    className="hover:text-main transition-all duration-300 focus:outline-none uppercase mx-auto"
                    value={lang}
                    onChange={(e) => {
                      setLang(e.target.value);
                    }}
                  >
                    <option value="En">en</option>
                    <option value="Ar">ar</option>
                  </select>
                </li>
              </ul>
              <a href="#become-a-courier" className="main-btn">
                كن موصلاً
              </a>
            </nav>
          )}
          {/* mobile nav */}
          <button
            id="menu-btn"
            onClick={() => {
              setOpened((pre) => !pre);
            }}
            className={`block hamburger lg:hidden focus:outline-none ${
              opened ? "open" : ""
            } `}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
          <nav className={`mobile-nav ${opened ? "opened" : ""}`}>
            {lang === "En" && (
              <>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about-us">About us</a>
                  </li>
                  <li>
                    <a href="#terms-and-conditions">terms & conditions </a>
                  </li>
                  <li>
                    <a href="#become-a-courier">become a courier </a>
                  </li>
                  <li>
                    <a href="#contact-us">contact us</a>
                  </li>
                  <select
                    name="lang"
                    id="lang"
                    className="hover:text-main transition-all duration-300 focus:outline-none uppercase mx-auto bg-customWhite"
                    value={lang}
                    onChange={(e) => {
                      setLang(e.target.value);
                    }}
                  >
                    <option value="En">en</option>
                    <option value="Ar">ar</option>
                  </select>
                </ul>
                <a href="#become-a-courier" className="main-btn">
                  become a courier
                </a>
              </>
            )}
            {lang === "Ar" && (
              <>
                <ul>
                  <li>
                    <a href="#home">رئيسية</a>
                  </li>
                  <li>
                    <a href="#about-us">من نحن</a>
                  </li>
                  <li>
                    <a href="#terms-and-conditions">الشروط والاحكام</a>
                  </li>
                  <li>
                    <a href="#become-a-courier">كن موصلاً </a>
                  </li>
                  <li>
                    <a href="#contact-us">تواصل معنا</a>
                  </li>
                  <select
                    name="lang"
                    id="lang"
                    className="hover:text-main transition-all duration-300 focus:outline-none uppercase mx-auto bg-customWhite"
                    value={lang}
                    onChange={(e) => {
                      setLang(e.target.value);
                    }}
                  >
                    <option value="En">en</option>
                    <option value="Ar">ar</option>
                  </select>
                </ul>
                <a href="#become-a-courier" className="main-btn">
                  كن موصلاً
                </a>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
