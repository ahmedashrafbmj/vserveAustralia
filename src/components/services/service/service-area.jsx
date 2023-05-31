import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ImagePopup from "@/modals/ImagePopup";
import Image from "next/image";


// slider setting
const setting = {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

// gallery_content
const gallery_content = [
  {
    id: 1,
    img: "/assets/img/services/1.webp",
    text1: "DOMESTIC ASSISTANCE",
    text2: "We provide our clients with a wide range of assistance in their daily chores ranging from cleaning to cooking",
  },
  {
    id: 2,
    img: "/assets/img/services/2.webp",
    text1: "NURSING ",
    text2: "AnaesFor clients needing special care we provide home nursing services through our qualified staff.These may include but are not limited to Aged care, Post-Operative care, Rehabilitation support, Dementia and Parkisnson's disease etcthetist",
  },
  {
    id: 3,
    img: "/assets/img/services/3.webp",
    text1: "INDEPENDENT LIVING",
    text2: "We strive to make our clients as autonomous as possible by facilitating them with state of the art equipment to achieve their goals and passions independently",
  },
  {
    id: 4,
    img: "/assets/img/services/4.webp",
    text1: "MEAL PREP & SHOPPING",
    text2: "We care about our client's health and needs by providing them help to shop  moreover our nutritionists can cater  personalized healthy meals at the most reasonable prices ",
  },
  {
    id: 5,
    img: "/assets/img/services/5.webp",
    text1: "THERAPY SUPPORT",
    text2: "For clients needing special behavioral  support we offer therapy services ranging from psychological help in phases of anxiety, depression and other disorders to help them thrive socially",
  },
  {
    id: 6,
    img: "/assets/img/services/6.webp",
    text1: "Man Mowing Lawn  HOME& GARDEN MAINTENANCE",
    text2: "We aim to keep our clients surroundings well kept and livable. Thus regular gardening and maintenance services are ensured.",
  },
  {
    id: 7,
    img: "/assets/img/services/7.webp",
    text1: "PERSONAL CARE",
    text2: "Our competent staff are well trained to provide personal care to our clients so their hygiene and health are never compromised ",
  },
  {
    id: 8,
    img: "/assets/img/services/8.webp",
    text1: "SOCIAL SUPPORT",
    text2: "With inclusion of social activities such as movies, walks, sight seeing, shopping & eating out we make sure our clients never feel differentiated and enjoy being part of the world     ",
  },
  {
    id: 9,
    img: "/assets/img/services/9.webp",
    text1: "ALLIED HEALTH",
    text2: "Our plans include regular analysis of clients progress through experts. Specialized sessions of physiotherapy and occupational therapy have proven positive in capacity building",
  },


];


const ServiceArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

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
  const images = gallery_content.map((item) => item.img);

  return (
    <>
      <section
        className="gallery-area grey-bg pt-120 pb-130"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                Our Services
                </span>
                <h3 className="tp-section__title mb-70">VServe  Services</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div
            className="tp-gallery ml-15 mr-15 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="swiper-container gall-active">
              {/* <Swiper {...setting} loop={isLoop} modules={[Navigation]}> */}
              <div className="row">

                {gallery_content.map((item, index) => (
                  // <SwiperSlide key={item.id}>
                    <div  key={item.id} className=" col-4 tp-gallery__item p-relative mb-70">
                      <div className="tp-gallery__img p-relative">
                        <Image quality={50} placeholder="image" width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}  alt="vserve" src={item.img} />
                        {/* <div className="tp-gallery__info">
                          <a
                            onClick={() => handleImagePopup(index)}
                            className="popup-image"
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </a>
                        </div> */}
                         <div className="tp-gallery__title ourServicesBeforeContent">
                      {item.text1}
                      </div>
                      </div>
                     
                      <div className="tp-gallery__content">
                        <h4 className="tp-gallery__title">
                          <Link href="#">{item.text1}</Link>
                        </h4>
                        <span>
                          {/* <i className="fa-solid fa-tag"></i> */}
                          <Link href="#">{item.text2}</Link>
                        </span>
                      </div>
                    </div>
                  // </SwiperSlide>
                ))}
              </div>
              {/* </Swiper> */}
            </div>
          </div>
        </div>

      </section>

      {/* image light box start */}
      {isOpen && (
        <Image quality={50}Popup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default  ServiceArea ;
