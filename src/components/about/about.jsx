
import dynamic from "next/dynamic";
import Loader from '@/common/Loader';
const AboutArea  = dynamic(()=>import("./about-area"))
const Banner  = dynamic(()=>import("./banner"))
const Specialists  = dynamic(()=>import("@/common/specialists"))
const NavTab  = dynamic(()=>import("@/common/nav-tab"))
// const Team  = dynamic(()=>import("@/common/team"))

const About = () => {
  return (
    <>
      <Banner />
      <AboutArea />
      <Specialists />
      <NavTab />
      {/* <Team /> */}
    </>
  );
};

export default About;
