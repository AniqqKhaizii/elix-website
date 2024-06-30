import React from 'react'
import './Header.css'
import Logo from '../../assets/ELIX_Logo.png'
const Header = () => {
  return (
    <div className="header">
        <img className="logo" src={Logo} alt="" />
        <ul className='headerMenu'>
            <li>Home</li>
            <li>Solution</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header
