import dynamic from "next/dynamic";

  
const FooterTwo = dynamic(() => import("./footer/footer-2")) ;
const HeaderTwo = dynamic(() => import("./header/header-two")) ;

const LayoutTwo = ({ children }) => {
  return (
    <>
      <HeaderTwo />
      <main>{children}</main>
      <FooterTwo />
    </>
  );
};

export default LayoutTwo;
