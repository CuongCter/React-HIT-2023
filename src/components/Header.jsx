import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";
const Header = () => {
  const ListLink = [
    {
      id: 1,
      to: "/",
      title: "Home",
    },
    {
      id: 2,
      to: "/about",
      title: "About",
    },
    {
      id: 3,
      to: "/content",
      title: "Content",
    },
    {
      id: 4,
      to: "/contact",
      title: "Contact",
    },
  ];
  return (
   <> 
   
    <div className="p-5 bg-white shadow-md flex items-center justify-center gap-x-5">
        {ListLink.map((item) => (
          <NavLink
            to={item.to}
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            key={item.id}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
   </> 
    

  )
}

export default Header