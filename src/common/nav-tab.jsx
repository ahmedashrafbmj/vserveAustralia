import Image from "next/image";

// progress_data
const progress_data = [
  {
    id: 1,
    icon: "flaticon-approval",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Equality",
    des: (
      <>
        We value and respect all individuals equally, <br />
        promoting a culture of inclusivity and fairness.
      </>
    ),
  },
  {
    id: 2,
    icon: "flaticon-flask",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Professional Service",
    des: (
      <>
        Our centers provide hands-on treatment, coupled with educational
        resources that empower participants to actively <br /> engage in their
        recovery and future physical and mental well-being. We aim to equip
        individuals with the tools and knowledge necessary to become active
        participants in their own health journey.
      </>
    ),
  },
  {
    id: 3,
    icon: "flaticon-report",
    img: "",
    title: "Diversity",
    des: (
      <>
        With the expertise of our multilingual team, we offer therapy, advocacy,
        accessibility, and accommodation services to Australians with diverse
        disabilities, <br /> acknowledging and celebrating their unique
        backgrounds and experiences.
      </>
    ),
  },
];

// tab_content
const tab_content = [
  {
    id: 1,
    tab_id: "profile-tab-pane",
    aria_labelledby: "profile-tab",
    header: <>Empowering Individuals to Overcome Challenges and Embrace Life</>,
    title: "Our Mission is Give You Always Best Results.",
    des_1: (
      <>
        As healthcare professionals, our mission is to assist our participants
        in reclaiming their lifelong journey towards health, fitness, and
        psychological well-being. We focus on the strengths of Australians while
        helping individuals overcome any disadvantages they may face, enhancing
        their overall quality of life.
      </>
    ),
    des_2: (
      <>
        {/* Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
        claritatem insitamconse quat.Exerci tation ullamcorper suscip */}
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/home_slider/9.jpg" },
      { order: "order-lg-3", img: "/assets/img/home_slider/8.jpg" },
    ],
  },
  {
    id: 2,
    tab_id: "contact-tab-pane",
    aria_labelledby: "contact-tab",
    header: <>Promoting Excellence through Innovation and Exceptional Care</>,
    title: "We are Trusted by over 25000+ of customers",
    des_1: (
      <>
        At our organization, we strive to become a sought-after NDIS service
        provider by attracting, rewarding, and retaining highly skilled staff
        who are dedicated to delivering exceptional services to our
        participants. We proactively develop a unique and comprehensive
        human-centered approach tailored to each individual.
      </>
    ),
    des_2: (
      <>
        {/* Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
        claritatem insitamconse quat.Exerci tation ullamcorper suscip */}
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/home_slider/13.jpg" },
      { order: "order-lg-3", img: "/assets/img/home_slider/15.jpg" },
    ],
  },
];
const NavTab = () => {
  return (
    <>
      <section className="nav-area tp-common-area pt-130 pb-80">
        <div className="container">
          <ul className="nav tp-nav-tavs mb-70" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                aria-label="vserve"
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
                tabIndex="-1"
              >
                Our Approach
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                aria-label="vserve"
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                Our Mission
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                aria-label="vserve"
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                Our Vision
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              {/* <span className="nav-info d-flex justify-content-center text-center mb-75">
                Your full service lab for clinical trials. Our process is to
                ensure the generation of <br /> accurate and precise findings
              </span> */}
              <div className="row">
                {progress_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="navtabs nav-primary p-relative text-center mb-40">
                      <div className="navtabs__icon mb-35">
                        <i className={item.icon}></i>
                      </div>
                      <div className="navtabs__content">
                        <h5 className="navtabs__title mb-25 mb-10">
                          {item.title}
                        </h5>
                        <p>{item.des}</p>
                      </div>
                      {item.img && (
                        <div className="navtabs__shape d-none d-lg-block">
                          <Image
                            quality={20}
                            placeholder="image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="vserve"
                            src={item?.img}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {tab_content.map((item) => (
              <div
                key={item.id}
                className="tab-pane fade"
                id={`${item.tab_id}`}
                role="tabpanel"
                aria-labelledby={`${item.aria_labelledby}`}
              >
                <span className="nav-info d-flex justify-content-center text-center mb-75">
                  {item.header}
                </span>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 order-lg-2">
                    <div className="nabmission mb-30">
                      <div className="nabmission__content text-center ml-50 mr-50 pt-20">
                        <h4 className="nabmission__title mb-35">
                          {item.title}
                        </h4>
                        <p className="mb-35">{item.des_1}</p>
                        <p>{item.des_2}</p>
                      </div>
                    </div>
                  </div>

                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className={`col-xl-3 col-lg-3 col-md-6 ${img.order}`}
                    >
                      <div className="nabthumb mb-30">
                        <Image
                          quality={20}
                          placeholder="image"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "25rem" }}
                          alt="vserve"
                          src={img.img}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTab;
