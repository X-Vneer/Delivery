import React, { useState } from "react";
import { logo, up } from "../assets";

const Navbar = ({ lang, setLang }) => {
  const style =
    "absolute top-12 duration-300 group-hover:top-6 -left-2 -right-2 py-1 bg-white -z-10 opacity-0 group-hover:opacity-100 group-hover:z-10 shadow-md rounded-md flex flex-col items-center justify-center gap-1";
  const [opened, setOpened] = useState(false);

  return (
    <header
      dir={lang === "En" ? "ltr" : "rtl"}
      className={lang === "Ar" ? "font-[Tajawal]" : ""}
    >
      <div className="container relative py-2">
        <div className="flex items-center justify-between">
          <a href="#home" title="home">
            <img className="fill-main  h-12 lg:h-14" src={logo} alt="logo" />
          </a>

          {lang === "En" && (
            <nav className="nav">
              <ul>
                <li>
                  <a href="#how-to-order">How to order</a>
                </li>
                <li>
                  <a href="#about-us">About us</a>
                </li>
                <li>
                  <a href="#clients">Clients or Partners</a>
                </li>

                <li>
                  <a href="#footer">contact us</a>
                </li>
                <li className="relative group">
                  <span className="flex gap-1 group-hover:text-main transition-all duration-300">
                    {lang}{" "}
                    <img
                      src={up}
                      className="w-3 rotate-180 group-hover:rotate-0 duration-300"
                      alt=""
                    />
                  </span>
                  <ul className={style}>
                    <li
                      role="button"
                      onClick={() => {
                        window.localStorage.setItem("lang", "En");
                        setLang("En");
                      }}
                      className="hover:text-main duration-300 cursor-pointer"
                    >
                      En
                    </li>
                    <li
                      role="button"
                      onClick={() => {
                        window.localStorage.setItem("lang", "Ar");

                        setLang("Ar");
                      }}
                      className="hover:text-main duration-300 cursor-pointer"
                    >
                      Ar
                    </li>
                  </ul>
                </li>
              </ul>
              <a href="#become-a-courier" className="main-btn">
                become a courier
              </a>
            </nav>
          )}
          {lang === "Ar" && (
            <nav className="nav gap-10">
              <ul className="gap-7">
                <li>
                  <a href="#how-to-order">كيفية الطلب</a>
                </li>
                <li>
                  <a href="#about-us">من نحن</a>
                </li>
                <li>
                  <a href="#clients">الزبائن والشركاء </a>
                </li>

                <li>
                  <a href="#footer">تواصل معنا</a>
                </li>
                <li className="relative group">
                  <span className="flex gap-1 group-hover:text-main transition-all duration-300">
                    {lang}{" "}
                    <img
                      src={up}
                      className="w-3 rotate-180 group-hover:rotate-0 duration-300"
                      alt=""
                    />
                  </span>
                  <ul className={style}>
                    <li
                      role="button"
                      onClick={() => {
                        window.localStorage.setItem("lang", "En");

                        setLang("En");
                      }}
                      className="hover:text-main duration-300 cursor-pointer"
                    >
                      En
                    </li>
                    <li
                      role="button"
                      onClick={() => {
                        window.localStorage.setItem("lang", "Ar");

                        setLang("Ar");
                      }}
                      className="hover:text-main duration-300 cursor-pointer"
                    >
                      Ar
                    </li>
                  </ul>
                </li>
              </ul>
              <a href="#become-a-courier" className="main-btn">
                كن موصلاً
              </a>
            </nav>
          )}
          {/* mobile nav */}
          <button
            type="button"
            aria-label="open and close navbar"
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
                    <a href="#how-to-order">how to order</a>
                  </li>
                  <li>
                    <a href="#about-us">About us</a>
                  </li>
                  <li>
                    <a href="#clients">Clients or Partners</a>
                  </li>

                  <li>
                    <a href="#footer">contact us</a>
                  </li>
                  <li className="relative group max-w-[100px] mx-auto">
                    <span className="flex gap-1 group-hover:text-main transition-all duration-300">
                      {lang}{" "}
                      <img
                        src={up}
                        className="w-3 rotate-180 group-hover:rotate-0 duration-300"
                        alt=""
                      />
                    </span>
                    <ul className={style}>
                      <li
                        onClick={() => {
                          window.localStorage.setItem("lang", "En");

                          setLang("En");
                        }}
                        className="hover:text-main duration-300 cursor-pointer"
                      >
                        En
                      </li>
                      <li
                        onClick={() => {
                          window.localStorage.setItem("lang", "Ar");

                          setLang("Ar");
                        }}
                        className="hover:text-main duration-300 cursor-pointer"
                      >
                        Ar
                      </li>
                    </ul>
                  </li>
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
                    <a href="#how-to-order">كيفية الطلب</a>
                  </li>
                  <li>
                    <a href="#about-us">من نحن</a>
                  </li>
                  <li>
                    <a href="#clients">الزبائن والشركاء </a>
                  </li>

                  <li>
                    <a href="#footer">تواصل معنا</a>
                  </li>
                  <li className="relative group max-w-[100px] mx-auto">
                    <span className="flex gap-1 group-hover:text-main transition-all duration-300">
                      {lang}{" "}
                      <img
                        src={up}
                        className="w-3 rotate-180 group-hover:rotate-0 duration-300"
                        alt=""
                      />
                    </span>
                    <ul className={style}>
                      <li
                        role="button"
                        onClick={() => {
                          window.localStorage.setItem("lang", "En");

                          setLang("En");
                        }}
                        className="hover:text-main duration-300 cursor-pointer"
                      >
                        En
                      </li>
                      <li
                        role="button"
                        onClick={() => {
                          window.localStorage.setItem("lang", "Ar");

                          setLang("Ar");
                        }}
                        className="hover:text-main duration-300 cursor-pointer"
                      >
                        Ar
                      </li>
                    </ul>
                  </li>
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
