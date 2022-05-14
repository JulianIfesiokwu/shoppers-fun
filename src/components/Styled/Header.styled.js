import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .logo-container {
    padding-top: 0.25rem;
    width: 30px;
    height: 30px;
    display: inline-block;
  }

  .company-name {
    display: inline;
    font-family: "Just Another Hand", cursive;
    letter-spacing: 2px;
    font-size: 1.3rem;
  }

  .search-container {
    display: inline-block;
    display: inline-flex;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .search-bar {
    border: 2px solid black;
    width: 85%;
  }

  .search-box {
    border: none;
    padding: 0.5rem;
    outline: none;
    cursor: pointer;
  }

  .icon {
    vertical-align: middle;
  }

  select {
    border: none;
    border-left: 1px solid black;
    padding: 0.5rem;
    text-align: end;
    outline: none;
    cursor: pointer;
  }
`;

export default StyledHeader;
