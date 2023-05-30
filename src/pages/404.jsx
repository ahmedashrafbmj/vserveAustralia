import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <>
      <HeaderTwo />
      <div className="container">
        <div className="error_page">
          <Link href="/">
            <Image width="100%" height="100%"placeholder="image" alt="vserve" style={{ width: "100%" }} src="/assets/img/404.webp" />
          </Link>
        </div>
      </div>
      <FooterFour />
    </>
  );
};

export default Error;
