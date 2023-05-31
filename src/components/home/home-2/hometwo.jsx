import dynamic from "next/dynamic";
import Loader from "@/common/Loader";

const Brands = dynamic(() => import("@/common/brands"), {
  ssr: false,
  loading: () => <Loader />,
});
const About = dynamic(() => import("./about"), {
  ssr: false,
  loading: () => <Loader />,
});
const Appointment = dynamic(() => import("./appointment"), {
  ssr: false,
  loading: () => <Loader />,
});
const Choose = dynamic(() => import("./choose"), {
  ssr: false,
  loading: () => <Loader />,
});
const Gallery = dynamic(() => import("./gallery"), {
  ssr: false,
  loading: () => <Loader />,
});
const HeroBanner = dynamic(() => import("./hero-banner"), {
  ssr: false,
  loading: () => <Loader />,
});
const NewsLetter = dynamic(() => import("./news-letter"), {
  ssr: false,
  loading: () => <Loader />,
});
const Service = dynamic(() => import("./service"), {
  ssr: false,
  loading: () => <Loader />,
});
const Team = dynamic(() => import("./team"), { ssr: false, loading: () => <Loader /> });
const Testimonial = dynamic(() => import("../../../common/testimonial"), {
  ssr: false,
  loading: () => <Loader />,
});
const Blog = dynamic(() => import("./blog"), { ssr: false, loading: () => <Loader /> });

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
      <Team />
      <Testimonial bg_img={true} />
      <Blog />
      <NewsLetter />
    </>
  );
};

export default HomeTwo;
