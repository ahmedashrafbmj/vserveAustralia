import Link from "next/link";
import React from "react";

const ServiceDetailsArea = () => {
  return (
    <>
      <section className="services-details pt-130 pb-120">
        <div className="container">
            {/* <div className="row">
              <div className="col-lg-6 col-md-12">
                <div
                  className="services-thumb-img mb-50 wow fadeInLeft"
                  data-wow-delay=".4s"
                >
                  <Image quality={20} placeholder="image" width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}  alt="vserve"
                    src="/assets/img/services/services-thumb-07.jpg"
                    alt="services-thumb"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="services-thumb-img mb-50 wow fadeInRight"
                  data-wow-delay=".4s"
                >
                  <Image quality={20} placeholder="image" width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}  alt="vserve"
                    src="/assets/img/services/services-thumb-08.jpg"
                    alt="services-thumb"
                  />
                </div>
              </div>
            </div> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-process mb-50">
                <h4 className="tp-srv-process__title mb-30">
                 
Understanding the NDIS
                </h4>
                <p className="mb-20">
                  
There are around 4.3 million Australians who have a disability. Within the next five years, the National Disability Insurance Scheme (NDIS) will provide more than $22 billion in funding a year to an estimated 500,000 Australians who have permanent and significant disability. For many people, it will be the first time they receive the disability support they need.

The NDIS can provide all people with disability with information and connections to services in their communities such as doctors, sporting clubs, support groups, libraries and schools, as well as information about what support is provided by each state and territory government.
                </p>
                {/* <p className="mb-40">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem.
                </p> */}
                <div className="tp-srv-process__list">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i><b>National:</b> aThe NDIS is being introduced progressively across all states and territories.{" "}
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i><b>Disability:</b>  The NDIS provides support to eligible people with intellectual, physical, sensory, cognitive and psychosocial disability. Early intervention supports can also be provided for eligible people with disability or children with developmental delay.
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i><b>Insurance:</b>The NDIS gives all Australians peace of mind if they, their child or loved one is born with or acquires a permanent and significant disability, they will get the support they need.
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
<b>Scheme:</b> The NDIS is not a welfare system. The NDIS is designed to help people get the support they need so their skills and independence improve over time.

​
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-stap mb-40">
                <h4 className="tp-srv-stap__title mb-25">4 Simple Steps</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet.
                </p>
                <p>
                  Must explain to you how all this mistaken idea of denouncing
                  works pleasure and praising uts pain was born and I will gives
                  you a itself completed account of the system, and sed expounds
                  the ut actual teachings of that greater sed explores truth.
                  Denouncing works pleasures and praising pains was us born and
                  I will gives you a completed ut workers accounts of the
                  system. sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="tp-srv-stap__list mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
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
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div
                className="tp-srv-stap__list ml-65 mb-30 wow fadeInUp"
                data-wow-delay=".4s"
              >
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
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 col-md-6">
              <div
                className="tp-srv-stap__list ml-65 ml-20 mb-30 wow fadeInUp"
                data-wow-delay=".6s"
              >
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
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-srv-research mb-50">
                <h4 className="tp-srv-research__title mb-25">Our Research</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet,
                </p>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-12">
              {/* <div className="tp-srv-bg mb-70">
                <Image quality={20} placeholder="image" width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}  alt="vserve"
                  src="/assets/img/services/services-thumb-09.jpg"
                  alt="services-bg"
                />
              </div> */}
              <div className="services-link tp-srv-link">
                <span>
                  {/* Laboratories Used For Scientific Research : */}
                  <Link className="tp-btn text-white" href="https://www.ndis.gov.au/applying-access-ndis/am-i-eligible">
                   Check NDIS Eligibilty<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link className="tp-btn-second text-white" href="https://www.ndis.gov.au/applying-access-ndis/how-apply">
                    NDIS Application<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsArea;
