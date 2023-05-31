import dynamic from "next/dynamic";
import Loader from '@/common/Loader';
  
const SEO = dynamic(() => import("@/components/contact/contact"), {
  ssr: false,
  loading: () => <Loader />,
});

const ContactUs = dynamic(() => import("@/components/seo"), {
  ssr: false,
  loading: () => <Loader />,
});


const index = () => {
  return (
    <>
      <SEO pageTitle={"contact us"} />
      <ContactUs />
    </>
  );
};

export default index;
