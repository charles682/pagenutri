import {Container} from './style'
import img from '../../images/WhatsApp_Image_2022-08-05_at_11.25.54__2_-removebg-preview.png'
import {FiInstagram} from "react-icons/fi";
import {FaWhatsapp } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
export function Header(){
  
//  const scrollToTop = () => { scroll.scrollToTop(); };
//   const [click, setClick] = useState(false)
//   const handleClick = () => setClick(!click)

const closeMenu = () => setClick(false)
const [click, setClick] = useState(false);

  useEffect(() => {
    const navMenu = document.querySelector('.nav-menu');

    if (navMenu) {
      if (click) {
        navMenu.classList.add('active');
      } else {
        navMenu.classList.remove('active');
      }
    }
  }, [click]);

  const handleClick = () => {
    setClick(!click);
  };
    return(
       <Container>
         <div className='header'>
            <nav className='navbar'>
                <img src={img}className='logo' />
                {/* className={click ? "nav-menu active" : "nav-menu" } */}
                <ul className='nav-menu' > 
                    <li  className='nav-item'>
                    <Link to="home" spy={true} smooth={true} offset={-10} duration={500}onClick={closeMenu}>
                      Inicio
                    </Link> 
                    </li>
                    <li className='nav-item ' >
                        {/* <a href='#about' onClick={closeMenu}>Sobre</a> */}
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                     About  </Link>
                    
                    </li>
                    <li className='nav-item'>
                        {/* <a href='#services' onClick={closeMenu}>Services</a> */}
                        <Link to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                        Services
                      </Link>
                    </li>
                    <li className='nav-item'>
                        {/* <a href='#testimonials' onClick={closeMenu}>Depoimentos</a> */}
                        <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                      Depoimentos
                      </Link>
                    </li>
                    <li className='nav-item'>
                        {/* <a href='#ebook' onClick={closeMenu}>Ebook</a> */}
                        <Link to="ebook" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                        Ebook
                      </Link>
                    </li>
                    <li className='nav-item'>
                        {/* <a href='#contact' onClick={closeMenu}>Contato</a> */}
                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                        Contato
                      </Link>
                    </li>
              
                </ul>

                <div className="iconMenu ">
                    <a href="https://instagram.com" target="_blank">
                      <FiInstagram color='#6ab99d' fontSize="1.5rem" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5538997415323&text=Ol%C3%A1%20Doutora%20Cristiane%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20atendimentos!" target="_blank">
                    <FaWhatsapp color='#6ab99d' fontSize="1.5rem" />
                    </a>
                    </div>

                    
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#6ab99d' }} />)
                        : (<FaBars size={30} style={{ color: '#6ab99d' }} />)}
                </div>
            </nav>
               

                </div>
            
         
          
        </Container>
    )
}

