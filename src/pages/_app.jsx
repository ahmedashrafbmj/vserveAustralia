import "../styles/index.scss";

import dynamic from 'next/dynamic';

const LayoutTwo = dynamic(() => import('@/layout/layout-2'));
const Wrapper = dynamic(() => import('@/layout/wrapper'));
// if (typeof window !== "undefined") {
//   require("bootstrap/dist/js/bootstrap");
// }


export default function App({ Component, pageProps }) {
  return <Wrapper><LayoutTwo><Component {...pageProps} /></LayoutTwo></Wrapper> ;
}
