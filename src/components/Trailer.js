import React from "react";
import { usePopup } from "../contexts/popupContext";

export default function Trailer() {
  const { setShowVideo } = usePopup();
  return (
    <section className="py-sectionMB lg:py-section">
      <div className="page-container flex-col lg:flex-row flex gap-[20px] md:gap-[40px] mx-[15px] md:mx-auto xl:items-start items-center">
        <div className="relative flex-1 w-full" data-aos="fade-right">
          <img
            className="object-cover w-full h-full rounded-xl"
            src="/images/trailer-bg.png"
            alt=""
          />
          <span className="cursor-pointer inline-flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img
              className="player"
              onClick={() => setShowVideo(true)}
              srcSet="/icons/player-icon.png 2x"
              alt=""
            />
          </span>
        </div>
        <div className="flex-col flex-1 font-semibold text-justify text-black lg:flex-row md:text-left">
          <div className="flex items-center mb-[30px]" data-aos="fade-left">
            <h2 className="text-lightBlue text-[38px] md:text-[64px] font-bold leading-[30px] md:leading-[50px] uppercase">
              Planning <br /> Bootcamp{" "}
            </h2>
            <div className="relative leading-[30px] md:leading-[50px]">
              <h2 className="text-stroke font-extrabold text-[80px] md:text-[128px] text-white">
                29
              </h2>
              <h4 className="absolute bottom-[-25px] md:bottom-[-40px] left-[8px] text-[16px] md:text-[24px] text-black leading-[30px] md:leading-[50px]">
                (PBC)
              </h4>
            </div>
          </div>
          <p className="mb-[20px]" data-aos="fade-up">
            <span className="font-bold uppercase text-lightBlue">
              Chương trình huấn luyện LẬP KẾ HOẠCH HÀNH ĐỘNG & PHÁT TRIỂN BẢN
              THÂN
            </span>{" "}
            dành cho Chủ Doanh nghiệp & Đội ngũ được tổ chức định kỳ 03 tháng/01
            lần.
          </p>
          <div className="flex items-start gap-[20px]" data-aos="fade-up">
            <img
              className="mt-[7px] w-[17px]"
              src="./icons/check-icon.svg"
              alt=""
            />
            <span>
              Giúp chủ doanh nghiệp đánh giá lại kết quả đã đạt được trong kế
              hoạch 90 ngày qua.
            </span>
          </div>
          <div
            className="flex items-start gap-[20px] mb-[25px]"
            data-aos="fade-up"
          >
            <img
              className="mt-[7px] w-[17px]"
              src="./icons/check-icon.svg"
              alt=""
            />
            <span>
              Lập danh sách việc cần thực hiện trong 90 ngày tiếp theo.
            </span>
          </div>
          <p data-aos="fade-up">
            ActionCOACH CBD Firm không ngừng nâng cấp & đổi mới nội dung chương
            trình nhằm đem đến những trải nghiệm tuyệt vời nhất cho các Chủ
            doanh nghiệp và Đội ngũ khi tham dự Chương trình huấn luyện Planning
            Bootcamp.
          </p>
        </div>
      </div>
      <div className="page-container mt-[20px] md:mt-[50px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[10px] md:gap-[30px] xl:gap-[50px]">
          <div data-aos="zoom-in-right">
            <img
              className="w-[250px] md:w-auto"
              srcSet="./images/thongso1.png 2x"
              alt=""
            />
          </div>
          <div data-aos="zoom-in-left">
            <img srcSet="./images/thongso2.png 2x" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
