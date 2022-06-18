import styled from "styled-components";

const StyledCartPage = styled.section`
    padding: 2rem 0;
    width: 90%;
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
    }

    .img {
        width: 10%;
    }

    .details{
        width: 45%;
    }

    .quantity, .price {
        width: 20%;
        text-align: center;
    }

    .price, .total-amount {
        font-size: 1.3rem;
        font-weight: bold;
        text-align: center;
    }

    .product-quantity {
        text-align: center;
        width: 20%;
        border: 1px solid #ddd;
        font-size: 1.25rem;
        margin: 0 1rem;
    }

    .pay-btn {
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;

        .minus, .add {
            display: block;
            margin-bottom: 1rem;
        }

        .product-quantity, .minus {
            margin-bottom: 1rem;
        }
    }
`;

export default StyledCartPage