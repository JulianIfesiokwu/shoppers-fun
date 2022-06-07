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

  .mobile-menu {
    display: none;
  }

  .company-name {
    display: inline;
    font-family: "Just Another Hand", cursive;
    letter-spacing: 2px;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 600px) {
    .mobile-menu {
      display: block;
    }

  }
`;

export default StyledHeader;
