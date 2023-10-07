import styled from "styled-components";

export const Section = styled.section`
 padding: 120px 16px;


 h2{
  text-align: center;
  margin-bottom:2rem;
  font-size: 2.66rem;
 }
 .color{
  color: var(--color-secundary);
}


.gruop-produtcs{
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  gap:15px;
}

.produtc img{
  width: 100%;
  height: 70%;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.produtc{
  text-align: center;
}
 .price{
  display: inline-block;
  color: var(--color-secundary);
  font-weight: bold;
  margin-bottom: 1rem;
}

.produtc p{
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}

@media (min-width:920px){
  .gruop-produtcs{
    grid-template-columns: repeat(4,1fr);
    gap:30px;
  }

  .produtc{
    width: 80%;
  height: 80%;
  }
}
`