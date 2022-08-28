import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => {
    setClicked(false);
  }

  const showButton = () => {
    if (window.innerWidth <= 968) {
      setButton(false);
    }
    else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar_wrapper">
          <Link to="/" className="navbar_logo">
            TRVL <i className='fab fa-typo3'></i>
          </Link>

          <div className="menu_icon" onClick={() => setClicked(!clicked)}>
            <i className={!clicked ? 'fas fa-bars' : 'fas fa-times'}></i>
          </div>

          <ul className={clicked ? 'nav_menu active' : 'nav_menu'}>
            <li className='nav_item'>
              <Link to="/" className='nav_link' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav_item'>
              <Link to="/services" className='nav_link' onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className='nav_item'>
              <Link to="/products" className='nav_link' onClick={closeMobileMenu}>Products</Link>
            </li>
            <li className='nav_item'>
              <Link to="/sign-up" className='nav_link_mobile' onClick={closeMobileMenu}>Sign Up</Link>
            </li>
          </ul>
          {
            button && <Button buttonStyle={'btn_outline'}>Sign Up</Button>
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar