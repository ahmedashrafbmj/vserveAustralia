import sda_homes_data from "@/data/sda-homes-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceArea = () => {
  return (
    <>
      <section
        className="services-area pt-120 pb-105 grey-bg"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row align-items-end  mb-45">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  {/* our Services */}
                </span>
                <h3 className="tp-section__title mb-30">SDA Smart Homes</h3>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="services-link text-md-start text-lg-end mb-30">
                <span>
                  {`We'll`} ensure you always get the best results:
                  <Link href="/contact">
                    Contact us<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
              <span className="text-dark text-right">
                Specialist Disability Accommodation (SDA) refers to
                accommadation for people who require specialist housing
                solutions, including to assist with the delivery of supports
                that cater for their extreme functional impairment or very high
                support needs.These are not support services, but the homes in
                which they are delivered. For detailed information on SDA homes
                follow{" "}
                <Link href="https://www.ndis.gov.au/about-us/operational-guidelines/specialist-disability-accommodation-operational-guideline/what-sda">
                  <p>
                    <u>
                      https://www.ndis.gov.au/about-us/operational-guidelines/specialist-disability-accommodation-operational-guideline/what-sda
                    </u>
                  </p>
                </Link>
              </span>
            </div>
          </div>

          <div className="row  mb-45">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  Am I eligible for SDA?
                </span>
                <h3 className="tp-section__title mb-30">Eligiblity </h3>
              </div>
            </div>
          </div>
          <div className="row align-items-end  mb-45">
            <div className="col-lg-7 col-md-12 col-12 ">
              <p>
                Yes, If you have "an extreme functional impairment" or "very
                high support needs". <br />
                If you have SDA needs requirement.
                <br />
                If SDA is reasonable and necessary for you
                <br />
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-12">
              <div className="services-link text-md-start text-lg-end mb-30">
                <span>
                  <Link href="/contact">
                    Check SDA Eligiblity
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            {sda_homes_data.map((item) => (
              <div key={item.id} className="col-lg-6 col-md-6 col-12">
                <div
                  className={`services-thumb-box ${item.color} mb-30 wow fadeInRight`}
                  data-wow-delay=".3s"
                >
                  <div className="services-thumb-box__thumb fix">
                    <Image placeholder="image" width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}  alt="vserve" src={item.img}  />
                  </div>
                  <div className="services-thumb-box__text-area d-flex align-items-center">
                    {/* <div className="services-thumb-box__icon mr-20">
                      <i className={item.icon}></i>
                    </div> */}
                    <div className="services-thumb-box__content">
                      <h5 className="services-thumb-box__title">
                        <Link href="/services-details">{item.title}</Link>
                      </h5>
                      <span className="text-dark">{item.descripton}</span>
                      {/* <Link className="tp-btn-link" href="/services-2">
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
