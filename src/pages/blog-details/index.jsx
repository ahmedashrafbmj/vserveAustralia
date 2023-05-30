import React from "react";
import BlogDetails from "@/components/blog-details/blog-details";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import LayoutTwo from "@/layout/layout-2";
const index = () => {
  return (
    <Wrapper>
      <LayoutTwo>

      <SEO pageTitle="Blog Details" />
      <BlogDetails />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
