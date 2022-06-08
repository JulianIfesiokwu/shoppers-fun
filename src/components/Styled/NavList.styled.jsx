import styled from "styled-components";

const StyledNavList = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    margin-top: 0.5rem;
    margin-left: 1rem;
    display: inline;
    cursor: pointer;
  }

  .search-container {
    display: inline-flex;
    justify-content: space-between;
    border: 2px solid #222;
  }

  .search-box {
    border: none;
    padding: 0.5rem;
    outline: none;
    cursor: pointer;
  }

  .search-button {
    color: black;
    background-color: white;
    border: none;
    margin: 0 auto;
  }

  .search-button:hover {
    color: white;
    background-color: black;
  }

  @media only screen and (max-width: 600px) {
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: white;
    z-index: 10;
    padding: 1rem 0;

    &.active {
      display: flex;
      position: absolute;
      top: 3rem;
      width: 100%;
    }

    li {
      margin-left: 0;
      margin-bottom: 0.5rem;
    }

    .search-container {
      border: none;
      border-bottom: 2px solid black;
    }
  }

`;

export default StyledNavList;
