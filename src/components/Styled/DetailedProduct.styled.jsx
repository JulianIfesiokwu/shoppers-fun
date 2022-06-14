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

    Button {
        margin-right: 2rem;
        margin-top: 2rem;
    }

    .similar-title {
        margin-bottom: 2rem;
    }

    .similar-container {
        margin-top: 2rem;
        display: flex;
        gap: 1%;

            a {
            display: flex;
            width: 18%;
        }
    }
    

    @media only screen and (max-width: 600px) {
        .product {
            flex-direction: column;
        }

        .img-container {
            margin-bottom: 1rem;
        }

        .title {
            font-size: 1rem;
        }

        .price {
            font-size: 2rem;
            font-weight: bold;
        }

        .description {
            width: 100%;
            margin: 0.5rem 0;
        }

        .rating {
            margin: 0.5rem 0;
        }

        Button {
            width: 100%;
            margin-right: 0;
            margin-top: 1.5rem;
        }

        .similar-container {
            flex-direction: column;

            a {
                width: 100%;
            }
        }
    }

    `;

export default DetailedProductComponent