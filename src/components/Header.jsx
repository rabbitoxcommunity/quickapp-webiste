import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const [mobileNavActive, setMobileNavActive] = useState(false);
    const [activeSection, setActiveSection] = useState('#banner'); // Default active section
  

  
    // Function to handle clicking on nav links
    const handleNavClick = (section) => {
      setActiveSection(section);
      if (mobileNavActive) {
        setMobileNavActive(false); // Close the mobile nav on link click
      }
    };

    

    // Toggle mobile navigation and body class
    const mobileNavToggle = () => {
      setMobileNavActive(!mobileNavActive);
    };
  
    // Update body class when mobileNavActive changes
    useEffect(() => {
      const body = document.querySelector('body');
      if (mobileNavActive) {
        body.classList.add('mobile-nav-active');
      } else {
        body.classList.remove('mobile-nav-active');
      }
  
      // Cleanup function to remove class on component unmount
      return () => {
        body.classList.remove('mobile-nav-active');
      };
    }, [mobileNavActive]);
  
    // Close mobile nav on same-page/hash links click
    useEffect(() => {
      const handleNavClick = () => {
        if (mobileNavActive) {
          setMobileNavActive(false);
        }
      };
  
      const navLinks = document.querySelectorAll('#navmenu a');
      navLinks.forEach((navLink) =>
        navLink.addEventListener('click', handleNavClick)
      );
  
      return () => {
        navLinks.forEach((navLink) =>
          navLink.removeEventListener('click', handleNavClick)
        );
      };
    }, [mobileNavActive]);
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <img src="./assets/img/logo-01.svg" alt="Logo" />
          </Link>
  
          <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li>
                <a
                  href="#banner"
                  className={activeSection === '#banner' ? 'active' : ''}
                  onClick={() => handleNavClick('#banner')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#howWorks"
                  className={activeSection === '#howWorks' ? 'active' : ''}
                  onClick={() => handleNavClick('#howWorks')}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className={activeSection === '#features' ? 'active' : ''}
                  onClick={() => handleNavClick('#features')}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#WhyQuick"
                  className={activeSection === '#WhyQuick' ? 'active' : ''}
                  onClick={() => handleNavClick('#WhyQuick')}
                >
                  Why QuickApp?
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeSection === '#contact' ? 'active' : ''}
                  onClick={() => handleNavClick('#contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
  
            {mobileNavActive ? (
              <img
                onClick={mobileNavToggle}
                className="mobile-nav-toggle d-xl-none close"
                src="/assets/img/close.svg"
                alt="Close Menu"
              />
            ) : (
              <img
                onClick={mobileNavToggle}
                className="mobile-nav-toggle d-xl-none"
                src="/assets/img/menu.svg"
                alt="Open Menu"
              />
            )}
          </nav>
  
          <button className="btn btn-primary">Download</button>
        </div>
      </header>
    )
}
