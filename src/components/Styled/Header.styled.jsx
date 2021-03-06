import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
  position: relative;
  .logo-container {
    padding-top: 0.25rem;
    width: 30px;
    height: 30px;
    display: inline-block;
  }

  .mobile-menu {
    display: none;
  }

  .company-name {
    display: inline;
    font-family: "Just Another Hand", cursive;
    color: var(--primary-color);
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 600px) {
    .mobile-menu {
      display: flex;
      color: var(--primary-color);
    }

  }
`;

export default StyledHeader;
