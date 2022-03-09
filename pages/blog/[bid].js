import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/layout";
import styles from "../../styles/Blog.module.scss";
import useSWR from "swr";
import Image from "next/image";
import Link from 'next/link';
// import CustomLink from "../../components/Navigation/customLink";
import {axiosFetcher} from "../../components/Networking/fetcher";
import * as Unicons from "@iconscout/react-unicons";

const BlogDetail = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(() => query.bid && `/api/blog/${query.bid}`, axiosFetcher);

  let Container = (props) => {
    return (
      <section className={styles.blog}>
        <div className={`${styles.blog__container_detail}`}>
          {props.children}
        </div>
      </section>
    );
  };
  if (error)
    return (
      <Container>
        <div>{error.message}</div>
      </Container>
    );
  if (!data)
    return (
      <Container>
        <div>Loading...</div>
      </Container>
    );

  return (
    <Container>
      <div>
        <Link href="/blog">
          <a className={styles.blog__button}>
            <i className={`${styles.button__icon} ${styles.leftReact__icon}`}><Unicons.UilArrowLeft /></i>Volver
          </a>
        </Link>
      </div>
      <div className={styles.blog__img_detail}>
        <Image src={`/img/${data.img}`} alt="blog image" width={data.imgwidth} height={data.imgheight} objectFit="cover"></Image>
        <h1 className={styles.blog__title_detail}>{data.title}</h1>
      </div>
      {data.type === "TEXT" ?
        <div className={styles.blog__subContainer_detail_text}>
          {data.details.map((detail, index) =>
            <div key={detail.id}>
              <h3 className={styles.blog__subTitle_detail}>{detail.title}</h3>
              <div className={styles.blog__scroller_detail}>
                {detail.description.split("|").map((value, index) => (
                  <p className={styles.blog__text_detail} key={index}>{value}</p>
                ))}
              </div>
            </div>
          )}
        </div>
        :
        <div className={styles.blog__subContainer_detail_image}>
          {data.details.map((detail, index) =>
            <div className={styles.blog__data_detail} key={detail.id}>
              <Image src={`/img/${detail.img}`} alt="blog image" width={detail.imgwidth} height={detail.imgheight} objectFit="cover"></Image>
              <div className={styles.blog__img_data_content}>
                <div className={styles.blog__img_title}>
                  <h3>{detail.title}</h3>
                </div>
                <div className={styles.blog__img_time}>
                  <span>{detail.time} - {detail.place}</span>
                </div>
                <div className={styles.blog__img_description}>
                  <span>{detail.description}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      }
    </Container>
  );
};

export default BlogDetail;

BlogDetail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
