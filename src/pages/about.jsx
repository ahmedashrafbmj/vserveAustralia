import About from "@/components/about/about";
import SEO from "@/components/seo";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";

const about = () => {
  return (
    <Wrapper>
      <LayoutTwo>

      <SEO pageTitle="About" />
      <About />
      </LayoutTwo>
    </Wrapper>
  );
};

export default about;
