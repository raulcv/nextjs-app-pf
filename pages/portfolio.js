import Head from "next/head";
import Layout from "../components/Layout/layout";
import PortfolioSection from "../components/Sections/portfolioSection";

const Porfolio = ()=>{
    return (
      <>
      <PortfolioSection/>
      </>
    )
}

export default Porfolio;

Porfolio.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
