import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3 Years Coding</span>
      </div>

      <div className="about__box">
        <i className="bx bx-code-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">20 + Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-hard-hat about__icon"></i>

        <h3 className="about__title">Background</h3>
        <span className="about__subtitle">Non-traditional</span>
      </div>
    </div>
  )
}

export default Info
