import React from 'react'
// import './button.css'
import styles from './Button.module.css'
const Button = (props) => {
  return (
    <button 
      className={styles.button}
      // className= {styles["button"]}  
    >
      {props.children}
    </button>
  )
}

export default Button