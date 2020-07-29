import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Container, Links, Nav, Flex, Button, Logo, Submenu, Icon } from './NavbarStyle'
import logo from '../../../images/crew-logo.png'
import { FaBars, FaChevronDown, FaDev, FaMobileAlt, FaShoppingCart, FaShoppingBag, FaTradeFederation, FaRegHeart, FaSchool, FaIndustry, FaMoneyBillWave } from 'react-icons/fa'



const Navbar = ({ open, setOpen }) => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll=() => {
        const offset = window.scrollY
    
        if(offset > 200 ){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }



    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () =>window.removeEventListener('scroll', handleScroll)
    })

    const navbarClasses=['go-navbar-light'];
    if(scrolled){
        navbarClasses.push('scrolled anim');
    }


    return (
        <>
            
            <Nav className={`navbar navbar-expand-lg navbar-dark m-0 ${navbarClasses.join(" ")}`}>
                <Container>
                   <Flex>
                        <Link to="/" className="navbar-brand" style={{ flex: '1', color: '#4047dc !important' }}>
                            <Logo src={logo} alt=""/>
                        </Link>
                        <Button open={open} onClick={() => setOpen(!open)} className="" type="button" >
                            <FaBars fontSize={35} />
                        </Button>
                        

                        <div style={{ flex: '5' }} className="sub d-none d-lg-flex">
                            <ul className="navbar-nav m-auto">
                                <l className="nav-item active">
                                    <Link style={{ color: '#4047dc !important', cursor: 'pointer' }} activeStyle={{ color: '#ff5c97' }}className="nav-link">Services <FaChevronDown /></Link>
                                   <Submenu>
                                    <ul className="navbar-nav m-auto d-flex justify-content-center">
                                        <l className="navbar-item mr-2">
                                            <Icon><FaDev fontSize={25} /></Icon>
                                            <Link to="contact.html">Web Development</Link>
                                        </l>
                                        <l className="navbar-item mr-2">
                                             <Icon><FaMobileAlt fontSize={25} /></Icon>
                                            <Link to="contact.html">Mobile Development</Link>
                                        </l>
                                        <l className="navbar-item mr-2">
                                             <Icon><FaShoppingCart fontSize={25} /></Icon>
                                            <Link to="contact.html">Ecommerce Development</Link>
                                        </l>
                                    </ul>
                                   </Submenu>
                                </l>
                                <l className="nav-item">
                                    <Link style={{ color: '#4047dc !important', cursor: 'pointer' }} activeStyle={{ color: '#ff5c97' }} className="nav-link">Solutions <FaChevronDown /></Link>
                                    <Submenu>
                                    <ul className="navbar-nav m-auto d-flex justify-content-center">
                                        <l className="navbar-item mr-2">
                                            <Icon><FaShoppingBag fontSize={25} /></Icon>
                                            <Link to="contact.html">E-commerce</Link>
                                        </l>
                                        <l className="navbar-item mr-2">
                                             <Icon><FaTradeFederation fontSize={25} /></Icon>
                                            <Link to="contact.html">Trading</Link>
                                        </l>
                                        <l className="navbar-item mr-2">
                                             <Icon><FaSchool fontSize={25} /></Icon>
                                            <Link to="contact.html">Education</Link>
                                        </l>
                                        <l className="navbar-item mr-2">
                                             <Icon><FaRegHeart fontSize={25} /></Icon>
                                            <Link to="contact.html">Health</Link>
                                        </l>
                                        <l className="navbar-item mr-2">
                                             <Icon><FaMoneyBillWave fontSize={25} /></Icon>
                                            <Link to="contact.html">Finance</Link>
                                        </l>
                                        <l className="navbar-item mr-2">
                                             <Icon><FaIndustry fontSize={25} /></Icon>
                                            <Link to="contact.html">Manufacturing</Link>
                                        </l>
                                    </ul>
                                   </Submenu>
                                </l>
                                <l className="nav-item">
                                    <Link style={{ color: '#4047dc !important', cursor: 'pointer' }} activeStyle={{ color: '#ff5c97' }} className="nav-link">Portfolio <FaChevronDown /></Link>
                                    <Submenu>
                                    <ul className="navbar-nav m-auto d-flex justify-content-center">
                                        <l className="navbar-item mr-2">
                                            <Icon><FaDev fontSize={25} /></Icon>
                                            <Link to="contact.html">Web Development</Link>
                                        </l>
                                        <l className="navbar-item mr-2">
                                             <Icon><FaMobileAlt fontSize={25} /></Icon>
                                            <Link to="contact.html">Mobile Development</Link>
                                        </l>
                                        <l className="navbar-item mr-2">
                                             <Icon><FaShoppingCart fontSize={25} /></Icon>
                                            <Link to="contact.html">Ecommerce Development</Link>
                                        </l>
                                    </ul>
                                   </Submenu>
                                </l>
                                <l className="nav-item">
                                    <Link style={{ color: '#4047dc !important' }} activeStyle={{ color: '#ff5c97' }} to="pricing.html" className="nav-link">Case Studies</Link>
                                </l>
                                <l className="nav-item">
                                    <Link style={{ color: '#4047dc !important' }} activeStyle={{ color: '#ff5c97' }} to="car.html" className="nav-link">Career</Link>
                                </l>
                                <l className="nav-item">
                                    <Link style={{ color: '#4047dc !important' }} activeStyle={{ color: '#ff5c97' }} to="blog.html" className="nav-link">Resources</Link>
                                </l>
                                <l className="nav-item">
                                    <Link style={{ color: '#4047dc !important' }} activeStyle={{ color: '#ff5c97' }} to="contact.html" className="nav-link">About Us</Link>
                                </l>
                            </ul>
                            <div style={{ marginTop: '20px' }}>
                                <div className="header-right-btn f-right d-none d-lg-block">
                                    <Link to="#" className="btn header-btn">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        
                   </Flex>
                </Container>
            </Nav>
		    
        </>
    )
}

export default Navbar
