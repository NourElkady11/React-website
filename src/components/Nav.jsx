import React, { useEffect, useState } from 'react';
import ScrollSpy from 'react-scrollspy';
import '../CSS/nav.css';
import shopwise from "../img/logo_light.png";
import { FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Navigate, useNavigate } from 'react-router-dom';
// import { Link } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
function NavbarShrink() {
  const [navbarCollapsible, setNavbarCollapsible] = useState(true);
  const [navbarToggler, setNavbarToggler] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    const navbarShrink = () => {
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        document.querySelector('nav').classList.remove('navbar-shrink');
      } else {
        document.querySelector('nav').classList.add('navbar-shrink');
      }
    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = navbarCollapsible;
    if (mainNav) {
      const options = {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
      };
      new ScrollSpy(mainNav, options);
    }

    return () => {
      document.removeEventListener('scroll', navbarShrink);
    };
  }, [navbarCollapsible]);

  return null;
}

function BasicExample() {
  const [navbarCollapsible, setNavbarCollapsible] = useState(null);
  const [navbarToggler, setNavbarToggler] = useState(null);
  // wel varible dh bardoo

  useEffect(() => {
    setNavbarCollapsible(document.getElementById('navbarResponsive'));
    setNavbarToggler(document.querySelector('.navbar-toggler'));
    // el mo4kela fel 2 varibles dool
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
        <img src={shopwise}/>
        </div>
        <div className="collapse navbar-collapse" id="navbarResponsive" ref={navbarCollapsible}>
          <ul className="navbar-nav text-uppercase py-4 py-lg-0">
            <li className="nav-item"><Link className="nav-link" to="Shop">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link" to="Contacts">Contacts</Link></li>
            <li className="nav-item"><Link className="nav-link" to="Login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="jira">jira</Link></li>
            <li className="nav-item"><Link className="nav-link" to="Register">Sign up</Link></li>
          </ul>
        </div>
        <div className='icons'>
          <div className='ico'><IoSearchOutline/></div>
          <Link style={{textDecoration:"none"}} to="Cart"><div className='ico'><BsCart3/></div></Link>
          <button className="navbar-toggler zorar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" ref={navbarToggler}> 
            <div className="fas fa-bars"><FaBars/></div>
          </button>
        </div>
  
     
      </div>

      <NavbarShrink />
    </nav>
  );
}

export default BasicExample;