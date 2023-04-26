import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  const ListMenu = [
    {
      id: 1,
      to: '/',
      title: 'Home',
    },
    ]
  return (
    <div className='p-5 bg-white shadow-md flex items-center justify-center gap-x-5'>
        {/* <NavLink className={({ isActive }) => (isActive ? "text-green-400" : "")} to={"/"}>Home</NavLink>
        <Link className={({ isActive }) => (isActive ? "text-green-400" : "")}  to={"/about"}>About</Link>
        <Link to={"/content"}>Content</Link> */}
        <NavLink className={({ isActive }) => (isActive ? "text-green-400" : "")}  to={"/"}>Home</NavLink>
        <Link className={({ isActive }) => (isActive ? "text-green-400" : "")} to={"/about"}>About</Link>
        <NavLink className={({ isActive }) => (isActive ? "text-red-400" : "")} to={"/content"}>Content</NavLink>
        <Link className={({ isActive }) => (isActive ? "text-green-400" : "")} to={"/contact"}>Contact</Link>
    </div>
  )
}

export default Nav