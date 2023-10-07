import styled from "styled-components";

export const Header= styled.header`
width: 100%;
height: 90px;
background-color: #fff;
display: flex;
align-items: center;
justify-content: space-between;
box-shadow: 1px 0px 1px rgba(0,0,0,.5);
position: relative;
z-index: 22222222;




.list-menu{
  width: 50%;
  height: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  right: 0px;
  visibility: hidden;
  opacity: 0;
  transition: .4s;
}

.list-menu.active{
  height: 100vh;
  opacity: 1;
  visibility: visible;
}

.list-menu li a{
  padding: 1.3rem;
  font-size: 1.1rem;
  color:var(--color-primary);
  transition: .4s;
}

.list-menu li a:hover{
  color: var(--color-secundary);
}
.list-menu li .home{
  color: var(--color-secundary);
}



.toggle{
  position: absolute;
  top: 2rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
}


@media (min-width:920px){
  .toggle{
    display: none;
  }

  .list-menu{
    width: 100%;
    height: 0px;
    top: 50%;
    flex-direction: row;
    justify-content: end;
    visibility: visible;
    opacity: 1;
   gap: 40px;
  }
}
`