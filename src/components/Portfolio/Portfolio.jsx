import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio01.PNG'
import IMG2 from '../../assets/portfolio02.PNG'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "deltaFight",
    github: "https://github.com/astrakore/deltaFight",
    demo: "https://astrakore.github.io/deltaFight/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Family Video",
    github: "https://github.com/astrakore/frontalFamilyVideo",
    demo: "https://master.d2ag7aygvmn19a.amplifyapp.com/"
  }
]

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
    
      <h5>Mis trabajos</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portoflio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Proyecto</a>
              </div>
              </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Portfolio