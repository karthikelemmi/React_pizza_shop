import React from 'react';

const Footer = () => {
  return (
    <div>
    <footer className="bg-light text-center p-3 mt-5">
    <p>&copy; 2023 Pizza Delivery App. All rights reserved.</p>
    <div className="container">
        <div className="row">
          <div className="col">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
              <i className="bi-facebook fs-3"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
              <i className="bi-instagram fs-3"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
              <i className="bi-twitter fs-3"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
              <i className="bi-linkedin fs-3"></i>
            </a>
          </div>
        </div>
      </div>

    </footer>
    </div>
  );
};

export default Footer;