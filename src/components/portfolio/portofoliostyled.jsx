import styled from "styled-components";
import backgroundImg  from '../../../public/img/portfolio.jpg'
export const Section = styled.section`
 padding: 120px 12px;

 .bg-image{
  padding: 1rem;
  width: 100%;
  background: linear-gradient(to right,rgba(0,0,0,.5), rgba(0,0,0,.7)),
  url(${backgroundImg}) no-repeat center;
  background-size: cover;
  height: 80vh;
  border-radius:5px;
  transition:.3s;
  color: #fff;
 }


 .bg-image h2{
  
  font-size: 2.77rem;
  margin-bottom: 2rem;
 }

 .bg-image p{
  font-size: 2.11rem;
  margin-bottom: 2rem;
 }

 .btn-buy{
  padding: 1rem 5rem;
  border-radius: 50px;
  font-size: 1.11rem;
  color: #fff;
  background-color: var(--color-secundary);
 }
`