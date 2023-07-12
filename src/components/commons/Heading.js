import React from "react";

export default function Heading({ children, className }) {
  return (
    <h2
      className={`${className} text-[24px] md:text-[32px] lg:text-[40px] xl:text-[50px] font-bold text-center leading-[1.4] uppercase`}
      data-aos="fade-down"
    >
      {children}
    </h2>
  );
}
