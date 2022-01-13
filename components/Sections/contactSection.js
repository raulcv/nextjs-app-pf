import React, { useRef, useEffect, useState } from "react";
import styles from "../../styles/contact.module.scss";
import * as Unicons from "@iconscout/react-unicons";
import TextareaAutosize from "react-autosize-textarea";
import { sendContactMail } from "../../components/Networking/mailApi"  


class contactComponent extends React.Component {
  state = {
    btnSendMailDis1abled: false,
    btnSendMailText: "Enviar Mensaje",
    name: "",
    mail: "",
    subject: "",
    message: "",
  };
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onMailChange = (event) => {
    this.setState({mail: event.target.value})
  }
  onSubjectChange = (event) => {
    this.setState({subject: event.target.value})
  }
  onChangeMessage = (event) => {
    this.setState({message: event.target.value})
  }
  onClickSendMail = async (event) => {
    event.preventDefault()
    const recipientMail = "yourmail@example.com"
    const { name, mail, subject, message } = this.state

    const res = await sendContactMail(name, mail, subject, message)
    console.log(res)
    if (res.status < 300) {
        this.setState({
          btnSendMailDisabled: true,
          btnSendMailText: "Thanks for your message",
          name: "",
          mail: "",
          subject: "",
          message: "",
        })
        setTimeout(() => {
          this.setState({
            btnSendMailDisabled: false,
            btnSendMailText: "Send Mensaje Again",
          })
        }, 10000)
    } else {
        // this.setState({ btnSendMailText: "Please fill out all fields." })
        this.setState({ btnSendMailText: "Por favor llene todos los campos" })
        setTimeout(() => {
          this.setState({
            btnSendMailDisabled: false,
            btnSendMailText: "Try to send menssage again",
          })
        }, 10000)
    }
  }
  render() {
    const { btnSendMailText, btnSendMailDisabled, name, mail, subject, message } = this.state
    const btnSendMailClass = btnSendMailDisabled ? 'disabled': ''

    return (
      <section className={styles.contact} id="contact">
        <h2 className={styles.section__title}>{"Contáctame"}</h2>
        <span className={styles.section__subtitle}>Déjame un mensaje</span>
        <div className={styles.contact__container}>
          <div className={`${styles.contact__content_information}`}>
            <div className={styles.contact__information}>
              <i className={styles.contact__icon}>
                <Unicons.UilEnvelope />
              </i>
              <div className={styles.contact__some}>
                <h3 className={styles.contact__title}>Raúl</h3>
                <span className={styles.contact__subtitle}>
                  iraulcv@gmail.com
                </span>
              </div>
            </div>
            <div className={styles.contact__information}>
              <i className={styles.contact__icon}>
                <Unicons.UilPhone />
              </i>
              <div className={styles.contact__some}>
                <h3 className={styles.contact__title}>Llámame</h3>
                <span className={styles.contact__subtitle}>
                  +51 935 154 ***
                </span>
              </div>
            </div>
            <div className={styles.contact__information}>
              <i className={styles.contact__icon}>
                <Unicons.UilMapMarker />
              </i>
              <div className={styles.contact__some}>
                <h3 className={styles.contact__title}>Ubicación</h3>
                <span className={styles.contact__subtitle}>
                  Urb. Santa Modesta - Santiago de Surco, Lima - Perú
                </span>
              </div>
            </div>
          </div>
          <div className={styles.contact__form}>
            <div className={styles.contact__group}>
              <div className={styles.contact__content}>
                <label className={styles.contact__label}>Nombre</label>
                <input className={styles.contact__input} type="text" value={name} name="txtName" onChange={this.onNameChange}></input>
              </div>
              <div className={styles.contact__content}>
                <label className={styles.contact__label}>Correo</label>
                <input className={styles.contact__input} type="email" value={mail} name="txtEmail" onChange={this.onMailChange}></input>
              </div>
            </div>
            <div className={styles.contact__content}>
              <label className={styles.contact__label}>Asunto</label>
              <input className={styles.contact__input} type="text" value={subject} name="txtSubject" onChange={this.onSubjectChange}></input>
            </div>
            <div className={styles.contact__content}>
              <label className={styles.contact__label}>Mensaje</label>
              <TextareaAutosize className={`${styles.contact__input} ${styles.contact__input_message}`} rows={4} 
              type="textarea" value={message} name="message" name="txtMessage" onChange={this.onChangeMessage}></TextareaAutosize>
            </div>
            <div className={styles.contact__someg}>
              <button className={`${styles.normal__button} ${styles.btnSendMailClass}`} type="submit" disabled={btnSendMailDisabled} onClick={this.onClickSendMail}>{btnSendMailText}
                <i className={styles.normal__button_icon}><Unicons.UilMessage /></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    );    
  }
}

export default contactComponent;

