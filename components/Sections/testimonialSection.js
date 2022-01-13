import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Testimonial.module.scss";
import * as Unicons from "@iconscout/react-unicons";
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Pagination]);

const Contenttestimonial = () => {
  const [testimonialState, setTestimonialState] = useState("");
  let testimonialData = [
    {
      id: "0",
      key: "KRAT",
      name: "kratos (ghost of Sparta)",
      relation: "Soldado",
      description: "Él es un hombre genuinamente diferente y muy comprometido con su trabajo",
      img: "kratos.jpg",
      width: 876,
      height: 797,
      stars: 4
    },
    {
      id: "1",
      key: "SIPA",
      name: "Señor de Sipan de Ica",
      relation: "Dios",
      description: "A Raúl lo conozco hace muuuucho tiempo, el siempre es loco y a veces está en su mundo",
      img: "sipan.jpg",
      width: 913,
      height: 929,
      stars: 4
    },
    {
      id: "2",
      key: "COUL",
      name: "Señor de Coullurity",
      relation: "Semi Dios",
      description: "El suele viajar en su mente al más allá, a veces lo hecha a perder aunque no sin razón",
     img: "srcoullu.jpg",
      width: 185,
      height: 185,
      stars: 3
    },
    {
      id: "3",
      key: "AFRO",
      name: "Afrodita goddess of beauty",
      relation: "La tipa que te sonrroja",
      description: "Raúl es un tipo a quien le gusta la tectura y a veces hace buenos software, porque lo hace con compromiso y mucha imaginación",
      img: "afrodita.jpg",
      width: 185,
      height: 185,
      stars: 5
    },
    {
      id: "4",
      key: "BROS",
      name: "Poseidón and Helios",
      relation: "Raul's Brother",
      description: "Raúl es nuestro amigo, nuestro hermano Zeus no lo sabe, espero no lo descubra. Raúl sigue adelante XD",
      img: "zeusbros.jpg",
      width: 529,
      height: 447,
      stars: 5
    },
    {
      id: "5",
      key: "ZEUS",
      name: "Zeus from Olympic mountain",
      relation: "God of the Universe",
      description: "He luchado con Raul, me sacó la m... creo que aprendió de Kratos ese wey",
      img: "zeus-young.jpg",
      width: 888,
      height: 1073,
      stars: 2
    },
    {
      id: "6",
      key: "ATEN",
      name: "Athena fron Olympic mountain",
      relation: "Zeus's Sister",
      description: "Raúl ayudo en su lucha al fantasma de esparta para derribar al dios de la Guerra Ares",
      img: "atenas.jpg",
      width: 779,
      height: 720,
      stars: 5
    },
  ];

  return (
    <Swiper 
    slidesPerView={1}
    pagination={{ "dynamicBullets": true, clickable: true }}
    breakpoints = {{
      568: { 
        slidesPerView: 2,
        spaceBetween: 5
      },
      768: { 
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: { 
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  }
    className={styles.testimonial__container}>
      {testimonialData.map((testimonial) => (
        <SwiperSlide className={`${styles.testimonial__content}`} key={testimonial.key}>
          <div className={styles.testimonial__data}>
            <div className={styles.testimonial__header}>
              <img className={styles.testimonial__img} src={`/img/${testimonial.img}`} alt="testimonial image" width={testimonial.width} height={testimonial.height} layout="responsive"></img>
              {/* <Image className={styles.testimonial__img} src={`/img/${testimonial.img}`} alt="testimonial image" width="400" height="400" layout=""></Image> */}
              <div>
                <h3 className={styles.testimonial__name}>{testimonial.name}</h3>
                <span className={styles.testimonial__relation}>{testimonial.relation}</span>
              </div>
            </div>
            <div className={styles.testimonial__stars}>
              {[...Array(5)].map((star, index) =>  
              <i className={ testimonial.stars >= index+1? styles.testimonial__icon_star : styles.none} key={index} id={index}><Unicons.UilStar/></i>
              )}
            </div>
          </div>
            <p className={styles.testimonial__description}>{testimonial.description}</p>

        </SwiperSlide>
      ))}
      {/* <div className={'swiper-pagination'}></div> */}
    </Swiper>
  );
};

class testimonialComponent extends React.Component {
  render() {
    return (
      <section className={styles.testimonial} id="testimonial">
        <h2 className={styles.section__title}>{"Testimonios"}</h2>
        <span className={styles.section__subtitle}>Mis clientes dicen</span>
        <Contenttestimonial />
      </section>
    );
  }
}
export default testimonialComponent;
