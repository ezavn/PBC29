import React from "react";
import Heading from "./commons/Heading";
import Slider from "react-slick";

export default function Category() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <section
      id="content"
      className="category bg-[url('../public/images/category-bg.png')] bg-center bg-no-repeat bg-cover py-sectionMB md:py-section"
    >
      <div className="relative max-w-[1470px] mx-auto px-[15px] xl:px-0">
        <div className="hidden md:block absolute bottom-0 right-[15px]">
          <img
            className="w-[360px] lg:w-[650px] xl:w-auto"
            srcSet="./images/pbc29-txt.png 2x"
            alt=""
          />
        </div>
        <Heading>
          <span className="text-cyan">CÁC HẠNG MỤC TRANSFORM YOURBUSINESS</span>{" "}
          <br className="hidden md:block" />
          <span className="text-white">CHUYỂN HÓA DOANH NGHIỆP</span>
        </Heading>
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-[30px] xl:gap-[50px] mt-[60px]">
          <div data-aos="zoom-in-up">
            <CategoryItem
              img="./images/category1.png 2x"
              title="CHIẾN LƯỢC & MÔ HÌNH KINH DOANH"
              desc="Xem xét và điều chỉnh chiến lược và mô hình kinh doanh để phù hợp với mục tiêu chuyển hoá. Điều này có thể liên quan đến việc định hình lại chiến lược, khám phá các nguồn cung cấp mới, thay đổi mô hình kinh doanh hoặc tìm kiếm cơ hội đa dạng hóa."
            ></CategoryItem>
          </div>
          <div data-aos="zoom-in-up">
            <CategoryItem
              img="./images/category2.png 2x"
              title="CÔNG NGHỆ VÀ HỆ THỐNG THÔNG TIN"
              desc="Đánh giá và triển khai công nghệ và hệ thống thông tin mới để hỗ trợ quá trình chuyển hoá. Điều này có thể bao gồm việc đổi mới hệ thống quản lý thông tin, triển khai phần mềm và công nghệ mới để tăng cường hiệu suất và sự kết nối trong tổ chức."
            ></CategoryItem>
          </div>
          <div data-aos="zoom-in-up">
            <CategoryItem
              img="./images/category3.png 2x"
              title="VĂN HÓA TỔ CHỨC"
              desc="Đổi mới văn hóa tổ chức để phù hợp với mục tiêu chuyển hoá. Xây dựng một văn hóa tổ chức linh hoạt, sáng tạo và hướng tới sự đổi mới. Điều này có thể bao gồm việc thúc đẩy sự hợp tác, khuyến khích việc chia sẻ kiến thức và thúc đẩy tinh thần cống hiến."
            ></CategoryItem>
          </div>
          <div data-aos="zoom-in-up">
            <CategoryItem
              img="./images/category4.png 2x"
              title="NGUỒN NHÂN LỰC"
              desc="Đánh giá và phát triển năng lực và kỹ năng của nhân viên để phù hợp với yêu cầu chuyển hoá. Điều này có thể bao gồm việc cung cấp đào tạo và hỗ trợ, tái cơ cấu và tái định vị nhân sự, và tạo điều kiện để nhân viên thích nghi và phát triển trong môi trường mới."
            ></CategoryItem>
          </div>
          <div data-aos="zoom-in-up">
            <CategoryItem
              img="./images/category5.png 2x"
              title="CẤU TRÚC TỔ CHỨC"
              desc="Xem xét và thay đổi cấu trúc tổ chức hiện tại để phù hợp với mục tiêu chuyển hoá. Điều này có thể liên quan đến việc tách, gộp hoặc tái tổ chức lại các bộ phận, đơn vị hoặc quan hệ cấu trúc bên trong tổ chức."
            ></CategoryItem>
          </div>
          <div data-aos="zoom-in-up">
            <CategoryItem
              img="./images/category6.png 2x"
              title="QUY TRÌNH LÀM VIỆC"
              desc="Đánh giá và cải tiến các quy trình làm việc hiện tại để tăng cường hiệu quả và linh hoạt. Quá trình này có thể bao gồm việc tối ưu hóa quy trình, loại bỏ các bước không cần thiết, đơn giản hóa và tự động hóa quy trình."
            ></CategoryItem>
          </div>
          <div data-aos="zoom-in-up">
            <CategoryItem
              img="./images/category7.png 2x"
              title="QUẢN LÝ THAY ĐỔI"
              desc="Xác định và triển khai các hoạt động quản lý thay đổi để quản lý và ủng hộ quá trình chuyển hoá. Điều này bao gồm việc xây dựng kế hoạch chuyển hoá, giao tiếp và liên lạc hiệu quả, quản lý rủi ro và theo dõi tiến độ."
            ></CategoryItem>
          </div>
        </div>
        <div className="category-slide block md:hidden mt-[40px]">
          <Slider {...settings}>
            <CategoryItem
              img="./images/category1.png 2x"
              title="CHIẾN LƯỢC & MÔ HÌNH KINH DOANH"
              desc="Xem xét và điều chỉnh chiến lược và mô hình kinh doanh để phù hợp với mục tiêu chuyển hoá. Điều này có thể liên quan đến việc định hình lại chiến lược, khám phá các nguồn cung cấp mới, thay đổi mô hình kinh doanh hoặc tìm kiếm cơ hội đa dạng hóa."
            ></CategoryItem>
            <CategoryItem
              img="./images/category2.png 2x"
              title="CÔNG NGHỆ VÀ HỆ THỐNG THÔNG TIN"
              desc="Đánh giá và triển khai công nghệ và hệ thống thông tin mới để hỗ trợ quá trình chuyển hoá. Điều này có thể bao gồm việc đổi mới hệ thống quản lý thông tin, triển khai phần mềm và công nghệ mới để tăng cường hiệu suất và sự kết nối trong tổ chức."
            ></CategoryItem>
            <CategoryItem
              img="./images/category3.png 2x"
              title="VĂN HÓA TỔ CHỨC"
              desc="Đổi mới văn hóa tổ chức để phù hợp với mục tiêu chuyển hoá. Xây dựng một văn hóa tổ chức linh hoạt, sáng tạo và hướng tới sự đổi mới. Điều này có thể bao gồm việc thúc đẩy sự hợp tác, khuyến khích việc chia sẻ kiến thức và thúc đẩy tinh thần cống hiến."
            ></CategoryItem>
            <CategoryItem
              img="./images/category4.png 2x"
              title="NGUỒN NHÂN LỰC"
              desc="Đánh giá và phát triển năng lực và kỹ năng của nhân viên để phù hợp với yêu cầu chuyển hoá. Điều này có thể bao gồm việc cung cấp đào tạo và hỗ trợ, tái cơ cấu và tái định vị nhân sự, và tạo điều kiện để nhân viên thích nghi và phát triển trong môi trường mới."
            ></CategoryItem>
            <CategoryItem
              img="./images/category5.png 2x"
              title="CẤU TRÚC TỔ CHỨC"
              desc="Xem xét và thay đổi cấu trúc tổ chức hiện tại để phù hợp với mục tiêu chuyển hoá. Điều này có thể liên quan đến việc tách, gộp hoặc tái tổ chức lại các bộ phận, đơn vị hoặc quan hệ cấu trúc bên trong tổ chức."
            ></CategoryItem>
            <CategoryItem
              img="./images/category6.png 2x"
              title="QUY TRÌNH LÀM VIỆC"
              desc="Đánh giá và cải tiến các quy trình làm việc hiện tại để tăng cường hiệu quả và linh hoạt. Quá trình này có thể bao gồm việc tối ưu hóa quy trình, loại bỏ các bước không cần thiết, đơn giản hóa và tự động hóa quy trình."
            ></CategoryItem>
            <CategoryItem
              img="./images/category7.png 2x"
              title="QUẢN LÝ THAY ĐỔI"
              desc="Xác định và triển khai các hoạt động quản lý thay đổi để quản lý và ủng hộ quá trình chuyển hoá. Điều này bao gồm việc xây dựng kế hoạch chuyển hoá, giao tiếp và liên lạc hiệu quả, quản lý rủi ro và theo dõi tiến độ."
            ></CategoryItem>
          </Slider>
        </div>
      </div>
    </section>
  );
}

const CategoryItem = ({ img, title, desc }) => {
  return (
    <div className="flex items-start category-item gap-[20px] text-white mx-[10px] md:mx-0">
      <div className="flex-shrink-0 w-[60px] md:w-[80px] xl:w-[128px]">
        <img srcSet={img} alt="" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold mb-[15px]">{title}</h4>
        <p className="text-justify">{desc}</p>
      </div>
    </div>
  );
};
