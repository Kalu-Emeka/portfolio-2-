// eslint-disable-next-line no-unused-vars
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__eyebrow">Have a good one in mind?</p>
        <h2 className="footer__title">Let&apos;s make it <span>happen.</span></h2>
        <a className="footer__email" href="mailto:brickkalu@gmail.com">brickkalu@gmail.com <i className="uil uil-arrow-up-right"></i></a>

        <div className="footer__social">
          <a
            href="https://github.com/Kalu-Emeka"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/techie-emeka"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          © {new Date().getFullYear()} Emeka Kalu. Built with intention.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
