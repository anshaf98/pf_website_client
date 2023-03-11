import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">MHD</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="www.google.com"
            className="footer-social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
          <a
            href="www.google.com"
            className="footer-social-link"
            target="_blank"
          >
            <i class="uil uil-facebook"></i>
          </a>
          <a
            href="www.google.com"
            className="footer-social-link"
            target="_blank"
          >
            <i class="uil uil-whatsapp"></i>
          </a>
          <a
            href="www.google.com"
            className="footer-social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
        </div>
        <span className="footer-copy">&#169; MHD. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
