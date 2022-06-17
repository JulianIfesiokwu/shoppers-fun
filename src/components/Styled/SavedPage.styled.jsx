import styled from "styled-components";

const StyledSavedPage = styled.div`
    padding: 2rem 0;
    width: 95%;
    margin: 0 auto;

    .empty-cart {
        width: 70%;
        margin: 0 auto;
        text-align: center;
    }

    .table {
        border-collapse: collapse;
    }

    td, th {
        padding: 0.5rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #ddd;
    }

    td {
        height: 100px;
        margin: 0.5rem;
        border-bottom: 1px solid #ddd;
    }

    .img {
        width: 10%;
    }

    .details{
        width: 45%;
    }

    .quantity {
        Button {
            width: 100%;
            margin-bottom: 1rem;
        }
    }

    .price {
        font-size: 1.3rem;
        font-weight: bold;
    }

    .clear-btn {
        margin: 1rem auto;
    }

    @media only screen and (max-width: 600px) {
        
    }

`;

export default StyledSavedPage