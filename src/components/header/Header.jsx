import React from "react";
import "./header.scss";
import Navbar from "../navbar/Navbar";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo__box" title="Home">
          <img src={Logo} alt="Logo" />
        </div>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
