import React, { Fragment } from "react";
import styles from "../LandingPage/LandingPage.module.css";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Fragment>
      <div>
        <Link className={styles.btn} to={"/home"}>
        
          lets go <span>!</span> 
        </Link>
      </div>
    </Fragment>
  );
}
