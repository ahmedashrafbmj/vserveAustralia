import MobileMenus from '@/layout/header/mobile-menus';
import ImagePopup from '@/modals/ImagePopup';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";


const images = [
  {
    img: "/assets/img/blog/blog-in-01.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-02.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-03.jpg",
  }
];


const Sidebar = ({ isActive, setIsActive }) => {

 
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const img = images.map((item) => item.img);

 
  return (
    <>
      <div
        className={`tpsideinfo tp-side-info-area ${
          isActive ? "tp-sidebar-opened" : ""
        }`}
      >
        <button
          onClick={() => setIsActive(false)}
          className="tpsideinfo__close"
        >
          <i className="fal fa-times"></i>
        </button>
        <div className="tpsideinfo__logo mb-40">
          <Link href="/">
            <Image quality={70} placeholder="image" width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}  alt="vserve" src="/assets/img/logo/white-logo.png"  />
          </Link>
        </div>

        <div className="mobile-menu mean-container d-block d-lg-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        <div className="tpsideinfo__content mb-60">
          <p className=" d-none d-xl-block">
            Our mission is to ensure the generation of accurate and precise
            findings.
          </p>
          <span>Contact Us</span>
          <a href="#">
            <i className="fa-solid fa-star"></i>Your Address
          </a>
          <a href="tel:61383766284">
            <i className="fa-solid fa-star"></i>000 0000 0000
          </a>
          <a href="mailto:noreply@email.com">
            <i className="fa-solid fa-star"></i>noreply@email.com
          </a>
        </div>
        <div className="tpsideinfo__content-inputarea mb-60 d-none d-xl-block">
          <span>Get Update</span>
          <div className="tpsideinfo__content-inputarea-input">
            <form action="#">
              <input type="email" placeholder="Enter Mail" />
              <button className="tpsideinfo__content-inputarea-input-btn">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="tpsideinfo__gallery mb-35 d-none d-xl-block">
          <span>Cheack Instagram Post</span>
          <div className="tpsideinfo__gallery-item">
            {images.map((item, i) => (
              <a
                key={i}
               
                style={{ cursor: "pointer" }}
                onClick={() => handleImagePopup(i)}
                className="popup-image"
              >
                <Image quality={70} placeholder="image" width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}  alt="vserve" src={item.img}/>
              </a>
            ))}
          </div>
        </div>
        <div className="tpsideinfo__socialicon">
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-skype"></i>
          </a>
        </div>
      </div>

      <div
        onClick={() => setIsActive(false)}
        className={`body-overlay ${isActive ? "opened" : ""}`}
      ></div>

      {/* image light box start */}
      {isOpen && (
        <Image quality={70}Popup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default Sidebar;