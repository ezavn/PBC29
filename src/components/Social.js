import React from "react";

export default function Social() {
  return (
    <section className="border-b-[1px] border-[#E1E1E1]">
      <div className="flex items-center justify-end page-container">
        <a
          href="https://www.facebook.com/planningbootcamp.com.vn"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center p-[4px] border-l-[1px] border-[#E1E1E1]"
        >
          <img
            className="transition-all hover:scale-105"
            src="./icons/fb-icon.svg"
            alt=""
          />
        </a>
        <a
          href="https://www.youtube.com/@ActionCOACHCBD"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center p-[4px] border-l-[1px] border-r-[1px] border-[#E1E1E1]"
        >
          <img
            className="transition-all hover:scale-105"
            src="./icons/yt-icon.svg"
            alt=""
          />
        </a>
      </div>
    </section>
  );
}
