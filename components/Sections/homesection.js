import React, { useRef, useEffect } from "react";
import CustomLink from "../../components/Navigation/customLink"
import styles from "../../styles/Home.module.scss";;
import Animation from "../Card/animation"
import * as Unicons from '@iconscout/react-unicons';

const HomeSubtitleElement = () => {
  const animateDiv = React.useRef(null);
  let Fatherfunctions =(function () {
    let initFunctions = () => {
      functions.ActionChangeHeadSubtitle();
    }
    let functions = {
      ActionChangeHeadSubtitle: () => {
        let i = 0;
        let arrayClasses = ['subtitle__one', 'subtitle__two', 'subtitle__three', 'subtitle__four'];
        let arrayStyles = ['0','-28px', '-56px', '-84px']
        // let arrayStyles = [{top: '0',transition:'none'},{top: '-28px'}, {top: '-56px'}, {top: '-84px'}]
        // console.log(animateDiv)
        useEffect(function () {
          // console.log(animateDiv.current.style)
          const setIntervalId = setInterval(()=> {
            // console.log(animateDiv)
            if(i > 3)i=0;
            animateDiv.current.style.top = arrayStyles[i];
            if(i===3) {
              animateDiv.current.style.transition = 'none'
            } else animateDiv.current.style.transition = null
            // animateSubtitle.classList.remove(arrayClasses[i])
            // console.log(arrayStyles[i])
            i++;
            animateDiv.current.style.top = arrayStyles[i>3?0:i];
            // animateSubtitle.classList.add(arrayClasses[i>3?0:i])
            // console.log(arrayStyles[i>3?0:i])
          }, 3100);
          return () => {
            clearInterval(setIntervalId);
          };
        }, []);

      },
    };
    initFunctions();
  })();

  return (
    <div className={styles.animate__subtitle} ref={animateDiv} id="idSubtitleAnimate">
      <h3 className={styles.subtitle__one}>Backend developer</h3>
      <h3 className={styles.subtitle__two}>Frontend developer</h3>
      <h3 className={styles.subtitle__three}>FullStack developer</h3>
      <h3 className={styles.subtitle__four}>Backend developer</h3>
    </div>
  );
};
class home extends React.Component {
render(){  
  return (
    <>
    <section className={styles.home} id="home">
      <div className={styles.home__container}>
        <div className={styles.home__content}>
          <div className={styles.home__social}>
            <a href="https://www.linkedin.com/in/iraulcv/" target="blank" className={styles.home__social_icon}>
              <i><Unicons.UilLinkedinAlt/></i>
            </a>
            <a href="https://github.com/raulcv/" target="blank" className={styles.home__social_icon}>
              <i><Unicons.UilGithub/></i>
            </a>
            <a href="https://www.instagram.com/iraulcv/" target="blank" className={styles.home__social_icon}>
              <i><Unicons.UilInstagram/></i>
            </a>
          </div>
          <div className={styles.home__img}>
            <svg className={styles.home__blob} viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"></path>
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"></path>
                <image className={styles.home__blob_img} x="20" y="22" xlinkHref="./img/me-front.png"></image>
                {/* <Image className={styles.home__blob_img} width="500" height="636" src="/img/me-front.png" layout="responsive"></Image> */}
              </g>
            </svg>
          </div>
          <div className={styles.home__data}>
            <h1 className={styles.home__title}>Hola,<div className={styles.home__title_soy}>soy <span className={styles.home__title_name}>Raul</span></div>
            </h1>
            <div className={styles.subtitle__container}>
              <HomeSubtitleElement/>
            </div>
            <p className={styles.home__description}>Desarrollo de aplicaciones web con las mejores tecnologías</p>
            <CustomLink href="/contact" className={styles.normal__button}>Contactame
              <i className={styles.normal_button__icon}><Unicons.UilMessage/></i>
            </CustomLink>
         </div>
        </div>
        <div className={styles.home__scroll}>
            <a href="/#testimonial" className={styles.home__scroll_button}>
              <i className={styles.home__scroll_mouse}><Unicons.UilMouseAlt/></i>
              <span className={styles.home__scroll_name}>Sroll down</span>
              <i className={styles.home__scroll_arrow}><Unicons.UilArrowDown/></i>
            </a>
          </div>
      </div>
    </section>
    <Animation/>
    </>
  );
 }
};
export default home;
