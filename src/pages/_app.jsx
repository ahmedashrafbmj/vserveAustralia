
import 'bootstrap/dist/css/bootstrap.min.css';
import "public/assets/css/flaticon.css";
import "public/assets/css/font-awesome-pro.css";
import 'swiper/css/bundle';
import 'node_modules/react-modal-video/scss/modal-video.scss';
import 'node_modules/react-18-image-lightbox/src/style.css';
import 'node_modules/react-circular-progressbar/dist/styles.css';
import 'public/assets/scss/main.scss';


// import dynamic from 'next/dynamic';

import  LayoutTwo from '@/layout/layout-2'
import  Wrapper from '@/layout/wrapper'
// if (typeof window !== "undefined") {
//   require("bootstrap/dist/js/bootstrap");
// }


export default function App({ Component, pageProps }) {
  return <Wrapper><LayoutTwo><Component {...pageProps} /></LayoutTwo></Wrapper> ;
}
