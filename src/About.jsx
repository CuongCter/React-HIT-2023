import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate("/abc")
  }

  return (
    <div >
      <button onClick={handleClick} className='p-5 bg-blue-500'>CLICK</button>
    </div>
  )
}

export default About