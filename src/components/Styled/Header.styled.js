import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
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
    width: 50%;
    display: inline-flex;
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
    width: 65%;
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
    width: 30%;
  }
`;

export default StyledHeader;
