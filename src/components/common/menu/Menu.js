import React from 'react';
import { StyledMenu, Close, Dropdown } from './MenuStyle';
import { Link } from 'gatsby'
import { bool } from 'prop-types'
import { FaTimes, FaChevronDown } from 'react-icons/fa'


const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Close open={open} onClick={() => setOpen(!open)}><FaTimes fontSize={35} /></Close>
      <div className="sub">
        <ul>
          <li style={{ position: "relative" }}> 

            <Link style={{ color: '#4047dc !important', cursor: 'pointer' }} activeStyle={{ color: '#ff5c97' }}className="nav-link">Services <FaChevronDown /></Link>
            <Dropdown>
              <ul className="navbar-nav m-auto d-flex justify-content-center">
                  <li className="navbar-item mr-1">
                      
                    <Link to="contact.html">Web Development</Link>
                  </li>
                  
                  <li className="navbar-item mr-1">
                        
                    <Link to="contact.html">Ecommerce Development</Link>
                  </li>
              </ul>
            </Dropdown>
          </li>
          <li style={{ position: "relative" }}> 

            <Link style={{ color: '#4047dc !important', cursor: 'pointer' }} activeStyle={{ color: '#ff5c97' }}className="nav-link">Solution <FaChevronDown /></Link>
            <Dropdown>
              <ul className="navbar-nav m-auto d-flex justify-content-center">
                  <li className="navbar-item mr-1">
                      
                    <Link to="contact.html">E-commerce</Link>
                  </li>
                  
                  <li className="navbar-item mr-1">
                        
                    <Link to="contact.html">Trading</Link>
                  </li>
                  <li className="navbar-item mr-1">
                        
                    <Link to="contact.html">Education</Link>
                  </li>
                  <li className="navbar-item mr-1">
                        
                    <Link to="contact.html">Health</Link>
                  </li>
                  <li className="navbar-item mr-1">
                        
                    <Link to="contact.html">Finance</Link>
                  </li>
                  <li className="navbar-item mr-1">
                        
                    <Link to="contact.html">Manufacturing</Link>
                  </li>
              </ul>
            </Dropdown>
          </li>
    
          <li>
            <Link activeStyle={{ color: '#ff5c97 !important' }} to="services.html" className="nav-link text-white">Services</Link>
          </li>
    
          <li>
            <Link activeStyle={{ color: '#ff5c97 !important' }} to="pricing.html" className="nav-link text-white">Pricing</Link>
          </li>
    
          <li>
            <Link activeStyle={{ color: '#ff5c97 !important' }} to="car.html" className="nav-link text-white">Cars</Link>
          </li>
    
          <li>
            <Link activeStyle={{ color: '#ff5c97 !important' }} to="blog.html" className="nav-link text-white">Blog</Link>
          </li>
    
          <li>
            <Link activeStyle={{ color: '#ff5c97 !important' }} to="contact.html" className="nav-link text-white">Contact</Link>
          </li>
        </ul>
      </div>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;