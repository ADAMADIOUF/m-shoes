import React, { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import logo from "../assets/logo.png"
import {  useSelector } from 'react-redux'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
const [isDropdownOpen, setIsDropdownOpen] = useState(false);



const toggleDropdown = () => {
  setIsDropdownOpen(!isDropdownOpen);
};
  const handleItemClick = () => {
    setMenuOpen(false)
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

const cart = useSelector((state) => state.cart)
const { cartItems } = cart
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='flex-nav'>
            <div className='menu-icon' onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <li>
              <RouterLink
                to='/'
                onClick={() => {
                  scrollToTop()
                  handleItemClick()
                }}
              >
                <div className='logo'>
                  <img src={logo} alt='' />
                </div>
              </RouterLink>
            </li>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li className='nav-item'>
              <RouterLink
                to='/'
                onClick={() => {
                  scrollToTop()
                  handleItemClick()
                }}
                className={location.pathname === '/' ? 'active-link' : ''}
              >
                accueil
              </RouterLink>
            </li>

            <li className='dropdown'>
              <li className='nav-item'>
                <RouterLink
                  to='/boutique'
                  onClick={() => {
                    scrollToTop()
                    toggleDropdown()
                  }}
                  className={
                    location.pathname === '/boutique' ? 'active-link' : ''
                  }
                >
                  boutique
                </RouterLink>
              </li>

              <ul className='dropdown-menu'>
                <li className='nav-item'>
                  <RouterLink
                    to='/boutique/nu-pieds'
                    onClick={() => {
                      scrollToTop()
                      handleItemClick()
                    }}
                  >
                    nu-pieds
                  </RouterLink>
                </li>
                <li className='nav-item'>
                  <RouterLink
                    to='/boutique/orthopédiques'
                    onClick={() => {
                      scrollToTop()
                      handleItemClick()
                    }}
                  >
                    chaussures orthopédiques
                  </RouterLink>
                </li>
                <li className='nav-item'>
                  <RouterLink
                    to='/boutique/babouches'
                    onClick={() => {
                      scrollToTop()
                      handleItemClick()
                    }}
                  >
                    babouches
                  </RouterLink>
                </li>
                <li className='nav-item'>
                  <RouterLink
                    to='/boutique/ville'
                    onClick={() => {
                      scrollToTop()
                      handleItemClick()
                    }}
                  >
                    chaussures de ville
                  </RouterLink>
                </li>
              </ul>
            </li>

            <li className='nav-item'>
              <RouterLink
                to='/about'
                onClick={() => {
                  scrollToTop()
                  handleItemClick()
                }}
                className={location.pathname === '/work' ? 'active-link' : ''}
              >
                à popos
              </RouterLink>
            </li>

            <li className='nav-item'>
              <RouterLink
                to='/contact'
                onClick={() => {
                  scrollToTop()
                  handleItemClick()
                }}
                className={
                  location.pathname === '/contact' ? 'active-link' : ''
                }
              >
                nous Contacter
              </RouterLink>
            </li>

            {location.pathname.startsWith('/services/') && (
              <li className='nav-item'>
                <RouterLink to='/' onClick={handleItemClick}>
                  Back to Menu
                </RouterLink>
              </li>
            )}
          </ul>
          <span>
            <FaShoppingCart />
            Panier
            {cartItems.length > 0 && (
              <span
                style={{
                  marginLeft: '5px',
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '2px 5px',
                  borderRadius: '50%',
                }}
              >
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </span>
            )}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
