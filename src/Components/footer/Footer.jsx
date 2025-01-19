import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/footer_logo.jpeg'
import insta_logo from '../Assets/insta_logo.png'
import pintrest_logo from '../Assets/pintrest_logo.png'
import watsapp_logo from '../Assets/watsapp_logo.png'



export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} width={150} height={150} alt="" />
        <p>SHOPSEE</p>
        <hr />
      </div>
      <div className="footer-links">
        <ul>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
     <div className='footer-social-icon'>
      <div className='footer-icon-container'>
        <img src={insta_logo}alt="" />
      </div>
      <div className='footer-icon-container'>
        <img src={pintrest_logo} alt="" />
      </div>
      <div className='footer-icon-container'>
   <img src={watsapp_logo} alt="" />

      </div>
     </div>
     <div className='footer-copyright'>
      <hr />
      <p>copyright@2025 -All Right Reserved</p>
     </div>
        
      </div>

    </div>
  )
}
