import React, { useContext, useEffect } from "react";
import { Section } from "./testimonilasstyled";
import {CreateContext} from '../Scroll/Scroll'
import { ButtonBuy1 } from "../Button/Button";

const Testimonials=()=>{
  const scroll = useContext(CreateContext)
  useEffect(()=>{
    window.addEventListener('scroll',scroll.handleScroll)
  },[])
  return (
    <Section ref={scroll.elementRef} className="scroll">
      <div  className="border">
        <h2>WHAT CUSTOMERS SAYS</h2>
        <div className="boxs">
          <div className="box">
             <img src="./img/avatar1.jpeg" alt="" />
             <p>He Printing and Typesetting the industry. Lorem Ipsum has been the Industry's</p>
             <ButtonBuy1 text='Buy now'/>
          </div>
          <div className="box">
          <img src="./img/avatar1.jpeg" alt="" />
             <p>He Printing and Typesetting the industry. Lorem Ipsum has been the Industry's</p>
             <ButtonBuy1 text='Buy now'/>
          </div>
          <div className="box">
          <img src="./img/avatar1.jpeg" alt="" />
             <p>He Printing and Typesetting the industry. Lorem Ipsum has been the Industry's</p>
             <ButtonBuy1 text='Buy now'/>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Testimonials