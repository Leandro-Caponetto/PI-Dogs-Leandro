import React from "react";
import styles from "./NavBar.module.css";
import Timer from '../../../Timer/Timer'

export default function NavBar() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} href="/home">
              HOME
            </a>
            <a className={styles.a} href="/create">
              CREATE
            </a>
            <a className={styles.a} href="/about">
              ABOUT
            </a>
          </li>
        </ul>
      <div className={styles.online}>
     <p>Online:</p>  <Timer/>  
    </div>
      </nav>
    </div>
  );
}
