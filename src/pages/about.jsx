import dynamic from "next/dynamic";
import Loader from '@/common/Loader';
import React from "react";
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
      <About />
    </>
  );
};

export default about;
