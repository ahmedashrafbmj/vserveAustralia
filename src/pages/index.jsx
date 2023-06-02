import dynamic from 'next/dynamic';
  
import Loader from '@/common/Loader';
const HomeTwo = dynamic(() => import('@/components/home/home-2/hometwo'), {
  ssr: true,
  loading: () =><Loader/>
});
const SEO = dynamic(() => import('@/components/seo'), {
  ssr: true,
  loading: () =><Loader/>
});

const index = () => {
  return (
   <>
      <SEO pageTitle="Home Two" />
      <HomeTwo />
    
   </>
  );
};

export default index;
