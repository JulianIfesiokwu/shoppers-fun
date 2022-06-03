import styled from "styled-components";

const StyledProductCard = styled.article`
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid #ddd;
    margin-bottom: 1rem;
    : hover {
        cursor: pointer;
        box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
        0px 8px 16px rgba(96, 97, 112, 0.16);
        transform: scale(1.01)
    }

    .img-container {
        width: 100%;
    }

    .img-container img {
        width: 100%;
        height: auto;
        display: block;
    }

    .card-details {
        margin-top: auto;
    }
`;

export default StyledProductCard