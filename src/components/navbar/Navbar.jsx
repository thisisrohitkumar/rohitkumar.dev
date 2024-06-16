import React, { useState } from "react";
import "./navbar.scss";
import { FaToggleOff, FaToggleOn, FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [mobNav, setMobNav] = useState(false);

  const switchTheme = () => {
    setIsDarkModeActive(!isDarkModeActive);
    document.body.classList.toggle("dark__mode");
  };

  const showMobileNav = () => {
    const mobileNav = document.querySelector(".mobile__nav");
    !mobNav ? mobileNav.style.left="0" : mobileNav.style.left="100%";
    setMobNav(!mobNav);
   }

  return (
    <>
      <nav className="nav">
        <ul>
          <li className="nav__item">
            <em>01.</em> Profile
          </li>
          <li className="nav__item">
            <em>02.</em> Experiences
          </li>
          <li className="nav__item">
            <em>03.</em> Projects
          </li>
          <li className="nav__item">
            <em>04.</em> Skills
          </li>
          <li className="nav__item">
            <em>05.</em> Contact
          </li>
          <li className="hireme">Hire Me</li>
          <li onClick={switchTheme} className="nav__item">
            {isDarkModeActive ? (
              <FaToggleOn className="switch" title="Switch to Light Mode" />
            ) : (
              <FaToggleOff className="switch" title="Switch to Dark Mode" />
            )}
          </li>
          <li className="menu__btn" title="Menu" onClick={showMobileNav}>
            {mobNav ? <IoClose className="menu__trigger"/> : <FaBarsStaggered className="menu__trigger" />}
          </li>
        </ul>
      </nav>

      <div className="mobile__nav">
      <ul>
          <li>
            <em>01.</em> Profile
          </li>
          <li>
            <em>02.</em> Experiences
          </li>
          <li>
            <em>03.</em> Projects
          </li>
          <li>
            <em>04.</em> Skills
          </li>
          <li>
            <em>05.</em> Contact
          </li>
          <li onClick={switchTheme}>
            {isDarkModeActive ? (
              <FaToggleOn className="switch" title="Switch to Light Mode" />
            ) : (
              <FaToggleOff className="switch" title="Switch to Dark Mode" />
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
