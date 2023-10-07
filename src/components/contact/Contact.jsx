import React, { useContext, useEffect } from "react";
import { Section } from "./contactstyled";
import { CreateContext } from "../Scroll/Scroll";
const Contact =() => {
  const scroll = useContext(CreateContext)
  useEffect(()=>{
    window.addEventListener('scroll', scroll.handleScroll)
  },[])
 return (
   <Section className="scroll" ref={scroll.elementRef}>
     <div className="border">
       <h2><span className="color">SUBSCRIBE</span> NEWSLETTER</h2>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quas
       perferendis nesciunt illum, voluptas nulla laborum alias similique praesentium quam.</p>
         <div className="box-input">
          <input type="text" placeholder="Search for food" />
           <button>search</button>
         </div>
     </div>
  
   </Section>
 )
}

export default Contact