import React from 'react'
import styles from './index.css'
import logoImg from '@/assets/smlieFace.png'

export default function(props){
  return(
    <div className={styles.container}>
      <div>
        <img src={logoImg} alt="logo" />
        <span>smlie</span>
      </div>
      <p>If Life Was Still as When We First Met</p>
    </div>
  )
}