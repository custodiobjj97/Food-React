import styled from "styled-components";

export const Section= styled.section`
padding: 120px 13px;



.border{
  border: 4px solid var(--color-secundary);
  text-align: center;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
}

.border h2{
  font-size: 2.66rem;
  text-align: center;
  margin-bottom: 2rem;
 
}

.border p{
  font-size: 1.40rem;
  line-height:1.7;
}
.color{
  color: var(--color-secundary);
}

.box-input{
  max-width: 450px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
}
.red{
  background-color: red;
}

.box-input input{
   width: 100%;
   padding: .90rem;
   border: 3px solid var(--color-secundary);
}
.box-input button{
  padding: 1rem 2rem;
  background-color: var(--color-secundary);
  color: #fff;
  cursor: pointer;
}
`