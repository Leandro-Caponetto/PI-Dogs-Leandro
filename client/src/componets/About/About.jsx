
import React, { Fragment } from "react";
import "./About.css"
import { Link } from "react-router-dom";

function About() {
  return (
    <Fragment>

    <div class="about_section">
    <div class="about_text">
      <div class="container">
        <h1 class="about_taital_1"><strong><span >PI</span> Dogs</strong></h1>
        <p class="magna_text"> Mi nombre es Leandro Caponetto Soy de Argentina y estoy presentando 
        mi Practica Integradora realiza en Henry, integre todo lo aprendido. React, redux, axios, express
        javaScript, css puro, sql, sequelize y node JS</p>
        <div class="about_bt">
        <Link class="more_bt" to={"/home"}>
        
        let's go Home....
      </Link>
        </div>
        <div class="about">
          <h1 class="numbar_text">PI</h1>
        </div>
      </div>
    </div>
  </div>
    </Fragment>
  )
}

export default About