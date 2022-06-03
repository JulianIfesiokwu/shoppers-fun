import styled from "styled-components";

const StyledProductsPage = styled.section`
    display: flex;
    padding: 2rem 0;
    gap: 2%;

    .filters {
        min-width: 18%;
        display: inline-block;
    }

    .product-list {
    }

    .products-container {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1%;

        a {
            display: flex;
            width: 18%;
        }
    }
`

export default StyledProductsPage