import React, { useRef, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Progress.module.scss";
import * as Unicons from "@iconscout/react-unicons";
import WorkComponent from "../tap/Work"
import EducationComponent from "../tap/Education"

const ProgressTabsAndSections = () => {
  const [progressState, setProgressState] = useState("work");
  let progress = progressState === 'work' ? 'education' : 'work';
  
  useEffect(() => {
    const root = window.document;
    
    const tabActive = root.querySelectorAll('[data-target*='+progressState+']');
    tabActive[0].classList.add(styles.progress__active)
    const tabInactive = root.querySelectorAll('[data-target*='+progress+']');
    tabInactive[0].classList.remove(styles.progress__active)
}, [progressState]);
  return (<>
  <div className={styles.progress__tabs}>
    <div className={styles.progress__tabs_content} style={{textAlign: 'end'}}>
      <div className={styles.progress__button} onClick={()=> setProgressState(progress)} data-target="#work" >
        <i className={styles.progress__icon}><Unicons.UilBriefcaseAlt/></i>Trabajo
      </div>
    </div>            
    <div className={styles.progress__tabs_content}>
      <div className={styles.progress__button} onClick={()=> setProgressState(progress)} data-target="#education">
        <i className={styles.progress__icon}><Unicons.UilGraduationCap/></i>Educación
      </div>
    </div>
  </div>
  <div className={styles.progress__sections}>
    {progressState === "work" ? <WorkComponent/> : <EducationComponent/> }
  </div>
  </>)
};

class progress extends React.Component {
  render() {
    return (
      <section className={styles.progress} id="progress">
        <h2 className={styles.section__title}>{"Experiencia & Educación"}</h2>
        <span className={styles.section__subtitle}>Mis ultimas experiencias de de trabajo y estudio</span>
        <div className={styles.progress__container}>
          <ProgressTabsAndSections/>
        </div>
      </section>
    );
  }
}
export default progress;
