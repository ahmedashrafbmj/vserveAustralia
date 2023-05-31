import dynamic from "next/dynamic";
import Loader from '@/common/Loader';
const Sdahomes = dynamic(() => import("@/components/sda-homes"), {
  ssr: false,
  loading: () => <Loader />,
});
const SEO = dynamic(() => import("@/components/seo"), {
  ssr: false,
  loading: () => <Loader />,
});

import React from "react";

const index = () => {
  return (
    <>
      <SEO pageTitle="SDA HOMES" />
      <Sdahomes />
    </>
  );
};

export default index;
