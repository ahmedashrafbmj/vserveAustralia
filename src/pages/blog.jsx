
import dynamic from "next/dynamic";
import Loader from '@/common/Loader';
import React from "react";
const Blog = dynamic(() => import("@/components/blog"), {
  ssr: false,
  loading: () => <Loader />,
});

const SEO = dynamic(() => import("@/components/seo"), {
  ssr: false,
  loading: () => <Loader />,
});

const index = () => {
  return (
    <>
      <SEO pageTitle="Blog" />
      <Blog />
    </>
  );
};

export default index;
