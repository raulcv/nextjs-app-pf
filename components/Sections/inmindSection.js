import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Inmind.module.scss";
import * as Unicons from "@iconscout/react-unicons";

class inmindElement extends React.Component {
  render() {
    return (
      <section className={styles.inmind}>
        <div className={styles.inmind__container}>
          <div className={styles.inmind__bg}>
            <div className={styles.inmind__data}>
              <h2 className={styles.inmind__title}>¿Tienes ideas para un nuevo proyecto?</h2>
              <p className={styles.inmind__description}>Contactame y llegamos  un acuerdo en su nuevo proyecto</p>
              <a href="/contact" className={styles.light__Button}>Contactame
                <i className={styles.normal__button_icon}><Unicons.UilMessage /></i>
              </a>
            </div>
            {/* <img src="/img/me-byci.png" alt="me bycicle image" className={styles.inmind__img} width="100%" height="100%" layout="responsive"/> */}
            <div className={styles.inmind__img}>
              <Image src="/img/me-byci.png" alt="me bycicle image" width="400" height="601" layout="responsive"/>
              {/* <img src="/img/me-byci.png" alt="me bycicle image" className={styles.inmind__img} width="100%" height="100%"/> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default inmindElement;
