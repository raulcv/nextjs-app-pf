import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Footer.module.scss";
import * as Unicons from "@iconscout/react-unicons";

class footerComponent extends React.Component {
  render() {
    return (
      <a className={styles.scroll__up} href="#" id="scroll_up">
        <i className={styles.scrollup__icon}>
          <Unicons.UilArrowUp />
        </i>
      </a>
    );
  }
}
export default footerComponent;
