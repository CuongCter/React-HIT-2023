import React from 'react'
// import './button.css'

const Button = (props) => {
  return (
    <button 
      className= "button"
      // className= {styles["button"]}  
    >
      {props.children}
    </button>
  )
}

export default Button