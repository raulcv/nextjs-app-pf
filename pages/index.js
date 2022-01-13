import HomeSection from "../components/Sections/homeSection";
import InmindSection from "../components/Sections/inmindSection";
import TestimonialSection from "../components/Sections/testimonialSection";
import Layout from "../components/Layout/Layout";

export default function Index() {
  return (
    <>
    <HomeSection/>
    <TestimonialSection/>
    <InmindSection/>
    </>
  );
}
Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
