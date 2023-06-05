  
import BlogDetails from "@/components/blog-details/blog-details";
const SEO = dynamic(() => import("@/components/seo"), {
  ssr: false,
  loading: () => <Loader />,
});

import Wrapper from "@/layout/wrapper";
import LayoutTwo from "@/layout/layout-2";
import Loader from "@/common/Loader";
import dynamic from "next/dynamic";
const index = () => {
  return (
    <>

      <SEO pageTitle="Blog Details" />
      <BlogDetails />
    </>
  );
};

export default index;
