import dynamic from "next/dynamic";
import Loader from '@/common/Loader';
  
const SEO = dynamic(() => import("@/components/seo"), {
  ssr: false,
  loading: () => <Loader />,
});
const ServiceOne = dynamic(
  () => import("@/components/services/service/service-one"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);


const index = () => {
  return (
    <>
      <SEO pageTitle="Services" />
      <ServiceOne />
    </>
  );
};

export default index;
