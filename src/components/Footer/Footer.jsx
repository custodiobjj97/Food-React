import React from 'react'
import {Foote} from '../Footer/footerstyled'
import { FaFacebook,FaLinkedin,FaInstagram, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <Foote>
      <div className="desc">
         <a href="#">
           <img src="./img/FoodYummy.png" alt="" />
         </a>
        <p>Lorem ipsum dolor sit, amet consectetur<br/>
        adipisicing elit. Officiis, repudiandae.</p>
        <div className="list-icons">
          <li><a href="#">
            <FaFacebook/>
            </a></li>
          <li><a href="#">
            <FaLinkedin/>
            </a></li>
          <li>
            <a href="#">
              <FaInstagram/>
            </a></li>
          <li>
            <a href="#">
              <FaTwitter/>
            </a></li>
        </div>
      </div>
      <div className='about'>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eligendi repellat laudantium blanditiis iure nulla, ut aliquam itaque unde nesciunt cum veritatis perferendis vel expedita! Nam</p>
      </div>
      <div className='footer-contact'>
      <h2>Contact Us</h2>
      <p>+91 1231231231</p>
      <p>foodyummy@gmail.com</p>
      <p>@foodyummy</p>
      <p>412 Street, Ground Floor, India</p>
      </div>
 
        <h2 className='copy'>Copyright © 2021 FOOD YUMMY</h2>
 
    </Foote>
  )
}

export default Footer