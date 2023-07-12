import React from "react";
import Heading from "./commons/Heading";
import { usePopup } from "../contexts/popupContext";

export default function Trip() {
  const { setShow } = usePopup();
  return (
    <section className="trip py-sectionMB md:py-section bg-[url('../public/images/trip-bg.png')] bg-center bg-no-repeat bg-cover">
      <div className="page-container">
        <div className="test"></div>
        <Heading className="text-white">HÀNH TRÌNH</Heading>
        <h2
          className="font-extrabold text-cyan text-[30px] md:text-[48px] lg:text-[64px] text-center"
          data-aos="fade-up"
        >
          CHUYỂN HÓA <span className="text-lightBlue text-stroke3">2023</span>
        </h2>
        <div className="relative max-w-[1144px] mx-auto mt-[30px] md:mt-[50px]">
          <div className="absolute bottom-[45px] md:bottom-[90px] lg:bottom-[75px] z-0 left-0">
            <img src="./images/circle.png" alt="" />
          </div>
          <div
            data-aos="zoom-in"
            className="relative z-10 flex items-center justify-center mx-auto"
          >
            <img
              className="max-w-[320px] md:max-w-[680px] lg:max-w-[969px]"
              srcSet="./images/pbc-content.png 2x"
              alt=""
            />
          </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-[50px] relative z-10">
            <div className="flex flex-col items-center justify-center">
              <div className="test">
                <img
                  className="test w-[120px] lg:w-[180px] mb-[20px]"
                  srcSet="./images/pbc27.png 2x"
                  alt=""
                />
              </div>
              <h4 className="text-[18px] lg:text-[24px] font-extrabold text-white uppercase">
                Tháng 3
              </h4>
              <div>
                <img srcSet="./images/tys.png 2x" alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  className="w-[120px] lg:w-[180px] mb-[20px]"
                  srcSet="./images/pbc28.png 2x"
                  alt=""
                />
              </div>
              <h4 className="text-[18px] lg:text-[24px] font-extrabold text-white uppercase">
                Tháng 9
              </h4>
              <div>
                <img srcSet="./images/tyt.png 2x" alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  className="w-[120px] lg:w-[180px] mb-[20px]"
                  srcSet="./images/pbc29.png 2x"
                  alt=""
                />
              </div>
              <h4 className="text-[18px] lg:text-[24px] font-extrabold text-white uppercase">
                Tháng 12
              </h4>
              <div className="relative">
                <div className="absolute top-[-45px] left-[-80px] z-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="334"
                    height="179"
                    viewBox="0 0 334 179"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_1_1193)">
                      <ellipse
                        cx="167"
                        cy="89.5"
                        rx="106"
                        ry="28.5"
                        fill="#F01667"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_1_1193"
                        x="0"
                        y="0"
                        width="334"
                        height="179"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="30.5"
                          result="effect1_foregroundBlur_1_1193"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p className="relative z-10 font-extrabold text-[18px] lg:text-[24px] text-white text-center capitalize">
                  Transform <br /> your business
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  className="w-[120px] lg:w-[180px] mb-[20px]"
                  srcSet="./images/pbc30.png 2x"
                  alt=""
                />
              </div>
              <h4 className="text-[18px] lg:text-[24px] font-extrabold text-white uppercase">
                Tháng 6
              </h4>
              <div>
                <p className="font-extrabold text-[18px] lg:text-[24px] text-white text-center capitalize">
                  Get a <br /> big dream
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="text-white max-w-[1150px] mx-auto mt-0 md:mt-[30px]">
          <p className="mb-[20px] leading-[28px]" data-aos="fade-up">
            Hành trình Chuyển hóa 2023 của Planning Bootcamp đã trải qua những
            bước Chuyển hóa tuyệt vời. Từ PBC 27 -{" "}
            <span className="font-bold">
              Transform YourSelf - Chuyển hóa bản thân
            </span>{" "}
            tới{" "}
            <span className="font-bold">
              PBC 28 - Transform YourTeam - Chuyển hóa Đội ngũ
            </span>
            , chúng ta đã xây dựng nền móng vững chắc từ cá nhân, đội ngũ để sẵn
            sàng cho bước chuyển hóa mạnh mẽ nhất -{" "}
            <span className="font-bold">
              Transform YourBusiness - Chuyển hóa Doanh nghiệp
            </span>
            .
          </p>
          <p className="leading-[28px]" data-aos="fade-up">
            <span className="font-bold uppercase">
              Planning Bootcamp 29 - Transform YourBusiness - Chuyển hóa Doanh
              nghiệp
            </span>{" "}
            sẽ là thời gian giúp Chủ doanh nghiệp khám phá các phương pháp và
            chiến lược để đưa Doanh nghiệp phát triển vững vàng và đạt được
            những giấc mơ lớn.
          </p>
        </div>
        <div class="mt-[40px] md:mt-[50px] text-center">
          <button
            data-aos="zoom-in-up"
            onClick={() => setShow(true)}
            class="btn btn-red btn-animate"
          >
            ĐĂNG KÝ NGAY
          </button>
        </div>
      </div>
    </section>
  );
}
