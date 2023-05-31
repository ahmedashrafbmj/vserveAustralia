import dynamic from "next/dynamic";
import Loader from '@/common/Loader';
import React from "react";
const SEO = dynamic(() => import("@/components/seo"), {
  ssr: false,
  loading: () => <Loader />,
});

const NDIS = dynamic(() => import("@/components/Ndis/Ndis-details"), {
  ssr: false,
  loading: () => <Loader />,
});


const index = () => {
  return (
    <>
      <SEO pageTitle="NDIS" />
      <NDIS />
    </>
  );
};

export default index;
