import React, { useRef, useEffect, useState } from "react";
import CustomLink from "../Navigation/customLink"
import styles from "../../styles/Footer.module.scss";
import * as Unicons from "@iconscout/react-unicons";

const footerComponent = () => {
    let today = (new Date()).getFullYear();
    return (
      <footer className={styles.footer}>
          <div className={styles.footer__bg}>
            <div className={styles.footer__container}>
                <div>
                    <h1 className={styles.footer__title}>Raul</h1>
                    <span className={styles.footer__subtitle}>Software developer</span>
                </div>

                <div className={styles.footer__links}>
                    <CustomLink href="/service" exact className={styles.footer__link}>Services</CustomLink>
                    <CustomLink href="/blog" exact className={styles.footer__link}>Blog</CustomLink>
                    <CustomLink href="/contact" exact className={styles.footer__link}>Contact me</CustomLink>
                </div>

                <div className={styles.footer__socials}>
                    <a href="https://www.linkedin.com/in/iraulcv/" target="_blank" rel="noopener" className={styles.footer__social}>
                        <i className={styles.footer__icon}><Unicons.UilLinkedinAlt/></i>
                    </a>
                    <a href="https://github.com/raulcv/" target="_blank" rel="noopener" className={styles.footer__social}>
                        <i className={styles.footer__icon}><Unicons.UilGithub/></i>
                    </a>
                    <a href="https://www.instagram.com/iraulcv/" target="_blank" rel="noopener" className={styles.footer__social}>
                        <i className={styles.footer__icon}><Unicons.UilInstagram/></i>
                    </a>
                </div>
            </div>
            <p className={styles.footer__copy}>&#169; {today} raulcv, Inc.</p>
        </div>
      </footer>
    );

}
export default footerComponent;
