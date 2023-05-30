import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <>
      <HeaderTwo />
      <div className="container">
        <div className="error_page">
          <Link href="/">
            <Image placeholder="image" width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}  alt="vserve"  src="/assets/img/404.webp" />
          </Link>
        </div>
      </div>
      <FooterFour />
    </>
  );
};

export default Error;
