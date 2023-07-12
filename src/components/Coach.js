import React from "react";
import { usePopup } from "../contexts/popupContext";
import Slider from "react-slick";
import Heading from "./commons/Heading";

export default function Coach() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const {
    setShowPopupCoach1,
    setShowPopupCoach2,
    setShowPopupCoach3,
    setShowPopupCoach4,
    setShowPopupCoach5,
    setShowPopupCoach6,
    setShowPopupCoach7,
    setShowPopupCoach8,
    setShowPopupCoach9,
    setShowPopupCoach10,
    setShowPopupCoach11,
    setShowPopupCoach12,
    setShowPopupCoach13,
  } = usePopup();
  return (
    <section
      id="coach"
      className="sc-coach bg-[url('../public/images/coach-bg.png')] bg-center bg-no-repeat bg-cover py-sectionMB md:py-section"
    >
      <div className="page-container">
        <Heading className="text-white mb-[40px]">
          CÁC NHÀ HUẤN LUYỆN DOANH NGHIỆP <br className="hidden md:block" />
          TẠI PLANNING BOOTHCAMP 29
        </Heading>
        <Slider {...settings}>
          <CoachItem
            img="/images/rita.png"
            nickname="rita"
            name="Tô Quý Ngọc Châu"
            onClick={() => setShowPopupCoach1(true)}
          ></CoachItem>
          <CoachItem
            img="/images/leo.png"
            nickname="leo"
            name="Võ Thái Lâm"
            onClick={() => setShowPopupCoach2(true)}
          ></CoachItem>
          <CoachItem
            img="/images/kaka.png"
            nickname="kaka"
            name="Lê Ngọc Đăng"
            onClick={() => setShowPopupCoach3(true)}
          ></CoachItem>
          <CoachItem
            img="/images/tony.png"
            nickname="tony"
            name="Thái Sơn"
            onClick={() => setShowPopupCoach4(true)}
          ></CoachItem>
          <CoachItem
            img="/images/tamy.png"
            nickname="tamy"
            name="Ngọc Thảo"
            onClick={() => setShowPopupCoach5(true)}
          ></CoachItem>
          <CoachItem
            img="/images/emmy.png"
            nickname="emmy"
            name="Lê Thị Hải"
            onClick={() => setShowPopupCoach7(true)}
          ></CoachItem>
          <CoachItem
            img="/images/martin.png"
            nickname="martin"
            name="Hải Đăng"
            onClick={() => setShowPopupCoach8(true)}
          ></CoachItem>
          <CoachItem
            img="/images/neo.png"
            nickname="neo"
            name="Nguyễn Đình Bảo"
            onClick={() => setShowPopupCoach9(true)}
          ></CoachItem>
          <CoachItem
            img="/images/theo.png"
            nickname="theo"
            name="Vũ Bá Thế"
            onClick={() => setShowPopupCoach10(true)}
          ></CoachItem>
          <CoachItem
            img="/images/vova.png"
            nickname="vova"
            name="Lê Việt Chuẩn"
            onClick={() => setShowPopupCoach11(true)}
          ></CoachItem>
          <CoachItem
            img="/images/tracy.png"
            nickname="tracy"
            name="Thanh Hà"
            onClick={() => setShowPopupCoach12(true)}
          ></CoachItem>
          <CoachItem
            img="/images/richard.png"
            nickname="richard"
            name="Hoàng Văn Tình"
            onClick={() => setShowPopupCoach13(true)}
          ></CoachItem>
        </Slider>
        {/* </div> */}
      </div>
    </section>
  );
}

const CoachItem = ({ img, nickname, name, onClick, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <div
      className="cursor-pointer coach-item px-[10px]"
      onClick={onClick}
      {...props}
    >
      <div className="mb-[20px]">
        <img className="object-cover w-full h-full" src={img} alt="" />
      </div>
      <div className="text-center">
        <p className="text-[14px] md:text-[18px] font-bold text-white">
          <span className="uppercase">{nickname}</span>{" "}
          <span className="capitalize">{name}</span>
        </p>
        <p className="text-[13px] font-semibold text-white">Business COACH</p>
      </div>
    </div>
  );
};
