import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Portfolio.module.scss";
import * as Unicons from "@iconscout/react-unicons";
import {axiosFetcher} from "../../components/Networking/fetcher";
import useSWR from "swr";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Autoplay, Pagination, Navigation, Scrollbar, Autoplay]);

const DemoButton = () => {
  return (
    <div className={styles.portfolio__button}>
      <Link href='#'>
        <a className={styles.normal__button} target='_blank'>Ver demostración
          <i className={styles.button__icon}><Unicons.UilArrowRight /></i>
        </a>
      </Link>
    </div>
  )
}
const Contentportfolio = () => {
  const [portfolioState, setportfolioState] = useState("");
  let portfolioData = [
    {
      id: "1",
      key: "WSMO",
      name: "Web site moderno",
      description: "Web site adaptable a todo dispositivo con interacciones animadas y alto rendimiento",
      img: "login-sicm.png",
      imgwidth: 600,
      imgheight: 350,
    },
    {
      id: "2",
      key: "WSEM",
      name: "Web system para una empresa minera",
      description: "Web site con multiples funciones y adaptable a todo dispositivo",
      img: "me-takesPhoto.JPG",
      imgwidth: 600,
      imgheight: 350,
    },
    {
      id: "3",
      key: "DAPP",
      name: "Desktop system in Maxima Internacional S.A",
      description: "Aplicaciones de escritorio de cuentas por cobrar",
      img: "login-sicm.png",
      imgwidth: 600,
      imgheight: 350,
    }
  ];

  function getIcon(iconName) {
    let Icon = Unicons[iconName];
    return <Icon />;
  }

  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      // scrollbar={{ draggable: true }}
      centeredSlides={true}
      loop={true}
      grabCursor={true}
      // cssMode={true} No permite slide
      // autoplay={{ "delay": 6000, "disableOnInteraction": false }}
      className={`${styles.portfolio__container} swiper-container`}>
      {portfolioData.map((portfolio) => (
        <SwiperSlide className={`${styles.portfolio__content}`} key={portfolio.key}>
          <div className={styles.portfolio__img_content}>
            <Image className={styles.portfolio__img} src={`/img/${portfolio.img}`} alt="Portfolio image" width={portfolio.imgwidth} height={portfolio.imgheight} layout="responsive"></Image>
          </div>
          <div className={styles.portfolio__data}>
            <h3 className={styles.portfolio__title}>{portfolio.name}</h3>
            <p className={styles.portfolio__description} style={{ paddingBottom: '1rem' }}>{portfolio.description}</p>
            <DemoButton />
          </div>
        </SwiperSlide>
      ))}
      {/* </div> */}
      <div className={`swiper-button-next`}>
        <i className={styles.swiper__right_icon}><Unicons.UilAngleRight /></i>
      </div>
      <div className={'swiper-button-prev'}>
        <i className={styles.swiper__left_icon}><Unicons.UilAngleLeft /></i>
      </div>
      <div className={'swiper-pagination'}></div>
    </Swiper>
  );
};

const ContentPortfolioDetails = () => {
  const { data, error } = useSWR(`/api/blog`, axiosFetcher);
  console.log(data)
  if (error)
    return (<div>{error.message}</div>);
  if (!data)
    return (<div>Loading...</div>);

  return (
    <div className={styles.portfolio__container}>
      <h3 className={styles.portfolio__title} style={{ padding: "5rem 0 3rem 0", textAlign: "center" }}>Trabajos que completé recientemente</h3>
      <div className={styles.portfolio__container_data}>
        {data.map((pf, index) => (
          <div className={styles.portfolio__content_data} key={pf.id}>
            <div className={styles.portfolio__img_body}>
              <div className={styles.portfolio__img_container}>
                <Image className={styles.portfolio__img} src={`/img/${pf.img}`} alt="blog image" width={pf.imgwidth} height={pf.imgheight} objectFit="cover"></Image>
              </div>
              <div className={styles.portfolio__data}>
                <h3 className={styles.portfolio__title}>{pf.title}</h3>
                <p className={styles.portfolio__description}>{pf.description}</p>
              </div>
            </div>
            <div className={styles.portfolio__img_footer}>
              <DemoButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
class portfolio extends React.Component {
  render() {
    return (
      <section className={styles.portfolio} id="portfolio">
        <h2 className={styles.section__title}>{"Portafolio"}</h2>
        <span className={styles.section__subtitle}>
          Mis trabajos más reciente
        </span>
        <Contentportfolio />
        <ContentPortfolioDetails />
      </section>
    );
  }
}
export default portfolio;
