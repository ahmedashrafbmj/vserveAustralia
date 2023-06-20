import Image from "next/image";
import Link from "next/link";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-12">
              <div
                className="tp-about-thumb mb-60 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <Image
                      quality={20}
                      placeholder="image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "15rem" }}
                      alt="vserve"
                      src="/assets/img/home_slider/12.jpg"
                    />
                    <div className="about__exprience tp-ab-counter">
                      <h3 className="counter">5+</h3>
                      <i>
                        Years of <br />
                        Experience
                        
                      </i>
                    </div>
                  </div>
                  <div className="tp-ab-shape d-none d-md-block d-lg-none d-xl-block">
                    <Image
                      quality={20}
                      placeholder="image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "10rem" }}
                      alt="vserve"
                      className="ab-shape-one"
                      src="/assets/img/home_slider/14.jpg"
                    />
                    <Image
                      quality={20}
                      placeholder="image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "20rem" }}
                      alt="vserve"
                      className="ab-shape-two"
                      src="/assets/img/home_slider/11.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title ab-title mb-25">
                    Experience cannot be replaced.
                  </h3>
                  {/* <Link aria-label="Vserve" className="tp-section__link" href="#">
                    Read our MIssion & Vission{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link> */}
                  <h5 aria-label="Vserve" className="tp-section__h5" href="#">
                    We have been in operations for 15 years.
                    {/* <i className="fa-solid fa-arrow-right"></i> */}
                  </h5>
                  <h5 aria-label="Vserve" className="tp-section__h5" href="#">
                    Our Vision: to be the Most Trusted Care Provider.
                    {/* <i className="fa-solid fa-arrow-right"></i> */}
                  </h5>
                  <h5 aria-label="Vserve" className="tp-section__h5" href="#">
                    Our Mission: to Empower People.
                    {/* <i className="fa-solid fa-arrow-right"></i> */}
                  </h5>
                  <p className=" mr-20 mb-40">
                    We offer compassionate Home and Community Care for older
                    people and people living with disability, Supported
                    Independent Living in our properties across Sydney, and Plan
                    Management and Support Coordination services to NDIS
                    participants across Australia.
                  </p>
                </div>
                {/* <div className="tp-about__info-list ab-check-list mb-55">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>In aliquet dui nec
                      lectus
                    </li>
                  </ul>
                </div> */}
                <div className="about-content__btn">
                  <Link aria-label="Vserve" href="/about" className="tp-btn">
                    About us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
