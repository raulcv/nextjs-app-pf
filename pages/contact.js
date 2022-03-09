import Head from "next/head";
import Layout from "../components/Layout/layout";
import ContactSection from "../components/Sections/contactSection";

const Contact = ()=>{
    return (<ContactSection/>)
}

export default Contact;

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}