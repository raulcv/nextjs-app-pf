import React, { useRef , useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.scss";
// import Logo from "../../public/logo.svg";
import * as Unicons from '@iconscout/react-unicons';
import useDarkMode from "../../utilities/useDarkMode";

const ThemeButtonComponent = () => {
  const [themeState, setThemeState] = useDarkMode();
  // const [themeState, setThemeState] = useState('dark');
  console.log(themeState);
  let ThemeIcon = Unicons[themeState === 'dark' ? 'UilSun' : 'UilMoon']
  let theme = themeState === 'dark' ? 'light' : 'dark';
  return (
    <i className={styles.change__theme} id="theme-button" onClick={()=> setThemeState(theme)}>{<ThemeIcon/>}</i>
  )
  // document.body.style = {styles.dark_theme}
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
  this.state = {scrollTop: 0}
}
ClickNavToggle() {
  this.navMenu.current.style.bottom = 0;  
}
ClickNavClose() {
  this.navMenu.current.style.bottom = null;
}
ClickLinkActionRef(){
  this.navMenu.current.style.bottom = null;
}
/*==================== CHANGE BACKGROUND HEADER ====================*/
scrollHeader(ev) {
  const scrollY = window.pageYOffset;
  // When the scroll is greater than 200 viewport height, add the boxShadow style to the header tag
  if ( scrollY >= 80) this.headerDiv.current.style.boxShadow = '0 -1px 4px rgb(0 0 0 / 15%)';
  else this.headerDiv.current.style.boxShadow = null;
}
componentDidMount() {
  window.addEventListener('scroll', this.scrollHeader);
}
componentWillUnmount() {
  window.removeEventListener('scroll', this.scrollHeader);
}
render(){
  return (
    <div className={styles.header} ref={this.headerDiv} id="header">
      <nav className={styles.nav}>
        <div>
          {/* <img src="/logo.svg" alt="logo" width="20px" height="20px" className={styles.navBar_logo} />
        <h1> Raúl C.V</h1> */}
          <a className={styles.nav__logo} id="btnLogo">Raul</a>
        </div>
        <div className={styles.nav__menu} id="nav__menu" ref={this.navMenu}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}><a onClick={this.ClickLinkActionRef} href="#home" className={styles.nav__link}><i className={styles.nav__icon}><Unicons.UilEstate size="20"/></i>Home</a></li>
            <li className={styles.nav__item}><a onClick={this.ClickLinkActionRef} href="#about" className={styles.nav__link}><i className={styles.nav__icon}><Unicons.UilUser/></i>About</a></li>
            <li className={styles.nav__item}><a onClick={this.ClickLinkActionRef} href="#skills" className={styles.nav__link}><i className={styles.nav__icon}><Unicons.UilFileAlt/></i>Skills</a></li>
            <li className={styles.nav__item}><a onClick={this.ClickLinkActionRef} href="#services" className={styles.nav__link}><i className={styles.nav__icon}><Unicons.UilBriefcase/></i>Services</a></li>
            <li className={styles.nav__item}><a onClick={this.ClickLinkActionRef} href="#portfolio" className={styles.nav__link}><i className={styles.nav__icon}><Unicons.UilScenery/></i>Portfolio</a></li>
            <li className={styles.nav__item}><a onClick={this.ClickLinkActionRef} href="#blog" className={styles.nav__link}><i className={styles.nav__icon}><Unicons.UilDocumentLayoutLeft/></i>Blog</a></li>
            <li className={styles.nav__item}><a onClick={this.ClickLinkActionRef} href="#contact" className={styles.nav__link}><i className={styles.nav__icon}><Unicons.UilMessage/></i>Contact</a></li>
          </ul>
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
