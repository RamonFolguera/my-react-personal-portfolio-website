import React from 'react'
import { CTA } from './CTA'
import './Header.css'
import ME from '../../assets/me.png'
import { HeaderSocials } from './HeaderSocials'

export const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello, I'm</h5>
            <h1>Ramón Folguera</h1>
            <h5 className="text-light">Full Stack Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href="#contact" className="scroll_down">Scroll down</a>
        </div>
    </header>
  )
}
