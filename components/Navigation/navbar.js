import React, { useRef , useState, useEffect } from "react";
import Link from "next/link";
import CustomLink from "../../components/Navigation/customLink"
// import styles from "../../styles/Header.module.scss";
// import * as styles from "../../styles/Header.module.css";
import * as styles from "../../styles/Header.module.scss";
// import Logo from "../../public/logo.svg";
import * as Unicons from '@iconscout/react-unicons';
import useDarkMode from "../../utilities/useDarkMode";
import { useRouter } from 'next/router';


const ThemeButtonComponent = () => {
  // const [themeState, setThemeState] = useDarkMode();
    let today = new Date(), hours = today.getHours(), isDayTime = hours > 6 && hours < 18

  const [themeState, setThemeState] = useState(isDayTime? 'light' : 'dark');
  // console.log(themeState);
  let ThemeIcon = Unicons[themeState === 'dark' ? 'UilSun' : 'UilMoon']
  let colorTheme = themeState === 'dark' ? 'light' : 'dark';

  console.log(hours)
  useEffect(() => {
    const root = window.document;
    root.body.classList.remove(colorTheme);
    root.body.classList.add(themeState);
    // console.log(localStorage.getItem("theme"))

  if (typeof window !== "undefined") {
    localStorage.setItem("theme", themeState);
  }
}, [themeState]);
  return (
    <i className={styles.change__theme} id="theme-button" onClick={()=> setThemeState(colorTheme)}>{<ThemeIcon/>}</i>
  )
};
class navbar extends React.Component {
constructor(props) {
  super(props);
  this.navMenu = React.createRef();
  this.headerDiv = React.createRef();
  this.ClickNavToggle = this.ClickNavToggle.bind( this )
  this.ClickNavClose = this.ClickNavClose.bind( this )
  this.scrollHeader = this.scrollHeader.bind( this )
  this.ClickLinkActionRef = this.ClickLinkActionRef.bind( this )
  this.state = {activeLink: '/'}
  this.Sections = null;

}
ClickNavToggle() {
  this.navMenu.current.style.bottom = 0;  
}
ClickNavClose() {
  this.navMenu.current.style.bottom = null;
}
ClickLinkActionRef(e){
  this.navMenu.current.style.bottom = null;
}
/*==================== CHANGE BACKGROUND HEADER ====================*/
scrollHeader(ev) {
  // console.log(this.Sections)
  ev.preventDefault();
  const scrollY = window.pageYOffset;
  // When the scroll is greater than 200 viewport height, add the boxShadow style to the header tag
  if ( scrollY >= 80) this.headerDiv.current.style.boxShadow = '0 -1px 4px rgb(0 0 0 / 15%)';
  else this.headerDiv.current.style.boxShadow = null;

  const scrollUp = window.document.getElementById("scroll_up");
  if (scrollY >= 560) scrollUp.style.bottom = '5rem'
  else scrollUp.style.bottom = '-20%'

  // this.Sections.forEach((current) => {
  //   const sectionHeight = current.offsetHeight;
  //   const sectionTop = current.offsetTop - 50;
  //   let sectionId = current.getAttribute("id");
  //   if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  //     document
  //       .querySelector("#nav__menu a[href*=" + sectionId + "]")//.style.color = 'var(--first-color)';
  //       .classList.add(styles.active_link);
  //   } else {
  //     document
  //       .querySelector("#nav__menu a[href*=" + sectionId + "]")//.style.color = null;
  //       .classList.remove(styles.active_link);
  //   }
  // });
}
componentDidMount() {
  window.addEventListener('scroll', this.scrollHeader);  
  this.Sections = document.querySelectorAll("section[id]");
}
componentWillUnmount() {
  window.removeEventListener('scroll', this.scrollHeader);
}
render(){
  return (
    <div className={styles.header} ref={this.headerDiv} id="header">
      <nav className={styles.nav}>
        
        <div>
          <Link href='/'>
            <a className={styles.nav__name} id="btnLogo">
              <img src="/raven.svg" width="40" height="40" alt="imagen logo raul" id="idLogoNavbar"/>aul</a>
          </Link>
        </div>
        <div className={styles.nav__menu} id="nav__menu" ref={this.navMenu}>
          <div className={styles.nav__list}>
            <CustomLink href='/' exact className={`${styles.nav__link}`} onClick={this.ClickLinkActionRef}>
              <i className={styles.nav__icon}><Unicons.UilEstate/></i>Home
            </CustomLink>
            <CustomLink href='/about' exact className={styles.nav__link} onClick={this.ClickLinkActionRef}>
              <i className={styles.nav__icon}><Unicons.UilUser/></i>About
            </CustomLink>
            {/* <li className={styles.nav__item}><a onClick={this.ClickLinkActionRef}  className={styles.nav__link}><i className={styles.nav__icon}><Unicons.UilFileAlt/></i>Skills</a></li> */}
            {/* <li className={styles.nav__item}><a onClick={this.ClickLinkActionRef}  className={styles.nav__link}><i className={styles.nav__icon}><Unicons.UilPresentationLine/></i>Experiencia</a></li> */}
            <CustomLink href="/service" exact className={styles.nav__link} onClick={this.ClickLinkActionRef}>
              <i className={styles.nav__icon}><Unicons.UilBriefcase/></i>Services
            </CustomLink>
            <CustomLink href="/portfolio" exact className={styles.nav__link} onClick={this.ClickLinkActionRef}>
              <i className={styles.nav__icon}><Unicons.UilScenery/></i>Portfolio
            </CustomLink>
            <CustomLink href="/blog" exact className={styles.nav__link} onClick={this.ClickLinkActionRef}>
              <i className={styles.nav__icon}><Unicons.UilDocumentLayoutLeft/></i>Blog
            </CustomLink>
            <CustomLink href="/contact" exact className={styles.nav__link} onClick={this.ClickLinkActionRef}>
              <i className={styles.nav__icon}><Unicons.UilMessage/></i>Contact me
            </CustomLink>
          </div>
          <i className={styles.nav__close} id="nav__close" onClick={this.ClickNavClose}><Unicons.UilMultiply/></i>
        </div>
        <div className={styles.nav__btns}>
          <ThemeButtonComponent/>
          <div className={styles.nav__toggle} id="nav__toggle" onClick={this.ClickNavToggle}><Unicons.UilApps/></div>
        </div>
      </nav>
    </div>
  );
 }
};
export default navbar;
