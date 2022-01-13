import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import Navigation from "../Navigation/navbar";
import Footer from "../Footer/Footer";
import FloatButton from "../Footer/FloatButton";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Raul web site</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Sitio web de Raul" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta property="og:title" content="Principal page" /> */}
      </Head>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
      <FloatButton />
    </>
  );
}