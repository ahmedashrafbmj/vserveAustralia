import dynamic from "next/dynamic";
import Loader from '@/common/Loader';
import React from "react";
const SEO = dynamic(() => import("@/components/seo"), {
  ssr: false,
  loading: () => <Loader />,
});
const ServiceDetails = dynamic(() => import("@/components/services/service-details/service-details"), {
  ssr: false,
  loading: () => <Loader />,
});

const index = () => {
  return (
    <>
      <SEO pageTitle="Service Details" />
      <ServiceDetails />
    </>
  );
};

export default index;
