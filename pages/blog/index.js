import Head from "next/head";
import styles from "../../styles/Blog.module.scss";
import Layout from "../../components/Layout/layout";
import BlogComponent from "../../components/Sections/blogSection";
import useSWR from "swr";
import {axiosFetcher} from "../../components/Networking/fetcher";

const Blog = () => {
  const { data, error } = useSWR(`/api/blog`, axiosFetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <section className={styles.blog} id="blog">
      <h2 className={styles.section__title}>{"Blog personal"}</h2>
      <span className={styles.section__subtitle}>
        Mis actividades y pasatiempos
      </span>
      <div className={styles.blog__container}>
        {data.map((blog, index) => (
          <BlogComponent key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog;

Blog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
