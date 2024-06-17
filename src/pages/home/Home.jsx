import React from "react";
import "./home.scss";
import Header from "../../components/header/Header";
import MobileNav from "../../components/navbar/MobileNav";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <>
      <div className="page__wrapper">
        <Header />
        <MobileNav />
        <Hero />
      </div>
    </>
  );
};

export default Home;
