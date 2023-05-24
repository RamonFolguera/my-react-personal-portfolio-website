import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import './Footer.css'


export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">RAMÓN</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/ram%C3%B3n-folguera-0ab32776/"><BsLinkedin/></a>
        <a href="https://github.com/RamonFolguera"><FaGithub/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; RAMÓN FOLGUERA. All rights reserved.</small>
      </div>

    </footer>
  )
}
