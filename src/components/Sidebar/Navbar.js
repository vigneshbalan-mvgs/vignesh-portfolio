import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import logoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png';

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={logoS} alt="logo" />
        <img className='sub-logo' src={LogoSubtitle} alt="sub-logo" />
      </Link>
      <nav>
        
      </nav>
    </div>
  )
}

export default Navbar