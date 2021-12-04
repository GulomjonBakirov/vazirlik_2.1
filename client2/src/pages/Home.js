import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Carousel from "../components/Carousel";
import News from "../components/News";
import CustomerNews from "../components/CustomerNews";
import Footer from "../components/Footer";
import SiteMap from "../components/SiteMap";
import MetaData from "../components/MetaData";

export default function Home() {
  return (
    <div>
      <MetaData title="Bosh Sahifa" />
      <div className="wrapper">
        <Navbar />
        <Header />
        <Menu />
        <Carousel />
        <News />
        <CustomerNews />
      </div>
      <Footer />
      <SiteMap />
    </div>
  );
}
