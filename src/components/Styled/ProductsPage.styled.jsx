import styled from "styled-components";

const StyledProductsPage = styled.section`
    display: flex;
    padding: 2rem 0;
    gap: 2%;

    .filters {
        min-width: 18%;
        display: inline-block;
    }

    .search-title {
        margin-bottom: 2rem;
    }

        label {
            display: block;
            margin-bottom: 0.5rem;
        }

        input[type='radio'] {
            margin-right: 0.5rem;
        }

    .title {
        margin-bottom: 1rem;
        font-weight: 700;
    }

    svg {
        cursor: pointer;

        &.not-fill {
            fill: #ddd;
        }

        &.fill {
            fill: red;
        }
    }

    .products-container {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1%;

        a {
            display: flex;
            width: 18%;
        }
    }
`

export default StyledProductsPage