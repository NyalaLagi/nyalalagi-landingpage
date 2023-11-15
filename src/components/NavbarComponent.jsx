import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import LogoImage from '../assets/img/logonav.png';
import { navLinks } from '../data/index';
import { useLocation } from 'react-router-dom';

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [menu, setMenu] = useState(false);

  const location = useLocation();

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor);
  });

  const arrayMenu = [
    {
      text: 'Beranda',
      path: '',
    },
    {
      text: 'Layanan',
      path: 'layanan',
    },
    {
      text: 'Testimonial',
      path: 'testimonial',
    },
  ];

  const handleMenu = () => {
    // Ganti nilai menu saat tombol toggle ditekan
    setMenu(!menu);

    // Ubah warna saat tombol toggle ditekan
    setChangeColor(!changeColor);
  };

  const handleStatus = (e) => {
    localStorage.setItem('status', e);
  };

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? 'color-active' : ''}>
        <div className={menu ? 'container-navbar-active' : 'container-navbar'}>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            <a href="./">
              <img src={LogoImage} alt="logo-img" />
            </a>
          </Navbar.Brand>

          <Navbar.Toggle onClick={() => handleMenu()} className="btn-toggle" id="btn-toggle" aria-controls="basic-navbar-nav" />

          <nav className="d-flex-mobile-center">
            {location.pathname === '/layanan' || location.pathname === '/testimonial'
              ? arrayMenu.map((link, i) => (
                  <div className="nav-link" key={i}>
                    <a href={`/${link.path}`}>
                      <li>{link.text}</li>
                    </a>
                  </div>
                ))
              : navLinks.map((link) => (
                  <div className="nav-link" key={link.id}>
                    <a href={`#${link.path}`} onClick={() => handleStatus(link.path)}>
                      <li
                        style={{
                          backgroundColor: link.path === localStorage.getItem('status') ? '#f9cc0b' : 'transparent',
                          color: link.path === localStorage.getItem('status') ? 'white' : 'black',
                          padding: '2px 10px',
                          borderRadius: '2px',
                        }}
                      >
                        {link.text}
                      </li>
                    </a>
                  </div>
                ))}
          </nav>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
