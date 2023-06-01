import SocialLinks from "@/common/social-links";
import Image from "next/image";
import Link from "next/link";

const footer_content = {
  footer_info: [
    {
      id: 1,
      title: "Useful links",
      cls: "footer-col-2",
      links: [
        { name: "Contact us", link: "/contact-us" },
        { name: "Help & About us", link: "/about" },
        { name: "Shipping & Returns", link: "/shop-details" },
        { name: "Refund Policy", link: "/shop-details" },
        { name: "About us", link: "/about" },
        { name: "Services", link: "/service" },
      ],
    },
    {
      id: 2,
      title: "Contact info",
      cls: "footer-col-3",
      links: [
        { name: "address here" },
        { name: "000 000 000" },
        { name: "support@mail.com" },
        { name: "Office Hours: 8AM - 11PM" },
        { name: "Sunday - Wekend Day" },
      ],
    },
  ],
  contact_info: [
    {
      id: 1,
      title: "Quick Links",
      support_info: [
        " 27 Division St, New York, NY 10002, USA",
        "(+880)52462545632",
        " support@example.com",
      ],
      office_time: "Office Hours: 9AM - 4PM",
      off_day: " Friday - Wekend Day",
    },
  ],
  copy_right_text: (
    <>
      © Copyright © {new Date().getFullYear()}
      <Link aria-label="Vserve" href="/">
        Vserve
      </Link>
      .<i> All Rights Reserved Copyright</i>
    </>
  ),
};

const { footer_info, copy_right_text } = footer_content;
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area theme-bg pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-1 mb-50 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4 className="footer-widget__title mb-30">
                    <Link aria-label="Vserve" href="/">
                      <Image
                        quality={20}
                        placeholder="image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        alt="vserve"
                        src="/assets/img/logo/white-logo.png"
                      />
                    </Link>
                  </h4>
                  <p>
                    Exerci tation ullamcorper suscipit lobortis nisl aliquip ex
                    ea commodo claritatem itamconse quat.Exerci tation
                    ullamcorper.
                  </p>
                  <div className="footer-widget__social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              {footer_info.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                  <div
                    className={`footer-widget ${item.cls} mb-50 wow fadeInUp`}
                    data-wow-delay=".4s"
                  >
                    <h4 className="footer-widget__title mb-20">{item.title}</h4>
                    <div className="footer-widget__links">
                      <ul>
                        {item.links.map((link, i) => (
                          <li key={i}>
                            <Link
                              aria-label="Vserve"
                              href={`${link?.link ? link.link : "/"}`}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-2 mb-50 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="footer-widget__title mb-20">Useful links</h4>
                  <div className="footer-widget__links">
                    <ul>
                      <li>
                        <Link aria-label="Vserve" href="/contact">Contact us</Link>
                      </li>
                      <li>
                        <Link aria-label="Vserve" href="/about">Help & About us</Link>
                      </li>
                      <li>
                        <Link aria-label="Vserve" href="/shop-details">Shipping & Returns</Link>
                      </li>
                      <li>
                        <Link aria-label="Vserve" href="/shop-details">Refund Policy</Link>
                      </li>
                      <li>
                        <Link aria-label="Vserve" href="/about">About us</Link>
                      </li>
                      <li>
                        <Link aria-label="Vserve" href="/services-details">Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-3 mb-50 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="footer-widget__title mb-20">Contact info</h4>
                  <div className="footer-widget__info">
                    <ul>
                      <li>
                        <Link aria-label="Vserve" href="#">address here </Link>
                      </li>
                      <li>
                        <Link aria-label="Vserve" href="tel:+9159008855">000 000 000</Link>
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
                </div>
              </div> */}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="footer-widget footer-col-4 mb-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="footer-widget__title mb-20">
                    Subscribe Newslatter
                  </h4>
                  <p>
                    Exerci tation ullamcorper suscipit lobortis nisl aliquip ex
                    ea commodo{" "}
                  </p>
                  <div className="footer-widget__newsletter p-relative">
                    <form action="#">
                      <input type="email" placeholder="Enter Mail" />
                      <button
                        aria-label="vserve"
                        className="footer-widget__fw-news-btn"
                      >
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area-bottom theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright">
                  <span>{copy_right_text}</span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright-info info-direction">
                  <ul className="d-flex align-items-center">
                    <li>
                      <Link aria-label="Vserve" href="#">
                        Terms and conditions
                      </Link>
                    </li>
                    <li>
                      <Link aria-label="Vserve" href="#">
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link aria-label="Vserve" href="shop">
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
