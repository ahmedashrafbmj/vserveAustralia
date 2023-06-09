import Link from "next/link";

import ContactUs from "../forms/contact-us";
import Image from "next/image";

// contact_info
const contact_info = {
  address: (
    <>
      VSERVE AUSTRALIA DISABILITY CARE , NSW 2000, <br /> AUSTRALIA
    </>
  ),
  phone_1: "1300-343-481",
  // phone_2: "+1255 - 568 - 6523",
  open: (
    <>
      Monday - Friday <br />
      09:00 AM - 05:00 PM
    </>
  ),
};

const { address, phone_1, phone_2, open } = contact_info;
const ContactForm = () => {
  return (
    <>
      <section className="contact-area pt-130 pb-115">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-5 col-12 wow fadeInLeft"
              data-wow-delay=".4s"
            >
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <Image
                      quality={20}
                      placeholder="image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      alt="vserve"
                      src="/assets/img/icon/contact-01.svg"
                    />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Address line</h4>
                    <span>
                      <Link aria-label="Vserve" href="/contact">
                        {address}
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <Image
                      quality={20}
                      placeholder="image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      alt="vserve"
                      src="/assets/img/icon/contact-02.svg"
                    />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Phone Number</h4>
                    <span>
                      <Link aria-label="Vserve" href={`tel:${phone_1}`}>
                        {phone_1}
                      </Link>
                    </span>
                    <span>
                      <Link aria-label="Vserve" href={`tel:${phone_2}`}>
                        {phone_2}
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <Image
                      quality={20}
                      placeholder="image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      alt="vserve"
                      src="/assets/img/icon/contact-03.svg"
                    />
                  </div>
                  <div className="tpcontact__address">
                    <h4 className="tpcontact__title mb-15">Opening Hours</h4>
                    <span>{open}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="contactform wow fadeInRight" data-wow-delay=".4s">
                <h4 className="contactform__title mb-35">
                  Send us a Massage :
                </h4>
                <ContactUs />

                <div className="row">
                  <div className="col-lg-12">
                    <div className="tpcontactmap">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56215.718841453985!2d-0.19959027821222705!3d51.48739183082915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slondon%20eye!5e0!3m2!1sen!2sbd!4v1656749326947!5m2!1sen!2sbd"
                        width="600"
                        height="450"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
