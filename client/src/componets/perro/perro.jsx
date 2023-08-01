import React from 'react'
import perro from '../img/21008c1d08c8ba85df54be8302ae3037.gif'
import styles from './perro.module.css'
function Perro() {
  return (
    <div>
        <p class={styles.perro}>
      
      <img src={perro} alt="perro" />
    </p>
    </div>
  )
}

export default Perro