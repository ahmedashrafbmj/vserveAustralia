import dynamic from 'next/dynamic';
// import Loader from '@/common/Loader';
const FeedBack = dynamic(() => import('@/components/feedback/feedbacks'));
const SEO = dynamic(() => import('@/components/seo'));

const index = () => {
  return (
   <>
      <SEO pageTitle="FeedBack/ Complain" />
      <FeedBack />
    
   </>
  );
};

export default index;
