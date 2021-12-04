import React, { useEffect, useState, useWindowDimensions } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../styles/components/slider.css";
// import { Link } from "react-router-dom";
import getWindowDimensions from "../utils/getWindowDimensions";
import { newsData } from "../fakeData";

function News() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      windowDimensions.width > 900
        ? 3
        : windowDimensions.width < 900 && windowDimensions.width > 700
        ? 2
        : 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: true,
    // prevArrow: true,
  };

  return (
    <div className="container-fluid bg_color">
      <section class="news_slider_block">
        <div class="title">Марказ янгиликлари</div>
        {newsData ? (
          <Slider {...settings}>
            {newsData.map((child, index) => (
              <div key={index} className="news_box">
                <a href="" className="news_img">
                  <img src={child.image} />
                </a>
                <div className="news_text">
                  <a href="" className="news_title">
                    {child.title}
                  </a>
                  <span className="news_anons">{child.anons}</span>
                  <a href="" className="read_more">
                    Батафсил
                  </a>
                  <ul className="date_list">
                    <li>
                      <i className="glyphicon glyphicon-eye-open"></i>{" "}
                      {child.views}
                    </li>
                    <li>
                      <i className="glyphicon glyphicon-time"></i> {child.date}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div>No Data</div>
        )}
      </section>
    </div>
  );
}

export default News;
