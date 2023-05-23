import React from 'react'
// import GAMEBOY from '../../assets/gameboy.png'
import IMG1 from '../../assets/gameboy.png'
// import IMG2 from '../../assets/portfolio1.jpg'
// import IMG3 from '../../assets/portfolio1.jpg'
// import IMG4 from '../../assets/portfolio1.jpg'
// import IMG5 from '../../assets/portfolio1.jpg'
// import IMG6 from '../../assets/portfolio1.jpg'
import './Portfolio.css'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project1",
    github: "https://github.com/RamonFolguera/Frontend-ArtHive-Social-Platform-React-Redux",
    demo: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 1,
    image: IMG1,
    title: "Project1",
    github: "https://github.com/RamonFolguera/Frontend-ArtHive-Social-Platform-React-Redux",
    demo: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 1,
    image: IMG1,
    title: "Project1",
    github: "https://github.com/RamonFolguera/Frontend-ArtHive-Social-Platform-React-Redux",
    demo: "https://dribbble.com/Alien_pixels"
  }
  ,  {
    id: 1,
    image: IMG1,
    title: "Project1",
    github: "https://github.com/RamonFolguera/Frontend-ArtHive-Social-Platform-React-Redux",
    demo: "https://dribbble.com/Alien_pixels"
  }
  ,  {
    id: 1,
    image: IMG1,
    title: "Project1",
    github: "https://github.com/RamonFolguera/Frontend-ArtHive-Social-Platform-React-Redux",
    demo: "https://dribbble.com/Alien_pixels"
  },
  {
    id: 1,
    image: IMG1,
    title: "Project1",
    github: "https://github.com/RamonFolguera/Frontend-ArtHive-Social-Platform-React-Redux",
    demo: "https://dribbble.com/Alien_pixels"
  }
]





export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className="btn">Github</a>
            <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
          </article>
          )
        })
       }
       
      </div>
    </section>
  )
}
