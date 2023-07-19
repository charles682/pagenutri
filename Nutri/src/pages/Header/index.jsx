import { Container } from './style';
import img from '../../images/WhatsApp_Image_2022-08-05_at_11.25.54__2_-removebg-preview.png';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'; //essa biblioteca que faz o scrol na pagina

export function Header() {
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

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <Container>
      <div className='header'>
        <nav className='navbar'>
          <img src={img} className='logo' />
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='home' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='about' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>
                Sobre
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='services' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>
                Serviços
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='testimonials' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>
                Depoimentos
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='ebook' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>
                Ebook
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>
                Contato
              </Link>
            </li>
          </ul>

          <div className='iconMenu'>
            <a href='https://instagram.com/nutri_cristianeumbelina?igshid=MzRlODBiNWFlZA==' target='_blank'>
              <FiInstagram color='#6ab99d' fontSize='1.5rem' />
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=5538997415323&text=Ol%C3%A1%20Doutora%20Cristiane%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20atendimentos!'
              target='_blank'
            >
              <FaWhatsapp color='#6ab99d' fontSize='1.5rem' />
            </a>
          </div>

          <div className='hamburger' onClick={handleClick}>
            {click ? <FaTimes size={30} style={{ color: '#6ab99d' }} /> : <FaBars size={30} style={{ color: '#6ab99d' }} />}
          </div>
        </nav>
      </div>
    </Container>
  );
}