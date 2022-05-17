import styled from "styled-components";

const StyledNavList = styled.ul`
  display: flex;
  list-style-type: none;
  vertical-align: middle;

  li {
    margin-left: 1rem;
    display: inline;
    cursor: pointer;
    vertical-align: middle;
    font-size: 0.8rem;
  }

  .icon {
    vertical-align: middle;
  }
`;

export default StyledNavList;
