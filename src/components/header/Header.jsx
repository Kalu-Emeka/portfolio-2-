import React, { useEffect, useState } from "react";
import "./header.css";

const Header = ({ theme, onToggleTheme }) => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const updateHeader = () => {
      document
        .querySelector(".header")
        ?.classList.toggle("scroll-header", window.scrollY >= 24);
    }

    updateHeader()
    window.addEventListener("scroll", updateHeader, { passive: true })
    return () => window.removeEventListener("scroll", updateHeader)
  }, [])

  const closeMenu = (section) => {
    setActiveNav(section)
    showMenu(false)
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" aria-label="Emeka Kalu, home">
          <span className="nav__monogram">EK</span>
          <span>Emeka Kalu<span className="nav__logo-dot">.</span></span>
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => closeMenu("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => closeMenu("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => closeMenu("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => closeMenu("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
          </ul>

        </div>

        <div className="nav__actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <i className={`uil ${theme === "dark" ? "uil-sun" : "uil-moon"}`}></i>
          </button>
          <a href="#contact" className="nav__contact">Let's talk <i className="uil uil-arrow-up-right"></i></a>
          <button
            className="nav__toggle"
            type="button"
            onClick={() => showMenu(!Toggle)}
            aria-label="Toggle navigation menu"
            aria-expanded={Toggle}
          >
            <i className={`uil ${Toggle ? "uil-times" : "uil-apps"}`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
