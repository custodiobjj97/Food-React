import React, { useContext, useEffect } from "react";
import { Section } from "./productstyled";
import { ButtonBuy1 } from "../Button/Button";
import { CreateContext } from "../Scroll/Scroll";
const Products=()=>{
  const scroll = useContext(CreateContext)
  useEffect(()=>{
    window.addEventListener('scroll', scroll.handleScroll)
  },[])
  const data=[
    {img:'./img/product1.jpg',
    price:'$22.4/pcs',
    describe:'He Printing and Typesetting the industry. Lorem Ipsum has'
  },
  {img:'./img/product2.jpg',
    price:'$5.5/pcs',
    describe:'He Printing and Typesetting the industry. Lorem Ipsum has'
  },
  {img:'./img/product3.jpg',
    price:'$8/pcs',
    describe:'He Printing and Typesetting the industry. Lorem Ipsum has'
  },
  {img:'./img/product4.jpg',
  price:'$12.5/pcs',
  describe:'He Printing and Typesetting the industry. Lorem Ipsum has'
}
  ]
  return (
    <Section ref={scroll.elementRef} className="scroll">
      <h2><span className="color">FAVOURITE</span> ALL THE TIME!</h2>
      <div className="gruop-produtcs">
         {data.map((item,index)=>{
          return (
             <div key={index} className="produtc">
                <img src={item.img} alt="" />
                 <span className="price">{item.price}</span>
                 <p>{item.describe}</p>
                 <ButtonBuy1 text="Buy now"/>
             </div>
          )
         })}
      </div>
    </Section>
  )
}

export default Products