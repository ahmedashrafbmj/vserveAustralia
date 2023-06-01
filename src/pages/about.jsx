import dynamic from "next/dynamic";
import Loader from '@/common/Loader';
  
const SEO = dynamic(() => import("@/components/seo"), {
  ssr: false,
  loading: () => <Loader />,
});

const About = dynamic(() => import("@/components/about/about"), {
  ssr: false,
  loading: () => <Loader />,
});

const about = () => {
  return (
    <>
      <SEO pageTitle="About" />
      <Link aria-label="Vserve"bout />
    </>
  );
};

export default about;
