import styled from "styled-components";

const StyledNavList = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    margin-top: 0.5rem;
    margin-left: 1rem;
    display: inline;
    cursor: pointer;
    font-size: 0.9rem;
    color: var(--primary-color);
    font-weight: 600;
  }

  .search-container {
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--secondary-color);
  }

  .search-box {
    border: none;
    padding: 0.5rem;
    outline: none;
    cursor: pointer;
  }

  .search-button {
    height: 100%;
    color: white;
    background-color: var(--secondary-color);
    border: none;
    margin: 0 auto;
  }

  .search-button:hover {
    color: var(--secondary-color);
    background-color: white;
  }

  .cart-logo {
    position relative;
  }

  .favourite-logo {
    position relative;
  }

  .cart-pill {
    color: var(--secondary-color);
    border-radius: 10px;
    width: 15px;
    height: 15px;
    font-size: 0.9rem;
    font-weight: 600;
    position: absolute;
    bottom: 1.3rem;
  }

  .favourite-pill {
    color: var(--secondary-color);
    border-radius: 10px;
    width: 15px;
    height: 15px;
    font-size: 0.9rem;
    font-weight: 600;
    position: absolute;
    bottom: 0.7rem;
  }

  @media only screen and (max-width: 600px) {
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: white;
    z-index: 10;
    padding: 0;
    border: 1px solid var(--secondary-color);

    &.active {
      display: flex;
      position: absolute;
      top: 3rem;
      width: 100%;
    }

    li {
      margin-left: 0;
      margin-bottom: 1.2rem;
      padding: 0 0.5rem;
    }

    .search-container {
      border: none;
      border-bottom: 2px solid var(--secondary-color);
      margin-bottom: 1.2rem;
    }
  }

`;

export default StyledNavList;
