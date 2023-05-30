import FAQ from "@/components/faq/faq";
import SEO from "@/components/seo";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <LayoutTwo>
        <SEO pageTitle="FAQ " />
        <FAQ />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
