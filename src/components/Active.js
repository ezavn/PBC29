import React from "react";
import Heading from "./commons/Heading";

export default function Active() {
  return (
    <section id="active" className="sc-active py-sectionMB md:py-section">
      <div className="page-container">
        <Heading className="text-lightBlue mb-[50px]">
          NHỮNG HOẠT ĐỘNG NỔI BẬT TẠI PBC 29
        </Heading>
        <div className="mt-[30px] md:mt-[50px] flex flex-col gap-y-[40px]">
          <ActiveItem num1 title="Roundtable" img="/images/active1.png">
            RoundTable là phần chia sẻ mang tính chuyên sâu, thực chiến của các
            Nhà Huấn luyện Doanh nghiệp của CBD Firm và các Chủ doanh nghiệp
            đang là khách hàng của CBD Firm về các vấn đề mà nhiều Doanh nghiệp
            đang phải đối mặt.
          </ActiveItem>
          <ActiveItem
            reverse
            num2
            title='Chuyên đề "Transform YourBusiness - Chuyển hóa Doanh nghiệp"'
            img="/images/active2.png"
          >
            Chia sẻ từ Nhà huấn luyện Doanh nghiệp của CBD Firm về tầm quan
            trọng cũng như cách thức để Chuyển hóa đội ngũ - Giai đoạn tiếp theo
            để Doanh nghiệp thực thi những Mục tiêu của năm 2023.
          </ActiveItem>
          <ActiveItem num3 title="Hoạt động chính" img="/images/active3.png">
            <p>- Đánh giá - Phân tích kết quả Quý III/2023</p>
            <p>- Thiết lập mục tiêu và ưu tiên của Quý IV/2023</p>
            <p>
              - Chọn chiến lược và Lập kế hoạch hành động 90 ngày của Quý
              IV/2023
            </p>
          </ActiveItem>
        </div>
      </div>
    </section>
  );
}

const ActiveItem = ({
  title,
  img,
  reverse,
  className,
  num1,
  num2,
  num3,
  children,
}) => {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row items-center gap-[20px] md:gap-[40px] ${className} ${
        reverse ? "flex-col lg:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 flex items-start gap-x-[20px]">
        <div className="w-[105] flex-shrink-0" data-aos="zoom-out">
          <img srcSet={`${num1 ? "/images/num1.png 2x" : ""}`} alt="" />
          <img srcSet={`${num2 ? "/images/num2.png 2x" : ""}`} alt="" />
          <img srcSet={`${num3 ? "/images/num3.png 2x" : ""}`} alt="" />
        </div>
        <div className="flex-1">
          <h3
            data-aos="fade-down"
            className="work-heading font-bold text-[20px] md:text-[32px] text-lightBlue leading-[1.2] md:mb-[25px] mb-[15px] text-left"
          >
            {title}
          </h3>
          <div
            data-aos="fade-up"
            className="text-justify text-black md:text-left"
          >
            {children}
          </div>
        </div>
      </div>
      <div className="w-auto md:w-[614px] flex-shrink-0 rounded-[30px]">
        <img className="rounded-[30px]" src={img} alt="" />
      </div>
    </div>
  );
};
