import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="www.linkedin.com/in/techie-emeka"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/Kalu-Emeka"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="mailto:brickkalu@gmail.com"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-envelope"></i>
      </a>
    </div>
  );
};

export default Social;
