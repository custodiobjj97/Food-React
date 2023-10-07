import React, { useContext, useEffect } from 'react'
import { Section } from './servicestyled'
import { CreateContext } from '../Scroll/Scroll'
const Services = () => {
  const scroll= useContext(CreateContext)
  useEffect(()=>{
    scroll.handleScroll()
     window.addEventListener('scroll',scroll.handleScroll)
  },[])
  
  return (
    <Section className='scroll' ref={scroll.elementRef}>
       <h2>WHAT WE DO?</h2>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, incidunt magnam <br/>labore ipsam vero minima maxime doloribus dolores ipsa soluta</p>
       <div className="gruop-card">
       <div className="card">
       <img src="./img/Services2.png" alt="" />
           <p>He Printing and Typesetting the industry. Lorem Ipsum has been the Industry's</p>
           <a href="#" className='btn'>Read more</a>
       </div>
         <div className="card">
           <img src="./img/Services1.png" alt="" />
           <p>He Printing and Typesetting the industry. Lorem Ipsum has been the Industry's</p>
           <a href="#" className='btn gold'>Read more</a>
         </div>
         
         <div className="card">
         <img src="./img/Services3.png" alt="" />
           <p>He Printing and Typesetting the industry. Lorem Ipsum has been the Industry's</p>
           <a href="#" className='btn'>Read more</a>
         </div>
       </div>
    </Section>
  )
}

export default Services