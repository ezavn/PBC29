import React from "react";
import { FaTimes } from "react-icons/fa";
import { usePopup } from "../../contexts/popupContext";

export default function VideoPopup() {
  const { showVideo, setShowVideo } = usePopup();
  return (
    <>
      {showVideo ? (
        <div className="overlay">
          <div className="video-popup">
            <div className="wrapper">
              <div className="frame">
                <iframe
                  src="https://www.youtube.com/embed/kNh8fgnV1Pg"
                  title="Giới thiệu PLANNING BOOTCAMP 28"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center absolute top-[-20px] right-[-20px] cursor-pointer">
                <FaTimes
                  onClick={() => setShowVideo(false)}
                  size={20}
                ></FaTimes>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
