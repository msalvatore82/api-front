import styled from 'styled-components';

const Button = styled.div`
  padding: 5px;
  background-color: rgb(169 165 138);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;

  /* Estilos para el efecto hover */
  &:hover {
    background-color: rgb(149, 145, 118);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  }
`;


export default Button;
