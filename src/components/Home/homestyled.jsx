import styled from "styled-components";
import BackgroundImg  from '../../../public/img/hero.jpg'
import BackgroundImg1  from '../../../public/img/HeroDesign.png'
export const Hero = styled.section`
 padding: 120px 0px;
 background:linear-gradient(to right, rgba(0, 0, 0, .6), rgba(0, 0, 0, .5)),url(${BackgroundImg}) no-repeat center;
 background-size:cover;
 display: grid;
 grid-template-columns: 1fr;
 align-items: center;
 
 .img{
  display: none;
 }
 .text{
  color: var(--color-primary);
 }
 .text h1{
  font-size: 4rem;
  margin-bottom: 2rem;
 }

 .text p{
  font-size: 1.11rem;
  line-height: 1.7;
  margin-bottom: 2rem;
 }
 @media (min-width:920px){
  grid-template-columns: 1fr 1fr;

  .img{
    width: 100%;
    height: 80vh;
    background: url(${BackgroundImg1}) no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#fff;
    font-size: 3rem;
    user-select: none;
  }
 }
`