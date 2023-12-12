import React from 'react';
import { LogoImage } from '../images/Image.stories';

const Header = ({variant}) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${variant}`}>
      
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <LogoImage />
        </a>
        {/* <a className="navbar-brand" href="#">
          Pizza Delivery
        </a> */}
        <div className="ml-auto custom-navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        </div>
    </nav>
  );
};

export default Header;