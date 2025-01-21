import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              {' '}
              <div>
                <h3 className="qualification__title">Front-end Developer</h3>
                <span className="qualification__subtitle">
                  VERIDAQ - Remote – Lagos State
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">ECOREPORTAI</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> August 2024 – December 2024 
                </div>
              </div>
            </div>

            <div className="qualification__data">
              {' '}
              <div>
                <h3 className="qualification__title">
                  Internship Frontend Developer
                </h3>
                <span className="qualification__subtitle">
                  LOCAMALL - Remote – New York
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> January 2024 – August 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Freelance Web Developer
                </h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>August 2023 – December 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Freelance Developer
                </h3>
                <span className="qualification__subtitle">
                  Alpha
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> February 2023– July 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
