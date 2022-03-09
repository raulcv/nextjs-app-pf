import Head from "next/head";
import Layout from "../components/Layout/layout";
import ServiceSection from "../components/Sections/serviceSection";

const Service = ()=>{
    return (
      <>
      <ServiceSection/>
      </>
    )
}

export default Service;

Service.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
