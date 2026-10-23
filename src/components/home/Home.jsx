import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__visual" data-reveal>
            <div className="home__visual-orbit"></div>
            <div className="home__img" role="img" aria-label="Portrait of Emeka Kalu"></div>
            <div className="home__visual-card home__visual-card--top"><i className="uil uil-brackets-curly"></i><span>Thoughtful code</span></div>
            <div className="home__visual-card home__visual-card--bottom"><span className="home__visual-star">✳</span><span>Made with purpose</span></div>
          </div>

          <div data-reveal><Data /></div>
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
