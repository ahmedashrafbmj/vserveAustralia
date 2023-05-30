import Sdahomes from "@/components/sda-homes";
import SEO from "@/components/seo";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <LayoutTwo>
        <SEO pageTitle="SDA HOMES" />
        <Sdahomes />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
