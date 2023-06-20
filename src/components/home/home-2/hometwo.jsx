

// import  Brands from "@/common/brands";
import  About from "./about";
import  Appointment from "./appointment";
import  Choose from "./choose";
import  Gallery from "./gallery";
import  HeroBanner from "./hero-banner";
import  NewsLetter from "./news-letter";
import  Service from "./service";
// import  Team from "./team";
import  Testimonial from "../../../common/testimonial";
import  Blog from "./blog";
import ServiceArea from "@/components/services/service/service-area";

const HomeTwo = () => {
  return (
    <>
      <HeroBanner />
      <About />
      {/* {/* <Service /> */}
         <ServiceArea /> 
      {/* <Gallery /> */}
      <Choose />
      <Appointment />
      {/* <Brands border_style={true} /> */}
      {/* <Team /> */}
      <Testimonial bg_img={true} />
      {/* <Blog /> */}
      <NewsLetter />
    </>
  );
};

export default HomeTwo;
