import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
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
    display: inline-flex;
    width: 60%;
    margin: 0 auto;
  }

  .search-bar {
    border: 2px solid #222;
    width: 60%;
    margin-right: 1rem;
  }

  .search-box {
    width: 63%;
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
    width: 30%;
  }

  .option {
    padding: 0.5rem;
  }
`;

export default StyledHeader;
