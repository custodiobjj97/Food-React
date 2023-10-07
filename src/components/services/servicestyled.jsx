import styled from "styled-components";
export const Section = styled.section`
padding: 120px 16px;
text-align: center;


h2{
  font-size: 2.77rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
}

p{
  font-size: 1.11rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.gruop-card{
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 10px;
}

.gruop-card .card{
  padding: 1rem;
  text-align: center;
}
.gruop-card .card img {
  width: 40px;
  margin-bottom: 2rem;
}
.gruop-card .card p {
  font-size: 1.55rem;
  line-height: 1.7;
}

.gruop-card .card .btn{
  background-color: var(--color-secundary);
  padding: 1rem 3rem;
  border-radius: 50px;
  color: #fff;
}

.gold{
  background-color: var(--color-primary) !important;
}

@media (min-width:920px){
  .gruop-card{
    grid-template-columns: repeat(3,1fr);
  }
}
`