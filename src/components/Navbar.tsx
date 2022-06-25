import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
   <nav>
        <ul>
           <li>
              <h1>
                 The Notes <span>app</span>
              </h1>
           </li>
           <li>
              <NavLink to="/">
                 Home
              </NavLink>
           </li>
           <li>
              <NavLink to="/notes" className='notes__nav'>
                 Notes
              </NavLink>
           </li>
           <li>
              <NavLink to="/about">
                 About
              </NavLink>
           </li>
        </ul>  
   </nav>
  )
}

export default Navbar