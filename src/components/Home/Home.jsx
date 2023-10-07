import React, { useContext } from "react";
import { Hero } from "./homestyled";
import {Buttons} from "../Button/Button";
import { CreateContext } from "../Scroll/Scroll";
import { useEffect } from "react";
const Home =()=>{
 const scroll= useContext(CreateContext)
 useEffect(()=>{
  scroll.handleScroll()
  window.addEventListener('scroll', scroll.handleScroll)
 },[])
  
  return (
    <Hero>
       <div className="img">
         <h1>
          big sale <br/>
          50% off
         </h1>
       </div>
       <div ref={scroll.elementRef} className="text scroll" >
        <h1>RETAILER</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> 
        Magnam aspernatur itaque, eius quia voluptas numquam!</p>
        <Buttons text='order now'/>
       </div>
    </Hero>
  )
}

export default Home