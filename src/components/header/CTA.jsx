import React from 'react'
import CV from '../../assets/CV_FullStack_Ramon_Folguera_EN.pdf'
 
export const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}
