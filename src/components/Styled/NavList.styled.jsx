import styled from "styled-components";

const StyledNavList = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    margin-top: 0.5rem;
    margin-left: 1rem;
    display: inline;
    cursor: pointer;
    vertical-align: middle;
    font-size: 0.8rem;
  }

  .icon {
    vertical-align: middle;
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
    background-color: teal;
    width: 90%;
    z-index: 10;

    .show {
      display: flex;
    }

    .hide {
      display: none;
    }



  }
`;

export default StyledNavList;
