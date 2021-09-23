import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Navigation from "../components/Navigation/navbar";

const About = ()=>{
    return (
        <div>
        <Head>
          <title>Raul web site</title>
          <meta property="og:title" content="About page" key="title" />
        </Head>
        <section>
          <Navigation />
          <h1>About page</h1>
        </section>
      </div>
    )
}

export default About;