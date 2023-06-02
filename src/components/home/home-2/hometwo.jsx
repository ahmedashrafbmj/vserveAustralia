import dynamic from "next/dynamic";

const Brands = dynamic(() => import("@/common/brands"));
const About = dynamic(() => import("./about"));
const Appointment = dynamic(() => import("./appointment"));
const Choose = dynamic(() => import("./choose"));
const Gallery = dynamic(() => import("./gallery"));
const HeroBanner = dynamic(() => import("./hero-banner"));
const NewsLetter = dynamic(() => import("./news-letter"));
const Service = dynamic(() => import("./service"));
const Team = dynamic(() => import("./team"));
const Testimonial = dynamic(() => import("../../../common/testimonial"));
const Blog = dynamic(() => import("./blog"));

const HomeTwo = () => {
  return (
    <>
      <HeroBanner />
      <About />
      <Service />
      <Gallery />
      <Choose />
      <Appointment />
      {/* <Brands border_style={true} /> */}
      {/* <Team /> */}
      <Testimonial bg_img={true} />
      <Blog />
      <NewsLetter />
    </>
  );
};

export default HomeTwo;
