import styled from "styled-components";

const StyledCartPage = styled.section`
    padding: 2rem 0;
    width: 70%;
    margin: 0 auto;

    .empty-cart {
        width: 70%;
        margin: 0 auto;
        text-align: center;
    }

    td, th {
        padding: 0.5rem 0;
        border-bottom: 1px solid #ddd;
        margin-bottom: 1rem;
    }

    td {
        heighT: 100px;
    }

    .img {
        width: 10%;
    }

    .details{
        width: 50%;
    }

    .quantity, .price {
        width: 20%;
        text-align: center;

        input {
            width: 20%;
            border: 1px solid #ddd;
            font-size: 1.25rem;
            margin: 0 1rem;
        }
    }

`;

export default StyledCartPage