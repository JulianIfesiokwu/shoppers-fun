import styled from "styled-components";

const DetailedProductComponent = styled.section`
    padding: 1rem 0;
    border-botttom: 1px solid #ddd;

    .product {
        display: flex;
        align-items: center;
        gap: 5%;
        margin: 2rem 0;
    }

    .img-container {
        display: inline-block;
        width: 40%;
    }
    
    .img {
        width: 100%;
        height: auto;
    }

    .product-details {
        display: inline-block;
    }

    .title {
        font-size: 2rem;
    }

    .price {
        font-size: 1.5rem;
    }

    .description {
        width: 70%;
    }

    .interact {
        display: flex;
    }
    `;

export default DetailedProductComponent