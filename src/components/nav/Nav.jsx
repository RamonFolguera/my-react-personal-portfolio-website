import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

export const Nav = () => {
  const [isActiveNav, setIsActiveNav] = useState('#')


  return (
    <nav>
      <a href="" onClick={() => setIsActiveNav('#')} className={isActiveNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setIsActiveNav('#about')} className={isActiveNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setIsActiveNav('#experience')} className={isActiveNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={() => setIsActiveNav('#services')} className={isActiveNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setIsActiveNav('#contact')} className={isActiveNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav> 

)
}
