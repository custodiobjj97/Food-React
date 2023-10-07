import React, { useState } from "react";
import {FaBars,FaTimes} from 'react-icons/fa'
import { Header } from "./headerstyled";
const HeaderNav =()=>{
  const [menu,setMenu]=useState(false)
  const activeToggle=()=>{
    setMenu((menu) => !menu)
  }
  return (
    <Header>
       <a href="#" className="logo">
         <img style={{height:'60px'}} src="./img/FoodYummy.png" alt="" />
       </a>
       <nav>
         <ul className={menu ? 'list-menu active': 'list-menu'}>
            <li><a className="home" href="#">HOME</a></li>
            <li><a href="#">OUR SERVICES</a></li>
            <li><a href="#">PORTFOLIO</a></li>
            <li><a href="#">TESTIMONIALS</a></li>
            <li><a href="#">PRODUCTS</a></li>
            <li><a href="#">NEWSLETTER</a></li>
         </ul>
       </nav>
       <button className="toggle" onClick={activeToggle}>
          {menu ? <FaTimes/> : <FaBars/>}
       </button>
    </Header>
  )
}

export default HeaderNav