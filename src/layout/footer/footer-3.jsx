import Link from "next/link";
  

const FooterThree = () => {
  return (
    <>
      <footer>
        <div className="footer-area tp-common-area footer-white-content theme-bg pt-105">
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-6">
                  <div
                    className="footernewsletter mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <h4 className="footernewsletter__title">
                      Subscribe Newslatter
                    </h4>
                    <p>
                      Exerci tation ullamcorper suscipit lobortis nisl aliquip{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div
                    className="footernewsletter__form p-relative wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <form action="#">
                      <input type="text" placeholder="Enter Mail" />
                      <button aria-label="vserve" className="footernewsletter__fw-news-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row pb-40 pt-50">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="footercontact mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="footercontact__icon">
                      <i className="flaticon-placeholder"></i>
                    </div>
                    <div className="footercontact__content">
                      <span className="footercontact__title">
                        <Link aria-label="Vserve" href="/contact">
                          address here Rd, <br /> Nya 10982 USA
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="footercontact mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="footercontact__icon fw-pink-icon">
                      <i className="flaticon-mail"></i>
                    </div>
                    <div className="footercontact__content fw-pink-content">
                      <Link aria-label="Vserve" href="mailto:Rasalinawillam@gmail.com">
                        Rasalinawillam@gmail.com
                      </Link>
                      <Link aria-label="Vserve" href="tel:+08987878773345">+08 98787 8773 345 </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="footercontact mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="footercontact__icon fw-green-icon">
                      <i className="flaticon-24-hours"></i>
                    </div>
                    <div className="footercontact__content">
                      <span>Mon - Sat - 09:00PM - 06:00AM</span>
                      <span>Sunday - Off Day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom-tp">
            <div className="container">
              <div className="footer-bottom-border">
                <div className="row">
                  <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-12">
                    <div className="footer-widget__copyright cpy-white-content">
                      <span>
                        © Copyright © {new Date().getFullYear()}
                        <Link aria-label="Vserve" href="/"> Vserve</Link>.
                        <i> All Rights Reserved Copyright</i>
                      </span>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-12">
                    <div className="footer-widget__copyright-info info-direction cpy-white-content-info">
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
        </div>
      </footer>
    </>
  );
};

export default FooterThree;
