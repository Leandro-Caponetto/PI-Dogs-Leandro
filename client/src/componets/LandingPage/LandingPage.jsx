import React, { Fragment } from "react";
import Button from "./Button"
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <Fragment>

      <h1 className={styles.title}>BIENVENIDOS A MI PI</h1>
      

      <Button/>

      <h4>by Leandro Caponetto</h4>
    </Fragment>
     
  );
}
