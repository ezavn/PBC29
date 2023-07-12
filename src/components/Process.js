import React from "react";
import Slider from "react-slick";

export default function Process() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <section className="process pb-sectionMB lg:pb-section">
      <div className="relative">
        <p className="text-stroke2 text-[125px] md:text-[240px] lg:text-[300px] font-extrabold text-white leading-[1]">
          PBC29
        </p>
        <div className="page-container absolute bottom-[7px] md:bottom-[25px] right-[2%]">
          <h2
            className="font-bold text-[16px] md:text-[20px] lg:text-[30px] text-black text-right"
            data-aos="fade-left"
          >
            <span className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[50px] text-lightBlue">
              QUY TRÌNH XÂY DỰNG <br /> KẾ HOẠCH
            </span>{" "}
            <br />
            TẠI PLANNING BOOTCAMP
          </h2>
        </div>
      </div>
      <div className="hidden max-w-[1670px] px-[15px] lg:px-[20px] xl:px-[30px] md:grid grid-cols-3 xl:grid-cols-6 gap-[20px] mt-[20px]">
        <div data-aos="flip-left">
          <ProcessItem step="1">
            Đánh giá <span className="block font-extrabold">HIỆN TRẠNG</span>{" "}
            của Doanh nghiệp
          </ProcessItem>
        </div>
        <div data-aos="flip-left">
          <ProcessItem step="2">
            Tìm hiểu <span className="block font-extrabold">NGUYÊN NHÂN</span>{" "}
            dẫn đến Hiện trạng
          </ProcessItem>
        </div>
        <div data-aos="flip-left">
          <ProcessItem step="3">
            Thiết lập <span className="block font-extrabold">MỤC TIÊU</span>
          </ProcessItem>
        </div>
        <div data-aos="flip-left">
          <ProcessItem step="4">
            Xác định <span className="block font-extrabold">CHIẾN LƯỢC</span>
          </ProcessItem>
        </div>
        <div data-aos="flip-left">
          <ProcessItem step="5">
            Lập <span className="block font-extrabold">KẾ HOẠCH</span>
          </ProcessItem>
        </div>
        <div data-aos="flip-left">
          <ProcessItem step="6" notLast>
            <span className="block font-extrabold">THỰC THI</span>
            kế hoạch
          </ProcessItem>
        </div>
      </div>
      <div className="md:hidden block mt-[20px]">
        <Slider {...settings}>
          <ProcessItem step="1">
            Đánh giá <span className="block font-extrabold">HIỆN TRẠNG</span>{" "}
            của Doanh nghiệp
          </ProcessItem>
          <ProcessItem step="2">
            Tìm hiểu <span className="block font-extrabold">NGUYÊN NHÂN</span>{" "}
            dẫn đến Hiện trạng
          </ProcessItem>
          <ProcessItem step="3">
            Thiết lập <span className="block font-extrabold">MỤC TIÊU</span>
          </ProcessItem>
          <ProcessItem step="4">
            Xác định <span className="block font-extrabold">CHIẾN LƯỢC</span>
          </ProcessItem>
          <ProcessItem step="5">
            Lập <span className="block font-extrabold">KẾ HOẠCH</span>
          </ProcessItem>
          <ProcessItem step="6" notLast>
            <span className="block font-extrabold">THỰC THI</span>
            kế hoạch
          </ProcessItem>
        </Slider>
      </div>
    </section>
  );
}

const ProcessItem = ({ step, children, notLast }) => {
  return (
    <div
      className={`mx-[5px] md:mx-0 process-item rounded-[50px] px-[10px] md:px-[20px] pb-[20px] md:pb-[35px] pt-[20px] relative h-[180px] md:h-[207px] ${
        notLast ? "last" : ""
      }`}
    >
      {!notLast && (
        <div className="hidden md:block absolute right-[-37px] top-[53px] w-[40px] h-[40px] z-10">
          <img className="w-full h-full" src="./icons/rec-icon.svg" alt="" />
        </div>
      )}
      <p className="border-b border-white border-solid text-[20px] md:text-[24px] lg:text-[34px] font-bold text-white uppercase text-center mx-[18px]">
        Bước {step}
      </p>
      <p className="text-center font-semibold text-[16px] md:text-[18px] lg:text-[20px] text-white pt-[10px]">
        {children}
      </p>
    </div>
  );
};
