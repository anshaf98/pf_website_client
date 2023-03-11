import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  /* ========================= NAVBAR SHOW ===================== */

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /* ========================= CLICK MENU ===================== */

  const [touch, setTouch] = useState(false);

  // NAVBAR
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          Mohamed
        </a>

        <div className={touch ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav-link active-link" : "nav-link"
                }
              >
                <i class="uil uil-estate nav-icon"></i> home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav-link active-link" : "nav-link"
                }
              >
                <i class="uil uil-user nav-icon"></i> about
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav-link active-link" : "nav-link"
                }
              >
                <i class="uil uil-file-alt nav-icon"></i> skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i class="uil uil-briefcase-alt nav-icon"></i> services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i class="uil uil-scenery nav-icon"></i> portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav-link active-link" : "nav-link"
                }
              >
                <i class="uil uil-message nav-icon"></i> contact
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav-close"
            onClick={() => setTouch(!touch)}
          ></i>
        </div>
        <div className="nav-toggle" onClick={() => setTouch(!touch)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
