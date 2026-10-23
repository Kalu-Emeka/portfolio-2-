import React from 'react'

const WorkItems = ({ item }) => {
  return (
    <article className="work__card" data-reveal>
      <a href={item.link} target="_blank" rel="noreferrer" className="work__image-link" aria-label={`Open ${item.title} project`}>
        <img src={item.image} alt={`${item.title} project preview`} className="work__img" />
      </a>
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      <div className="work__context">
        <a href={item.link} target="_blank" rel="noreferrer" className="work__button">
          Live Demo
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </article>
  )
}

export default WorkItems
