import React from "react";
import Heading from "./commons/Heading";
import { usePopup } from "../contexts/popupContext";

export default function Why() {
  const { setShow } = usePopup();
  return (
    <section id="benefit" className="why pb-sectionMB md:pb-section">
      <div className="page-container md:px-[50px]">
        <Heading>
          <span className="text-lightBlue">
            VÌ SAO CẦN TRANSFORM YOURBUSINESS -{" "}
          </span>{" "}
          <br className="hidden md:block" />
          <span>CHUYỂN HÓA DOANH NGHIỆP?</span>
        </Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[40px] xl:gap-[60px] mt-[40px]">
          <WhyItem
            img="./images/why1.png 2x"
            desc="Bằng cách tăng cường chất lượng dịch vụ, cải thiện trải nghiệm khách hàng và đáp ứng nhanh chóng yêu cầu của khách hàng, Tổ chức có thể tạo ra một lợi thế cạnh tranh và sự hài lòng của khách hàng."
          >
            Tạo ra giá trị <br /> cho khách hàng
          </WhyItem>
          <WhyItem
            img="./images/why2.png 2x"
            desc="Bằng cách thay đổi và cải tiến, tổ chức có thể tạo ra sự khác biệt và nâng cao lợi thế và khả năng cạnh tranh trên thị trường."
          >
            Tăng cường <br /> cạnh tranh
          </WhyItem>
          <WhyItem
            img="./images/why3.png 2x"
            desc="Bằng cách tối ưu hóa quy trình làm việc, sử dụng tài nguyên một cách hiệu quả hơn, giảm chi phí và tăng cường năng suất."
          >
            Tối ưu hóa <br /> hiệu suất
          </WhyItem>
          <div className="block lg:hidden">
            <WhyItem
              img="./images/why4.png 2x"
              desc="Bằng cách tăng cường chất lượng dịch vụ, cải thiện trải nghiệm khách hàng và đáp ứng nhanh chóng yêu cầu của khách hàng, Tổ chức có thể tạo ra một lợi thế cạnh tranh và sự hài lòng của khách hàng."
            >
              Thích nghi với <br></br>
              môi trường <br className="hidden md:block" />
              thay đổi
            </WhyItem>
          </div>
          <div className="block lg:hidden">
            <WhyItem
              img="./images/why5.png 2x"
              desc="Bằng cách thay đổi cấu trúc, quy trình và văn hóa, Tổ chức có thể khuyến khích sự đổi mới, khám phá và phát triển các ý tưởng mới."
            >
              Tăng khả năng <br /> đổi mới & <br className="hidden lg:block" />{" "}
              sáng tạo
            </WhyItem>
          </div>
        </div>
        <div className="hidden max-w-[576px] xl:max-w-[760px] lg:grid grid-cols-2 gap-[40px] xl:gap-[60px] mx-auto mt-[60px]">
          <WhyItem
            img="./images/why4.png 2x"
            desc="Bằng cách tăng cường chất lượng dịch vụ, cải thiện trải nghiệm khách hàng và đáp ứng nhanh chóng yêu cầu của khách hàng, Tổ chức có thể tạo ra một lợi thế cạnh tranh và sự hài lòng của khách hàng."
          >
            Thích nghi với <br /> môi trường <br className="hidden lg:block" />
            thay đổi
          </WhyItem>
          <WhyItem
            img="./images/why5.png 2x"
            desc="Bằng cách thay đổi cấu trúc, quy trình và văn hóa, Tổ chức có thể khuyến khích sự đổi mới, khám phá và phát triển các ý tưởng mới."
          >
            <p>
              Tăng khả năng <br /> đổi mới & <br className="hidden lg:block" />
              sáng tạo
            </p>
          </WhyItem>
        </div>
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

const WhyItem = ({ img, desc, children }) => {
  return (
    <div
      className="why-item flex flex-col gap-[10px] md:gap-[20px] xl:gap-[24px]"
      data-aos="zoom-in-right"
    >
      <div className="flex items-center gap-[25px]">
        <div className="w-[80px] h-[80px] xl:w-[120px] xl:h-[120px] flex-shrink-0">
          <img className="object-contain w-full h-full" srcSet={img} alt="" />
        </div>
        <div className="flex-1 font-bold text-[18px] xl:text-[20px] uppercase">
          {children}
        </div>
      </div>
      <p className="text-justify">{desc}</p>
    </div>
  );
};
