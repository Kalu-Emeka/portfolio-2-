import React from 'react'
import { ReactTyped } from "react-typed";
const Data = () => {
  return (
    <div className="home__data">
      <div className="home__availability"><span></span> Available for select projects</div>
      <p className="home__eyebrow">Hello, I'm Emeka Kalu</p>
      <h1 className="home__title">I build digital products <span>that move people.</span></h1>
      <h3 className="home__subtitle">
        <ReactTyped
          strings={["Frontend Engineer.", "Creative Developer.", "Web3 Builder."]}
          typeSpeed={50}
          backSpeed={30}
          loop
          >
        </ReactTyped>
    </h3>
    <p className="home__description">
      I turn ambitious ideas into polished, fast, and thoughtful digital experiences — from first sketch to final launch.
    </p>

    <div className="home__actions">
      <a href="#portfolio" className="button button--flex">Explore my work <i className="uil uil-arrow-down-right button__icon"></i></a>
      <a href="#contact" className="home__text-link">Let's talk <i className="uil uil-arrow-up-right"></i></a>
    </div>
    </div>
  )
}

export default Data
