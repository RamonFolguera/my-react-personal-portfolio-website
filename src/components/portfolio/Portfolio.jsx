import React from 'react'
// import GAMEBOY from '../../assets/gameboy.png'
import IMG1 from '../../assets/gameboy.jpg'
import IMG2 from '../../assets/arthive.jpg'
import IMG3 from '../../assets/dentalclinic.png'
import IMG4 from '../../assets/PizzaWebApp.png'
import IMG5 from '../../assets/tictactoe.jpg'
import IMG6 from '../../assets/ddbb.jpg'
import './Portfolio.css'


const data = [
  {
    id: 1,
    image: IMG2,
    title: "Art Social Platform WebApp: ARTHIVE",
    github: "https://github.com/RamonFolguera/Frontend-ArtHive-Social-Platform-React-Redux",
    demo: "https://www.youtube.com/watch?v=RST-Q0JVop8&t=431s"
  },
  {
    id: 2,
    image: IMG3,
    title: "Dental Clinic WebApp",
    github: "https://github.com/RamonFolguera/Frontend-for-a-Dental-Clinic-React-Redux",
    demo: ""
  },
  {
    id: 3,
    image: IMG4,
    title: "Pizza WebApp Test",
    github: "https://github.com/RamonFolguera/Test_pizza_app_Ramon_Folguera",
    demo: ""
  }
  ,  {
    id: 4,
    image: IMG6,
    title: "Discord backend PHP Laravel",
    github: "https://github.com/RamonFolguera/Backend-Discord-App-PHP-Laravel",
    demo: ""
  }
  ,  {
    id: 5,
    image: IMG5,
    title: "Tic tac toe with HTML, CSS and JS",
    github: "https://github.com/RamonFolguera/Tic-tac-toe-JavaScript-HTML-CSS",
    demo: "https://www.youtube.com/watch?v=2LpsWEkbcJ0"
  },
  {
    id: 6,
    image: IMG1,
    title: "GameBoy Color with HTML, CSS and JS",
    github: "https://github.com/RamonFolguera/GameBoy-Color-with-HTML-and-CSS",
    demo: "https://www.youtube.com/watch?v=6mHiMYztH9g"
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
