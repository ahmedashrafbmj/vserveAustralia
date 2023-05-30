import Blog from "@/components/blog";
import SEO from "@/components/seo";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <LayoutTwo>

      <SEO pageTitle="Blog" />
      <Blog />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
