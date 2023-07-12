import React from "react";
import Slider from "react-slick";

export default function Collection2() {
  var settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "250px",
    slidesToShow: 3,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <section className="sc-collection2 overflow-x-hidden bg-white mt-[-25px] pb-0 md:pb-[15px] lg:pb-[20px]">
      <Slider {...settings}>
        <div className="collection-item">
          <img src="/images/slide7.png" alt="" />
        </div>
        <div className="collection-item">
          <img src="/images/slide8.png" alt="" />
        </div>
        <div className="collection-item">
          <img src="/images/slide9.png" alt="" />
        </div>
        <div className="collection-item">
          <img src="/images/slide10.png" alt="" />
        </div>
        <div className="collection-item">
          <img src="/images/slide11.png" alt="" />
        </div>
        <div className="collection-item">
          <img src="/images/slide12.png" alt="" />
        </div>
      </Slider>
    </section>
  );
}
