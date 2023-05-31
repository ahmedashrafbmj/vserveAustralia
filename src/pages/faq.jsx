
import dynamic from "next/dynamic";
import Loader from '@/common/Loader';
import React from "react";
const FAQ = dynamic(() => import("@/components/faq/faq"), {
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
      <SEO pageTitle="FAQ " />
      <FAQ />
    </>
  );
};

export default index;
