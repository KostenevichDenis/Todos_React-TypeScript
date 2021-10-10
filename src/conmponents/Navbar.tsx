import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
    
}

const Navbar = (props: Props) => {
    return (
        
  <nav>
  <div className="nav-wrapper teal darken-4 px1">
    <a href="/" className="brand-logo">React + TypeScript</a>
    <ul className="right hide-on-med-and-down">
      <li><NavLink to="/">To do</NavLink></li>
      <li><NavLink to="/about">Information</NavLink></li>
    </ul>
  </div>
</nav>
    ) 
}

export default Navbar
