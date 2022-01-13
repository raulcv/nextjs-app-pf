import React, { useRef, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import Link from "next/link";
import styles from "../../styles/Progress.module.scss";
import * as Unicons from "@iconscout/react-unicons";

const EducationContent = () => {
  const [skillState, setSkillState] = useState("BACKEND");
  const styleToShowHide = { height: "0", overflow: "hidden" };
  let educationData = [
    {id: '1', key: 'CEI', name: "Computación e informática", place: "Perú - Cibertec Miraflores", description: 'Formación en desarrollo de Software y gestión de proyectos informáticos',
    starDate: '2015 - 2017', endDate: '30/12/2017' },
    {id: '1', key: 'ENG', name: "Inglés", place: "Peru - ICPNA", description: 'Lecciones aprendidas hasta nivel intermedio',
    starDate: '2016 - 2017', endDate: '30/12/2016' } ]
  // console.log(skillState);
  let LineRounded = (
  <div>
    <span className={styles.progress__rounder}></span>
    <span className={styles.progress__line}></span>
  </div>
  );
  let ListWorks = educationData.map((work, index) => (
    <div className={styles.progress__data} style={index+1%2 == 2? {} :{textAlign: 'right'} } key={work.key}>
    {index+1%2==2? <div></div> : null}
    {index+1%2==2? LineRounded : null}
    <div>
      <h3 className={styles.progress__title}>{work.name}</h3>
      <span className={styles.progress__subtitle}>{work.place}</span>
      <div className={styles.progress__calendar}>
        <i className={styles.progress__calendar_icon}><Unicons.UilCalendarAlt/><span className={styles.progress__date}>{work.starDate}</span></i>
      </div>
      <div>
        <p>{work.description}</p>
      </div>
    </div>
    {index+1%2==2? null :LineRounded}
  </div>
  ));
  return <>{ListWorks}</>;
};

class educationElement extends React.Component {
  render() {
    return (
    <div className={styles.progress__content} data-content="" id="education">
      <EducationContent/>
    </div>
    );
  }
}
export default educationElement;
