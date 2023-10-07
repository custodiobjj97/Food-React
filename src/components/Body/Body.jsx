import React from 'react'
import HeaderNav from '../Header/Header'
import Home from '../Home/Home'
import Services from '../services/Services'
import Portfolio from '../portfolio/Portfolio'
import Scroll from '../Scroll/Scroll'
import Testimonials from '../Testimonials/Testimonials'
import Products from '../Products/Products'
import Contact from '../contact/contact'
import Footer from '../Footer/Footer'
const Body = () => {
  return (
     <>
      <HeaderNav/>
      <Scroll>
    <Home/>
    </Scroll>
     <Scroll>
       <Services/>
     </Scroll>
      <Scroll>
        <Portfolio/>
      </Scroll>
      <Scroll>
        <Testimonials/>
      </Scroll>
      <Scroll>
        <Products/>
      </Scroll>
      <Scroll>
        <Contact/>
      </Scroll>
      <Footer/>
     </>
  )
}

export default Body
