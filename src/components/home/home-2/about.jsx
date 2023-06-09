import VideoPopup from "@/modals/video-popup";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const About = () => {
  // about content data
  const about_content = {
    about_bg: "/assets/img/shape/shape-bg-05.png",
    about_img: "/assets/img/home_slider/3.png",
    popup_video: "https://www.youtube.com/watch?v=-BpXNPHiB2U",
    about_thumb: "/assets/img/home_slider/6.png",
    title: " We Serve With Care",
    sub_title: "About Vserve",
    des_1: (
      <>
       {/* We Serve With Care */}
      </>
    ),
    dex_2: (
      <>
       Vserve Australia is a service which connects the mental health condition, the physically impaired and those with special needs to services that provide them with assistance. We understand that individuals and families require lots of support and care to be able to enjoy themselves and live the life they desire. Vserve Australia is an independent service that has been successfully established and running within all areas of the Sydney region.
      </>
    ),
    btn: "Talk with Expart",

    // booking data
    booking_bg: "/assets/img/home_slider/11.jpg",
    b_sub_title: "Book Free Consultation ",
    b_title: (
      <>
We care For You  <br /> 
      </>
    ),
    b_btn: "Book Now",
    b_img: "/assets/img/logo/logo.png",
  };
  const {
    about_bg,
    about_img,
    // popup_video,
    about_thumb,
    sub_title,
    title,
    des_1,
    dex_2,
    btn,
    booking_bg,
    b_sub_title,
    b_title,
    b_btn,
    b_img,
  } = about_content;

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className="about-area grey-bg pt-130 tp-box-space pb-130 ml-30 mr-30"
        style={{
          backgroundImage: `url(${about_bg})`,
        }}
      >
        <div className="about-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-thumb text-lg-center p-relative ml-85 mb-60 wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <Image
                    quality={10}
                    placeholder="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt="vserve"
                    src={about_img}
                  />

                  {/* 
                   */}
                  <div className="about-thumb-shape d-none d-md-block" style={{left:"-50px"}}>
                    <Image
                      quality={10}
                      placeholder="image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "40%", height: "auto" , }}
                      alt="vserve"
                      src={about_thumb}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-content ml-60 mb-60 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="tp-section">
                    <span className="tp-section__sub-title left-line mb-25">
                      {sub_title}
                    </span>
                    <h1/>
                    <h3 className="tp-section__title mb-45">{title}</h3>
                    <i>{des_1}</i>
                    <p className=" mr-20 mb-35">{dex_2}</p>
                  </div>
                  <div className="about-content__btn">
                    <Link aria-label="Vserve" href="/about" className="tp-btn" prefetch={false}>
                      {btn}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-area pt-75 ">
          <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
              <div className="col-lg-12">
                <div
                  className="tp-cta-bg p-relative theme-light-bg pt-65 pb-70"
                  style={{
                    backgroundImage: `url(${booking_bg})`,
                  }}
                >
                  <div className="cta-content ml-90">
                    <div className="tp-section">
                      <span className="tp-section__sub-title sub-title-white left-line-white mb-20">
                        {b_sub_title}
                      </span>
                    </div>
                    <h1/>
                    <h2 className="cta-title mb-30">{b_title}</h2>
                    <div className="cta-btn">
                      <button aria-label="vserve" className="tp-btn-second">
                        {b_btn}
                      </button>
                    </div>
                    <div className="cta-shape d-none d-md-block">
                      <Image
                        quality={10}
                        placeholder="image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        alt="vserve"
                        src={b_img}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default About;
