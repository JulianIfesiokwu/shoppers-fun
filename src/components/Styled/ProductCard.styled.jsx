import styled from "styled-components";

const StyledProductCard = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid #ddd;
    background-color: #FFF;
    margin-bottom: 1rem;
    : hover {
        cursor: pointer;
        box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
        0px 8px 16px rgba(96, 97, 112, 0.16);
        transform: scale(1.01);
        border: none;

        .interactions {
            display: flex;
        }
    }

    .img-container {
        width: 80%;
        margin: 0 auto;
        padding: 0.75rem;
    }

    .img-container img {
        width: 100%;
        height: auto;
        display: block;
    }

    .card-details {
        margin-top: auto;
        padding: 0.75rem;
    }

    .name {
        color: var(--primary-color);
        font-weight: 700;
    }

    .rating {
        font-size: 0.8rem;
    }

    @media only screen and (max-width: 600px) {

    }

`;

export default StyledProductCard