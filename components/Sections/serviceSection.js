import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Service.module.scss";
import * as Unicons from "@iconscout/react-unicons";

const ContentService = () => {
  const [serviceState, setServiceState] = useState("");
  let serviceData = [
    {
      id: "1",
      key: "WDEV",
      name: "Desarollo de paginas web",
      icon: "UilWindow",
      serviceDetail: [
        { id: "1", description: "Construyo la interfaz del usuario" },
        { id: "2", description: "Construyo la interfaz del usuario 2" },
        { id: "3", description: "Construyo la interfaz del usuario 3" },
      ],
    },
    {
      id: "2",
      key: "UIUX",
      name: "Ui/Ux Designer",
      icon: "UilPalette",
      serviceDetail: [
        { id: "1", description: "Construyo la interfaz del usuario" },
        { id: "2", description: "Construyo la interfaz del usuario 2" },
        { id: "3", description: "Construyo la interfaz del usuario 3" },
      ],
    },
    {
      id: "3",
      key: "ADDB",
      name: "Administracion de base de datos",
      icon: "UilDatabase",
      serviceDetail: [
        { id: "1", description: "Construyo la interfaz del usuario" },
        { id: "2", description: "Construyo la interfaz del usuario 2" },
        { id: "3", description: "Construyo la interfaz del usuario 3" },
      ],
    },
    {
      id: "4",
      key: "SAPP",
      name: "Soporte de aplicaciones web",
      icon: "UilHeadphones",
      serviceDetail: [
        { id: "1", description: "Resolucion de errores internos del sistema" },
        { id: "2", description: "Adición de nuevas funcionalidades a su sistema" },
        { id: "3", description: "Modificación de interfaces" },
        { id: "4", description: "Despliegue de su App Web en otros servidores" },
        { id: "5", description: "Cambio de conexiones a otros servidores de bases de datos" },
      ],
    },
  ];

  function getIcon(iconName) {
    let Icon = Unicons[iconName];
    return <Icon />;
  }

  return (
    <>
      {serviceData.map((service) => (
        <div className={styles.service__content} key={service.key}>
          <div>
            <i className={styles.service__icon}>{getIcon(service.icon)}</i>
            <h3 className={styles.service__title}>{service.name}</h3>
          </div>
          <a className={styles.service__button} onClick={()=> setServiceState(service.key)}>ver más
            <i className={styles.button__icon}><Unicons.UilArrowRight/></i>
          </a>
          <div className={styles.service__modal} style={serviceState===service.key? {opacity: '1', visibility: 'visible'}:{}}>
            <div className={styles.service__modal_content}>
              <h4 className={styles.service__modal_title}>
                <p>{service.name}</p>
              </h4>
              <i className={styles.service__modal_close} onClick={()=> setServiceState('')}><Unicons.UilTimes /></i>
              <ul className={styles.service__modal_data}>
                {service.serviceDetail.map((detail) => (
                <li className={styles.service__modal_list} key={detail.id}>
                  <i className={styles.service__modal_icon}><Unicons.UilCheckCircle /></i>
                  <p>{detail.description}</p>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

class service extends React.Component {
  render() {
    return (
      <section className={styles.service} id="services">
        <h2 className={styles.section__title}>{"Servicios"}</h2>
        <span className={styles.section__subtitle}>
          ¿Qué servicios ofrezco?
        </span>
        <div className={styles.service__container}>
          <ContentService />
        </div>
      </section>
    );
  }
}
export default service;
