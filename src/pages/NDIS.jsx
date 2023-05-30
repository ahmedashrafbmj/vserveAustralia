import NDIS from "@/components/Ndis/Ndis-details";
import SEO from "@/components/seo";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <LayoutTwo>

      <SEO pageTitle="NDIS" />
      <NDIS/>
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
