import React from "react";
import Slider from "react-slick";

export default function Collection() {
  var settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 4,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
    ],
  };
  return (
    <section className="sc-collection1 overflow-x-hidden pt-[5px] md:pt-[15px] lg:pt-[20px] bg-white">
      <Slider {...settings}>
        <div className="collection-item">
          <img src="/images/slide1.png" alt="" />
        </div>
        <div className="collection-item">
          <img src="/images/slide2.png" alt="" />
        </div>
        <div className="collection-item">
          <img src="/images/slide3.png" alt="" />
        </div>
        <div className="collection-item">
          <img src="/images/slide4.png" alt="" />
        </div>
        <div className="collection-item">
          <img src="/images/slide5.png" alt="" />
        </div>
        <div className="collection-item">
          <img src="/images/slide6.png" alt="" />
        </div>
      </Slider>
    </section>
  );
}
