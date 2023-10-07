import styled from "styled-components";

export const Section = styled.section`
 padding: 120px 16px;

 .border{
  border: 10px solid var(--color-secundary);
  border-radius: 5px;
  padding: 1rem;

  position: relative;
 }

 h2{
   font-size: 2.66rem;
   text-align: center;
}
 

 .boxs{
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
 }

 .box{
  padding: 1.14rem;
  text-align: center;
 }


 .box img{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 2rem;
  transform: scale(.8);
  transition: all.4s;
 }

 .box img:hover{
  transform: scale(1);
 }
 .box p{
  font-size: 1.1rem;
  line-height: 1.7;
 }
 @media (min-width:920px){
  .boxs{
    grid-template-columns: repeat(3,1fr);
 }

  h2{
  width: 600px;
  max-width: 90%;
  background-color: #fff;
  position: absolute;
  top: -20px;
  right: 0px;
  left: 0px;
  text-align: center;
  margin: auto;
  }
 }
`