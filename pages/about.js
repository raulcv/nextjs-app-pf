import Head from "next/head";
import Layout from "../components/Layout/Layout";
import AboutSection from "../components/Sections/aboutSection";
import SkillSection from "../components/Sections/skillsSection";
import ProgressSection from "../components/Sections/progressSection";

const About = ()=>{
    return (
      <>
      <AboutSection/>
      <SkillSection/>
      <ProgressSection/>
      </>
    )
}

export default About;

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
