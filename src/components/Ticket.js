import React from "react";
import { usePopup } from "../contexts/popupContext";
import Heading from "./commons/Heading";

export default function Ticket() {
  const { setShowDiamond, setShowGold, setShowMember, setShowStandard } =
    usePopup();
  return (
    <section className="sc-ticket pb-[70px] lg:pb-[100px] pt-sectionMB md:pt-section bg-[url('../public/images/ticket-bg.png')] bg-center bg-no-repeat bg-cover">
      <div className="page-container">
        <Heading className="text-white mb-[30px]">
          Khoản đầu tư cho PBC 29
        </Heading>
        <div className="mt-[30px] md:mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[50px]">
          <div className="ticket-item" data-aos="flip-left">
            <div className="block">
              <h3 className="title">
                <span>DIAMOND</span> <br />
                MEMBER
              </h3>
              <p className="desc">MIỄN PHÍ HOÀN TOÀN</p>
            </div>
            <div className="layout">
              <div className="content">
                <p className="title1">Người đi cùng:</p>
                <p className="title2">Phí GOLD MEMBER</p>
              </div>
              <div className="button" onClick={() => setShowDiamond(true)}>
                mua vé
              </div>
            </div>
          </div>
          <div className="ticket-item" data-aos="flip-left">
            <div className="block">
              <h3 className="title">
                <span>GOLD</span> <br />
                MEMBER
              </h3>
              <p className="desc">
                Khách hàng đang <br />
                coaching 1:1, Mentoring
              </p>
            </div>
            <div className="layout">
              <div className="content">
                <p className="title1">Phí chia sẻ:</p>
                <p className="title2">6.100.000 VND</p>
                <p className="title3">Bao gồm</p>
                <div className="list">
                  <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">Teabreak, 02 Ăn trưa</span>
                  </div>
                  <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">Tài liệu</span>
                  </div>
                  <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">Hội trường</span>
                  </div>
                  {/* <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">Gala dinner</span>
                  </div> */}
                </div>
              </div>
              <div className="button" onClick={() => setShowGold(true)}>
                mua vé
              </div>
            </div>
          </div>
          <div className="ticket-item" data-aos="flip-left">
            <div className="block">
              <h3 className="title">
                <span>MEMBER</span> <br />
                MEMBER
              </h3>
              <p className="desc">Thành viên BNI HCMC6</p>
            </div>
            <div className="layout">
              <div className="content">
                <p className="title1">Phí chia sẻ:</p>
                <p className="title2">7.600.000 VND</p>
                <p className="title3">Bao gồm</p>
                <div className="list">
                  <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">Teabreak, 02 Ăn trưa</span>
                  </div>
                  <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">Tài liệu</span>
                  </div>
                  <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">Hội trường</span>
                  </div>
                  {/* <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">Gala dinner</span>
                  </div> */}
                </div>
              </div>
              <div className="button" onClick={() => setShowMember(true)}>
                mua vé
              </div>
            </div>
          </div>
          <div className="ticket-item" data-aos="flip-left">
            <div className="block">
              <h3 className="title">
                <span>VÉ TIÊU CHUẨN</span> <br />
              </h3>
            </div>
            <div className="layout">
              <div className="content">
                <p className="title1">Phí chia sẻ:</p>
                <p className="title2">14.300.000 VND</p>
                <p className="title3">Bao gồm</p>
                <div className="list">
                  <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">100% Phí huấn luyện</span>
                  </div>
                  <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">Teabreak, 02 Ăn trưa</span>
                  </div>
                  <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">Tài liệu</span>
                  </div>
                  <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">Hội trường</span>
                  </div>
                  {/* <div className="item">
                    <span className="img">
                      <img srcSet="/icons/ticket-icon.svg" alt="" />
                    </span>
                    <span className="desc">Gala dinner</span>
                  </div> */}
                </div>
              </div>
              <div className="button" onClick={() => setShowStandard(true)}>
                mua vé
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center">
          <p className="text-white text-[18px] md:text-[24px] font-bold mb-[20px] md:mb-[32px]">
            * Giá trên đã bao gồm{" "}
            <span className="text-cyan">VAT & Tài liệu</span> <br />* Đăng ký và
            thanh toán trước ngày <span className="text-cyan">dd/mm/2023</span>
          </p>
          <div className="h-[59px] w-[300px] md:w-[370px] border border-lightBlue1 rounded-[20px] mx-auto inline-flex items-center justify-center text-[18px] md:text-[24px] font-bold mb-[25px] text-white uppercase">
            Thông tin thanh toán
          </div>
          <div className="text-white pay-info">
            <p>
              Số tài khoản: <br />
              <span className="text-cyan text-[16px] md:text-[24px] font-bold">
                2000 1485 1240 597
              </span>
            </p>
            <p>
              Tại: <br />
              <span className="text-cyan text-[16px] md:text-[24px] font-bold">
                Eximbank - CN HCM
              </span>
            </p>
            <p>
              Chủ tài khoản: <br />
              <span className="text-cyan text-[16px] md:text-[24px] font-bold uppercase">
                CÔNG TY TNHH CENTRAL BUSINESS DEVELOPMENT
              </span>
            </p>
          </div>
          {/* <div className="flex items-center justify-center my-[25px]">
            <img src="/images/line.png" alt="" />
          </div> */}
          <div>
            <p className="text-white">
              Lưu ý: <br />* Nội dung thanh toán:{" "}
              <span className="text-[#FFA678]">
                tencongty/tennguoithamdu_Số điện thoại_PBC28
              </span>{" "}
              <br />
              <strong>LƯU Ý:</strong> Vé Planning Bootcamp không được{" "}
              <strong>HỦY </strong>/ <strong>HOÀN TRẢ</strong> hoặc{" "}
              <strong>CHUYỂN</strong> sang các kỳ PBC khác.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
