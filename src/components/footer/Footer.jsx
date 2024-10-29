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
            href="https://www.github.com/FinzyPHINZY/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/bolu-finzyphinzy/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://twitter.com/iamfinzyphinzy_"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          <i className="uil uil-envelope"></i>{' '}
          <span>
            Email:
            <a href="mailto:finzyphinzyy@proton.me"> finzyphinzyy@proton.me</a>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
