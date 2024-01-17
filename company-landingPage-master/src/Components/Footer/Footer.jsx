import React from 'react'
import './Footer.css'
import Github from './../../assets/github.png'
import insta from './../../assets/instagram.png'
import linkedin from './../../assets/linkedin.png'


export const Footer = () => {
  return (
<div className='footer-container' >
    <hr />
    <div className="footer">
    <img src={Github} alt="" />
    <img src={insta} alt="" />
    <img src={linkedin} alt="" />
 </div>
 <div className="copyright">
 <p>Created by Muhammad Abdullah. © 2022</p>
 </div>
 </div>
  )
}
