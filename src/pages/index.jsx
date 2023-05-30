import dynamic from 'next/dynamic';

import React from "react";
import Loader from '@/common/Loader';
const HomeTwo = dynamic(() => import('@/components/home/home-2/hometwo'), {
  ssr: false,
  loading: () =><Loader/>
});
const SEO = dynamic(() => import('@/components/seo'), {
  ssr: false,
  loading: () =><Loader/>
});

const index = () => {
  return (
   <>
      <SEO pageTitle="Home Two" />
      <HomeTwo />
    
   </>
  );
};

export default index;
