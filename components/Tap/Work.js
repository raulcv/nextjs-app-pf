import React, { useRef, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import Link from "next/link";
import styles from "../../styles/Progress.module.scss";
import * as Unicons from "@iconscout/react-unicons";

const WorkContent = () => {
  const [skillState, setSkillState] = useState("BACKEND");
  const styleToShowHide = { height: "0", overflow: "hidden" };
  let workData = [
    {id: '1', key: 'GRUP', name: "FullStack web Developer", place: "Grupo Valor - Perú", description: 'Desarrollo de un sistema comercial web para una empresa de rubro minero',
    starDate: '2019 - actualidad', endDate: new Date() },
    {id: '2', key: 'MAXI', name: "Software Developer", place: "Máxima Internacional S.A. - Perú", description: 'Migración e integración de las bases de datos, desarrollo, mejora y mantenimiento de los sistemas comerciales de la empresa',
    starDate: '2018 - 2019', endDate: '15/01/2019' } ]

  let LineRounded = (
  <div>
    <span className={styles.progress__rounder}></span>
    <span className={styles.progress__line}></span>
  </div>
  );
  let ListWorks = workData.map((work, index) => (
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

class workElement extends React.Component {
  render() {
    return (
    <div className={styles.progress__content} data-content="" id="work">
      <WorkContent/>
    </div>
    );
  }
}
export default workElement;
