import React, { Fragment } from "react";
import styles from "../LandingPage/LandingPage.module.css";
import logo from "../img/perro.png"

export default function Logo() {
  return (
    <Fragment>
      <>
      <img className={styles.logo} src={logo} alt="" />
      </>
      

    </Fragment>
  );
}
