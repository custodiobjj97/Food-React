import React, { useEffect, useContext } from "react";
import { Section } from "./portofoliostyled";
import {CreateContext} from '../Scroll/Scroll'
const Portfolio=()=>{
  const scroll = useContext(CreateContext)
  useEffect(()=>{
     window.addEventListener('scroll', scroll.handleScroll)
  },[])
  return (
    <Section ref={scroll.elementRef} className="scroll">
       <div className="bg-image">
       <h2>
         Buy Premium Pan<br/>
         Free Hand Toast!
       </h2>
        <p>Lorem, ipsum dolor sit amet consectetur <br/>
          adipisicing elit. Modi, molestias!</p>
          <a href="#" className="btn-buy">buy now</a>
       </div>
    </Section>
  )
}


export default Portfolio