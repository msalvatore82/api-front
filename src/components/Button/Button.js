import styled from 'styled-components';

const Button = styled.div`
  padding: 5px;
  background-color: var(--primaryColor);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;

  /* Estilos para el efecto hover */
  &:hover {
    color: var(--primaryColor);
    background-color: var(--secondaryColor);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;


export default Button;
