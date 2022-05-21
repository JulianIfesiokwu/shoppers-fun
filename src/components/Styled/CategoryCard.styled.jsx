import styled from "styled-components";

const StyledCategoryCard = styled.div`
  width: 15%;

  .img-container {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.08);
  }
`;

export default StyledCategoryCard;
