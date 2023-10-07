import styled from "styled-components";

export const Foote= styled.footer`
padding: 80px 0px;
background-color: var(--color-secundary);
color: #fff;
display: grid;
grid-template-columns: 1fr;
align-items: center;
text-align: center;
.desc{
  padding: 1rem 2rem;
}

.desc p{
  font-size: 1.55rem;
  line-height: 1.7;
}

.desc .list-icons{
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:30px;
  font-size: 2rem;
  
}

.desc .list-icons li a {
  color: #fff;
}

.about h2{
  margin-bottom: 2rem;
}

.about p{
  font-size: 1.21rem;
  line-height: 1.7;
}
.footer-contact h2{
  margin-bottom: 2rem;
}

.copy{
  padding: 1rem;
  position: relative;
  top: 80px;
  grid-column:  1/ -1;
  background-color: #111;
  height: 10vh;
}


@media (min-width:920px){
  grid-template-columns: repeat(3,1fr);
  overflow: hidden;
  gap:60px;
}
`