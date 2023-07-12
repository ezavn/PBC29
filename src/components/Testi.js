import React from "react";
import Heading from "./commons/Heading";
import Slider from "react-slick";
import { usePopup } from "../contexts/popupContext";

export default function Testi() {
  const { setShow } = usePopup();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="testi py-sectionMB md:py-section">
      <div className="page-container">
        <Heading className="text-lightBlue mb-[40px] lg:mb-[60px]">
          CHIA SẺ CỦA KHÁCH HÀNG <br className="hidden md:block" /> ĐÃ THAM GIA
          PLANNING BOOTCAMP
        </Heading>
        <Slider {...settings}>
          <TestiItem
            img="./images/testi1.png 2x"
            content='"Đây là lần thứ 7 tôi tham dự PBC cùng đội ngũ. Sau mỗi lần tham gia, chúng tôi có 1 bản kế hoạch rõ ràng không chỉ cho cá nhân, cho đội ngũ mà còn cả về mặt tài chínhvà đặc biệt là cách thức vận hành đồng bộ tổ chức của mình thông qua Chủ đề Vận hành đồng bộ của PBC 26."'
            name="Chị Trần Thị Ngọc Liên"
            company="Công ty TNHH Vên Vên"
          ></TestiItem>
          <TestiItem
            img="./images/testi2.png 2x"
            content='"Là một doanh nghiệp nhỏ, SAFICO đặt ra rất nhiều mục tiêu cho 2023 nên dẫn đến việc lập chiến lược hành động khó khăn. Thông qua PBC 26, SAFICO đã lựa chọn được những mục tiêu ƯU TIÊN cho năm 2023 phù hợp với nguồn lực, khả năng của công ty."'
            name="Anh Đoàn Tất Quân"
            company="Công ty SAFICO"
          ></TestiItem>
          <TestiItem
            img="./images/testi3.png 2x"
            content='"Tại kỳ PBC 26, tôi cùng đội ngũ đã có những bài học bổ ích, đặc biệt là có một bản 5 Ways rõ ràng để có thể bám sát theo đó. Việc xây dựng một doanh nghiệp cũng giống như xây nhà, chúng ta phải đầu tư để có được bản vẽ, thiết kế phù hợp, sau đó chúng ta mới sở hữu được ngôi nhà đẹp và kiên cố."'
            name="Chị Nguyễn Thị Thanh Bình"
            company="Công Ty một thành viên Mỹ Viện Vian"
          ></TestiItem>
          <TestiItem
            img="./images/testi4.png 2x"
            content='"Đây là kỳ PBC thứ 15 anh Kha Vinh tham dự cùng đội ngũ. Đặc biệt hơn nữa, PBC 26 lần này lại tổ chức tại Quy Nhơn - quê hương của anh Kha Vinh. Đây thực sự là một trải nghiệm vô cùng ý nghĩa đối với tôi. Đồng hành cùng PBC 26, tôi cùng đội ngũ không chỉ có thêm kiến thức mà còn có thêm động lực để cùng nhau đạt được những mục tiêu phía trước."'
            name="Anh Hà Trọng Kha Vinh"
            company="Cty TNHH Trang Trí Nội Thất & Xây Dựng Vân Tay"
          ></TestiItem>
          <TestiItem
            img="./images/testi5.png 2x"
            content='"Đội ngũ của tôi đã có thời gian lập kế hoạch nhưng không tìm được cách để đội ngũ hoạt động gắn kết hơn, hỗ trợ nhau tốt hơn. Vướng mắc này đã được đội ngũ Nhà huấn luyện doanh nghiệp giải đáp tại PBC 26 - Vận hành đồng bộ để Thực thi xuất sắc."'
            name="Anh Phùng Quốc Đức"
            company="Công ty Cổ phần XHOME Sài Gòn"
          ></TestiItem>
        </Slider>
        <div class="mt-[40px] md:mt-[50px] text-center">
          <button
            data-aos="fade-up"
            onClick={() => setShow(true)}
            class="btn btn-blue btn-animate"
          >
            ĐĂNG KÝ NGAY
          </button>
        </div>
      </div>
    </section>
  );
}

const TestiItem = ({ img, content, name, company }) => {
  return (
    <div className="flex items-center testi-item gap-[30px] lg:gap-[50px] xl:gap-[80px] mx-[15px] xl:mx-[30px]">
      <div className="lg:block hidden flex-shrink-0 w-[60px] lg:w-[80px] xl:w-[114px]">
        <img className="w-full" srcSet={img} alt="" />
      </div>
      <div className="relative flex-1">
        <div className="lg:block hidden absolute top-[10px] left-[-40px] xl:left-[-70px] w-[30px] xl:w-[54px]">
          <img className="w-full" src="./icons/quote.svg" alt="" />
        </div>
        <div>
          <p className="text-[15px] lg:text-[16px] mb-[10px] md:mb-[20px] text-justify">
            {content}
          </p>
          <div className="flex items-center gap-[20px]">
            <div className="block lg:hidden flex-shrink-0 w-[40px]">
              <img className="w-full" srcSet={img} alt="" />
            </div>
            <div>
              <h4 className="text-[15px] font-bold uppercase">{name}</h4>
              <p className="text-[14px]">{company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
