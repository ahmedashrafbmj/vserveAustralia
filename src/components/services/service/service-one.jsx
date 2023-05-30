import DirectContactUs from "@/components/forms/direct-contact-us";

import React from "react";
import Banner from "./banner";
import ServiceArea from "./service-area";
import About from "./About";

const ServiceOne = () => {
  return (
    <>
      <Banner />
      <ServiceArea />
      <About />
      <DirectContactUs />
    </>
  );
};

export default ServiceOne;
