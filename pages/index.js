import Head from "next/head";
// import Document, { Html, Head, Main, NextScript } from 'next/document'
// import Main from "next/Main";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Navigation from "../components/Navigation/navbar";
import HomeSection from "../components/Sections/homesection";
import AboutSection from "../components/Sections/aboutSection";
import SkillsSection from "../components/Sections/skillsSection";

function Index({ data }) {

  console.log(data);
  let MainUrl = "http://localhost:1337";
  return (
    <>
      <Head>
        <title>Principal page</title>
        <meta property="og:title" content="Principal page" key="title" />
        <link rel="icon" href="/logo.svg"></link>
      </Head>
      <header>
        <Navigation />
      </header>
      <main className={styles.main}>
        <HomeSection/>
        <AboutSection/>
        <SkillsSection/>
        <div>
          <Image
            src="/vercel.svg"
            width={400}
            alt="Main image"
            height={400}
          ></Image>
        </div>

        <ul>
          {data.map((dato) => (
            <li key={dato.id}>
              {dato.Nombre} {dato.Orden}
              <div>
                <img
                  src={`${MainUrl}${dato.Imagen[0].url}`}
                  alt="Picture of the Tecnology"
                  width={200}
                  height={200}
                ></img>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // // Fetch data from external API
  // const res = await fetch(`http://localhost:1337/tablas`);
  // const data = await res.json();
  const data = [];
  console.log(data);
  // Pass data to the page via props
  return { props: { data } };
}

export default Index;
