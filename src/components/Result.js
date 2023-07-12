import React from "react";
import Heading from "./commons/Heading";

export default function Result() {
  return (
    <section className="result py-sectionMB md:py-section">
      <div className="page-container">
        <Heading className="text-lightBlue">
          4 KẾT QUẢ ĐẠT ĐƯỢC <br /> SAU 2 NGÀY LẬP KẾ HOẠCH
        </Heading>
        <h3 className="text-center font-bold text-[16px] md:text-[20px] lg:text-[30px] text-black mb-[40px]">
          TẠI PLANNING BOOTCAMP 29
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
          <ResultItem img="./images/result1.png">
            Thiết lập Mục tiêu SMART <br className="hidden lg:block" /> cho Quý
            IV/2023.
          </ResultItem>
          <ResultItem img="./images/result2.png">
            Lập Kế hoạch thực thi Quý IV/2023 theo Cấu trúc chuẩn Quốc tế của Hệ
            thống ActionCOACH toàn cầu.
          </ResultItem>
          <ResultItem img="./images/result3.png">
            Tham gia Cộng đồng cùng với nhiều Chủ doanh nghiệp và đội ngũ có tư
            duy và trải nghiệm thực chiến.
          </ResultItem>
        </div>
      </div>
      <div className="max-w-[1270px] mx-auto px-0 md:px-[15px] xl:px-0">
        <div className="relative pt-[40px] md:pt-[50px] pb-[60px] md:pb-[80px] text-white mt-[25px]">
          <div className="absolute inset-0">
            <img
              className="w-full h-full"
              src="./images/result-bg.png"
              alt=""
            />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div
              className="flex items-center mb-[30px] gap-[14px]"
              data-aos="fade-right"
            >
              <img
                className="w-[30px] md:w-[50px]"
                src="./icons/star-icon.svg"
                alt=""
              />
              <p className="text-[18px] md:text-[24px]">Chuyên đề đặc biệt</p>
            </div>
            <div className="mb-[30px]">
              <img
                data-aos="zoom-out"
                className="w-[300px] md:w-auto"
                srcSet="./images/result-content.png 2x"
                alt=""
              />
            </div>
            <div className="px-[20px]">
              <div
                className="flex gap-[8px] items-start mb-[20px]"
                data-aos="fade-up"
              >
                <img
                  className="w-[17px] mt-[6px]"
                  src="./icons/check-icon2.svg"
                  alt=""
                />
                <span>
                  Tăng cường khả năng cạnh tranh và thích nghi với môi trường
                  biến động.
                </span>
              </div>
              <div className="flex gap-[8px] items-start" data-aos="fade-up">
                <img
                  className="w-[17px] mt-[6px]"
                  src="./icons/check-icon2.svg"
                  alt=""
                />
                <span>
                  Tối ưu hóa hiệu suất làm việc & khuyến khích sự thay đổi, sáng
                  tạo.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ResultItem = ({ img, children }) => {
  return (
    <div className="relative result-item" data-aos="zoom-in">
      <div className="absolute inset-0 block"></div>
      <img src={img} alt="" />
      <p className="absolute leading-[1.8] bottom-[25px] left-[20px] xl:left-[40px] right-[20px] xl:right-[40px] text-[13px] lg:text-[15px] font-bold text-white">
        {children}
      </p>
    </div>
  );
};
