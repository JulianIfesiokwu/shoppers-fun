import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  color: white;

  :hover {
    color: var(--secondary-color);
    background-color: white;
    cursor: pointer;
  }
`;

export default Button;
