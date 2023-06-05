  
import BlogDetails from "@/components/blog-details/blog-details";

import Loader from "@/common/Loader";
import dynamic from "next/dynamic";
const SEO = dynamic(() => import("@/components/seo"), {
  ssr: false,
  loading: () => <Loader />,
});

const index = () => {
  return (
    <>

      <SEO pageTitle="Blog Details" />
      <BlogDetails />
    </>
  );
};

export default index;
