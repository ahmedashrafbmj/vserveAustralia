import Link from "next/link";
  

const FooterFour = ({ style_2 = false }) => {
  return (
    <>
      <footer>
        <div
          className={`footer-area ${
            style_2 ? "pt-105" : "tp-footer-white-content theme-bg pt-95"
          } `}
        >
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-1 mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="tp-footer-widget__content mb-95">
                      <i>FEEL FREE TO CONTACT US</i>
                      <h4 className="tp-footer-widget__contact mb-20">
                        <Link aria-label="Vserve" href="tel:61383766284">000 000 000</Link>
                      </h4>
                      <Link aria-label="Vserve" href="mailto:noreply@address.com">noreply@address.com</Link>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-5">
                        Career
                      </span>
                      <p>
                        Nam eget dui vel quam sodales semper quis porttitor{" "}
                        <br /> tortor. Vivamus quis ex nulla ...Nam eget dui vel
                        quam <br /> sodales semper quis porttitor tortor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Useful links
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link aria-label="Vserve" href="/contact">Contact us</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="/about">Help & About us</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="/contact">Shipping & Returns</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="/contact">Refund Policy</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="/about">About us</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="/services-details">Services</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-10">
                        Opening Hours
                      </span>
                      <div className="tp-footer-widget__list">
                        <ul>
                          <li>Office Hours: 8AM - 11PM</li>
                          <li>Office Hours: 8AM - 11PM</li>
                          <li>Sunday - Wekend Day</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-3 mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Customer Service
                    </span>
                    <div className="tp-footer-widget__links">
                      <ul>
                        <li>
                          <Link aria-label="Vserve" href="#">Orders</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="#">Downloads</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="#">Shipping & Returns</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="#">Addresses</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="#">Account details</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="#">Logout</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="#">Lost password</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="#">Privacy</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="#">Policy</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="#">Careers</Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="#">Support</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-4 mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Contact Info
                    </span>
                    <div className="tp-footer-widget__links mb-120">
                      <ul>
                        <li>address here </li>
                        <li>
                          <Link aria-label="Vserve" href="tel:(+880)15569569365">
                            000 000 000
                          </Link>
                        </li>
                        <li>
                          <Link aria-label="Vserve" href="mailto:support@mail.com">
                            support@mail.com
                          </Link>
                        </li>
                        <li>Office Hours: 8AM - 11PM</li>
                        <li>Sunday - Wekend Day</li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__social fw-social">
                      <Link aria-label="Vserve" href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link aria-label="Vserve" href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link aria-label="Vserve" href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                      <Link aria-label="Vserve" href="#">
                        <i className="fa-light fa-basketball"></i>
                      </Link>
                      <Link aria-label="Vserve" href="#">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom fw-border">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright copyright-white">
                    <span>
                     
                      © Copyright © {new Date().getFullYear()}
                      <Link aria-label="Vserve" href="index">Vserve</Link>.
                      <i> All Rights Reserved Copyright</i>
                    </span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright-info info-direction">
                    <ul className="d-flex align-items-center">
                      <li>
                        <Link aria-label="Vserve" href="#">Terms and conditions</Link>
                      </li>
                      <li>
                        <Link aria-label="Vserve" href="#">Privacy policy</Link>
                      </li>
                      <li>
                        <Link aria-label="Vserve" href="#">Pricing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
