import Link from "next/link";
import React from "react";

// choose data
const choose = [
  {
    id: 1,
    color: "",
    icon: "flaticon-microscope",
    title: (
      <>
        High Quality <br />
        Services
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 2,
    color: "pink-icon",
    icon: "flaticon-thinking",
    title: (
      <>
        Fast Working <br />
        Process
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 3,
    color: "green-icon",
    icon: "flaticon-24-hours-1",
    title: (
      <>
        24/7 Customer <br /> Support
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
  {
    id: 4,
    color: "sky-icon",
    icon: "flaticon-team",
    title: (
      <>
        We have <br /> Expert Team
      </>
    ),
    des: (
      <>
        Nam eget dui vel quam sodales <br />
        semper quis porttitor tortor.
      </>
    ),
  },
];

const About = () => {
  return (
    <>
      <section className="choose-area theme-bg pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  About Vserve
                </span>
                <h3 className="tp-section__title title-white mb-85">
                  {"We Serve With Care "}
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 ">
              <blockquote class="blockquote text-right text-white">
                <span class="mb-0">
                  Vserve Australia is a service which connects the mental health
                  condition, the physically impaired and those with special
                  needs to services that provide them with assistance. We
                  understand that individuals and families require lots of
                  support and care to be able to enjoy themselves and live the
                  life they desire. Vserve Australia is an independent service
                  that has been successfully established and running within all
                  areas of the Sydney region.
                </span>
                <footer class="blockquote-footer mt-1 text-dark">
                  {" "}
                  <cite title="Source Title">Vserve Australia</cite>
                </footer>
              </blockquote>
            </div>
            {/* {choose.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="tp-choose__item ml-75 mb-100 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className={`tp-choose__icon ${item.color} mb-40`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="tp-choose__content">
                    <h4 className="tp-choose__title mb-20">{item.title}</h4>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
          {/* <div className="row text-center">
            <div className="col-lg-12">
              <div className="tp-choose-option">
                <span>
                  Laboratories Used For Scientific Research :
                  <Link href="/">
                    Take Many Forms<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default About;
