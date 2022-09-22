import React, { useState } from "react";
import { logo } from "../assets";
import Button from "./Button";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <header>
      <div className="container relative py-2">
        <div className="flex items-center justify-between">
          <img className="fill-main  h-12 lg:h-14" src={logo} alt="logo" />
          <nav className="nav">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about-us">About us</a>
              </li>
              <li>
                <a href="#terms-&-conditions">terms & conditions </a>
              </li>
              <li>
                <a href="#become-a-courier">become a courier </a>
              </li>
              <li>
                <a href="#contact-us">contact us</a>
              </li>
            </ul>
            <Button text="become a courier" />
          </nav>
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
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about-us">About us</a>
              </li>
              <li>
                <a href="#terms-&-conditions">terms & conditions </a>
              </li>
              <li>
                <a href="#become-a-courier">become a courier </a>
              </li>
              <li>
                <a href="#contact-us">contact us</a>
              </li>
            </ul>
            <Button text="become a courier" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
