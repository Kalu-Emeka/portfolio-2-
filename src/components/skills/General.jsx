import React from 'react'

const General = () => {
  const skills = [
    'Shopify Expert',
    'Framer Expert',
    'Website Designer',
    'GoHighLevel Expert',
    'Photographer',
  ]

  return (
    <div className="skills__content">
      <h3 className="skills__title">General Skills</h3>

      <div className="skills__box">
        <div className="skills__group">
          {skills.slice(0, 3).map((skill) => (
            <div className="skills__data" key={skill}>
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">{skill}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="skills__group">
          {skills.slice(3).map((skill) => (
            <div className="skills__data" key={skill}>
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">{skill}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default General
