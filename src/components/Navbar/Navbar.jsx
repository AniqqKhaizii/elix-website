import './Navbar.css'
import logo from '../../assets/images/ELIX_Logo.png'
import { useEffect, useState } from 'react'
const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, [])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img className="nav-logo" src={logo} alt='/' />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Solutions</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
