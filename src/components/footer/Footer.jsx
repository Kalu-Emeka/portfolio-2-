// eslint-disable-next-line no-unused-vars
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Don&apos;t be shy. Contact Me</h2>

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
            href="www.linkedin.com/in/techie-emeka"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          <i className="uil uil-envelope"></i>{' '}
          <span>
            Email:
            <a href="mailto:brickkalu@gmail.com"> brickkalu@gmail.com</a>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
