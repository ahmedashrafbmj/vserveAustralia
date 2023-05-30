import SEO from "@/components/seo";
import ServiceOne from "@/components/services/service/service-one";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
         <LayoutTwo>

      <SEO pageTitle="Services" />
      <ServiceOne />
         </LayoutTwo>
    </Wrapper>
  );
};

export default index;
