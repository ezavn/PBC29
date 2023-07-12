import React from "react";

export default function Hero() {
  return (
    <div className="hero bg-[url('../public/images/pbc29-hero-bg.png')] bg-no-repeat bg-cover py-sectionMB md:pt-section">
      <div className="page-container">
        <div className="flex items-center justify-center hero">
          <div>
            <img srcSet="/images/pbc29-hero.png 2x" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
