import React, { useRef, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Skill.module.scss";
import * as Unicons from "@iconscout/react-unicons";

const SkillBody = () => {
  const dataSkills = [
    {
      number: "first",
      data: [
        {
          name: "BACKEND",
          title: "Backend Developer",
          subTitle: "Mas de 3 años de experiencia",
          icon: "UilServerNetwork",
          tecnology: [
            { name: "DOTNET", description: "C# .Net", percentage: 90 },
            { name: "NODEJS", description: "Node.js", percentage: 80 },
            { name: "SQLSERVER", description: "SQL Server", percentage: 80 },
            { name: "PHYTON", description: "Phyton", percentage: 50 },
          ],
        },
        {
          name: "FRONTEND",
          title: "Frontend Developer",
          subTitle: "Mas de 2 años de experiencia",
          icon: "UilBracketsCurly",
          tecnology: [
            { name: "HTML", description: "HTML", percentage: 90 },
            { name: "CSS", description: "CSS", percentage: 80 },
            { name: "JAVASCRIPT", description: "JavaScript", percentage: 80 },
            { name: "REACTJS", description: "Reactjs", percentage: 60 },
          ],
        },
      ],
    },
    {
      number: "second",
      data: [
        {
          name: "DEVOPS",
          title: "Devops",
          subTitle: "Mas de 1 años de experiencia",
          icon: "UilServer",
          tecnology: [
            { name: "GIT", description: "Git & GitHub", percentage: 80 },
            { name: "AZURE", description: "Azure", percentage: 65 },
            { name: "DOCKER", description: "Docker", percentage: 50 },
          ],
        },
      ],
    },
  ];

  const [skillState, setSkillState] = useState("BACKEND");

  const props = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
  })
  const styleToShowHide = { height: "0", overflow: "hidden", props };
  function getIcon(iconName) {
    let Icon = Unicons[iconName];
    return <Icon />;
  }

  let ListSkills = dataSkills.map((value, idx) => (
    <div key={value.number}>
      {value.data.map((skill, index) => (
        <div className={styles.skills__content} key={skill.name}>
          <div className={styles.skills__header}>
            <i className={styles.skills__icon}>{getIcon(skill.icon)}</i>
            <div>
              <h1 className={styles.skills__title}>{skill.title}</h1>
              <span className={styles.skills__subtitle}>{skill.subTitle}</span>
            </div>
            <i className={styles.skills__arrow} onClick={() => setSkillState(skill.name)} style={skillState === skill.name? {transform: 'rotate(-180deg'} : {} }>
              <Unicons.UilAngleDown />
            </i>
          </div>
          <animated.div className={styles.skills__list} style={skillState === skill.name ? { height: 'max-content', marginBottom: '2.5rem', props} : styleToShowHide}>
            {skill.tecnology.map((element) => (
              <div className={styles.skills__data} key={element.name}>
                <div className={styles.skills__title}>
                  <h3 className={styles.skills__name}>{element.description}</h3>
                  <span className={styles.skills__number}> {element.percentage}% </span>
                </div>
                <div className={styles.skills__bar}>
                  <span className={styles.skills__c} style={{ width: element.percentage + "%" }}></span>
                </div>
              </div>
            ))}
          </animated.div>
        </div>
      ))}
    </div>
  ));
  return <>{ListSkills}</>;
};

class skillsElement extends React.Component {
  render() {
    return (
      <section className={styles.skills} id="skills">
        <h2 className={styles.section__title}>Habilidades</h2>
        <span className={styles.section__subtitle}>
          Mis niveles de experiencia usando herramientas para construir software
        </span>
        <div className={styles.skills__container} ref={this.skillsContainerRef}>
          <SkillBody />
        </div>
      </section>
    );
  }
}
export default skillsElement;
