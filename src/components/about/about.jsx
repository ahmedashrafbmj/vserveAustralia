
import dynamic from "next/dynamic";
import Loader from '@/common/Loader';
const AboutArea  = dynamic(()=>import("./about-area"),{ssr:false,loading:<Loader />})
const Banner  = dynamic(()=>import("./banner"),{ssr:false,loading:<Loader />})
const Specialists  = dynamic(()=>import("@/common/specialists"),{ssr:false,loading:<Loader />})
const NavTab  = dynamic(()=>import("@/common/nav-tab"),{ssr:false,loading:<Loader />})
const Team  = dynamic(()=>import("@/common/team"),{ssr:false,loading:<Loader />})

const About = () => {
  return (
    <>
      <Banner />
      <AboutArea />
      <Specialists />
      <NavTab />
      <Team />
    </>
  );
};

export default About;
