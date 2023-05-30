import VideoPopup from "@/modals/video-popup";
import Image from "next/image";
import React, { useState } from "react";

const Video = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="video-area pb-125">
        <div className="video-bg p-relative">
          <Image width="100%" height="100%"placeholder="image" alt="vserve" src="/assets/img/banner/video-bg-01.jpg"  />
          <div className="video-bg-icon">
            <a className="popup-video" onClick={() => setIsVideoOpen(true)}>
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"d8w5SICzzxc"}
      />
      {/* video modal end */}
    </>
  );
};

export default Video;
