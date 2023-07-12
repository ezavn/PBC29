import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const handleToggleHamburger = () => setShowNav(!showNav);
  return (
    <header
      className={`${
        !!showNav ? "fixed" : ""
      } top-0 left-0 right-0 p-[10px] bg-white md:bg-transparent z-[9999]`}
    >
      <div className="lg:max-w-[1270px] w-full lg:px-0 px-[15px] lg:mx-auto h-[80px] flex items-center justify-between relative">
        <a href="/">
          <img srcSet="/images/cbd-logo.png 2x" alt="" />
        </a>
        <nav className={`nav-menu ${!!showNav ? "active" : ""}`}>
          <li>
            <a href="#benefit" onClick={() => setShowNav(false)}>
              LỢI ÍCH
            </a>
          </li>
          <li>
            <a href="#active" onClick={() => setShowNav(false)}>
              HOẠT ĐỘNG <br /> NỔI BẬT
            </a>
          </li>
          <li>
            <a href="#coach" onClick={() => setShowNav(false)}>
              DIỄN GIẢ
            </a>
          </li>
          <li>
            <a href="#content">
              NỘI DUNG <br /> CHƯƠNG TRÌNH
            </a>
          </li>
          <li>
            <a
              href="https://actioncoachcbd.com/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowNav(false)}
            >
              GIỚI THIỆU VỀ <br /> ACTIONCOACH CBD FIRM
            </a>
          </li>
        </nav>
        <div className="hamburger" onClick={handleToggleHamburger}>
          {!!showNav ? (
            <FaTimes size={30} style={{ color: "#023278" }}></FaTimes>
          ) : (
            <FaBars size={30} style={{ color: "#023278" }}></FaBars>
          )}
        </div>
        <button className="hidden font-bold text-white uppercase h-[40px] bg-red rounded-md px-[16px] lg:flex items-center justify-center cursor-pointer btn-scale">
          hotline: 1800 8087
        </button>
      </div>
    </header>
  );
}
