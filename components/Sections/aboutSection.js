import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/About.module.scss";
import * as Unicons from '@iconscout/react-unicons';

class aboutElement extends React.Component {
    
render(){
  
  return (
    <section className={styles.about} id="about">
    <h2 className={styles.section__title}>Sobre mí</h2>
    <span className={styles.section__subtitle}>Mi presentación</span>

    <div className={styles.about__container}>
      <div className={styles.about__container_img}>
          <div className={styles.about__img}>
              <Image src="/img/me-memoji-one.PNG" alt="me front image" width="100%" height="100%" layout="responsive"/>
          </div>
      </div>
      <div className={styles.about__data}>
        <p className={styles.about__description}>
          FullStack web developer con años de experiencia en desarrollo web,
          trabajando con las mejores y ultimas tecnologias inspirados en las
          grandes compañías de la informática.
        </p>

        <div className={styles.about__info}>
          <div>
            <span className={styles.about__info_title}>03+</span>
            <span className={styles.about__info_name}>Años<br/>experiencia</span>
          </div>
          <div>
            <span className={styles.about__info_title}>02+</span>
            <span className={styles.about__info_name}>Empresas<br/>trabajadas</span>
          </div>
          <div>
            <span className={styles.about__info_title}>06+</span>
            <span className={styles.about__info_name}>Proyectos<br/>completados</span>
          </div>
        </div>

        <div className={styles.about__buttons}>
          <a href="assets/pdf/Alexa-Cv.pdf" className={styles.normal__button}>
            Descargar CV<i className={styles.normal__button_icon}><Unicons.UilDownloadAlt/></i>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
 }
};
export default aboutElement;
