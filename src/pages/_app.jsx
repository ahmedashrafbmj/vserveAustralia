import Loader from "@/common/Loader";
// for production
import "../styles/index.css";
// for developemet
import "../styles/index.scss";

import dynamic from 'next/dynamic';

const LayoutTwo = dynamic(() => import('@/layout/layout-2'), {
  ssr: false,
  loading: () => <Loader/>
});
const Wrapper = dynamic(() => import('@/layout/wrapper'), {
  ssr: false,
  loading: () => <Loader/>
});
// if (typeof window !== "undefined") {
//   require("bootstrap/dist/js/bootstrap");
// }


export default function App({ Component, pageProps }) {
  return <Wrapper><LayoutTwo><Component {...pageProps} /></LayoutTwo></Wrapper> ;
}
